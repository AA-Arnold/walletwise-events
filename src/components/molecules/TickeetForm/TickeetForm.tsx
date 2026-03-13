"use client";

import Image from "next/image";

import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";

import { useGetTicket } from "@/lib/hooks/useGetTicket";

const TickeetForm = () => {
  const { handleChange, userInfo, handleSubmit, isPending } = useGetTicket();

  return (
    <div className="border-t-[8.24px] border-[#CF0000] rounded-[15.56px] max-w-[442.95px] w-full min-w-70">
      <form
        className="bg-[#181818] w-full rounded-[15.56px] py-[30.64px] px-[21.96px] space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="text-white">
          <h6 className="font-bold sm:text-[35.43px] text-[28px] leading-[100%] tracking[0px]">
            CLAIM YOUR PASS
          </h6>
          <p className="max-sm:text-sm leading-[100%] tracking-[0px]">
            Register and get pass details via e-mail
          </p>
        </div>
        <div className="space-y-2">
          <Label title="Full name" />
          <Input
            icon="/assets/icons/User.svg"
            name="fullName"
            type="text"
            value={userInfo.fullName}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <Label title="Email" />
          <Input
            icon="/assets/icons/Mail.svg"
            name="email"
            type="email"
            value={userInfo.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </div>
        <div className="space-y-2">
          <Label title="Phone number" />
          <Input
            icon="/assets/icons/Phone.svg"
            name="phoneNumber"
            type="text"
            value={userInfo.phoneNumber}
            onChange={handleChange}
            placeholder="+234 000 - 0000"
          />
        </div>
        <Button loading={isPending} type="submit">
          <span className="flex items-center justify-center">
            <span>GET TICKET</span>
            <Image
              src="/assets/icons/ArrowRight.svg"
              alt="arrow-right"
              width={18.3}
              height={18.3}
              className="object-contain"
            />
          </span>
        </Button>
        <div className="flex justify-center items-center gap-2">
          <Image
            src="/assets/icons/LockKeyhole.svg"
            alt="lock"
            width={16}
            height={16}
            className="object-contain"
          />
          <p className="text-sm text-[#A0A0A0] ">Your information is secure</p>
        </div>
      </form>
    </div>
  );
};

export default TickeetForm;
