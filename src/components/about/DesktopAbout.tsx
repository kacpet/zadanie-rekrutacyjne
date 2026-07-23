import { motion } from "motion/react";

import garden from "./svg/garden.svg";
import arrow from "./svg/arrow.svg";

const imageAnimation = {
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

const textContainer = {
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
    x: 50,
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
      className="h-screen w-full bg-[#1B5B31] flex items-center"
    >
      <motion.div
        variants={imageAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="h-screen"
      >
        <img
          className="h-full"
          src={garden}
          alt="ogród"
        />
      </motion.div>

      <div className="flex-1 h-screen flex justify-center items-center">
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-150 h-112.5 text-[#F5F0EC] pl-24 flex flex-col justify-center"
        >
          <motion.h1
            variants={item}
            className="text-5xl font-medium"
          >
            Tworzymy <br />
            z{" "}
            <span className="italic font-inter">
              pasją
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="pt-11 font-inter font-normal"
          >
            Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą
            <br />
            wykwalifikowani projektanci oraz architekci, których zadaniem jest
            <br />
            rozpoznanie i realizacja potrzeb każdego Klienta. Nasza
            <br />
            specjalizacja to przestrzenie nowoczesne, które charakteryzuje
            <br />
            minimalizm, geometria i elegancka prostota. Tworzymy ogrody
            <br />
            małoobsługowe, dostosowane do współczesnego trybu życia.
          </motion.p>

          <motion.div
            variants={item}
            className="pt-18"
          >
            <button
              className="cursor-pointer flex font-inter rounded-[200px] px-5.5 pt-3 pb-3.5 bg-[rgba(,,,0)] border border-[#F5F0EC] duration-500 hover:scale-105 hover:shadow-[0_2px_10px_rgba(20,83,45,0.15)]"
            >
              Poznaj nas bliżej
              <img
                className="ml-2"
                src={arrow}
                alt="strzałka"
              />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Offer;