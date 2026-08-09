import Image from "next/image";
import Link from "next/link";

import { PrivacySettingsButton } from "@/components/privacy/PrivacySettingsButton";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Cultos", href: "/cultos" },
  { name: "Mensagens", href: "/mensagens" },
  { name: "Nossa História", href: "/sobre-nos/nossa-historia" },
  { name: "Nossa Visão", href: "/sobre-nos/nossa-visao" },
  { name: "Liderança", href: "/sobre-nos/lideranca" },
  { name: "Departamentos", href: "/departamentos" },
  { name: "Projetos", href: "/projetos" },
  { name: "Agenda", href: "/agenda" },
  { name: "Doações", href: "/doacoes" },
  { name: "IBR Europa", href: "/ibr-europa" },
  { name: "Contacto", href: "/contacto" },
];

const legalLinks = [
  { name: "Privacidade", href: "/politica-de-privacidade" },
  { name: "Cookies", href: "/politica-de-cookies" },
  { name: "Termos de utilização", href: "/termos-de-utilizacao" },
  { name: "Fotografias e filmagens", href: "/politica-de-imagem" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-16 text-white">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.5fr_0.8fr]">


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


            <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">

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
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-white"
              >
                WhatsApp →
              </a>


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

          </div>


        </div>



        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-white/40">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p>
              © {new Date().getFullYear()} IBR Lisboa. Todos os direitos
              reservados.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {legalLinks.map((link) => (
                <Link
                  className="transition hover:text-white"
                  href={link.href}
                  key={link.href}
                >
                  {link.name}
                </Link>
              ))}
              <PrivacySettingsButton />
            </div>
          </div>
        </div>


      </div>

    </footer>
  );
}
