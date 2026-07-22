import { useState,useEffect } from "react";
import { motion } from "motion/react";

import garden from "./svg/garden.svg";
import garden2 from "./svg/garden2.svg";
import garden3 from "./svg/garden3.svg";
import garden4 from "./svg/garden4.svg";

import arrowRight from "./svg/arrow-right.svg";
import arrowLeft from "./svg/arrow-left.svg";

function Slider() {

  const imgs = [garden,garden2,garden3,garden4];
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
  return (
    <div className="relative h-screen w-1/2 overflow-hidden">
      <motion.img
        key={`current-${current}`}
        src={imgs[current]}
        alt="ogród"
        className="absolute inset-0 w-full h-full object-cover"
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
          className="absolute inset-0 w-full h-full object-cover"
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

      {/* PRZYCISKI */}
      <div className="absolute right-0 bottom-0 bg-[#F5F0EC] w-48 h-24 flex justify-center gap-10 items-center z-10">
        <button onClick={() => changeImage(false)} className="cursor-pointer">
          <img src={arrowLeft} alt="strzałka w lewo" />
        </button>

        <button onClick={() => changeImage(true)} className="cursor-pointer">
          <img src={arrowRight} alt="strzałka w prawo" />
        </button>
      </div>
    </div>
  );
}

export default Slider;
