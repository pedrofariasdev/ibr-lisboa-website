import Link from "next/link";

const legalNavigation = [
  { label: "Privacidade", href: "/politica-de-privacidade" },
  { label: "Cookies", href: "/politica-de-cookies" },
  { label: "Termos", href: "/termos-de-utilizacao" },
  { label: "Imagem e som", href: "/politica-de-imagem" },
];

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  description,
  children,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-36 text-white sm:pt-44">
      <article className="mx-auto max-w-5xl">
        <header className="border-b border-white/10 pb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            {description}
          </p>
          <p className="mt-6 text-sm text-white/40">
            Última atualização: 10 de agosto de 2026
          </p>
        </header>

        <nav
          aria-label="Documentos legais"
          className="flex flex-wrap gap-3 border-b border-white/10 py-8"
        >
          {legalNavigation.map((item) => (
            <Link
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/65 transition hover:border-[#e4a63a]/60 hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="divide-y divide-white/10">{children}</div>

        <footer className="mt-12 rounded-3xl border border-[#e4a63a]/25 bg-[#e4a63a]/[0.06] p-7 sm:p-9">
          <h2 className="text-xl font-semibold">Questões sobre este documento</h2>
          <p className="mt-3 max-w-3xl leading-7 text-white/65">
            Contacte a IBR Lisboa através da nossa página de contacto, pelo
            WhatsApp oficial ou por correspondência para Av. Alm. Reis 228,
            1000-056 Lisboa.
          </p>
          <Link
            className="mt-6 inline-flex rounded-full bg-[#e4a63a] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#f0b64c]"
            href="/contacto"
          >
            Contactar a IBR Lisboa
          </Link>
        </footer>
      </article>
    </main>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-10 sm:py-12" id={id}>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-5 leading-7 text-white/65">{children}</div>
    </section>
  );
}

export function LegalList({ children }: { children: React.ReactNode }) {
  return <ul className="ml-5 list-disc space-y-3 marker:text-[#e4a63a]">{children}</ul>;
}

