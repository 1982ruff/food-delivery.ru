"use client";
import { useEffect, useState } from "react";

const Loading = ({ isAnimating }) => {
  useEffect(() => {
    setTimeout(() => {}, 4000);
  }, []);

  return (
    <>
      <div className=""> Loading</div>
    </>
  );
};

export default Loading;
