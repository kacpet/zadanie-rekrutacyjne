import { useState } from "react";
import garden from "./img/garden.svg";
import arrow from "./img/arrow.svg";
function Home() {
  return (
    <div className="flex justify-between w-full h-screen bg-[#DCC1AB]">
      <div className="flex flex-col w-752/1440 justify-center px-16">
        <h1 className="flex text-6xl">
          Nowoczesna <br />
          aranżacja <br />
          Twojego ogrodu
        </h1>
        <p className=" flex pt-11">
          Marka GiardDesign to wieloletnie doświadczenie i wysoka <br/>
          estetyka realizacji. Oferujemy kompleksowy zakres usług<br/>
          z indywidualnympodejściem do każdego projektu.
        </p>
        <div className="flex pt-18">
          <button className="rounded-[200px] bg-green-900 py-2 px-5 mr-8 text-[#DCC1AB]">
            Skontaktuj się z nami
          </button>
          <button className="rounded-[200px] text-green-900 py-2 px-5 bg-[rgba(,,,0)] border border-green-900">
            <div className="flex">
              <span className="mr-1 text">Zobacz nasze realizacje</span>
              <img src={arrow} alt="strzałka" />
            </div>
          </button>
        </div>
      </div>
      <div className="flex">
        <img className="h-full" src={garden} alt="ogrod" />
      </div>
    </div>
  );
}

export default Home;
