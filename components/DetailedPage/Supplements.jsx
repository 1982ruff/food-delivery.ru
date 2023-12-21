"use client";
import { natashaBold } from "@/font";
import Image from "next/image";
import { useState } from "react";

const Supplements = ({ image, title, price }) => {
  const [count, setCount] = useState(0);
  const [priceSum, setPriceSum] = useState(price);

  const inc = () => {
    setCount((prev) => prev + 1);
    setPriceSum((prevPrice) => prevPrice + price * count);
  };
  const dec = () => {
    setCount((prev) => {
      if (prev - 1 < 1) return 0;
      return prev - 1;
    });
    setPriceSum((prevPrice) => prevPrice / count);
  };

  return (
    <div className="w-[550px] mt-4 hover:shadow-3xl duration-200 ease-out transition-shadow py-4 h-[100px] px-8 rounded-full bg-white my-2 flex justify-between items-center">
      <Image src={image} alt={title} width={50} height={50} />
      <span className="uppercase ">{title}</span>
      <div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-between w-1/2"
      >
        <div className="flex items-center justify-center gap-7">
          <button
            onClick={dec}
            className="flex items-center justify-center w-8 h-8 rounded-full  bg-secondary3"
          >
            -
          </button>
          <span className="text-lg">{count}</span>
          <button
            onClick={inc}
            className="flex items-center justify-center w-8 h-8 rounded-full  bg-secondary3"
          >
            +
          </button>
        </div>
        <p
          className={`${natashaBold.className} font-bold text-2xl text-primary1`}
        >
          $ {priceSum}
        </p>
      </div>
    </div>
  );
};

export default Supplements;
