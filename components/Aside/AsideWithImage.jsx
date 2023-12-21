"use client";
import { accountMenu } from "@/data/headerMenu";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const IMAGE_URL = "/images/bg1.jpg";

const AsideWithImage = () => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1 / 10,
      }}
      className="hidden lg:w-1/5 lg:block relative"
    >
      <div className="w-full flex items-center h-20 justify-center">
        <ul className="flex relative z-20 gap-10 text-xl items-center">
          {accountMenu.map((item, idx) => (
            <li key={idx} className="text-xl text-white hover:text-primary1">
              <Link href={item.link}>{item.icon}</Link>
            </li>
          ))}
        </ul>

        <Image
          className="object-cover object-center"
          priority
          src={IMAGE_URL}
          fill
          alt="hero image example"
        />
      </div>
    </motion.div>
  );
};

export default AsideWithImage;
