"use client";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ItemCard from "./ItemCard";
import Carousel from "react-elastic-carousel";
import { useRef } from "react";
import { motion } from "framer-motion";
import { menu } from "@/data/menu";

const Slider = () => {
  const carousel = useRef();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 4 },
  ];

  return (
    <div className="flex lg:w-[1300px] gap-14 mt-20 relative ">
      <Carousel
        ref={carousel}
        breakPoints={breakPoints}
        itemsToScroll={4}
        itemsToShow={4}
        pagination={false}
        showArrows={false}
      >
        {menu.map((item, idx) => (
          <ul key={idx}>
            <motion.li
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 + idx / 10,
              }}
              className=""
            >
              <ItemCard {...item} />
            </motion.li>
          </ul>
        ))}
      </Carousel>
      <div className="absolute top-[50%] translate-y-[-50%] w-full hidden lg:flex flex-row justify-between right-0 z-20">
        <motion.button
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
          onClick={() => carousel.current.slidePrev()}
          className="border lg:-ml-10 w-12 h-12  bg-white border-primary3 text-primary3 hover:text-accent2 hover:border-accent2  flex justify-center  items-center rounded-full"
        >
          <ChevronLeft />
        </motion.button>
        <motion.button
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1,
          }}
          onClick={() => carousel.current.slideNext()}
          className="border lg:-mr-10 w-12 h-12 bg-white border-primary3 text-primary3 hover:text-accent2 hover:border-accent2  flex justify-center  items-center rounded-full"
        >
          <ChevronRight />
        </motion.button>
      </div>
    </div>
  );
};

export default Slider;
