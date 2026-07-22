import { useState } from "react";

import Logo from "./svg/logo.svg";
import Icon from "./svg/icon.svg";
import Loupe from "./svg/loupe.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full">
      {/* DESKTOP */}
      <div className="relative z-50 hidden lg:flex items-center justify-between bg-white px-22.25 py-6">
        <img src={Logo} alt="logo" />

        <div className="flex items-center gap-8">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <p>Oferta</p>
            <img src={Icon} alt="ikona" />
          </button>

          <button>O firmie</button>
          <button>Realizacje</button>
          <button>Kontakt</button>

          <img src={Loupe} alt="lupa" />
        </div>
      </div>


      {/* MENU POD NAVBAREM */}
      <div
        className={`
          absolute top-full right-96
          z-40
          bg-white shadow-lg
          transition-transform duration-500 ease-out
          origin-top
          px-7
          ${
            open
              ? "translate-y-0"
              : "-translate-y-full"
          }
        `}
      >
        <div className="cursor-pointer p-3 pt-6 text-center">
          oferta 1
        </div>

        <div className="cursor-pointer p-3 text-center">
          oferta 2
        </div>

        <div className="cursor-pointer p-3 text-center">
          oferta 3
        </div>

        <div className="cursor-pointer p-3 pb-6 text-center">
          oferta 4
        </div>
      </div>


      {/* TABLET */}
      <div className="hidden md:block lg:hidden bg-white">
        Wersja tablet
      </div>


      {/* MOBILE */}
      <div className="block md:hidden bg-white">
        Wersja telefon
      </div>
    </nav>
  );
}

export default Navbar;