"use client";

import Button from "@/components/atom/Button/Button";
import Input from "@/components/atom/Input/Input";
import Label from "@/components/atom/Label/Label";
import TicketCard from "@/components/atom/TicketCard/TicketCard";

import { Loader } from "lucide-react";
import { EventTicketType } from "@/lib/types";
import { usePurchaseTicket } from "@/lib/hooks/usePurchaseTicket";
import { numberWithCommas } from "@/lib/helpers/formatNumber";

const BookTicket = ({
  ticketTypes,
  eventId,
  serviceFee,
}: {
  ticketTypes: EventTicketType[];
  eventId: string;
  serviceFee: string;
}) => {
  const {
    handleSubmit,
    handleChange,
    userInfo,
    isPending,
    increase,
    decrease,
    getQuantity,
    selectedTicket,
    totalAmount,
  } = usePurchaseTicket(eventId);

  const finalAmount = totalAmount + Number(serviceFee || 0);

  const seatAvailable: Record<string, string> = {
    Table6: "Table of 6",
    Table8: "Table of 8",
    Table10: "Table of 10",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-158 w-full border border-[#E5E5E5] rounded-[16px] p-6 space-y-6"
    >
      <div className="space-y-3.5">
        <h6 className="font-semibold">Book your ticket</h6>
        <p className="max-w-99.25 w-full">
          Select your ticket type and enter your details to finish booking.
        </p>
      </div>
      <div className="space-y-4 w-full">
        {ticketTypes?.map((ticket) => (
          <TicketCard
            key={ticket?.name}
            type={seatAvailable[ticket?.name] || ticket?.name}
            amount={ticket?.price}
            seatsLeft={ticket?.quantity}
            quantitySelected={getQuantity(ticket?.name)}
            increase={() => increase(ticket?.name, ticket?.price)}
            descrease={() => decrease(ticket?.name)}
          />
        ))}
      </div>
      <div className="space-y-4">
        <div className="space-y-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" title="Full name" />
              <Input
                id="fullName"
                value={userInfo?.fullName}
                onChange={handleChange}
                name="fullName"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" title="Email" />
              <Input
                id="email"
                type="email"
                value={userInfo?.email}
                onChange={handleChange}
                name="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" title="Phone number" />
              <Input
                id="phoneNumber"
                type="number"
                value={userInfo?.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
                placeholder="08034250088"
              />
            </div>
          </div>
          <div className="space-y-5.5">
            <div className="space-y-4 text-sm">
              {!selectedTicket ? (
                <p>No tickets selected yet</p>
              ) : (
                <div className="flex justify-between">
                  <p>
                    {selectedTicket.ticketType} × {selectedTicket.quantity}
                  </p>

                  <p>
                    ₦
                    {numberWithCommas(
                      (selectedTicket.discountPrice ?? selectedTicket.price) *
                        selectedTicket.quantity,
                    )}
                  </p>
                </div>
              )}
              <div className="flex items-center justify-between gap-2">
                <p>Service fee</p>
                <p>₦{numberWithCommas(Number(serviceFee))}</p>
              </div>
              <div className="flex items-center justify-between gap-2 font-semibold">
                <p>Total</p>
                <p>₦{numberWithCommas(finalAmount)}</p>
              </div>
            </div>
            {/* <div className="flex gap-3.25">
              <button
                type="button"
                onClick={() => setCheck((prev) => !prev)}
                className={`w-5 h-5 rounded border-2 text-white cursor-pointer ${check ? "bg-[#5A27CC] border-[#5A27CC]" : "bg-white"}`}
              >
                <Check className="w-4 h-4" />
              </button>
              <div className=""></div>
            </div> */}
          </div>
          <Button
            type="submit"
            variant="primary"
            className="w-full font-medium h-10"
          >
            {isPending ? (
              <Loader className="animate-spin w-8 h-8" />
            ) : (
              <>Pay ₦{numberWithCommas(finalAmount)}</>
            )}
          </Button>
        </div>
        <p className="text-center text-[#737373] text-sm">
          Your ticket will be sent to your email address.
        </p>
      </div>
    </form>
  );
};

export default BookTicket;
