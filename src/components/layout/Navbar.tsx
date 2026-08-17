"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useLiveStatus } from "@/components/live/LiveStatusProvider";

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


export function Navbar() {
  const { liveStream } = useLiveStatus();
  const [activeMenu, setActiveMenu] =
    useState<string | null>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const mobileMenuButtonRef =
    useRef<HTMLButtonElement>(null);

  const isLive = Boolean(liveStream);

  function closeNavigation() {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);


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
          onClick={closeNavigation}
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
          ref={mobileMenuButtonRef}
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => {
            setActiveMenu(null);
            setIsMobileMenuOpen((isOpen) => !isOpen);
          }}
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
          <span aria-hidden="true">
            {isMobileMenuOpen ? "×" : "☰"}
          </span>
        </button>


        {isMobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="
              absolute
              left-0
              right-0
              top-full
              mt-3
              max-h-[calc(100vh-7rem)]
              overflow-y-auto
              rounded-2xl
              border
              border-white/10
              bg-[#0b0b0b]/98
              p-3
              shadow-2xl
              backdrop-blur-xl
              lg:hidden
            "
          >
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={resolveNavigationHref(item.label, item.href)}
                    onClick={closeNavigation}
                    className="
                      block
                      rounded-xl
                      px-4
                      py-3
                      text-base
                      font-semibold
                      text-white
                      transition
                      hover:bg-white/10
                      focus-visible:bg-white/10
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#e4a63a]
                    "
                  >
                    {item.label}
                  </Link>

                  {item.children?.length && (
                    <ul className="mb-2 ml-4 border-l border-white/10 pl-3">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={closeNavigation}
                            className="
                              block
                              rounded-lg
                              px-3
                              py-2.5
                              text-sm
                              text-white/75
                              transition
                              hover:bg-[#e4a63a]/10
                              hover:text-[#e4a63a]
                              focus-visible:bg-[#e4a63a]/10
                              focus-visible:text-[#e4a63a]
                              focus-visible:outline-none
                              focus-visible:ring-2
                              focus-visible:ring-[#e4a63a]
                            "
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              <li className="border-t border-white/10 pt-2">
                <Link
                  href={isLive ? "/cultos#ao-vivo" : "/cultos"}
                  onClick={closeNavigation}
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    transition
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#e4a63a]
                    ${
                      isLive
                        ? "bg-[#e4a63a] text-black hover:bg-[#f0b64c]"
                        : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                    }
                  `}
                >
                  {isLive && (
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-600" />
                  )}
                  {isLive ? liveNavigation.liveLabel : liveNavigation.offlineLabel}
                </Link>
              </li>
            </ul>
          </div>
        )}


      </nav>

    </header>
  );
}
