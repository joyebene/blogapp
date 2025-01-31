import React from 'react'

const CustomInput = ({ placeholder, type, onChange, name, value }: any) => {
  return (
    <input
      type={type || "text"}  // Default to 'text' if no type is provided
      placeholder={placeholder || "Enter text"}  // Default placeholder text
      value={value}
      className="w-full bg-[#F6F6F9] border border-gray-300 rounded-md p-4 text-gray-700 focus:outline-none"
      onChange={onChange}
      name = {name}
    />
  )
}

export default CustomInput;
