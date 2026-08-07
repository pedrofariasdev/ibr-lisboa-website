"use client";

import Link from "next/link";
import { useState } from "react";
import type { LiveData } from "@/types/live";

import {
  liveNavigation,
  navigationItems,
} from "@/data/navigation";


function resolveNavigationHref(
  label: string,
  originalHref: string
) {
  const normalizedLabel = label
    .trim()
    .toLowerCase();

  if (normalizedLabel === "agenda") {
    return "/agenda";
  }

  return originalHref;
}


export function Navbar({ live }: { live: LiveData }) {
  const [activeMenu, setActiveMenu] =
    useState<string | null>(null);

  const isLive = live.status === "live";


  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-5">

      <nav
        className="
          relative
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-black/60
          px-6
          py-4
          text-white
          shadow-2xl
          backdrop-blur-xl
        "
        onMouseLeave={() => setActiveMenu(null)}
      >


        {/* Logo */}

        <Link
          href="/"
          className="flex flex-col leading-none"
          onClick={() => setActiveMenu(null)}
        >

          <span className="text-2xl font-bold tracking-tight">
            IBR
          </span>


          <span className="my-1 h-[1px] w-10 bg-[#e4a63a]" />


          <span className="text-[10px] uppercase tracking-[0.35em] text-white/60">
            Lisboa
          </span>

        </Link>



        {/* Navegação desktop */}

        <div className="hidden items-center gap-7 lg:flex">

          {navigationItems.map((item) => {

            const hasChildren =
              Boolean(item.children?.length);

            const isActive =
              activeMenu === item.label;

            const resolvedHref =
              resolveNavigationHref(
                item.label,
                item.href
              );


            return (

              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  setActiveMenu(
                    hasChildren
                      ? item.label
                      : null
                  )
                }
              >

                <Link
                  href={resolvedHref}
                  onClick={() =>
                    setActiveMenu(null)
                  }
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-1
                    py-2
                    text-sm
                    font-medium
                    text-white/75
                    transition
                    hover:text-white
                  "
                >

                  {item.label}


                  {hasChildren && (

                    <span
                      className={`
                        text-xs
                        transition-transform
                        ${
                          isActive
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    >
                      ↓
                    </span>

                  )}


                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      rounded-full
                      bg-[#e4a63a]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />

                </Link>



                {/* Dropdown */}

                {hasChildren && isActive && (

                  <div
                    className="
                      absolute
                      left-0
                      top-full
                      mt-4
                      min-w-[240px]
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#101010]/95
                      p-3
                      shadow-2xl
                      backdrop-blur-xl
                    "
                    onMouseEnter={() =>
                      setActiveMenu(item.label)
                    }
                  >

                    {item.children?.map(
                      (child) => (

                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() =>
                            setActiveMenu(null)
                          }
                          className="
                            block
                            rounded-xl
                            px-4
                            py-3
                            transition
                            hover:bg-[#e4a63a]/10
                            hover:text-[#e4a63a]
                          "
                        >

                          <span className="text-sm font-medium">
                            {child.label}
                          </span>

                        </Link>

                      )
                    )}

                  </div>

                )}

              </div>

            );

          })}

        </div>



        {/* Transmissão */}
        <Link
          href={isLive ? "/cultos#ao-vivo" : "/cultos"}
          className={`
            hidden items-center gap-2 rounded-full px-5 py-2.5
            text-sm font-semibold transition lg:flex
            ${
              isLive
                ? "bg-[#e4a63a] text-black hover:bg-[#f0b64c]"
                : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
            }
          `}
        >
          {isLive && (
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600" />
            </span>
          )}

          {isLive ? liveNavigation.liveLabel : liveNavigation.offlineLabel}
        </Link>     



        {/* Mobile */}

        <button
          type="button"
          aria-label="Abrir menu"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            lg:hidden
          "
        >
          ☰
        </button>


      </nav>

    </header>
  );
}