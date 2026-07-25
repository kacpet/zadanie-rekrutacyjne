import { motion } from "motion/react";
import type { Variants } from "motion/react";

import pen from "./svg/pen.svg";
import eye from "./svg/eye.svg";
import stars from "./svg/stars.svg";
import arrow from "./svg/arrow.svg";

const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function TabletOffer() {
  return (
    <div
      id="offer"
      className="
        h-screen
        w-full
        bg-[#F5F0EC]
        pt-30
        pb-6
        overflow-hidden
      "
    >
      <motion.div
        variants={textContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-16 text-center"
      >
        <motion.h2 variants={item} className="text-4xl font-medium">
          Działamy <span className="italic font-inter">kompleksowo</span>
        </motion.h2>

        <motion.p
          variants={item}
          className="
            pt-4
            leading-relaxed
          "
        >
          Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy
          nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla
          Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym
          etapie posłużymy radą i wieloletnim doświadczeniem.
        </motion.p>
      </motion.div>

      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="
          mt-10
          px-16
          flex
          flex-wrap
          justify-center
          gap-6
          text-sm
        "
      >
        <motion.div
          variants={item}
          className="
            bg-white
            w-[60%]
            h-60
            rounded-[24px]
            px-8
            pt-8
            relative
          "
        >
          <img src={pen} alt="długopis" />

          <h3 className="pt-5 pb-2 text-[24px]">Projekty</h3>

          <p className="font-inter text-xs leading-relaxed">
            Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym
            wykorzystaniem istniejącej przestrzeni.
          </p>

          <a
            className="
              flex
              absolute
              bottom-8
              text-[#1B5B31]
              font-inter
              text-xs
              border-b
              border-[#1B5B31]
            "
            target="_blank"
            href="https://www.example.com/projects"
          >
            Dowiedz się wiecej
            <img className="ml-2 w-3" src={arrow} alt="strzałka" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="
            bg-white
            w-[45%]
            h-60
            rounded-[24px]
            px-8
            pt-8
            relative
          "
        >
          <img src={eye} alt="oko" />

          <h3 className="pt-5 pb-2 text-[24px]">Wizualizacje</h3>

          <p className="font-inter text-xs leading-relaxed">
            Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru
            animowanego w technologii 3D.
          </p>

          <a
            className="
              flex
              absolute
              bottom-8
              text-[#1B5B31]
              font-inter
              text-xs
              border-b
              border-[#1B5B31]
            "
            target="_blank"
            href="https://www.example.com/visualizations"
          >
            Dowiedz się wiecej
            <img className="ml-2 w-3" src={arrow} alt="strzałka" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="
            bg-white
            w-[45%]
            h-60
            rounded-[24px]
            px-8
            pt-8
            relative
          "
        >
          <img src={stars} alt="gwiazdki" />

          <h3 className="pt-5 pb-2 text-[24px]">Realizacje</h3>

          <p className="font-inter text-xs leading-relaxed">
            Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i
            zaawansowanych technologii.
          </p>

          <a
            className="
              flex
              absolute
              bottom-8
              text-[#1B5B31]
              font-inter
              text-xs
              border-b
              border-[#1B5B31]
            "
            target="_blank"
            href="https://www.example.com/realizations"
          >
            Zobacz nasze realizacje
            <img className="ml-2 w-3" src={arrow} alt="strzałka" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default TabletOffer;
