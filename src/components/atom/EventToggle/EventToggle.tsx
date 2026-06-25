"use client";

const EventToggle = ({
  tabs,
  tab,
  onClick,
}: {
  tabs: string[];
  tab: string;
  onClick: (item: string) => void;
}) => {
  return (
    <div className="flex items-center w-full border-b border-[#E5E5E5]">
      {tabs?.map((item) => (
        <button
          key={item}
          onClick={() => onClick(item)}
          className={`py-2 px-4 cursor-pointer text-sm ${tab === item ? "border-b border-[#5A27CC] text-[#333333] font-semibold" : "text-[#777777] font-medium capitalize"}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default EventToggle;
