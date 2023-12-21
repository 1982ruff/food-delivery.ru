"use client";
import "atropos/css";
import Atropos from "atropos/react";
import Image from "next/image";
import dish1 from "/public/images/dish1.webp";
import { motion } from "framer-motion";

const Dishes = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, rotate: 180 }}
      transition={{
        type: "spring",
        stiffness: 360,
        damping: 40,
        delay: 0.1,
      }}
    >
      <Atropos
        activeOffset={40}
        shadowScale={1.05}
        shadow={false}
        highlight={false}
        className="my-atropos"
      >
        <Image src={dish1} alt="Delishes food" />
      </Atropos>
    </motion.div>
  );
};

export default Dishes;
