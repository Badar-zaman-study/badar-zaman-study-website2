"use client";

import React from "react";
import { ThreeDots } from "react-loader-spinner";

interface LoaderProps {
  size?: "small" | "large";
  color?: "white" | "blue";
}

const Loader = ({
  size = "small",
  color = "blue",
}: LoaderProps) => {
  const isSmall = size === "small";

  const loaderColor =
    color === "white"
      ? "#ffffff"
      : "#3b82f6"; // blue-500

  return (
    <ThreeDots
      visible={true}
      height={isSmall ? "24" : "60"}
      width={isSmall ? "24" : "60"}
      color={loaderColor}
      radius={isSmall ? "6" : "9"}
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;