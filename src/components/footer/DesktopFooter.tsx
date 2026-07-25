import logo from "./svg/logo.svg";
import adRespact from "./svg/adRespact.svg";

function Footer() {
  return (
    <footer
      id="footer"
      className="flex flex-col justify-between w-full h-fit bg-black px-64 py-20"
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="flex justify-end items-center">
          <p className="text-[#F5F0EC] mr-5">
            Daj znać, co możemy dla Ciebie zrobić!
          </p>

          <a
            target="_blank"
            href="https://www.example.com/contact"
            className="
              rounded-[200px]
              bg-[#1B5B31]
              px-5.5
              pt-3
              pb-3.5
              mr-8
              text-[#DCC1AB]
              duration-500
              transition-all
              hover:scale-105
              hover:bg-green-800
              hover:shadow-[0_2px_10px_rgba(20,83,45,0.25)]
            "
          >
            Skontaktuj się z nami
          </a>
        </div>
      </div>

      <hr className="border-[#F5F0EC] my-15.5" />

      <div className="flex justify-between items-center w-full mb-30">
        <div className="flex items-center text-white gap-4">
          <a
            target="_blank"
            href="https://www.example.com/contact"
            className="
              transition-all
              duration-300
              hover:text-[#DCC1AB]
              hover:-translate-y-1
            "
          >
            Kontakt
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            className="
              flex
              transition-all
              duration-300
              hover:text-[#DCC1AB]
              hover:-translate-y-1
            "
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="
              flex
              transition-all
              duration-300
              hover:text-[#DCC1AB]
              hover:-translate-y-1
            "
          >
            Facebook
          </a>

          <a
            href="https://pl.linkedin.com"
            target="_blank"
            className="
              flex
              transition-all
              duration-300
              hover:text-[#DCC1AB]
              hover:-translate-y-1
            "
          >
            LinkedIn
          </a>
        </div>

        <div className="flex justify-end items-center text-[#F5F0EC] gap-4">
          <a
            href="tel:+48000000000"
            className="
              flex
              transition-all
              duration-300
              hover:text-[#DCC1AB]
              hover:-translate-x-1
            "
          >
            000-000-000
          </a>

          <a
            href="giarddesign@kontakt.pl"
            className="
              flex
              transition-all
              duration-300
              hover:text-[#DCC1AB]
              hover:-translate-x-1
            "
          >
            giarddesign@kontakt.pl
          </a>
        </div>
      </div>

      <div className="flex justify-between items-center w-full mb-5">
        <div className="flex items-center text-white gap-12">
          Prawa zastrzeżone © 2022
        </div>

        <div className="flex justify-end items-center text-[#F5F0EC] gap-4">
          <p>made by</p>

          <img
            src={adRespact}
            alt="adRespect"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
