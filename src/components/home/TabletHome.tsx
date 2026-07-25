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
        min-h-dvh
        w-full
        bg-[#DCC1AB]
        flex
        flex-col
      "
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="
          px-9
          pt-14
          pb-8
        "
      >
        <div className="flex flex-col">
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
                transition
                duration-300
                hover:scale-105
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
                transition
                duration-300
                hover:scale-105
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

      <div
        className="
          flex-1
          min-h-[320px]
          w-full
        "
      >
        <Slider />
      </div>
    </div>
  );
}

export default Home;