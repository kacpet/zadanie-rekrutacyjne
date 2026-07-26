import logo from "./svg/logo.svg";
import adRespact from "./svg/adRespact.svg";

function Footer() {
  return (
    <footer
      id="footer"
      className="
        flex
        w-full
        flex-col
        bg-black
        px-12
        py-20
      "
    >
      {/* Góra */}
      <div className="flex items-center justify-between gap-8">
        <img
          src={logo}
          alt="logo"
          className="
            h-9
            w-auto
            transition-transform
            duration-500
            hover:scale-105
          "
        />

        <div className="flex items-center">
          <p className="mr-5 text-sm text-[#F5F0EC]">
            Daj znać, co możemy dla Ciebie zrobić!
          </p>

          <a
            href="https://www.example.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full
              bg-[#1B5B31]
              px-6
              py-3.5
              text-sm
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
        </div>
      </div>

      <hr className="my-14 border-[#F5F0EC]" />

      {/* Środek */}
      <div className="mb-20 flex items-center justify-between">
        <div className="flex gap-6 text-sm text-white">
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

        <div className="flex gap-6 text-sm text-[#F5F0EC]">
          <a
            href="tel:+48000000000"
            className="
              transition-all
              duration-300
              hover:-translate-x-1
              hover:text-[#DCC1AB]
            "
          >
            000-000-000
          </a>

          <a
            href="mailto:giarddesign@kontakt.pl"
            className="
              transition-all
              duration-300
              hover:-translate-x-1
              hover:text-[#DCC1AB]
            "
          >
            giarddesign@kontakt.pl
          </a>
        </div>
      </div>

      {/* Dół */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-white">Prawa zastrzeżone © 2022</p>

        <div className="flex items-center gap-4 text-sm text-[#F5F0EC]">
          <p>made by</p>

          <img
            src={adRespact}
            alt="adRespect"
            className="
              h-6
              w-auto
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
