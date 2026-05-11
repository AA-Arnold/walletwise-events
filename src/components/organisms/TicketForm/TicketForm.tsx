"use client";

import Container from "@/components/atoms/Container/Container";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import PriceCard from "@/components/molecules/PriceCard/PriceCard";

import { ticketPrices } from "@/lib/constants";
import { calculateTotalPrice } from "@/lib/helpers/calculateTotalPrice";
import { useGetTicket } from "@/lib/hooks/useGetTicket";
import { Loader } from "lucide-react";

const TicketForm = () => {
  const {
    handleChange,
    userInfo,
    handleSubmit,
    isPending,
    increase,
    descrease,
    quantity,
    ticketType,
    setticketType,
  } = useGetTicket();

  const selectedTicket = ticketPrices.find((t) => t.value === ticketType);

  const total = calculateTotalPrice(quantity, selectedTicket?.price);

  return (
    <Container className="px-4 sm:px-6">
      <div className="my-10 bg-black/35 shadow-[inset_0px_0px_80px_0px_rgba(0,0,0,0.3),0px_0px_60px_0px_rgba(255,140,0,0.12),0px_0px_0px_1px_rgba(255,184,48,0.25)]">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center text-[#FFF5E4] font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-none tracking-[2px] md:tracking-[6px] uppercase py-6">
            Get Your Ticket / Secure Your Spot
          </h2>

          <div className="border-t border-[#706860]">
            <div className="grid md:grid-cols-2 grid-cols-1 pb-8">
              <div className="md:border-r border-[#706860] space-y-8 px-8 py-8">
                <div className="space-y-2">
                  <Label title="Full Name" htmlFor="fullName" />
                  <Input
                    type="text"
                    value={userInfo?.fullName}
                    onChange={handleChange}
                    name="fullName"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label title="Email Address" htmlFor="email" />
                  <Input
                    type="email"
                    value={userInfo?.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label title="Phone Number" htmlFor="phoneNumber" />
                  <Input
                    type="number"
                    value={userInfo?.phoneNumber}
                    onChange={handleChange}
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="space-y-8 px-8 py-8">
                <div className="space-y-4">
                  <Label title="Select Ticket Type" htmlFor="ticketType" />
                  <div className="flex flex-wrap gap-4">
                    {ticketPrices?.map((ticket) => (
                      <PriceCard
                        key={ticket?.title}
                        title={ticket?.title}
                        price={ticket?.price}
                        onClick={() => setticketType(ticket?.value)}
                        selectedTicket={ticket.value === ticketType}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h6 className="font-light text-[8px] sm:text-[9px] leading-none tracking-[1px] md:tracking-[2.52px] uppercase text-white/60">
                    Quantity
                  </h6>
                  <div className="border border-[#706860] w-38.5 h-12.5 grid grid-cols-3 text-[#FFF5E4]">
                    <button
                      type="button"
                      onClick={descrease}
                      className="flex items-center justify-center text-center border-r border-[#706860] sm:text-[18px] md:text-[20px] leading-[1.2] cursor-pointer"
                    >
                      -
                    </button>
                    <p className="flex items-center justify-center text-center border-r border-[#706860] sm:text-[18px] md:text-[20px] leading-[1.2]">
                      {quantity}
                    </p>
                    <button
                      type="button"
                      onClick={increase}
                      className="flex items-center justify-center text-center border-r border-[#706860] sm:text-[18px] md:text-[20px] leading-[1.2] cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h6 className="font-light text-[8px] sm:text-[9px] leading-none tracking-[1px] md:tracking-[2.52px] uppercase text-white/60">
                    Total
                  </h6>
                  <p className="font-black text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45.44px] leading-[1.1] tracking-[-0.2px] md:tracking-[-0.45px] text-[#FFF5E4] font-cinzel">
                    ₦{total}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="w-40 h-[44.5px] bg-linear-to-br from-[#C8001E] to-[#8B0012] flex justify-center items-center font-bold text-[10px] sm:text-[11px] md:text-[12px] leading-none tracking-[1px] md:tracking-[2.7px] text-center uppercase text-white font-cinzel cursor-pointer"
                  >
                    {isPending ? (
                      <Loader className="animate-spin w-8 h-8" />
                    ) : (
                      "Buy Now"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default TicketForm;
