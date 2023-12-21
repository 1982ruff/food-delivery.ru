"use client";

import MenuPageHeader from "@/components/MenuPage/MenuPageHeader";
import MenuPageHero from "@/components/MenuPage/MenuPageHero";
import { AnimatePresence } from "framer-motion";

const page = () => {
  return (
    <AnimatePresence>
      <section className="w-full bg-secondary4/50 flex flex-col p-10">
        <MenuPageHeader />
        <MenuPageHero />
      </section>
    </AnimatePresence>
  );
};

export default page;
