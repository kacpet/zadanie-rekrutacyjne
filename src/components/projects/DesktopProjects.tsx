import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import Masonry from "react-masonry-css";

import img1 from "./webp/img1.webp";
import img2 from "./webp/img2.webp";
import img3 from "./webp/img3.webp";
import img4 from "./webp/img4.webp";
import img5 from "./webp/img5.webp";
import img6 from "./webp/img6.webp";
import img7 from "./webp/img7.webp";
import img8 from "./webp/img8.webp";
import img9 from "./webp/img9.webp";

import arrow from "./svg/arrow.svg";

const projects = [
  { id: 1, image: img1, alt: "Realizacja projektu 1" },
  { id: 2, image: img2, alt: "Realizacja projektu 2" },
  { id: 3, image: img3, alt: "Realizacja projektu 3" },
  { id: 4, image: img4, alt: "Realizacja projektu 4" },
  { id: 5, image: img5, alt: "Realizacja projektu 5" },
  { id: 6, image: img6, alt: "Realizacja projektu 6" },
  { id: 7, image: img7, alt: "Realizacja projektu 7" },
  { id: 8, image: img8, alt: "Realizacja projektu 8" },
  { id: 9, image: img9, alt: "Realizacja projektu 9" },
];

const breakpointColumns = {
  default: 3,
  1024: 2,
  640: 1,
};

const container: Variants = {
  hidden: {},
  visible: {},
};

const titleAnimation: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1.1,
      ease: "easeOut",
    },
  },
};

const imageAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const buttonAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div
      id="projects"
      className="
        min-h-screen
        w-full
        bg-[#DCC1AB]
        pt-26
        pb-10
      "
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.05,
          margin: "0px 0px -150px 0px",
        }}
        className="
          flex
          min-h-screen
          flex-col
        "
      >
        {/* Nagłówek */}
        <motion.h2
          variants={titleAnimation}
          className="
            mb-16
            px-12
            text-4xl
            font-medium
          "
        >
          Nasze <span className="font-inter italic">projekty</span>
        </motion.h2>

        {/* Galeria */}
        <motion.div
          variants={imageAnimation}
          className="
            relative
            w-full
            overflow-hidden
            pb-32
          "
        >
          <Masonry
            breakpointCols={breakpointColumns}
            className="
              flex
              w-full
              gap-5
            "
            columnClassName="
              flex
              flex-col
              gap-5
            "
          >
            {visibleProjects.map((project) => (
              <motion.img
                key={project.id}
                src={project.image}
                alt={project.alt}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  block
                  w-full
                  object-cover
                "
              />
            ))}
          </Masonry>

          {/* Gradient */}
          {!showAll && (
            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                z-10
                h-1/2
                w-full
                bg-gradient-to-t
                from-[#DCC1AB]
                via-[#DCC1AB]/80
                to-transparent
              "
            />
          )}

          {/* Przycisk */}
          <motion.button
            variants={buttonAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            onClick={() => setShowAll((prev) => !prev)}
            className="
              absolute
              bottom-12
              left-1/2
              z-20
              flex
              -translate-x-1/2
              items-center
              rounded-full
              border
              border-black
              bg-[#DCC1AB]/80
              px-6
              py-3
              font-inter
              backdrop-blur-sm
              transition-transform
              duration-500
              hover:scale-105
              hover:shadow-[0_2px_10px_rgba(20,83,45,0.15)]
            "
          >
            {showAll ? "Zwiń" : "Rozwiń"}

            <img
              className="
                ml-2
                w-4
              "
              src={arrow}
              alt="strzałka"
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;
