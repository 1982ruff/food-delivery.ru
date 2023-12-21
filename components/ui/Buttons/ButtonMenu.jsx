import React from "react";

const ButtonMenu = ({ children }) => {
  return (
    <button className="bg-accent1 bg-gradient-to-r from-accent1 to-accent4 font-bold text-white duration-150 ease-out transition-colors px-14 py-2 text-end self-center text-base rounded-3xl">
      {children}
    </button>
  );
};

export default ButtonMenu;
