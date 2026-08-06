import type { Metadata } from "next";
import { departamentos } from "@/data/departamentos";
import { projetos } from "@/data/projetos";
import Link from "next/link";

const WHATSAPP = "351969704199";
const MORADA = "Av. Alm. Reis 228, 1000-056 Lisboa";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Fale connosco. Estamos disponíveis para receber você e ajudar no que precisar.",
};

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ departamento?: string; projeto?: string }>;
}) {
  const { departamento, projeto } = await searchParams;

  const dep = departamentos.find((d) => d.slug === departamento);
  const proj = projetos.find((p) => p.slug === projeto);

  const assunto = dep?.name ?? proj?.name;

  const mensagem = assunto
    ? `Olá! Gostaria de saber mais sobre ${assunto}.`
    : "Olá! Gostaria de saber mais sobre a IBR Lisboa.";

  const linkWhatsapp = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

  return (
    <section className="border-t border-white/10 bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
          Contacto
        </span>

        <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1] tracking-tight sm:text-7xl">
          Estamos à
          <br />
          sua espera.
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
          {assunto
            ? `Quer saber mais sobre ${assunto}? Fale connosco pelo WhatsApp e teremos todo o gosto em ajudar.`
            : "Estamos disponíveis para receber você, tirar dúvidas e ajudar no que precisar."}
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e4a63a]">
                Fale connosco
              </h2>
                <div className="mt-6 flex flex-col gap-4">
                <Link
                    href={linkWhatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit rounded-full bg-[#e4a63a] px-7 py-3.5 font-semibold text-black transition hover:bg-[#f0b850]"
                >
                    Enviar mensagem no WhatsApp
                </Link>

                <Link
                    href="https://www.instagram.com/ibrlisboa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 transition hover:text-white"
                >
                    Instagram →
                </Link>

                <Link
                    href="https://www.youtube.com/@ibrlisboa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 transition hover:text-white"
                >
                    YouTube →
                </Link>
                </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e4a63a]">
                Onde estamos
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/60">
                Av. Alm. Reis 228
                <br />
                1000-056 Lisboa
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e4a63a]">
                Horários dos cultos
              </h2>
              <dl className="mt-6 space-y-3 text-lg text-white/60">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <dt>Terça-feira</dt>
                  <dd className="text-white">20h00</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <dt>Quinta-feira</dt>
                  <dd className="text-white">20h00</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <dt>Domingo</dt>
                  <dd className="text-white">09h00 · 11h00 · 18h00</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

          <div className="min-h-[420px] overflow-hidden rounded-3xl border border-white/10">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(MORADA)}&output=embed`}
              title="Localização da IBR Lisboa"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}