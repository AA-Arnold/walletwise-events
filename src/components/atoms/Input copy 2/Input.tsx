const Input = ({
  onChange,
  value,
  type,
  placeholder,
  name,
  disable = false,
}: {
  type: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disable?: boolean;
  icon?: string;
}) => {
  return (
    <div className="w-full sm:h-11 h-10 bg-[#120909] border-[#404040] border px-[14.64px] flex items-center focus-within:border-[#777777] rounded-[11px]">
      <input
        style={{ fontSize: "16px" }}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disable}
        className="bg-inherit h-full flex-1 w-full outline-none text-[#C1C1C1] placeholder:text-[#777777] text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
