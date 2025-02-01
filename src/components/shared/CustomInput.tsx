import React from "react";

interface CustomInputProps {
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder = "Enter text",
  type = "text",
  onChange,
  name,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="w-full bg-[#F6F6F9] border border-gray-300 rounded-md p-4 text-gray-700 focus:outline-none"
      onChange={onChange}
      name={name}
    />
  );
};

export default CustomInput;

