"use client";
import Image from "next/image";
import HeaderTextAnimate from "../ui/TextAnimation/HeaderTextAnimate";
import { natashaBold } from "@/font";
import ButtonHeroAnimate from "../ui/Buttons/ButtonHeroAnimate";
import ButtonHeroOutlineAnimate from "../ui/Buttons/ButtonHeroOutlineAnimate";
import groq from "groq";
import { client } from "@/sanity/lib/client";
import Supplements from "./Supplements";
import { useStateContext } from "@/context/StateContext";
import { useEffect, useState } from "react";

const DetailedPage = ({ product }) => {
  const { title, kkal, price, description, slug, energy, image } = product;
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const [data, setData] = useState([]);

  const formattedPrice = price.toFixed(parseInt()).toLocaleString("ru", {
    style: "currency",
    currency: "RUB",
  });
  useEffect(() => {
    const query = groq`*[_type == 'Supplements'] {
      _id,
        title,
        kkal,
        price,
        description,
        "image": image.asset->url
      } `;

    client
      .fetch(query)
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  const defaultAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="grid w-full h-full grid-cols-3">
      <div className="w-full relative flex flex-col justify-center h-full">
        <div className="absolute -z-10 w-[1200px] bg-white h-[1200px] left-[-40%] rounded-full shadow-3xl " />
        <Image src={image} alt={title} width={600} height={600} />
      </div>
      <div className="w-2/3 flex flex-col gap-8 justify-center h-full">
        <HeaderTextAnimate>
          <span
            layout="true"
            className=""
            transition={{
              duration: 0.25,
              delay: 0.5,
            }}
            variants={defaultAnimation}
          >
            {title}
          </span>
        </HeaderTextAnimate>

        <div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="justify-between flex items-center w-full"
        >
          <div className="w-[300px] h-0.5 bg-secondary1"></div>
          <p
            className={`${natashaBold.className} font-bold text-2xl text-primary3`}
          >
            {kkal} kkal
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className={`text-xl font-semibold uppercase text-primary2`}>
              Proteins:
            </p>
            <p
              className={`${natashaBold.className} font-bold text-2xl text-primary3`}
            >
              {energy?.protein} g.
            </p>
          </div>

          <div className="flex justify-between">
            <p className={`text-xl font-semibold uppercase text-primary2`}>
              Carbohydrates:
            </p>
            <p
              className={`${natashaBold.className} font-bold text-2xl text-primary3`}
            >
              {energy?.carbohydrates} g.
            </p>
          </div>

          <div className="flex justify-between">
            <p className={`text-xl font-semibold uppercase text-primary2`}>
              Fats:
            </p>
            <p
              className={`${natashaBold.className} font-bold text-2xl text-primary3`}
            >
              {energy?.fats} g.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 ">
          <span className=" uppercase font-medium text-primary3">
            Description:
          </span>
          <p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-primary2 w-[400px]"
          >
            {description}
          </p>
        </div>
      </div>

      <div className="border-l-2 border-primary3/10 w-full flex-col flex justify-center items-start px-10 h-3/4">
        <span className="uppercase font-medium text-primary3">
          Supplements:
        </span>
        {data?.map((item, idx) => (
          <Supplements
            key={idx}
            id={item._id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}

        <div className="flex w-2/3 flex-col px-10 gap-4 mt-6">
          <span className="uppercase font-medium text-primary3">
            Amount / Price:
          </span>

          <div className="flex w-full justify-between items-center">
            <div className="flex gap-7 items-center justify-center">
              <button
                onClick={decQty}
                className=" bg-white w-8 h-8 flex justify-center items-center rounded-full"
              >
                -
              </button>
              <span className="text-lg">{qty}</span>
              <button
                onClick={incQty}
                className=" bg-white w-8 h-8 flex justify-center items-center rounded-full"
              >
                +
              </button>
            </div>
            <p
              className={`${natashaBold.className} font-bold text-2xl text-primary1`}
            >
              $ {formattedPrice * qty}
            </p>
          </div>
        </div>

        <div className="flex w-2/3 justify-between px-10 gap-4 mt-6">
          <span className="uppercase font-bold text-primary2">Total:</span>
          <p
            className={`${natashaBold.className} font-bold text-2xl text-primary1`}
          >
            $ 0
          </p>
        </div>

        <div className="flex w-full gap-10 justify-center mt-8">
          <ButtonHeroAnimate text1="Take order" text2="Take order" />

          <div onClick={() => onAdd(product, qty)} className="">
            <ButtonHeroOutlineAnimate text1="Add to cart" text2="Add to cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
