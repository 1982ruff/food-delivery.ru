"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ButtonHeroOutlineAnimate = ({ text1, text2 }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setIsActive(!isActive)}
      onMouseLeave={() => setIsActive(!isActive)}
      className=" 
    h-10
    w-48
    border
    text-primary3
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


      flex
      items-center
      justify-center
      uppercase
       text-black
      "
        >
          <p className="text-primary2 font-semibold">{text1}</p>
        </div>
        <div
          className="
       w-full
       h-full

       flex
       items-center
       justify-center
       uppercase
       top-0
       text-black"
        >
          <p className=" text-primary2 font-semibold">{text2}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ButtonHeroOutlineAnimate;
