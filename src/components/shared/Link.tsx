import React from "react";
import Link from "next/link";

function ButtonLink({ text, href, className }: any) {
  return (
    <Link
      href={href}
      passHref
      className={`min-w-44 p-3 text-base text-white font-bold bg-transparent shadow-md shadow-[#F6F6F9] rounded-full after:rounded-full transition-all duration-200 btn2 relative z-0 ${className}`}
    >
      {text}
    </Link>
  );
}

export default ButtonLink;
