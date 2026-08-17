"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type {
  YoutubeLiveStatusResponse,
  YoutubeLiveStream,
} from "@/types/youtube";

const POLL_INTERVAL = 60_000;

type LiveStatusContextValue = {
  isChecking: boolean;
  liveStream: YoutubeLiveStream | null;
};

const LiveStatusContext = createContext<LiveStatusContextValue | null>(null);

export function LiveStatusProvider({ children }: { children: ReactNode }) {
  const [liveStream, setLiveStream] = useState<YoutubeLiveStream | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let activeController: AbortController | null = null;

    async function checkLiveStatus() {
      activeController?.abort();
      activeController = new AbortController();

      try {
        const response = await fetch("/api/ao-vivo", {
          headers: { Accept: "application/json" },
          signal: activeController.signal,
        });

        if (!response.ok) {
          throw new Error(`Falha ao verificar transmissão: ${response.status}`);
        }

        const data = (await response.json()) as YoutubeLiveStatusResponse;

        if (isMounted) {
          setLiveStream(data.isLive ? data.stream : null);
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        console.warn("Não foi possível atualizar o estado da transmissão.");
      } finally {
        if (isMounted) {
          setIsChecking(false);
        }
      }
    }

    function checkWhenVisible() {
      if (document.visibilityState === "visible") {
        void checkLiveStatus();
      }
    }

    void checkLiveStatus();
    const interval = window.setInterval(checkLiveStatus, POLL_INTERVAL);
    document.addEventListener("visibilitychange", checkWhenVisible);

    return () => {
      isMounted = false;
      activeController?.abort();
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", checkWhenVisible);
    };
  }, []);

  const value = useMemo(
    () => ({ isChecking, liveStream }),
    [isChecking, liveStream]
  );

  return (
    <LiveStatusContext.Provider value={value}>
      {children}
    </LiveStatusContext.Provider>
  );
}

export function useLiveStatus() {
  const context = useContext(LiveStatusContext);

  if (!context) {
    throw new Error("useLiveStatus deve ser usado dentro de LiveStatusProvider.");
  }

  return context;
}
