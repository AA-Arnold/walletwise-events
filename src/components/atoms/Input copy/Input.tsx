"use client";

import Image from "next/image";

interface InputProps {
  icon?: string;
  type: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({
  placeholder = "",
  onChange,
  value,
  type,
  icon,
  name,
}: InputProps) => {
  return (
    <div className="relative flex items-center backdrop-blur-2xl px-[14.64px] pt-[13.73px] pb-[12.81px] rounded-[9.15px] border border-[#252525] transition-all focus-within:border-[#CF0000] duration-300 h-[43.93px] shadow-[0px_0.92px_1.83px_0px_#0000000D]">
      <input
        style={{ fontSize: "16px" }}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full bg-inherit h-full flex-1 text-gray-400 placeholder-gray-400/65 outline-none"
        placeholder={placeholder}
      />
      {icon && (
        <Image
          src={icon}
          alt="preview"
          width={18.3}
          height={18.3}
          className="object-contain"
        />
      )}
    </div>
  );
};

export default Input;
