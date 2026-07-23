import logo from "./svg/logo.svg";
import adRespact from "./svg/adRespact.svg";

function Footer() {
  return (
    <div id="footer" className="flex flex-col justify-between w-full h-fit bg-black px-64 py-20">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center ">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-end items-center">
          <p className="text-[#F5F0EC] mr-5">
            Daj znać, co możemy dla Ciebie zrobić!
          </p>
          <button
            className="rounded-[200px] bg-[#1B5B31] px-5.5 pt-3 pb-3.5 mr-8 text-[#DCC1AB] hover:bg-green-800 duration-500 hover:scale-105
            transition-transform hover:shadow-[0_2px_10px_rgba(20,83,45,0.15)]"
          >
            <a target="_blank" href="https://www.example.com/contact">
              Skontaktuj się z nami
            </a>
          </button>
        </div>
      </div>
      <hr className="border-[#F5F0EC] my-15.5 "></hr>
      <div className="flex justify-between items-center w-full mb-30">
        <div className="flex items-center text-white gap-4">
          <a target="_blank" href="https://www.example.com/contact">
            Kontakt
          </a>
          <a href="https://www.instagram.com" target="_blank" className="flex">
            Instagram
          </a>
          <a href="https://www.facebook.com/" target="_blank" className="flex">
            Facebook
          </a>
          <a href="https://pl.linkedin.com" target="_blank" className="flex">
            LinkedIn
          </a>
        </div>
        <div className="flex justify-end items-center text-[#F5F0EC] gap-4">
          <a href="tel:+48000000000" className="flex">
            000-000-000
            </a>
          <a href="giarddesign@kontakt.pl" className="flex">
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
          <img src={adRespact} alt="adRespect" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
