import { natashaBold, natashaRegular } from "@/font";
import Slider from "../Slider";

const TextHeader = () => {
  return (
    <div className="w-full mt-16 px-[26px] ">
      <h1
        className={`text-[44px] leading-[52px] ${natashaBold.className} text-balance font-medium`}
      >
        Take your first step to <span className=" text-accent1">healthy </span>
        life with us!
      </h1>

      <div className=" flex mt-4 ">
        <p className="w-2/3 text-start self-center text-base text-primary2">
          We belive that healthy food doesn&apos;t have to be tasteless!
        </p>
        <button className="hover:bg-accent1 hover:text-white duration-150 ease-out transition-colors hover:border-secondary4 border px-5 py-2 text-end self-center text-lg rounded-3xl">
          JOIN US
        </button>
      </div>

      <Slider />

      <div className="grid grid-cols-2 gap-3">
        <div className="w-full flex flex-col p-5 gap-y-3 rounded-3xl bg-black">
          <p className="text-white">
            Subscribe to our newsletter to receive important news first and get
            a 10% sale for all products
          </p>
          <button className="bg-white px-4 rounded-3xl mx-auto">
            Subscribe
          </button>
        </div>
        <div className="w-full flex flex-col p-5 gap-y-3 rounded-3xl bg-gradient-to-tr from-accent1 to-accent4">
          <p className={`text-white text-5xl ${natashaRegular.className}`}>
            Super
          </p>
          <p
            className={`text-white text-end -mt-5 text-5xl ${natashaRegular.className}`}
          >
            Code
          </p>
          <p className="text-white text-xs">
            Use a promotional code when purschasing over $10 to get a 15% sale
          </p>
          <div className=" grid grid-cols-2 gap-1 ">
            <button className="bg-white px-3 py-1 text-xs rounded-3xl mx-auto">
              EK27Y8Z
            </button>
            <button className="bg-black px-3 py-1 text-white text-xs rounded-3xl mx-auto">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextHeader;
