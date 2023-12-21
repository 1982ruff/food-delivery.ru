"use client";
import { accountMenu, foodMenu, headerMenu } from "@/data/headerMenu";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronLeft, ShoppingBag, User } from "lucide-react";
import { useStateContext } from "@/context/StateContext";

const MenuPageHeader = () => {
  const pathname = usePathname();

  const { cartItems, setShowCart } = useStateContext();

  return (
    <nav className="flex w-full justify-between">
      <ul className="flex gap-10  items-center">
        {pathname.includes("menu/") ? (
          <motion.li
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
            className="text-xl flex items-center gap-2 cursor-pointer text-primary3 border px-4 py-2 rounded-full hover:text-primary1"
          >
            <ChevronLeft />
            <Link href={"/menu"}>Menu</Link>
          </motion.li>
        ) : (
          <motion.li
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
            className="text-xl text-primary3 hover:text-primary1"
          >
            <Link href={"/"}>Main</Link>
          </motion.li>
        )}

        {headerMenu.map((item, idx) => (
          <motion.li
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 + idx / 10,
            }}
            key={idx}
            className="text-xl text-primary3 hover:text-primary1"
          >
            <Link href={item.link}>{item.title}</Link>
          </motion.li>
        ))}
      </ul>

      <ul className={`flex gap-10   items-center`}>
        {foodMenu.map((item, idx) => (
          <motion.li
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 + idx / 10,
            }}
            key={idx}
            className="text-xl text-primary3 hover:text-primary1"
          >
            <Link href={item.link}>{item.title}</Link>
          </motion.li>
        ))}

        <motion.li
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="text-xl relative text-primary3 hover:text-primary1"
        >
          {cartItems && (
            <span className=" absolute font-bold -top-2 text-xs w-5 h-5 flex justify-center items-center text-white -right-2 bg-accent1/80 rounded-full">
              {cartItems}
            </span>
          )}

          <Link href={"/cart"}>
            <ShoppingBag />
          </Link>
        </motion.li>

        <motion.li
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3,
          }}
          className="text-xl text-primary3 hover:text-primary1"
        >
          <Link href={"/accout"}>
            <User />
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default MenuPageHeader;
