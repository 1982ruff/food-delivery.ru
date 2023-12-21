"use client";
import { AnimatePresence, motion } from "framer-motion";
import { menu } from "@/data/menu";
import HeaderTextAnimate from "../ui/TextAnimation/HeaderTextAnimate";
import { natashaBold } from "@/font";
import ButtonHeroAnimate from "../ui/Buttons/ButtonHeroAnimate";
import { useRef, useState } from "react";
import Image from "next/image";
import ButtonHeroOutlineAnimate from "../ui/Buttons/ButtonHeroOutlineAnimate";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categoriesMenu } from "@/data/categoriesMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AnimatedNumbers from "react-animated-numbers";
import Link from "next/link";

const MenuPageHero = () => {
  const [count, setCount] = useState(1);
  const [selectedTab, setSelectedTab] = useState(menu[0]);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState(menu[0]);
  const swiperRef = useRef();
  const percentage = Math.round((selectedMenu.id / menu.length) * 100);

  const SwiperButtonPrev = ({ children }) => {
    return (
      <button
        className="flex text-sm text-primary3"
        onClick={() => {
          setSelectedMenu(menu[selectedMenu.id]);
          setCurrentSlide(swiperRef?.current?.activeIndex + 1);
        }}
      >
        {children}
      </button>
    );
  };
  const SwiperButtonNext = ({ children }) => {
    return (
      <button
        className="flex text-sm text-primary3"
        onClick={() => {
          setSelectedMenu(menu[selectedMenu.id]);
          setCurrentSlide(swiperRef?.current?.activeIndex + 1);
        }}
      >
        {children}
      </button>
    );
  };

  const inc = () => {
    setCount((prev) => prev + 1);
  };
  const dec = () => {
    setCount((prev) => {
      if (prev - 1 < 1) return 1;
      return prev - 1;
    });
  };

  const defaultAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col h-screen overflow-hidden justify-center ">
        <div className="flex items-center ">
          {/* <SliderMenuPage /> */}
          {/* left section */}
          <div className="flex  justify-center flex-col gap-10  w-full">
            <>
              <HeaderTextAnimate>
                <motion.span
                  layout
                  className=""
                  transition={{
                    duration: 0.25,
                    delay: 0.5,
                  }}
                  variants={defaultAnimation}
                >
                  {selectedMenu?.title}
                </motion.span>
              </HeaderTextAnimate>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="justify-between flex items-center w-1/2"
              >
                <div className="w-[300px] h-0.5 bg-secondary1"></div>
                <p
                  className={`${natashaBold.className} font-bold text-2xl text-primary3`}
                >
                  {selectedMenu?.kkal} kkal
                </p>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg text-primary2 w-[400px]"
              >
                {selectedMenu?.description}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="justify-between flex items-center w-1/2"
              >
                <div className="flex gap-7 items-center justify-center">
                  <button
                    onClick={dec}
                    className=" bg-white w-8 h-8 flex justify-center items-center rounded-full"
                  >
                    -
                  </button>
                  <span className="text-lg">{count}</span>
                  <button
                    onClick={inc}
                    className=" bg-white w-8 h-8 flex justify-center items-center rounded-full"
                  >
                    +
                  </button>
                </div>
                <p
                  className={`${natashaBold.className} font-bold text-2xl text-primary1`}
                >
                  $ {selectedMenu?.price}
                </p>
              </motion.div>

              <Link href={`/menu/${selectedMenu.slug}`}>
                <ButtonHeroOutlineAnimate text1="More" text2="Info" />
              </Link>
            </>
          </div>

          {/* center section */}
          <div className="flex justify-center items-center flex-col place-self-center  w-full">
            <motion.div
              layout
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-[700px] bg-white h-[700px] rounded-full shadow-3xl "
            >
              <Image
                src={selectedMenu?.image}
                alt={selectedMenu?.title}
                className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              />
            </motion.div>
            <div className="flex w-full gap-10 justify-center -mt-14 items-center">
              <ButtonHeroAnimate text1="Take order" text2="Take order" />
              <ButtonHeroOutlineAnimate
                text1="Add to cart"
                text2="Add to cart"
              />
            </div>
          </div>

          {/* right section */}
          <div className="w-full flex flex-col items-end gap-6">
            {categoriesMenu.map((item) => (
              <motion.div
                layout
                key={item.title}
                onClick={() => setSelectedTab(item)}
                className={`${
                  item === selectedTab
                    ? "from-accent1 to-accent4 from bg-gradient-to-r text-white mr-0 shadow-3xl"
                    : "bg-white text-primary2 shadow "
                } w-3/4 cursor-pointer gap-8 flex  justify-between -mr-20 items-center pl-10 rounded-l-full h-48`}
              >
                <Image src={item.image} alt="" className="w-32" />
                <motion.div>
                  <p className=" uppercase text-xl font-bold">{item.title}</p>
                  <p className="w-2/3 text-base mt-3 font-medium">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* buttons */}
        <div className="flex mt-14 gap-6 justify-center items-center">
          <SwiperButtonPrev>
            <ChevronLeft size={20} className="text-primary3/50" /> Prev
          </SwiperButtonPrev>
          <div className="flex items-center gap-4">
            <AnimatedNumbers
              transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
              animateToNumber={`${selectedMenu.id}`}
              fontStyle={{
                fontSize: 16,
                color: "#4e4e4e",
              }}
            />
            <div className="h-1 w-40 bg-primary3/20 rounded-3xl">
              <div
                style={{ width: `${percentage}%` }}
                className={`h-full bg-primary1 rounded-3xl`}
              ></div>
            </div>

            <p className="">{menu.length}</p>
          </div>

          <SwiperButtonNext>
            Next <ChevronRight size={20} className="text-primary3/50" />
          </SwiperButtonNext>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default MenuPageHero;
