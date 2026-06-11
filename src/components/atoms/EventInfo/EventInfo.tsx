import Image from "next/image";
import React from "react";

const EventInfo = ({
  className,
  iconUrl,
  title,
  desc,
  isBorder,
}: {
  className?: string;
  iconUrl: string;
  title: string;
  desc: string;
  isBorder: string;
}) => {
  return (
    <div className={`py-6 ${className}`}>
      <div className={` px-4 flex gap-2 h-full ${isBorder}`}>
        <div className="w-10.25 h-10.25">
          <Image
            src={iconUrl}
            alt=""
            width={41}
            height={41}
            className="w-full h-full"
          />
        </div>
        <div className="space-y-4">
          <h6 className="text-[#DD9B59] uppercase font-medium md:text-2xl sm:text-xl">
            {title}
          </h6>
          <p className="md:text-[28px] sm:text-2xl text-xl font-medium uppercase text-[#FFFFFF]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
