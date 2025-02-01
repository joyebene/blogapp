"use client";

import React from "react";
import CustomInput from "./shared/CustomInput";
import { useState } from "react";
import Link from "next/link";
import Button from "./shared/CustomButton";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    // e.preventDefault();
  };

  return (
    <div className="w-10/12 md:w-1/2 p-4 md:p-8 mx-auto py-20">
      <h1 className="font-bold text-2xl mb-6">
        Hey, welcome back! <span className="text-blue-700">Login</span>
      </h1>
      <form
        action="/login"
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-6"
      >
        <div className="text-start flex flex-col justify-center gap-1">
          <label htmlFor="email">Email</label>
          <CustomInput
            type="text"
            value={email}
            placeholder="Enter email"
            name="email"
            onChange={handleEmailInput}
          />
        </div>
        <div className="text-start flex flex-col gap-1 justify-center">
          <label htmlFor="password">Password</label>
          <CustomInput
            type="password"
            value={password}
            placeholder="Enter password"
            name="password"
            onChange={handlePasswordInput}
          />
        </div>
        <div>
          <Button text="Login" className="w-full" />
        </div>
        <div className="mt-6 font-medium text-center flex items-center justify-center gap-1">
          <p className="text-sm">Don&apos;t have an account?</p>{" "}
          <Link
            href="/signup"
            className="text-blue-800 cursor-pointer transition-all duration-200 hover:text-yellow-600"
          >
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
