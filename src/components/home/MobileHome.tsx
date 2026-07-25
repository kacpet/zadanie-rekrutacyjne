import { motion } from "motion/react";

import Slider from "./slider/TabletSlider";
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
    y: 30,
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
    <div
      id="home"
      className="
        relative
        z-0
        flex
        min-h-dvh
        w-full
        flex-col
        overflow-hidden
        bg-[#DCC1AB]
        pt-7
      "
    >
      {/* Tekst */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="
          flex-1
          flex
          items-center
          justify-center
          px-9
          pb-4
          pt-14
        "
      >
        <div className="flex w-full flex-col">
          <motion.h1
            variants={item}
            className="
              text-3xl
              leading-tight
              font-medium
            "
          >
            Nowoczesna
            <br />
            aranżacja
            <br />
            Twojego ogrodu
          </motion.h1>

          <motion.p
            variants={item}
            className="
              mt-4
              text-sm
              leading-relaxed
              font-inter
              font-normal
            "
          >
            Marka GiardDesign to wieloletnie doświadczenie i wysoka
            estetyka realizacji. Oferujemy kompleksowy zakres usług
            z indywidualnym podejściem do każdego projektu.
          </motion.p>

          <motion.div
            variants={item}
            className="
              mt-6
              flex
              w-full
              flex-col
              items-center
              gap-3
            "
          >
            <a
              href="#contact"
              className="
                flex
                w-[60%]
                min-w-[250px]
                justify-center
                rounded-full
                bg-[#1B5B31]
                px-4
                py-2.5
                text-sm
                text-[#DCC1AB]
                font-inter
                transition-transform
                duration-500
                hover:scale-105
                hover:bg-green-800
                hover:shadow-[0_2px_10px_rgba(20,83,45,0.15)]
              "
            >
              Skontaktuj się z nami
            </a>

            <a
              href="#projects"
              className="
                flex
                w-[60%]
                min-w-[250px]
                items-center
                justify-center
                rounded-full
                border
                border-[#1B5B31]
                px-4
                py-2.5
                text-sm
                text-[#1B5B31]
                font-inter
                transition-transform
                duration-500
                hover:scale-105
                hover:shadow-[0_2px_10px_rgba(20,83,45,0.15)]
              "
            >
              <span className="mr-2">
                Zobacz nasze realizacje
              </span>

              <img
                src={arrow}
                alt="strzałka"
                className="w-4"
              />
            </a>
          </motion.div>
        </div>
      </motion.div>


      {/* Slider */}
      <div
        className="
          flex
          min-h-0
          w-full
          flex-1
          justify-center
        "
      >
        <Slider />
      </div>
    </div>
  );
}

export default Home;