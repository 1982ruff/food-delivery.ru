"use client";
import { motion } from "framer-motion";

const ParagraphText = () => {
  return (
    <motion.p
      initial={{ y: "30%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      exit={{ y: "30%", opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
        delay: 0.2,
      }}
      className="py-6 text-xl text-primary2 text-center"
    >
      We would be happy to offer you wide variety of any type of meal!
    </motion.p>
  );
};

export default ParagraphText;
