import { menu } from "@/data/menu";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatePresence, motion } from "framer-motion";
import HeaderTextAnimate from "../ui/TextAnimation/HeaderTextAnimate";
import ButtonHeroOutlineAnimate from "../ui/Buttons/ButtonHeroOutlineAnimate";
import { natashaBold } from "@/font";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ButtonHeroAnimate from "../ui/Buttons/ButtonHeroAnimate";

const SliderMenuPage = () => {
  const [count, setCount] = useState(1);
  const swiperRef = useRef();

  const SwiperButtonPrev = ({ children }) => {
    return (
      <button
        className="flex text-sm text-primary3"
        onClick={() => swiperRef.current.slidePrev()}
      >
        {children}
      </button>
    );
  };
  const SwiperButtonNext = ({ children }) => {
    return (
      <button
        className="flex text-sm text-primary3"
        onClick={() => swiperRef.current.slideNext()}
      >
        {children}
      </button>
    );
  };

  const defaultAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
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

  return (
    <AnimatePresence mode="wait">
      <div className="flex relative justify-center items-center h-screen w-2/3">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
        >
          {menu.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className=" grid grid-cols-2">
                <div className="flex justify-center flex-col gap-10 ">
                  <HeaderTextAnimate>
                    {item.title.split("").map((char, idx) => (
                      <motion.span
                        className=""
                        key={idx}
                        variants={defaultAnimation}
                      >
                        {char}
                      </motion.span>
                    ))}
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
                      {item.kkal} kkal
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg text-primary2 w-[400px]"
                  >
                    {item.description}
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
                      $ {item.price}
                    </p>
                  </motion.div>

                  <ButtonHeroOutlineAnimate text1="More" text2="Info" />
                </div>

                <div className="">
                  <Image src={item.image} alt="" className="mt-28 ml-28" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute left-[50%] w-[670px] bg-white h-[670px] rounded-full shadow-3xl "
        ></motion.div>
        <div className=" absolute bottom-0 mb-40  flex gap-6 justify-center items-center">
          <SwiperButtonPrev>
            <ChevronLeft size={20} className="text-primary3/50" /> Prev
          </SwiperButtonPrev>
          <div className="flex items-center gap-4">
            <p className="">01</p>
            <span className="w-40 h-1 bg-primary3/20 rounded-3xl"></span>
            <p className="">02</p>
          </div>

          <SwiperButtonNext>
            Next <ChevronRight size={20} className="text-primary3/50" />
          </SwiperButtonNext>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default SliderMenuPage;
