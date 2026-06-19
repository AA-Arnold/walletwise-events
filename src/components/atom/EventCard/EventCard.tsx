import Image from "next/image";
import Link from "next/link";

const EventCard = ({
  imgUrl,
  category,
  amount,
  location,
  date,
  eventName,
  link,
}: {
  imgUrl: string;
  category: string;
  amount: string;
  location: string;
  date: string;
  eventName: string;
  link: string;
}) => {
  return (
    <Link href={link} className="max-w-104 w-full min-w-72.5 space-y-3">
      <div className="border border-[#E0E0E0] w-full sm:h-104 h-72.5 overflow-hidden relative rounded-[16px]">
        <Image
          src={imgUrl}
          alt={eventName}
          width={416}
          height={416}
          className="w-full h-full object-cover"
        />
        <span className="absolute block top-2 left-2 bg-black/60 border-[0.5px] border-[#E5E5E533] py-0.5 px-2 rounded-[32px] text-white">
          {category}
        </span>
      </div>
      <h2 className="font-semibold text-[#262626] w-full truncate">
        {eventName}
      </h2>
      <div className="flex items-center gap-1 text-[#737373] text-sm font-medium">
        <p className="">{date},</p>
        <p className="flex-1 w-full truncate">{location}</p>
      </div>
      <p className="text-[#737373] text-sm font-medium">₦{amount} per ticket</p>
    </Link>
  );
};

export default EventCard;
