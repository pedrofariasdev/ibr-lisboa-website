"use client";

import { useConsent } from "@/components/privacy/ConsentProvider";

export function PrivacySettingsButton() {
  const { openSettings } = useConsent();

  return (
    <button
      className="text-left text-white/45 transition hover:text-white"
      onClick={openSettings}
      type="button"
    >
      Preferências de privacidade
    </button>
  );
}
