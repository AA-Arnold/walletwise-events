import { LucideIcon } from "lucide-react";

const InfoColumn = ({
  Icon,
  label,
  value,
}: {
  Icon: LucideIcon;
  label: string;
  value: string | number;
}) => {
  return (
    <div className="flex gap-3.5">
      <div className="">
        <Icon className="w-5 h-5" />
      </div>
      <div className="space-y-2">
        <p className="text-[#737373]">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

export default InfoColumn;
