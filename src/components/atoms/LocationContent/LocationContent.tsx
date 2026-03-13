import Image from "next/image";

const LocationContent = () => {
  return (
    <div className="border border-[#464646] bg-[#181818] opacity-90 max-w-[347.73px] w-full min-w-70 px-[13.66px] py-[8.82px] rounded-[26.46px] h-[150.44px] flex items-center">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/icons/location.svg"
          alt="location-icon"
          width={42.92}
          height={42.92}
          className="object-contain"
        />
        <div className="space-y-1 font-bold text-white">
          <p className="sm:text-[30px] text-[26px] uppercase leading-[100%] tracking-[0px] ">
            freedom park
          </p>
          <p className="sm:text-[28.03px] text-[22px]">OSOBGO</p>
        </div>
      </div>
    </div>
  );
};

export default LocationContent;
