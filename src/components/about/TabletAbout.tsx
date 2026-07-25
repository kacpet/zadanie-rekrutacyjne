import { motion } from "motion/react";
import type { Variants } from "motion/react";

import garden from "./svg/garden.svg";
import arrow from "./svg/arrow.svg";

const imageAnimation: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function Offer() {
  return (
    <div
      id="about"
      className="
        flex
        h-screen
        w-full
        overflow-hidden
        bg-[#1B5B31]
      "
    >
      {/* Zdjęcie */}
      <motion.div
        variants={imageAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="h-full w-[45%] shrink-0"
      >
        <img src={garden} alt="ogród" className="h-full w-full object-cover" />
      </motion.div>

      {/* Tekst */}
      <div className="flex flex-1 items-center justify-center px-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex max-w-md flex-col text-[#F5F0EC]"
        >
          <motion.h1
            variants={item}
            className="text-4xl font-medium leading-tight"
          >
            Tworzymy
            <br />z <span className="font-inter italic">pasją</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 text-sm leading-relaxed font-inter"
          >
            Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą
            wykwalifikowani projektanci oraz architekci, których zadaniem jest
            rozpoznanie i realizacja potrzeb każdego Klienta. Nasza
            specjalizacja to przestrzenie nowoczesne, które charakteryzuje
            minimalizm, geometria i elegancka prostota. Tworzymy ogrody
            małoobsługowe, dostosowane do współczesnego trybu życia.
          </motion.p>

          <motion.div variants={item} className="mt-10">
            <button
              className="
                flex
                items-center
                rounded-full
                border
                border-[#F5F0EC]
                px-6
                py-3
                font-inter
                transition-transform
                duration-500
                hover:scale-105
                hover:shadow-[0_2px_10px_rgba(20,83,45,0.15)]
              "
            >
              Poznaj nas bliżej
              <img src={arrow} alt="strzałka" className="ml-2" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Offer;
