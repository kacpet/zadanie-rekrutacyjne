
import { useState } from "react";
import { useEffect } from "react";
import Logo from "./svg/logo.svg";
import Icon from "./svg/icon.svg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);


useEffect(() => {
  console.log("Navbar render");
}, []);
  return (
    <nav className="fixed top-0 left-0 z-[9999] box-border w-screen max-w-[100vw] overflow-x-hidden bg-white font-inter text-[14px]">
      <div className="flex w-full max-w-[100vw] box-border items-center justify-between bg-white px-5 py-5">
        {/* Logo */}
        <a
          href="#home"
          className="min-w-0 shrink-0 overflow-hidden"
        >
          <img
            src={Logo}
            alt="logo"
            className="block h-auto max-w-full"
          />
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 shrink-0 cursor-pointer flex-col items-center justify-center gap-1"
          aria-label="Otwórz menu"
        >
          <span
            className={`h-[2px] w-6 bg-black transition-transform duration-300 ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />

          <span
            className={`h-[2px] w-6 bg-black transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-[2px] w-6 bg-black transition-transform duration-300 ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu */}
      <div
        className={`
          box-border
          w-screen
          max-w-[100vw]
          overflow-hidden
          bg-white
          px-5
          shadow-lg
          flex
          flex-col
          gap-3
          transition-all
          duration-300
          ${
            open
              ? "max-h-screen py-5 opacity-100"
              : "max-h-0 py-0 opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Oferta */}
        <button
          onClick={() => setOfferOpen((prev) => !prev)}
          className="flex w-full items-center justify-between py-2"
        >
          <span className="transition-colors hover:text-[#1B5B31]">
            Oferta
          </span>

          <img
            src={Icon}
            alt="ikona"
            className={`
              w-3
              transition-transform
              duration-300
              ${offerOpen ? "rotate-180" : ""}
            `}
          />
        </button>

        {/* Podmenu */}
        <div
          className={`
            flex
            flex-col
            overflow-hidden
            pl-4
            transition-all
            duration-300
            ${
              offerOpen
                ? "max-h-60 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <a href="#offer" className="py-2">
            Oferta 1
          </a>

          <a href="#offer" className="py-2">
            Oferta 2
          </a>

          <a href="#offer" className="py-2">
            Oferta 3
          </a>

          <a href="#offer" className="py-2">
            Oferta 4
          </a>
        </div>

        <a href="#about" className="py-2">
          O firmie
        </a>

        <a href="#projects" className="py-2">
          Realizacje
        </a>

        <a href="#contact" className="py-2">
          Kontakt
        </a>
      </div>
    </nav>
  );
}

export default Navbar;