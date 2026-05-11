import { optionsType } from "@/lib/types";
import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: optionsType[];
  placeholder?: string;
}

const Select = ({ options, placeholder, ...props }: SelectProps) => {
  return (
    <div className="w-full sm:h-11 h-10 bg-[#120909] border-[#404040] border px-[14.64px] flex items-center focus-within:border-[#777777] rounded-[11px]">
      <select
        style={{ fontSize: "16px" }}
        className="bg-inherit h-full flex-1 w-full outline-none text-[#C1C1C1] placeholder:text-[#777777] text-sm"
        {...props}
      >
        <option value="" disabled>
          {placeholder || "Select an option"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
