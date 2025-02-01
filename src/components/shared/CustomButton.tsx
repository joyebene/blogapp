import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`min-w-44 px-2 py-4 text-base text-white font-bold bg-transparent shadow-md shadow-[#F6F6F9] rounded-full after:rounded-full transition-all duration-200 btn2 relative z-0 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
