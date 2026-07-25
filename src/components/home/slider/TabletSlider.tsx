import { useEffect, useState } from "react";
import { motion } from "motion/react";

import garden from "./webp/garden.webp";
import garden2 from "./webp/garden2.webp";
import garden3 from "./webp/garden3.webp";
import garden4 from "./webp/garden4.webp";

import arrowRight from "./svg/arrow-right.svg";
import arrowLeft from "./svg/arrow-left.svg";

function Slider() {
  const imgs = [garden, garden2, garden3, garden4];

  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);
  const [animating, setAnimating] = useState(false);

  function changeImage(nextImg: boolean) {
    if (animating) return;

    setAnimating(true);

    if (nextImg) {
      setDirection(1);
      setNext((current + 1) % imgs.length);
    } else {
      setDirection(-1);
      setNext((current - 1 + imgs.length) % imgs.length);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage(true);
    }, 10000);

    return () => clearInterval(interval);
  }, [current, animating]);

  const imageClass =
    "absolute inset-0 w-full h-full object-cover";

  return (
    <div className="relative w-full h-full min-h-[350px] overflow-hidden">
      <motion.img
        key={`current-${current}`}
        src={imgs[current]}
        alt="ogród"
        className={imageClass}
        animate={{
          x: next !== null ? (direction === 1 ? "-100%" : "100%") : "0%",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />

      {next !== null && (
        <motion.img
          key={`next-${next}`}
          src={imgs[next]}
          alt="ogród"
          className={imageClass}
          initial={{
            x: direction === 1 ? "100%" : "-100%",
          }}
          animate={{
            x: "0%",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => {
            setCurrent(next);
            setNext(null);
            setAnimating(false);
          }}
        />
      )}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          z-10
          flex
          h-16
          w-38
          items-center
          justify-center
          gap-10
          bg-[#F5F0EC]
        "
      >
        <button
          onClick={() => changeImage(false)}
          className="cursor-pointer"
        >
          <img src={arrowLeft} alt="strzałka w lewo" />
        </button>

        <button
          onClick={() => changeImage(true)}
          className="cursor-pointer"
        >
          <img src={arrowRight} alt="strzałka w prawo" />
        </button>
      </div>
    </div>
  );
}

export default Slider;