import React from "react";

const TicketCard = ({
  title,
  price,
  className = "items-center justify-center",
  borderRadius = "",
  titleStyle = "font-bold text-[9.9px] leading-none tracking-[1.98px] text-[#FFF5E4] text-center ",
  priceSize = "text-[24px] sm:text-[36px] md:text-[48px] lg:text-[54px] xl:text-[57.63px] leading-none tracking-[-0.3px] md:tracking-[-0.64px] text-[#FFF5E4] font-cinzel text-center",
}: {
  title: string;
  price: string;
  borderRadius?: string;
  titleStyle?: string;
  priceSize?: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <h6 className={` uppercase ${titleStyle}`}>{title}</h6>
      <h2 className={`uppercase font-black  ${priceSize} ${borderRadius}`}>
        {price}
      </h2>
    </div>
  );
};

export default TicketCard;
