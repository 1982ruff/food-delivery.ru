"use client";
import { motion } from "framer-motion";
import { natashaRegular } from "@/font";
import ButtonHeroAnimate from "../ui/Buttons/ButtonHeroAnimate";
import { useState } from "react";

const TextHeader2 = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.div
      initial={{ y: "20%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
        delay: 0.1,
      }}
      className="w-full ml-40 -mt-16 h-fit flex"
    >
      <div className="flex justify-center items-center">
        <ButtonHeroAnimate
          isActive={isActive}
          setIsActive={setIsActive}
          text1="Join Us"
          text2="Join Us"
        />
      </div>
      {/* <ButtonHero>JOIN US</ButtonHero> */}
      <h1
        className={`w-4/6 text-center text-[140px] ${natashaRegular.className} font-medium`}
      >
        to <span className=" text-accent1  font-bold">healthy</span> life with
        us!
      </h1>
    </motion.div>
  );
};

export default TextHeader2;
