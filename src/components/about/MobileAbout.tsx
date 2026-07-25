import { motion } from "motion/react";
import type { Variants } from "motion/react";

import garden from "./svg/garden.svg";
import arrow from "./svg/arrow.svg";

const imageAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
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
    y: 30,
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
    <div
      id="about"
      className="
        flex
        h-screen
        w-full
        flex-col
        overflow-hidden
        bg-[#1B5B31]
      "
    >
      {/* Tekst */}
      <div className="flex flex-1 items-center justify-center px-6 pt-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
            flex
            w-full
            max-w-sm
            flex-col
            text-[#F5F0EC]
          "
        >
          <motion.h1
            variants={item}
            className="
              text-3xl
              font-medium
              leading-tight
            "
          >
            Tworzymy
            <br />z <span className="font-inter italic">pasją</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="
              mt-6
              text-sm
              leading-relaxed
              font-inter
            "
          >
            Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą
            wykwalifikowani projektanci oraz architekci, których zadaniem jest
            rozpoznanie i realizacja potrzeb każdego Klienta. Nasza
            specjalizacja to przestrzenie nowoczesne, które charakteryzuje
            minimalizm, geometria i elegancka prostota.
          </motion.p>

          <motion.div variants={item} className="mt-8">
            <button
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-[#F5F0EC]
                px-6
                py-3
                font-inter
                transition-transform
                duration-500
                hover:scale-105
              "
            >
              Poznaj nas bliżej
              <img src={arrow} alt="strzałka" className="ml-2" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Zdjęcie */}
      <motion.div
        variants={imageAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="
          h-[35%]
          w-full
          shrink-0
        "
      >
        <img
          src={garden}
          alt="ogród"
          className="
            h-full
            w-full
            object-cover
          "
        />
      </motion.div>
    </div>
  );
}

export default Offer;
