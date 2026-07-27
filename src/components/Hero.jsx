import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputerCanvas from "./canvas/Computers";

const Hero = () => {
  const words = ["Mobile Applications", "User Interfaces", "Web Applications"];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));

          if (displayText === currentWord) {
            setTimeout(() => {
              setIsDeleting(true);
            }, 1200);
          }
        } else {
          setDisplayText(currentWord.substring(0, displayText.length - 1));

          if (displayText === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Arasu</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I build{" "}
            <span className="text-[#915eff]">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </p>
        </div>
      </div>

      <ComputerCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center">
        <a href="#about">
          <div className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
