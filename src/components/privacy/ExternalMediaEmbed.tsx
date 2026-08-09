"use client";

import type { ComponentProps } from "react";

import { useConsent } from "@/components/privacy/ConsentProvider";

type ExternalMediaEmbedProps = {
  src: string;
  title: string;
  provider: "Google Maps" | "YouTube";
  fallbackHref: string;
  className?: string;
  allow?: string;
  allowFullScreen?: boolean;
  loading?: ComponentProps<"iframe">["loading"];
  referrerPolicy?: ComponentProps<"iframe">["referrerPolicy"];
};

export function ExternalMediaEmbed({
  src,
  title,
  provider,
  fallbackHref,
  className = "h-full w-full",
  allow,
  allowFullScreen,
  loading = "lazy",
  referrerPolicy = "strict-origin-when-cross-origin",
}: ExternalMediaEmbedProps) {
  const { isReady, externalMedia, acceptExternalMedia } = useConsent();

  if (isReady && externalMedia) {
    return (
      <iframe
        allow={allow}
        allowFullScreen={allowFullScreen}
        className={className}
        loading={loading}
        referrerPolicy={referrerPolicy}
        src={src}
        title={title}
      />
    );
  }

  return (
    <div
      aria-label={`${provider} bloqueado por preferência de privacidade`}
      className={`${className} flex flex-col items-center justify-center bg-[#0f0f0f] px-6 py-10 text-center text-white`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e4a63a]">
        Conteúdo externo
      </span>
      <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
        Este conteúdo de {provider} permanece bloqueado até autorizar os
        serviços externos.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button
          className="rounded-full bg-[#e4a63a] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#f0b64c]"
          onClick={acceptExternalMedia}
          type="button"
        >
          Autorizar e carregar
        </button>
        <a
          className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          href={fallbackHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          Abrir em {provider}
        </a>
      </div>
    </div>
  );
}

