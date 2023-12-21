"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ButtonHeroAnimate = ({ text1, text2 }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setIsActive(!isActive)}
      onMouseLeave={() => setIsActive(!isActive)}
      className=" 
    h-10
    w-48
    rounded-3xl
    cursor-pointer
    relative 
overflow-hidden
    "
    >
      <motion.div
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
        className="relative w-full h-full"
      >
        <div
          className="
      w-full
      h-full
      bg-accent1 bg-gradient-to-r from-accent1 to-accent4

      flex
      items-center
      justify-center
      uppercase
       text-white
      "
        >
          <p className="font-semibold">{text1}</p>
        </div>
        <div
          className="
       w-full
       h-full
       bg-accent1 bg-gradient-to-r from-accent1 to-accent4
       flex
       items-center
       justify-center
       uppercase
       top-0
       text-white"
        >
          <p className="font-semibold">{text2}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ButtonHeroAnimate;
