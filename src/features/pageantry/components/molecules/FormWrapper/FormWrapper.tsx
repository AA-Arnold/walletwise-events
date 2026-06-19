"use client";

import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import LanguageInput from "../../atoms/LanguageInput/LanguageInput";
import Select from "../../atoms/Select/Select";

import { useRegister } from "@/features/pageantry/hooks/useRegister";

import { Loader } from "lucide-react";

const FormWrapper = () => {
  const {
    handleChange,
    userInfo,
    handleSubmit,
    isPending,
    confrim,
    setConfirm,
    handleLanguageChange,
  } = useRegister();

  const options = [
    {
      label: "Yes",
      value: "Yes",
    },
    {
      label: "No",
      value: "No",
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#180707] border border-[#47282966] px-4 pt-4 pb-10 max-w-183.5 w-full grid grid-cols-2 gap-4 rounded-[16px]"
    >
      <div className="w-full pt-2 space-y-2 max-md:col-span-2">
        <Label id="fullName" title="Full Name" />
        <Input
          type="text"
          onChange={handleChange}
          value={userInfo?.fullName}
          name="fullName"
        />
      </div>
      <div className="w-full pt-2 space-y-2 max-md:col-span-2">
        <Label id="dateOfBirth" title="Date of Birth" />
        <Input
          type="date"
          onChange={handleChange}
          value={userInfo?.dateOfBirth}
          name="dateOfBirth"
        />
      </div>
      <div className="w-full pt-2 space-y-2 max-md:col-span-2">
        <Label id="state" title="State of Origin" />
        <Input
          type="text"
          onChange={handleChange}
          value={userInfo?.state}
          name="state"
        />
      </div>
      <div className="w-full pt-2 space-y-2 max-md:col-span-2">
        <Label id="occupation" title="Occupation" />
        <Input
          type="text"
          onChange={handleChange}
          value={userInfo?.occupation}
          name="occupation"
        />
      </div>
      <div className="w-full pt-2 space-y-2 max-md:col-span-2">
        <Label id="email" title="Email Address" />
        <Input
          type="email"
          onChange={handleChange}
          value={userInfo?.email}
          name="email"
        />
      </div>
      <div className="w-full pt-2 space-y-2 max-md:col-span-2">
        <Label id="phoneNumber" title="Contact Phone" />
        <Input
          type="number"
          onChange={handleChange}
          value={userInfo?.phoneNumber}
          name="phoneNumber"
        />
      </div>
      <div className="w-full pt-2 space-y-2 col-span-2">
        <Label id="height" title="Height" />
        <div className="gap-2 flex items-center">
          <Input
            type="text"
            onChange={handleChange}
            value={userInfo?.height}
            name="height"
          />
          <p className="sm:h-11 h-10 w-fit bg-[#120909] border-[#404040] border px-[14.64px] rounded-[11px] text-[#777777] text-sm flex justify-center items-center">
            CM
          </p>
        </div>
      </div>
      <div className="w-full pt-2 space-y-2 col-span-2">
        <Label id="languages" title="Languages Spoken" />
        <LanguageInput
          languages={userInfo.languages}
          setLanguages={handleLanguageChange}
        />
      </div>
      <div className="w-full pt-2 space-y-2 col-span-2">
        <Label id="address" title="Residential Address" />
        <Input
          type="text"
          onChange={handleChange}
          value={userInfo?.address}
          name="address"
        />
      </div>
      <div className="w-full pt-2 space-y-2 col-span-2">
        <Label id="sponsor" title="Do you have a sponsor?" />
        <Select
          name="sponsor"
          value={userInfo?.sponsor}
          onChange={handleChange}
          options={options}
        />
      </div>
      <div className="w-full pt-2 space-y-2 col-span-2">
        <Label id="certificate" title="Certificate obtained" />
        <Input
          type="text"
          onChange={handleChange}
          value={userInfo?.certificate}
          name="certificate"
        />
      </div>
      <div className="w-full pt-2 space-y-2 col-span-2">
        <Label
          id="participatedBefore"
          title="Have you participated in a beauty pageant before?"
        />
        <Select
          name="participatedBefore"
          value={userInfo?.participatedBefore}
          onChange={handleChange}
          options={options}
        />
      </div>
      <div className="w-full pt-2 space-y-2 col-span-2">
        <Label id="nameOfContest" title="If yes, name of contest" />
        <Input
          type="text"
          onChange={handleChange}
          value={userInfo?.nameOfContest}
          name="nameOfContest"
        />
      </div>
      <div className="w-full pt-2 space-y-2 col-span-2">
        <Label id="wonBefore" title="Did you win any title?" />
        <Select
          name="wonBefore"
          value={userInfo?.wonBefore}
          onChange={handleChange}
          options={options}
        />
      </div>
      <div className="w-full pt-2 space-y-2 col-span-2">
        <Label id="titleWon" title="If yes, title won?" />
        <Input
          type="text"
          onChange={handleChange}
          value={userInfo?.titleWon}
          name="titleWon"
        />
      </div>
      <div className="flex gap-4 pt-4 col-span-2">
        <button
          type="button"
          onClick={() => setConfirm((prev) => !prev)}
          className="w-6 min-w-6 h-6 rounded-[6px] bg-[#120909] text-[#C1C1C1] border-[#404040] border flex justify-center items-center cursor-pointer"
        >
          {confrim && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </button>
        <p className="font-medium leading-[1.57] tracking-normal text-[12px] sm:text-[13px] md:text-[14px] text-white/60">
          I confirm that all information provided is accurate. I agree to
          the terms and conditions of Miss Indigenous Nigeria 2026 and consent
          to my data being used for registration purposes.
        </p>
      </div>
      <div className="w-full col-span-2">
        <button
          type="submit"
          className="w-full flex items-center justify-center text-center gap-2 rounded-[10.98px] h-12 bg-[#680E17] font-semibold tracking-normal text-[12px] sm:text-[13px] md:text-[14.64px] text-white"
        >
          {isPending ? (
            <Loader className="animate-spin w-8 h-8" />
          ) : (
            <>
              {" "}
              <span className="text-center">PROCEED TO PAYMENT - ₦10,000</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="sm:size-5 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </>
          )}
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 text-[#A0A0A0] col-span-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="sm:size- size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
        <p className="sm:text-sm text-xs">Your information is secure</p>
      </div>
    </form>
  );
};

export default FormWrapper;
