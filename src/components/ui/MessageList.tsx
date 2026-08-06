"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useMemo,
  useState,
} from "react";


type Mensagem = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  data: string;
};


type Props = {
  mensagensIniciais: Mensagem[];
};


function normalizarTexto(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}


export function MessageList({
  mensagensIniciais,
}: Props) {
  const [quantidade, setQuantidade] =
    useState(6);

  const [pesquisa, setPesquisa] =
    useState("");


  const mensagensFiltradas = useMemo(() => {
    const termo = normalizarTexto(pesquisa);

    if (!termo) {
      return mensagensIniciais.slice(
        0,
        quantidade
      );
    }

    return mensagensIniciais.filter(
      (mensagem) => {
        const titulo = normalizarTexto(
          mensagem.titulo
        );

        const descricao = normalizarTexto(
          mensagem.descricao
        );

        return (
          titulo.includes(termo) ||
          descricao.includes(termo)
        );
      }
    );
  }, [
    mensagensIniciais,
    pesquisa,
    quantidade,
  ]);


  const estaPesquisando =
    pesquisa.trim().length > 0;

  const temMaisMensagens =
    quantidade < mensagensIniciais.length;


  function carregarMais() {
    setQuantidade(
      (quantidadeAtual) =>
        quantidadeAtual + 6
    );
  }


  function limparPesquisa() {
    setPesquisa("");
  }


  return (
    <section>

      {/* Pesquisa no lado direito */}

      <div
        className="
          mt-8
          flex
          justify-start
          lg:-mt-14
          lg:justify-end
        "
      >
        <div className="w-full max-w-sm">

          <label
            htmlFor="pesquisar-mensagens"
            className="sr-only"
          >
            Pesquisar mensagens
          </label>


          <div
            className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/15
              bg-white/[0.04]
              px-5
              transition
              focus-within:border-[#e4a63a]/60
              focus-within:bg-white/[0.06]
            "
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="
                h-5
                w-5
                shrink-0
                text-white/40
              "
            >
              <path
                d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>


            <input
              id="pesquisar-mensagens"
              type="search"
              value={pesquisa}
              onChange={(event) =>
                setPesquisa(
                  event.target.value
                )
              }
              placeholder="Pesquisar mensagem..."
              className="
                min-w-0
                flex-1
                bg-transparent
                py-3.5
                text-sm
                text-white
                outline-none
                placeholder:text-white/35
              "
            />


            {estaPesquisando && (
              <button
                type="button"
                onClick={limparPesquisa}
                aria-label="Limpar pesquisa"
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-white/45
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                ×
              </button>
            )}

          </div>


          {estaPesquisando && (
            <p
              className="
                mt-3
                px-2
                text-right
                text-xs
                text-white/40
              "
            >
              {mensagensFiltradas.length === 1
                ? "1 mensagem encontrada"
                : `${mensagensFiltradas.length} mensagens encontradas`}
            </p>
          )}

        </div>
      </div>


      {/* Lista de mensagens */}

      {mensagensFiltradas.length > 0 ? (
        <div
          className="
            mt-14
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {mensagensFiltradas.map(
            (mensagem) => (
              <article
                key={mensagem.id}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#e4a63a]/30
                "
              >
                <div
                  className="
                    relative
                    aspect-video
                    overflow-hidden
                  "
                >
                  <Image
                    src={mensagem.imagem}
                    alt={mensagem.titulo}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.03]
                    "
                    sizes="
                      (min-width: 1024px) 33vw,
                      (min-width: 768px) 50vw,
                      100vw
                    "
                  />
                </div>


                <div className="p-6">

                  <h2
                    className="
                      line-clamp-2
                      text-xl
                      font-semibold
                      leading-tight
                    "
                  >
                    {mensagem.titulo}
                  </h2>


                  <p
                    className="
                      mt-3
                      text-sm
                      text-white/50
                    "
                  >
                    {new Date(
                      mensagem.data
                    ).toLocaleDateString(
                      "pt-PT",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </p>


                  <Link
                    href={`/mensagens?video=${mensagem.id}`}
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      font-semibold
                      text-[#e4a63a]
                    "
                  >
                    Assistir →

                  </Link>

                </div>
              </article>
            )
          )}
        </div>
      ) : (
        <div
          className="
            mt-14
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            px-6
            py-16
            text-center
          "
        >
          <h2
            className="
              text-2xl
              font-semibold
            "
          >
            Nenhuma mensagem encontrada
          </h2>

          <p
            className="
              mt-3
              text-white/50
            "
          >
            Tente pesquisar outro título
            ou palavra.
          </p>

          <button
            type="button"
            onClick={limparPesquisa}
            className="
              mt-6
              rounded-full
              border
              border-white/20
              px-6
              py-3
              text-sm
              font-semibold
              transition
              hover:bg-white/10
            "
          >
            Limpar pesquisa
          </button>
        </div>
      )}


      {/* Carregar mais */}

      {!estaPesquisando &&
        temMaisMensagens && (
          <div
            className="
              mt-12
              flex
              justify-center
            "
          >
            <button
              type="button"
              onClick={carregarMais}
              className="
                rounded-full
                border
                border-white/20
                px-8
                py-3
                font-semibold
                text-white
                transition
                hover:border-[#e4a63a]/50
                hover:bg-white/10
              "
            >
              Carregar mais mensagens
            </button>
          </div>
        )}

    </section>
  );
}