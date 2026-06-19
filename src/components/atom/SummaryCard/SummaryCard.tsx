import Image from "next/image";

const SummaryCard = ({
  iconUrl,
  value,
  desc,
}: {
  iconUrl: string;
  value: string;
  desc: string;
}) => {
  return (
    <div className="border border-[#E5E5E5 p-4 rounded-[16px] space-y-6 w-full flex-1 min-w-62.5">
      <div className="bg-[#F5F5F5] rounded-[8px] w-12 h-12 flex justify-center items-center">
        <Image
          src={iconUrl}
          alt={desc}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <div className="space-y-2">
        <h6 className="sm:text-2xl text-xl font-medium text-[#262626]">
          {value}
        </h6>
        <p className="text-[#737373 sm:text-sm text-xs">{desc}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
