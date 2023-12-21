"use client";
import { natashaBold } from "@/font";
import { motion } from "framer-motion";

const HeaderTextAnimate = ({ children }) => {
  return (
    <motion.h1
      layout
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      className={`${natashaBold.className} w-[300px] leading-[100px] text-[100px] `}
    >
      {children}
    </motion.h1>
  );
};

export default HeaderTextAnimate;
