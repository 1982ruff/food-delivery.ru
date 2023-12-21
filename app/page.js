"use client";
import Aside from "@/components/Aside/Aside";
import AsideWithImage from "@/components/Aside/AsideWithImage";
import Header from "@/components/Header/Header";
import NavMobile from "@/components/Header/NavMobile";
import Dishes from "@/components/MainPage/Dishes";
import EmptyDish from "@/components/MainPage/EmptyDish";
import ParagraphText from "@/components/MainPage/ParagraphText";
import Slider from "@/components/MainPage/Slider";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
const TextHeader = dynamic(() =>
  import("@/components/MainPage/Mobile/TextHeader")
);

const TextHeader1 = dynamic(() => import("@/components/MainPage/TextHeader1"));
const TextHeader2 = dynamic(() => import("@/components/MainPage/TextHeader2"));

export default function Home() {
  return (
    <>
      <AnimatePresence>
        <section className="hidden lg:flex w-full overflow-hidden h-screen">
          <Aside />
          {/* Hero section */}
          <div className="w-full relative flex items-center flex-col">
            <Header />
            <TextHeader1 />
            <TextHeader2 />
            <ParagraphText />
            <EmptyDish />
            <div className="absolute top-[25%] -right-[13%] z-10 w-[600px] h-[600px]">
              <Dishes />
            </div>
            <Slider />
          </div>
          <AsideWithImage />
        </section>
        <section className="flex lg:hidden">
          <NavMobile />
          <TextHeader />
        </section>
      </AnimatePresence>
    </>
  );
}
