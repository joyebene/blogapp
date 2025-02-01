"use client";

import React from "react";
import {
  AlignRight,
  Bookmark,
  Info,
  LogIn,
  PlusCircleIcon,
  User,
  User2,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ButtonLink from "./shared/Link";
import CustomLink from "./shared/CustomLink";

const Navbar = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const user = false;

  const handleClick = () => {
    if (menuDisplay === false) {
      setMenuDisplay(true);
    } else {
      setMenuDisplay(false);
    }
  };

  return (
    <div className="p-4 bg-white border-b shadow-md">
      {/* Mobile Nav */}
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <Link href="/" onClick={handleClick}>
            <h1 className="text-blue-600 bg-black w-fit p-2 rounded-md font-bold text-xl">
              DEV<span className="text-white">BLOG</span>
            </h1>
          </Link>

          <button onClick={handleClick}>
            <AlignRight size={40} color="blue" />
          </button>
        </div>
        {menuDisplay &&
          (user === false ? (
            <div className="py-2">
              <ul>
                <li className="text-sm text-gray-800 mb-1 hover:text-gray-500">
                  <Link href="/about" onClick={handleClick}>
                    <Info size={12} color="blue" className="inline mb-1" />{" "}
                    About community
                  </Link>
                </li>
                <li className="text-sm text-gray-800 mb-1 hover:text-gray-500">
                  <Link href="/signup" onClick={handleClick}>
                    <UserPlus size={12} color="blue" className="inline mb-1" />{" "}
                    Signup
                  </Link>
                </li>
                <li className="text-sm text-gray-800 mb-1 hover:text-gray-500">
                  <Link href="/login" onClick={handleClick}>
                    <LogIn size={12} color="blue" className="inline mb-1" />{" "}
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="py-2">
              <ul>
                <li className="text-sm text-gray-800 mb-1 hover:text-gray-500">
                  <Link href="/profile">
                    {" "}
                    <User2 size={12} fill="blue" className="inline mb-1" />{" "}
                    Profile
                  </Link>
                </li>
                <li className="text-sm text-gray-800 mb-1 hover:text-gray-500">
                  <Link href="/create-blog">
                    {" "}
                    <PlusCircleIcon
                      size={12}
                      color="black"
                      fill="blue"
                      className="inline mb-1"
                    />{" "}
                    Create post
                  </Link>
                </li>
                <li className="text-sm text-gray-800 mb-1 hover:text-gray-500">
                  <Link href="/favourites">
                    <Bookmark size={12} fill="blue" className="inline mb-1" />{" "}
                    My favourite blogs
                  </Link>
                </li>
                <li className="text-sm text-gray-800 mb-1 hover:text-gray-500">
                  <Link href="/about">
                    <Info
                      size={12}
                      color="black"
                      fill="blue"
                      className="inline mb-1"
                    />{" "}
                    About community
                  </Link>
                </li>
              </ul>
            </div>
          ))}
      </div>

      {/* Large Screen Nav */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-blue-600 bg-black w-fit p-2 rounded-md font-bold text-xl">
              DEV<span className="text-white">BLOG</span>
            </h1>
          </Link>

          <div className="py-2 pr-4">
            {user === false ? (
              <div>
                <ul className="flex items-center justify-between gap-4">
                  <li>
                    <ButtonLink text="Signup" href="/signup" />
                  </li>
                  <li>
                    <ButtonLink text="Login" href="/login" />
                  </li>
                  <li>
                    <CustomLink text="About community" href="/about" />
                  </li>
                </ul>
              </div>
            ) : (
              <ul className="flex items-center justify-between gap-4">
                <li>
                  <Link
                    href="/favourites"
                    className="text-[#3925e7] hover:text-[#b1aaff] transition-all duration-300"
                  >
                    <Bookmark
                      size={16}
                      color="gray"
                      fill="blue"
                      className="inline mb-1"
                    />{" "}
                    My favourite blogs
                  </Link>
                </li>
                <li>
                  <ButtonLink text="Create post" href="/create-blog" />
                </li>

                <li>
                  <CustomLink text="About community" href="/about" />
                </li>
                <li>
                  <Link href="/profile">
                    <p className="bg-gray-400 rounded-full p-2 border border-gray-500 text-white w-fit">
                      <User
                        size={24}
                        color="gray"
                        fill="gray"
                        className="w-full"
                      />
                    </p>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
