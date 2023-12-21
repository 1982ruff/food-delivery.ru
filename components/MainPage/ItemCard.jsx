"use client";
import Image from "next/image";
import dish1 from "/public/images/dish1.webp";
import ButtonHeroAnimate from "../ui/Buttons/ButtonHeroAnimate";
import { useState } from "react";
import Link from "next/link";

const ItemCard = ({ image, title, kkal, price }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="h-[400px] lg:h-[500px] w-full flex flex-col justify-center items-center ">
      <div className="shadow-3xl rounded-3xl mx-auto lg:h-[230px] w-[270px] relative">
        <div className=" absolute top-[-40%] w-36 left-[50%] translate-x-[-50%]">
          <Image src={image} alt="" width={500} />
        </div>

        <div className="w-full flex justify-center gap-2 mt-8 items-center flex-col h-[200px] ">
          <h4 className=" font-bold text-primary3 w-1/2 mx-auto text-center uppercase">
            {title}
          </h4>
          <span className="text-primary3">kkal: {kkal}</span>
          <span className="text-primary3">price: $ {price}</span>
        </div>

        <Link
          href={"/menu"}
          className="absolute -bottom-5 left-[50%] translate-x-[-50%]"
        >
          <ButtonHeroAnimate
            isActive={isActive}
            setIsActive={setIsActive}
            text1="More"
            text2="Info"
          />
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
