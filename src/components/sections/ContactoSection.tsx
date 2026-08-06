import Link from "next/link";

export function ContactoSection() {
  return (
    <section
      id="contacto"
      className="border-t border-white/10 bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
            Contacto
          </span>

          <h2 className="mt-5 text-5xl font-bold leading-none tracking-tight sm:text-7xl">
            Estamos à
            <br />
            sua espera.
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/55">
            Estamos disponíveis para receber você, tirar dúvidas e ajudar
            no que precisar.
          </p>
        </div>


        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <h3 className="text-3xl font-semibold">
              Igreja Batista Renovada - Lisboa
            </h3>


            <div className="mt-8">

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e4a63a]">
                Onde estamos
              </span>

              <p className="mt-4 leading-7 text-white/55">
                Av. Alm. Reis 228
                <br />
                1000-056 Lisboa
              </p>

            </div>


            <div className="mt-8">

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e4a63a]">
                Horários dos cultos
              </span>

              <p className="mt-4 leading-7 text-white/55">
                Terça-feira — 20h00
                <br />
                Quinta-feira — 20h00
                <br />
                Domingo — 09h00
                <br />
                Domingo — 11h00
                <br />
                Domingo — 18h00
              </p>

            </div>

          </div>


          <div className="overflow-hidden rounded-3xl border border-white/10">

            <iframe
              src="https://www.google.com/maps?q=Av.%20Alm.%20Reis%20228,%201000-056%20Lisboa&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              className="h-full min-h-[420px] border-0"
            />

          </div>

        </div>


      </div>
    </section>
  );
}