import Link from "next/link";

import clsx from "clsx";

import { Loader } from "lucide-react";

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  variant: "primary" | "secondary" | "default";
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactElement;
}

const Button = ({
  className = "w-fit",
  variant = "default",
  disabled = false,
  loading = false,
  children,
  onClick,
  href,
  type = "button",
}: ButtonProps) => {
  const baseStyle =
    "rounded-[10px] px-5 py-3 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap font-exo transition-all duration-300 border ";
  const variants = {
    primary:
      "bg-[#5A27CC] hover:bg-purple-800 border-[#5A27CC] text-white disabled:bg-[#5A27CC]/30 disabled:border-[#5A27CC]/30 disabled:cursor-not-allowed",
    secondary:
      "bg-white hover:bg-green-100 text-[#5A27CC] font-semibold border-[#5A27CC]",
    default: "bg-white border-[#D9D9D9] hover:bg-gray-100 font-semibold",
  };

  const styles = variants[variant];

  const buttonElement = (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyle, styles, className)}
      disabled={disabled || loading}
    >
      {loading ? <Loader className="animate-spin w-8 h-8" /> : children}
    </button>
  );

  return href ? (
    <Link href={href} className={`${className}`}>
      {buttonElement}
    </Link>
  ) : (
    buttonElement
  );
};

export default Button;
