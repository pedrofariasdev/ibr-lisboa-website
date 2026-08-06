"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProximoCulto } from "@/utils/proximoCulto";

const heroImages = [
  "/images/hero/culto-03.png",
  "/images/hero/culto-02.png",
  "/images/hero/culto-01.png",
];

export function Hero() {

  const proximoCulto = getProximoCulto();

  const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) =>
          prev === heroImages.length - 1 ? 0 : prev + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black text-white">


      {/* Imagens do Hero */}
      {heroImages.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt="IBR Lisboa"
          fill
          priority={index === 0}
          className={`absolute inset-0 object-cover transition-all duration-[4000ms] ${
          index === currentImage
          ? "opacity-50 scale-105"
          : "opacity-0 scale-100"
          }`}
        />
      ))}



      {/* Camada escura */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/90" />



      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-end px-6">

        <div className="max-w-2xl text-right">


          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#e4a63a]">
            Igreja Batista Renovada
          </span>


          <h1 className="mt-8 text-6xl font-bold leading-[0.9] tracking-tight sm:text-8xl lg:text-9xl">
            Seu lugar
            <br />
            é aqui.
          </h1>


          <p className="mt-8 max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
            Uma família de fé vivendo o propósito de Deus em Lisboa.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <div className="h-28 w-px bg-[#e4a63a]" />

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e4a63a]">
                Próximo culto
              </span>

              <p className="mt-3 text-xl font-semibold">
                {proximoCulto.nomeDia}
              </p>

              <p className="mt-1 text-white/60">
                {proximoCulto.horario} • {proximoCulto.nome}
              </p>
            </div>
          </div>


          <div className="mt-14 flex flex-wrap gap-5">


            <Link
              href="/cultos"
              className="rounded-full bg-[#e4a63a] px-8 py-4 font-semibold text-black transition hover:bg-[#f0b64c]"
            >
              Conheça os cultos
            </Link>


            <Link
              href="#sobre"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Conheça a IBR
            </Link>


          </div>


        </div>

      </div>


      {/* Indicadores */}
      <div className="absolute bottom-10 left-6 z-10 flex gap-2">

        {heroImages.map((_, index) => (
          <span
            key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentImage
                ? "w-10 bg-[#e4a63a]"
                : "w-4 bg-white/30"
            }`}
          />
        ))}

      </div>


    </section>
  );
}