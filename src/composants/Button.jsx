import React from "react";

const Button = ({
  text,
  bgColor = "bg-blue-500",
  textColor = "text-white",
  hoverColor = "hover:bg-blue-700",
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} px-6 py-2 rounded-full ${hoverColor} focus:outline-none focus:ring-2 focus:ring-blue-400`}
    >
      {text}
    </button>
  );
};

export default Button;
