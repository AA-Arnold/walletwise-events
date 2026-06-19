"use client";

import { Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  showPassword?: "text" | "password";
  onTogglePassword?: () => void;
}

const Input = ({
  showPassword,
  onTogglePassword,
  icon,
  ...props
}: InputProps) => {
  const paddingX =
    icon !== undefined && showPassword !== undefined
      ? "px-9"
      : icon !== undefined && showPassword === undefined
        ? "pl-9 pr-2"
        : icon === undefined && showPassword !== undefined
          ? "pl-2 pr-9"
          : "sm:px-4 px-2";

  return (
    <div className="relative flex items-center text-sm backdrop-blur-2xl bg-white rounded-[12px] focus-within:border transition-all border border-[#E5E5E5] focus-within:border-[#5A27CC]  duration-300 h-12 overflow-hidden">
      {icon && icon}
      <input
        style={{ fontSize: "16px" }}
        {...props}
        className={`w-full bg-inherit h-full placeholder-[#737373] text-sm placeholder:text-sm outline-none ${paddingX}`}
      />
      {showPassword !== undefined && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-2 hover:text-gray-800 transition-colors caret-[#25C269]"
        >
          {showPassword === "text" ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
