import { motion } from "motion/react";
import Footer from "../footer/MobileFooter";

function Contact() {
  return (
    <div id="contact" className="min-h-screen">
      <div className="flex w-full justify-center bg-white px-5 py-10 text-[#F5F0EC]">
        <motion.div
          className="
            flex
            w-full
            max-w-sm
            flex-col
            bg-[#1B5B31]
            px-6
            py-10
            my-10
          "
          initial={{
            opacity: 0,
            scale: 0.9,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.h2
            className="text-3xl font-medium leading-tight"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Zostańmy w kontakcie!
            <br />
            Znajdziesz nas na <span className="font-bold">Instagramie</span>.
          </motion.h2>

          <motion.p
            className="mt-6 font-inter text-sm leading-relaxed"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Śledź nasze najnowsze realizacje!
          </motion.p>

          <motion.a
            href="https://www.example.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8
              flex
              w-full
              items-center
              justify-center
              rounded-full
              bg-[#F5F0EC]
              py-3
              font-inter
              text-[#1B5B31]
              transition-transform
              duration-500
              hover:scale-105
              hover:shadow-[0_2px_10px_rgba(20,83,45,0.15)]
            "
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Instagram
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default Contact;
