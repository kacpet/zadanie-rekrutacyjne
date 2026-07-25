import { motion } from "motion/react";
import Footer from "../footer/DesktopFooter";

function Contact() {
  return (
    <div id="contact" className="min-h-screen">
      <div
        id="contact"
        className="flex w-full h-fit bg-white justify-center text-[#F5F0EC]"
      >
        <motion.div
          className="flex my-[60px] w-[1040px] py-[120px] px-[110px] bg-[#1B5B31] snap-start"
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
          <motion.div
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
            <motion.h2
              className="text-white text-5xl font-medium"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
            >
              Zostańmy w kontakcie! <br />
              Znajdziesz nas na <span className="font-bold">Instagramie</span>.
            </motion.h2>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center gap-6"
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.p
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
              }}
            >
              Śledź nasze najnowsze realizacje!
            </motion.p>

            <motion.button
              className="rounded-[200px] bg-[#F5F0EC] px-5.5 pt-3 pb-3.5 mr-8 text-[#1B5B31]"
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
                delay: 1,
              }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <a target="_blank" href="https://www.example.com/contact">
                Instagram
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default Contact;