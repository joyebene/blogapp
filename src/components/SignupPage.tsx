"use client";

import React from "react";
import CustomInput from "./shared/CustomInput";
import { useState } from "react";
import Link from "next/link";
import Button from "./shared/CustomButton";

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFullnameInput = (e: any) => {
    setFullName(e.target.value);
  };
  const handleUsernameInput = (e: any) => {
    setUsername(e.target.value);
  };
  const handleEmailInput = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e: any) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault()

  }

  return (
    <div className="w-10/12 md:w-1/2 p-4 md:p-8 mx-auto py-20">
      <h1 className="font-bold text-2xl mb-6">
        Is this your first time? <span className="text-blue-700">Signup</span>
      </h1>
      <form action="/signup" className="flex flex-col justify-start gap-6" onSubmit={handleSubmit}>
        <div className="text-start flex flex-col justify-center gap-1">
          <label htmlFor="fullName">
            Full Name <span className="text-[#fd3358]">*</span>
          </label>
          <CustomInput
            type="text"
            value={fullName}
            placeholder="Enter Full Name"
            name="fullName"
            onChange={handleFullnameInput}
          />
        </div>
        <div className="text-start flex flex-col justify-center gap-1">
          <label htmlFor="username">
            Username <span className="text-[#fd3358]">*</span>
          </label>
          <CustomInput
            type="text"
            value={username}
            placeholder="Enter Username"
            name="username"
            onChange={handleUsernameInput}
          />
        </div>
        <div className="text-start flex flex-col justify-center gap-1">
          <label htmlFor="email">
            Email <span className="text-[#fd3358]">*</span>
          </label>
          <CustomInput
            type="email"
            value={email}
            placeholder="Enter Email"
            name="email"
            onChange={handleEmailInput}
          />
        </div>
        <div className="text-start flex flex-col justify-center gap-1">
          <label htmlFor="fullName">
            Password <span className="text-[#fd3358]">*</span>
          </label>
          <CustomInput
            type="password"
            value={password}
            placeholder="Enter Password"
            name="password"
            onChange={handlePasswordInput}
          />
        </div>
        <div>
          <Button text="Signup" className="w-full" />
        </div>
        <div className="mt-6 font-medium text-center flex items-center justify-center gap-1">
          <p className="text-sm">Already have an account?</p>{" "}
          <Link
            href="/login"
            className="text-blue-800 cursor-pointer transition-all duration-200 hover:text-yellow-600"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
