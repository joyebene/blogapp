import React from "react";
import Link from "next/link";

interface CustomLinkProps {
  text: string;
  color?: string;
  href: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ text, color = "#3925e7", href }) => {
  return (
    <Link href={href}>
      <div
        className="border font-bold p-2 pl-7 pr-7 rounded-full relative overflow-hidden group"
        style={{ color }}
      >
        <span
          className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
          style={{ backgroundColor: color }}
        ></span>
        <span className="relative group-hover:text-white z-10">{text}</span>
        <div
          className="absolute inset-0 bg-gradient-to-r opacity-5 group-hover:opacity-0 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to right, ${color}, ${color}, ${color})`,
          }}
        ></div>
      </div>
    </Link>
  );
};

export default CustomLink;
