"use client";

import { useState } from "react";

import Button from "@/components/atom/Button/Button";
import Input from "@/components/atom/Input/Input";
import Label from "@/components/atom/Label/Label";
import TicketCard from "@/components/atom/TicketCard/TicketCard";
import { Check } from "lucide-react";

const BookTicket = () => {
  const [check, setCheck] = useState(false);

  return (
    <form className="max-w-158 w-full border border-[#E5E5E5] rounded-[16px] p-6 space-y-6">
      <div className="space-y-3.5">
        <h6 className="font-semibold">Book your ticket</h6>
        <p className="max-w-99.25 w-full">
          Select your ticket type and enter your details to finish booking.
        </p>
      </div>
      <div className="space-y-4 w-full">
        <TicketCard amount="5,000" seatsLeft={48} type="Regular" />
        <TicketCard amount="25,000" seatsLeft={10} type="VIP" />
        <TicketCard amount="100,000" seatsLeft={0} type="Table Of 5" />
      </div>
      <div className="space-y-4">
        <div className="space-y-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" title="Full name" />
              <Input id="fullName" name="fullName" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" title="Email" />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" title="Phone number" />
              <Input
                type="number"
                id="phone"
                name="phone"
                placeholder="08034250088"
              />
            </div>
          </div>
          <div className="space-y-5.5">
            <div className="space-y-4 text-sm">
              <p className="">No tickets selected yet</p>
              <div className="flex items-center justify-between gap-2">
                <p>Service fee (5%)</p>
                <p>₦0</p>
              </div>
              <div className="flex items-center justify-between gap-2 font-semibold">
                <p>Total</p>
                <p>₦0</p>
              </div>
            </div>
            <div className="flex gap-3.25">
              <button
                type="button"
                onClick={() => setCheck((prev) => !prev)}
                className={`w-5 h-5 rounded border-2 text-white cursor-pointer ${check ? "bg-[#5A27CC] border-[#5A27CC]" : "bg-white"}`}
              >
                <Check className="w-4 h-4" />
              </button>
              <div className=""></div>
            </div>
          </div>
          <Button variant="primary" className="w-full font-medium h-10">
            Pay ₦20,000
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
