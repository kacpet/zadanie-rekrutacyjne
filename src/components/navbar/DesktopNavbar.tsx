import { useState } from "react";

import Logo from "./svg/logo.svg";
import Icon from "./svg/icon.svg";
import Loupe from "./svg/loupe.svg";

import { GradientLink } from "./gradientLink/gradientLink";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [loup, setLoup] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full font-inter font-[14px]">
      <div className="relative z-50 flex items-center justify-between bg-white px-22.25 py-6">
        <button className="cursor-pointer">
          <a href="#home">
            <img src={Logo} alt="logo" />
          </a>
        </button>

        <div className="flex items-center gap-8">
          {/* OFERTA */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <GradientLink>Oferta</GradientLink>

            <img
              className={`transition-transform duration-300 ease-in-out ${
                open ? "-rotate-180" : "rotate-0"
              }`}
              src={Icon}
              alt="ikona"
            />
          </button>

          <GradientLink href="#about">O firmie</GradientLink>

          <GradientLink href="#projects">Realizacje</GradientLink>

          <GradientLink href="#contact">Kontakt</GradientLink>

          <input
            type="text"
            className={`h-6 border transition-all duration-300 ease-out ${
              loup
                ? "translate-x-0 opacity-100 w-48"
                : "translate-x-4 opacity-0 w-0 pointer-events-none"
            }`}
          />

          <button className="cursor-pointer" onClick={() => setLoup(!loup)}>
            <img src={Loupe} alt="lupa" />
          </button>
        </div>
      </div>
      <div
        className={`absolute top-full z-40 bg-white shadow-lg transition-all duration-300 ease-out origin-top px-7 hidden lg:flex flex-col py-3 ${
          loup ? "right-155" : "right-109"
        } ${open ? "translate-y-0" : "-translate-y-[110%]"}`}
      >
        <GradientLink href="#offer" className="p-3">
          oferta 1
        </GradientLink>

        <GradientLink href="#offer" className="p-3">
          oferta 2
        </GradientLink>

        <GradientLink href="#offer" className="p-3">
          oferta 3
        </GradientLink>

        <GradientLink href="#offer" className="p-3">
          oferta 4
        </GradientLink>
      </div>
    </nav>
  );
}

export default Navbar;
