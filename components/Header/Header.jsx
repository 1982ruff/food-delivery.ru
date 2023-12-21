"use client";
import { foodMenu, headerMenu } from "@/data/headerMenu";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="w-full hidden lg:flex items-center h-20  justify-between lg:px-20">
      <Link href={"/"} className=" font-bold text-center hover:shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 256 256"
        >
          <g fill="none">
            <rect width="256" height="256" fill="#F4F2ED" rx="60" />
            <path
              fill="#FBC707"
              d="m128 60.5l-51.26-5.676L38 38h44.998L128 60.504m0-.004l52.435-4.502L218 38h-45.002L128 60.504"
            />
            <path
              fill="#F68712"
              d="m128 195.502l48.913 1.761L218 218.003h-45.002L128 195.498"
            />
            <path
              fill="#F25C19"
              d="M128 195.502H78.696L38 218.003h44.998L128 195.498"
            />
            <path
              fill="#FFF200"
              d="M60.5 128.002v47.347L38 218.003v-45l22.5-45.002"
            />
            <path
              fill="#FFF200"
              d="m60.5 128.002l-3.718-46.96L38 38v45l22.5 45"
            />
            <path
              fill="#F1471D"
              d="m195.497 128.002l4.894-49.308L218 38v45l-22.503 45"
            />
            <path
              fill="#F1471D"
              d="m195.497 128.002l4.112 52.826L218 218.003v-45l-22.503-45.002"
            />
            <path
              fill="#FAB20B"
              d="m38 38l90 22.5l-14.478 57.326l-53.023 10.176L38 38.005"
            />
            <path
              fill="#F47216"
              d="m218 38l-22.503 90.002l-60.454-10.962L128 60.498l90-22.493"
            />
            <path
              fill="#F25C19"
              d="m218 218.003l-90-22.501l10.174-59.671l57.323-7.824L218 217.997"
            />
            <path
              fill="#F89C0E"
              d="m38 218.003l22.5-90.001l54.196 12.129L128 195.502l-90 22.495"
            />
            <path
              fill="#F68712"
              d="m128 60.5l-67.5 67.502l67.5 67.5l67.497-67.5L128 60.504"
            />
          </g>
        </svg>
      </Link>

      <nav
        className={`w-full flex  ${
          pathName === "/menu" ? "justify-between" : "justify-center"
        }`}
      >
        <ul className="flex gap-10  items-center">
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

        {pathName === "/menu" ? (
          <ul
            className={`flex gap-10  ${
              pathName ? "flex" : "hidden"
            }  items-center`}
          >
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
          </ul>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
