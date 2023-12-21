import React from "react";

const ButtonHero = ({ children }) => {
  return (
    <button className="hover:bg-accent1 hover:text-white duration-150 ease-out transition-colors hover:border-secondary4 border px-10 py-3 text-end self-center text-xl rounded-3xl">
      {children}
    </button>
  );
};

export default ButtonHero;
