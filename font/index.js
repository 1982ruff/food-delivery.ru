import { Manrope } from "next/font/google";
import { Advent_Pro } from "next/font/google";
import natashaReg from "next/font/local";
import natashaB from "next/font/local";

export const manrope = Manrope({
  weight: ["200", "300", "400", "700"],
  style: ["normal"],
  subsets: ["cyrillic"],
  display: "swap",
});
export const adventPro = Advent_Pro({
  weight: ["200", "300", "400", "700"],
  style: ["normal"],
  subsets: ["cyrillic"],
  display: "swap",
});
export const natashaRegular = natashaReg({
  src: "./local/NatashawalkerRegular.otf",
  display: "swap",
});
export const natashaBold = natashaB({
  src: "./local/NatashawalkerBold.otf",
  display: "swap",
});
