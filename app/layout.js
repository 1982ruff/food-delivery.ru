import { manrope } from "@/font";
import "./globals.css";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Food Intence",
  description: "Impressive & Delishes food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`antialiased w-full h-screen overflow-y-hidden ${manrope.className}`}
      >
        <StateContext>
          <main className="flex w-full h-screen">{children}</main>
          <Toaster />
        </StateContext>
      </body>
    </html>
  );
}
