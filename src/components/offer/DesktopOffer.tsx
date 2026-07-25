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
function Offer() {
  return (
    <div id="offer" className="min-h-screen w-full bg-[#F5F0EC] pt-30 pb-40">
      <motion.div
        variants={textContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="px-50"
      >
        <motion.h2 variants={item} className="text-5xl font-medium">
          Działamy <span className="italic font-inter">kompleksowo</span>
        </motion.h2>

        <motion.p variants={item} className="pt-8">
          Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy
          <br />
          nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla
          Ciebie projekt,
          <br />
          zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy
          radą i wieloletnim
          <br />
          doświadczeniem.
        </motion.p>
      </motion.div>

      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex px-22 gap-16 h-92.5 w-full justify-center pt-24 text-sm"
      >
        <motion.div
          variants={item}
          className="bg-white w-full h-92.5 rounded-[28px] px-10 pt-12 relative"
        >
          <img src={pen} alt="długopis" />

          <h3 className="pt-8 pb-3 text-[32px]">Projekty</h3>

          <p className="font-inter text-sm">
            Zaprojektujemy Twój ogród w nowoczesnym
            <br />
            stylu i z najlepszym wykorzystaniem
            <br />
            istniejącej przestrzeni.
          </p>

          <a
            className="flex absolute bottom-0 mb-12 text-[#1B5B31] font-inter border-b border-[#1B5B31]"
            target="_blank"
            href="https://www.example.com/projects"
          >
            Dowiedz się wiecej
            <img className="ml-2" src={arrow} alt="strzałka" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white w-full h-92.5 rounded-[28px] px-10 pt-12 relative"
        >
          <img src={eye} alt="oko" />

          <h3 className="pt-8 pb-3 text-[32px]">Wizualizacje</h3>

          <p className="font-inter text-sm">
            Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru
            animowanego w technologii 3D.
          </p>

          <a
            className="flex absolute bottom-0 mb-12 text-[#1B5B31] font-inter border-b border-[#1B5B31]"
            target="_blank"
            href="https://www.example.com/visualizations"
          >
            Dowiedz się wiecej
            <img className="ml-2" src={arrow} alt="strzałka" />
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-white w-full h-92.5 rounded-[28px] px-10 pt-12 relative"
        >
          <img src={stars} alt="gwiazdki" />

          <h3 className="pt-8 pb-3 text-[32px]">Realizacje</h3>

          <p className="font-inter text-sm">
            Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i
            zaawansowanych technologii.
          </p>

          <a
            className="flex absolute bottom-0 mb-12 text-[#1B5B31] font-inter border-b border-[#1B5B31]"
            target="_blank"
            href="https://www.example.com/realizations"
          >
            Zobacz nasze realizacje
            <img className="ml-2" src={arrow} alt="strzałka" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Offer;
