"use client";
import { natashaRegular } from "@/font";
import { motion } from "framer-motion";

const TextHeader1 = () => {
  return (
    <motion.div
      initial={{ y: "-20%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
        delay: 0.1,
      }}
      className="w-full mt-10 h-fit flex justify-center overflow-hidden"
    >
      <h1
        className={`w-4/6 text-[150px] ${natashaRegular.className} font-medium`}
      >
        Take your first step
      </h1>
      <p className="w-1/6 text-start self-center text-xl text-primary2">
        We belive that healthy food doesn&apos;t have to be tasteless!
      </p>
    </motion.div>
  );
};

export default TextHeader1;
