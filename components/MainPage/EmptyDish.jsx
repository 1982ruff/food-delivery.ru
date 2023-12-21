"use client";
import { motion } from "framer-motion";

const EmptyDish = () => {
  return (
    <motion.span
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 2 / 10,
      }}
      className="absolute w-[700px] h-[700px] rounded-full top-[20%] shadow-3xl right-[-15%]"
    ></motion.span>
  );
};

export default EmptyDish;
