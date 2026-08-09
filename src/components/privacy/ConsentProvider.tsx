"use client";

import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

const CONSENT_STORAGE_KEY = "ibr-lisboa-consent-v1";
const CONSENT_VERSION = 1;
const CONSENT_VALIDITY_MS = 180 * 24 * 60 * 60 * 1000;
const consentListeners = new Set<() => void>();
let inMemoryConsent: boolean | null | undefined;

type StoredConsent = {
  version: number;
  externalMedia: boolean;
  updatedAt: number;
};

type ConsentSnapshot = boolean | null | "loading";

type ConsentContextValue = {
  isReady: boolean;
  externalMedia: boolean | null;
  acceptExternalMedia: () => void;
  rejectOptional: () => void;
  openSettings: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

function readStoredConsent(): ConsentSnapshot {
  if (inMemoryConsent !== undefined) {
    return inMemoryConsent;
  }

  try {
    const rawConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);

    if (!rawConsent) {
      return null;
    }

    const consent = JSON.parse(rawConsent) as Partial<StoredConsent>;
    const isCurrentVersion = consent.version === CONSENT_VERSION;
    const hasValidChoice = typeof consent.externalMedia === "boolean";
    const isWithinValidityPeriod =
      typeof consent.updatedAt === "number" &&
      Date.now() - consent.updatedAt <= CONSENT_VALIDITY_MS;

    if (!isCurrentVersion || !hasValidChoice || !isWithinValidityPeriod) {
      return null;
    }

    return consent.externalMedia ?? null;
  } catch {
    return null;
  }
}

function subscribeToConsent(callback: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_STORAGE_KEY) {
      inMemoryConsent = undefined;
      callback();
    }
  };

  consentListeners.add(callback);
  window.addEventListener("storage", handleStorage);

  return () => {
    consentListeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function emitConsentChange() {
  consentListeners.forEach((listener) => listener());
}

function getServerConsentSnapshot(): ConsentSnapshot {
  return "loading";
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const consentSnapshot = useSyncExternalStore(
    subscribeToConsent,
    readStoredConsent,
    getServerConsentSnapshot,
  );
  const isReady = consentSnapshot !== "loading";
  const externalMedia =
    consentSnapshot === "loading" ? null : consentSnapshot;

  const saveConsent = useCallback((value: boolean) => {
    const consent: StoredConsent = {
      version: CONSENT_VERSION,
      externalMedia: value,
      updatedAt: Date.now(),
    };

    inMemoryConsent = value;

    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    } catch {
      // The preference remains active for the current page even if storage is unavailable.
    }

    emitConsentChange();
    setSettingsOpen(false);
  }, []);

  const contextValue = useMemo<ConsentContextValue>(
    () => ({
      isReady,
      externalMedia,
      acceptExternalMedia: () => saveConsent(true),
      rejectOptional: () => saveConsent(false),
      openSettings: () => setSettingsOpen(true),
    }),
    [externalMedia, isReady, saveConsent],
  );

  const showConsentPanel = isReady && (externalMedia === null || settingsOpen);

  return (
    <ConsentContext.Provider value={contextValue}>
      {children}

      {showConsentPanel && (
        <section
          aria-label="Preferências de privacidade"
          aria-live="polite"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-4xl rounded-3xl border border-white/15 bg-[#0b0b0b]/95 p-6 text-white shadow-2xl shadow-black/60 backdrop-blur-xl sm:p-8"
          role="dialog"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e4a63a]">
                Privacidade
              </span>
              <h2 className="mt-3 text-2xl font-semibold">
                Conteúdos externos sob o seu controlo
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
                O site guarda apenas a sua preferência de privacidade. Vídeos do
                YouTube e mapas da Google só são carregados com a sua autorização
                e podem utilizar cookies ou identificadores próprios.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <Link
                  className="text-[#e4a63a] underline-offset-4 hover:underline"
                  href="/politica-de-cookies"
                >
                  Política de cookies
                </Link>
                <Link
                  className="text-white/65 underline-offset-4 hover:text-white hover:underline"
                  href="/politica-de-privacidade"
                >
                  Política de privacidade
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                className="rounded-full bg-[#e4a63a] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#f0b64c]"
                onClick={() => saveConsent(true)}
                type="button"
              >
                Autorizar conteúdos externos
              </button>
              <button
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                onClick={() => saveConsent(false)}
                type="button"
              >
                Recusar opcionais
              </button>
            </div>
          </div>
        </section>
      )}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);

  if (!context) {
    throw new Error("useConsent must be used within ConsentProvider");
  }

  return context;
}
