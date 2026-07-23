import { motion } from "motion/react";

import Slider from "./slider/slider";
import arrow from "./svg/arrow.svg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

function Home() {
  return (
    <div className="flex justify-between w-full h-screen bg-[#DCC1AB]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col w-752/1440 justify-center px-16"
      >
        <motion.h1
          variants={item}
          className="text-6xl font-medium"
        >
          Nowoczesna <br />
          aranżacja <br />
          Twojego ogrodu
        </motion.h1>

        <motion.p
          variants={item}
          className="pt-11 font-inter font-normal"
        >
          Marka GiardDesign to wieloletnie doświadczenie i wysoka <br />
          estetyka realizacji. Oferujemy kompleksowy zakres usług
          <br />
          z indywidualnym podejściem do każdego projektu.
        </motion.p>

        <motion.div
          variants={item}
          className="flex pt-18"
        >
          <button
            className="font-inter rounded-[200px] bg-[#1B5B31] px-5.5 pt-3 pb-3.5 mr-8 text-[#DCC1AB] hover:bg-green-800 duration-500 hover:scale-105 transition-transform hover:shadow-[0_2px_10px_rgba(20,83,45,0.15)]"
          >
            <a target="_blank" href="https://www.example.com/contact">
              Skontaktuj się z nami
            </a>
          </button>

          <button className="font-inter rounded-[200px] text-[#1B5B31] px-5.5 pt-3 pb-3.5 border border-[#1B5B31] duration-500 hover:scale-105 hover:shadow-[0_2px_10px_rgba(20,83,45,0.15)]">
            <a
              className="flex"
              target="_blank"
              href="https://www.example.com/our-work"
            >
              <span className="mr-2">Zobacz nasze realizacje</span>
              <img src={arrow} alt="strzałka" />
            </a>
          </button>
        </motion.div>
      </motion.div>

      <Slider />
    </div>
  );
}

export default Home;