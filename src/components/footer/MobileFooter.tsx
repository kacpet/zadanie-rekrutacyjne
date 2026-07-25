import logo from "./svg/logo.svg";
import adRespact from "./svg/adRespact.svg";

function Footer() {
  return (
    <footer id="footer" className="w-full bg-black px-6 py-10">
      <div className="mx-auto flex max-w-sm flex-col items-center text-center">
        {/* Logo */}
        <img
          src={logo}
          alt="logo"
          className="
            mb-8
            transition-transform
            duration-500
            hover:scale-105
          "
        />

        {/* CTA */}
        <p className="text-[#F5F0EC] text-sm leading-relaxed">
          Daj znać, co możemy dla Ciebie zrobić!
        </p>

        <a
          href="https://www.example.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6
            rounded-full
            bg-[#1B5B31]
            px-6
            py-3
            text-[#DCC1AB]
            transition-all
            duration-500
            hover:scale-105
            hover:bg-green-800
            hover:shadow-[0_2px_10px_rgba(20,83,45,0.25)]
          "
        >
          Skontaktuj się z nami
        </a>

        <hr className="my-8 w-full border-[#F5F0EC]" />

        {/* Linki */}
        <div className="flex flex-col items-center gap-4 text-[#F5F0EC]">
          <a
            href="https://www.example.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="
              transition-all
              duration-300
              hover:-translate-y-1
              hover:text-[#DCC1AB]
            "
          >
            Kontakt
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              transition-all
              duration-300
              hover:-translate-y-1
              hover:text-[#DCC1AB]
            "
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              transition-all
              duration-300
              hover:-translate-y-1
              hover:text-[#DCC1AB]
            "
          >
            Facebook
          </a>

          <a
            href="https://pl.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              transition-all
              duration-300
              hover:-translate-y-1
              hover:text-[#DCC1AB]
            "
          >
            LinkedIn
          </a>
        </div>

        {/* Kontakt */}
        <div className="mt-8 flex flex-col items-center gap-3 text-[#F5F0EC]">
          <a
            href="tel:+48000000000"
            className="
              transition-all
              duration-300
              hover:text-[#DCC1AB]
              hover:-translate-y-1
            "
          >
            000-000-000
          </a>

          <a
            href="mailto:giarddesign@kontakt.pl"
            className="
              transition-all
              duration-300
              hover:text-[#DCC1AB]
              hover:-translate-y-1
            "
          >
            giarddesign@kontakt.pl
          </a>
        </div>

        <hr className="my-8 w-full border-[#F5F0EC]" />

        {/* Stopka */}
        <p className="text-center text-sm text-white">
          Prawa zastrzeżone © 2022
        </p>

        <div className="mt-4 flex items-center gap-2 text-[#F5F0EC]">
          <span>made by</span>

          <img
            src={adRespact}
            alt="adRespect"
            className="
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
