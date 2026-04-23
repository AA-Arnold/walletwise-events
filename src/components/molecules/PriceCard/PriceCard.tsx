import TicketCard from "@/components/atoms/TicketCard/TicketCard";
import React from "react";

const PriceCard = ({
  selectedTicket,
  title,
  price,
  onClick,
}: {
  selectedTicket: boolean;
  title: string;
  price: string;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-[285.25px] h-[90.08px] border cursor-pointer flex items-center pl-4 ${selectedTicket ? "bg-[#1A1A1A] border-white" : "border-[#706860] hover:bg-black/15"}`}
    >
      <TicketCard
        title={title}
        priceSize="font-black text-[18px] sm:text-[24px] md:text-[30px] lg:text-[34.08px] leading-[1.1] tracking-[0px] font-Playfair_Display text-[#FFF5E4]"
        titleStyle="font-light text-xs leading-none tracking-[1px] md:tracking-[2.13px] uppercase text-white/60"
        price={price}
        className="justify-start"
      />
    </div>
  );
};

export default PriceCard;
