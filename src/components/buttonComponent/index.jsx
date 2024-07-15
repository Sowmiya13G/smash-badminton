import React from "react";

const ButtonComponent = ({
  onClick,
  btnlabel = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-black font-bold tracking-wide border-none rounded-lg py-2 px-4 transition-transform transform active:scale-95 ${className}`}
      disabled={disabled}
    >
      {btnlabel}
    </button>
  );
};

export default ButtonComponent;
