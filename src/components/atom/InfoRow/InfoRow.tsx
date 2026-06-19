import Image from "next/image";

const InfoRow = ({ iconUrl, desc }: { iconUrl: string; desc: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={iconUrl} alt={desc} width={16} height={16} />
      <p className="w-fit text-sm font-semibold">{desc}</p>
    </div>
  );
};

export default InfoRow;
