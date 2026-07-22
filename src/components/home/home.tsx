import Slider from "./slider/slider";
import arrow from "./svg/arrow.svg";
function Home() {
  return (
    <div className="flex justify-between w-full h-screen bg-[#DCC1AB]">
      <div className="flex flex-col w-752/1440 justify-center px-16">
        <h1 className="flex text-6xl font-medium">
          Nowoczesna <br />
          aranżacja <br />
          Twojego ogrodu
        </h1>
        <p className=" flex pt-11 font-inter font-normal">
          Marka GiardDesign to wieloletnie doświadczenie i wysoka <br />
          estetyka realizacji. Oferujemy kompleksowy zakres usług
          <br />z indywidualnympodejściem do każdego projektu.
        </p>
        <div className="flex pt-18">
          <button
            className="font-inter rounded-[200px] bg-[#1B5B31] px-5.5 pt-3 pb-3.5 mr-8 text-[#DCC1AB] hover:bg-green-800 duration-500 hover:scale-105
            transition-transform hover:shadow-[0_2px_10px_rgba(20,83,45,0.15)]"
          >
            <a target="_blank" href="https://www.example.com/contact">
              Skontaktuj się z nami
            </a>
          </button>
          <button className="font-inter rounded-[200px] text-[#1B5B31] px-5.5 pt-3 pb-3.5 bg-[rgba(,,,0)] border border-[#1B5B31] duration-500 hover:scale-105 hover:shadow-[0_2px_10px_rgba(20,83,45,0.15)]">
            <a
              className="flex"
              target="_blank"
              href="https://www.example.com/our-work"
            >
              <span className="mr-2">Zobacz nasze realizacje</span>
              <img src={arrow} alt="strzałka" />
            </a>
          </button>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default Home;
