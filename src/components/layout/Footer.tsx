import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Cultos", href: "/cultos" },
  { name: "Quem Somos", href: "/sobre-nos/nossa-historia" },
  { name: "Departamentos", href: "/departamentos" },
  { name: "Projetos", href: "/projetos" },
  { name: "Eventos", href: "/agenda" },
  { name: "Contacto", href: "/contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-16 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">


          {/* Marca */}
          <div>

            <Image
              src="/images/logo/ibr-logo.png"
              alt="IBR Lisboa"
              width={120}
              height={50}
            />


            <p className="mt-8 max-w-sm text-lg leading-8 text-white/55">
              Uma comunidade de fé,
              <br />
              comunhão e transformação em Lisboa.
            </p>

          </div>



          {/* Navegação */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e4a63a]">
              Navegação
            </h3>


            <ul className="mt-6 space-y-4">

              {footerLinks.map((link) => (

                <li key={link.name}>

                  <Link
                    href={link.href}
                    className="text-white/60 transition hover:text-white"
                  >
                    {link.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>




          {/* Conexão */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e4a63a]">
              Conecte-se
            </h3>


            <div className="mt-6 flex flex-col gap-4">


              <a
                href="https://wa.me/351969704199"
                target="_blank"
                className="text-white/60 transition hover:text-white"
              >
                WhatsApp →
              </a>


              <Link
                href="https://www.instagram.com/ibrlisboa"
                target="_blank"
                className="text-white/60 transition hover:text-white"
              >
                Instagram →
              </Link>


              <Link
                href="https://www.youtube.com/@ibrlisboa"
                target="_blank"
                className="text-white/60 transition hover:text-white"
              >
                YouTube →
              </Link>


            </div>

          </div>


        </div>



        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-white/40">

           © {new Date().getFullYear()} IBR Lisboa. Todos os direitos reservados.
        </div>


      </div>

    </footer>
  );
}