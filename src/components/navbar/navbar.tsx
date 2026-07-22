import { useState } from "react";

import Logo from "./svg/logo.svg";
import Icon from "./svg/icon.svg";
import Loupe from "./svg/loupe.svg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [loup, setLoup] = useState(false);

  const linkClass = "relative cursor-pointer group";

  const menuLinkClass =
    "cursor-pointer p-3 text-center relative group transition-all duration-300";

  return (
    <nav className="fixed top-0 z-50 w-full font-inter font-[14px]">
      {/* DESKTOP */}
      <div className="relative z-50 hidden lg:flex items-center justify-between bg-white px-22.25 py-6">
        <button className="cursor-pointer">
          <img src={Logo} alt="logo" />
        </button>

        <div className="flex items-center gap-8">
          {/* OFERTA */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="relative">
              <span className="transition-opacity duration-300 group-hover:opacity-0">
                Oferta
              </span>

              <span
                className="
                absolute inset-0
                opacity-0
                transition-opacity duration-300
                group-hover:opacity-100
                bg-gradient-to-r
                from-green-900
                to-green-800
                bg-clip-text
                text-transparent
                "
              >
                Oferta
              </span>
            </span>

            <img
              className={`
                transition-transform duration-300 ease-in-out
                ${open ? "-rotate-180" : "rotate-0"}
              `}
              src={Icon}
              alt="ikona"
            />
          </button>

          {/* O FIRMIE */}
          <a href="#about" className={linkClass}>
            <span className="transition-opacity duration-300 group-hover:opacity-0">
              O firmie
            </span>

            <span
              className="
              absolute inset-0
              opacity-0
              transition-opacity duration-300
              group-hover:opacity-100
              bg-gradient-to-r
              from-green-900
              to-green-800
              bg-clip-text
              text-transparent
              "
            >
              O firmie
            </span>
          </a>

          {/* REALIZACJE */}
          <a href="#projects" className={linkClass}>
            <span className="transition-opacity duration-300 group-hover:opacity-0">
              Realizacje
            </span>

            <span
              className="
              absolute inset-0
              opacity-0
              transition-opacity duration-300
              group-hover:opacity-100
              bg-gradient-to-r
              from-green-900
              to-green-800
              bg-clip-text
              text-transparent
              "
            >
              Realizacje
            </span>
          </a>

          {/* KONTAKT */}
          <a href="#contact" className={linkClass}>
            <span className="transition-opacity duration-300 group-hover:opacity-0">
              Kontakt
            </span>

            <span
              className="
              absolute inset-0
              opacity-0
              transition-opacity duration-300
              group-hover:opacity-100
              bg-gradient-to-r
              from-green-900
              to-green-800
              bg-clip-text
              text-transparent
              "
            >
              Kontakt
            </span>
          </a>

          {/* INPUT */}
          <input
            type="text"
            className={`
              h-6 border
              transition-all duration-300 ease-out
              ${
                loup
                  ? "translate-x-0 opacity-100 w-48"
                  : "translate-x-4 opacity-0 w-0 pointer-events-none"
              }
            `}
          />

          {/* LUPA */}
          <button className="cursor-pointer" onClick={() => setLoup(!loup)}>
            <img src={Loupe} alt="lupa" />
          </button>
        </div>
      </div>

      {/* MENU POD NAVBAREM */}
      <div
        className={`
          absolute top-full
          z-40
          bg-white shadow-lg
          transition-all duration-300 ease-out
          origin-top
          px-7
          hidden lg:flex
          flex-col
          ${loup ? "right-155" : "right-109"}
          ${open ? "translate-y-0" : "-translate-y-[110%]"}
        `}
      >
        <a href="#offer" className={menuLinkClass}>
          <span className="transition-opacity duration-300 group-hover:opacity-0">
            oferta 1
          </span>

          <span
            className="
            absolute inset-0
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
            bg-gradient-to-r
            from-green-900
            to-green-800
            bg-clip-text
            text-transparent
            flex items-center justify-center
            "
          >
            oferta 1
          </span>
        </a>

        <a href="#offer" className={menuLinkClass}>
          <span className="transition-opacity duration-300 group-hover:opacity-0">
            oferta 2
          </span>

          <span
            className="
            absolute inset-0
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
            bg-gradient-to-r
            from-green-900
            to-green-800
            bg-clip-text
            text-transparent
            flex items-center justify-center
            "
          >
            oferta 2
          </span>
        </a>

        <a href="#offer" className={menuLinkClass}>
          <span className="transition-opacity duration-300 group-hover:opacity-0">
            oferta 3
          </span>

          <span
            className="
            absolute inset-0
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
            bg-gradient-to-r
            from-green-900
            to-green-800
            bg-clip-text
            text-transparent
            flex items-center justify-center
            "
          >
            oferta 3
          </span>
        </a>

        <a href="#offer" className={`${menuLinkClass} mb-2`}>
          <span className="transition-opacity duration-300 group-hover:opacity-0">
            oferta 4
          </span>

          <span
            className="
            absolute inset-0
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
            bg-gradient-to-r
            from-green-900
            to-green-800
            bg-clip-text
            text-transparent
            flex items-center justify-center
            "
          >
            oferta 4
          </span>
        </a>
      </div>

      {/* TABLET */}
      <div className="hidden md:block lg:hidden bg-white">Wersja tablet</div>

      {/* MOBILE */}
      <div className="block md:hidden bg-white">Wersja telefon</div>
    </nav>
  );
}

export default Navbar;
