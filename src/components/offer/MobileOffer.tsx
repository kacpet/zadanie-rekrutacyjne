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

function MobileOffer() {
  return (
    <div
      id="offer"
      className="
        relative
        z-0
        flex
        min-h-dvh
        w-full
        flex-col
        overflow-hidden
        bg-[#F5F0EC]
        px-4
        pb-8
        pt-24
      "
    >
      {/* Nagłówek */}
      <motion.div
        variants={textContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="text-center"
      >
        <motion.h2
          variants={item}
          className="
            text-[26px]
            font-medium
            leading-tight
          "
        >
          Działamy{" "}
          <span className="font-inter italic">
            kompleksowo
          </span>
        </motion.h2>

        <motion.p
          variants={item}
          className="
            pt-3
            text-[11px]
            leading-4
          "
        >
          Oferujemy kompletną obsługę inwestycji terenów zielonych.
          Projektujemy nowoczesne ogrody przydomowe oraz
          rezydencjonalne. Stworzymy dla Ciebie projekt,
          zwizualizujemy go i wcielimy w życie, a na każdym
          etapie posłużymy radą i wieloletnim doświadczeniem.
        </motion.p>
      </motion.div>

      {/* Karty */}
      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          mt-5
          flex
          flex-1
          flex-col
          justify-between
        "
      >
        <OfferCard
          icon={pen}
          title="Projekty"
          text="
            Zaprojektujemy Twój ogród w nowoczesnym stylu
            i z najlepszym wykorzystaniem istniejącej
            przestrzeni.
          "
          link="Dowiedz się więcej"
        />

        <OfferCard
          icon={eye}
          title="Wizualizacje"
          text="
            Przedstawimy Ci projekty koncepcyjne
            w postaci wirtualnego spaceru
            animowanego w technologii 3D.
          "
          link="Dowiedz się więcej"
        />

        <OfferCard
          icon={stars}
          title="Realizacje"
          text="
            Zrealizujemy Twoje marzenie przy użyciu
            najnowszych rozwiązań i zaawansowanych
            technologii.
          "
          link="Zobacz nasze realizacje"
        />
      </motion.div>
    </div>
  );
}


function OfferCard({
  icon,
  title,
  text,
  link,
}: {
  icon: string;
  title: string;
  text: string;
  link: string;
}) {
  return (
    <motion.div
      variants={item}
      className="
        relative
        h-40
        rounded-[16px]
        bg-white
        p-3
      "
    >
      <img
        className="w-5"
        src={icon}
        alt=""
      />

      <h3
        className="
          pb-1
          pt-2
          text-lg
        "
      >
        {title}
      </h3>

      <p
        className="
          font-inter
          text-[11px]
          leading-4
        "
      >
        {text}
      </p>

      <a
        href="#projects"
        className="
          absolute
          bottom-3
          flex
          items-center
          border-b
          border-[#1B5B31]
          font-inter
          text-[11px]
          text-[#1B5B31]
        "
      >
        {link}

        <img
          className="ml-2 w-3"
          src={arrow}
          alt="strzałka"
        />
      </a>
    </motion.div>
  );
}

export default MobileOffer;