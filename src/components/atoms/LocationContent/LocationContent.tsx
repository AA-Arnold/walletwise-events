import Image from "next/image";

const LocationContent = () => {
  return (
    <div className="border border-[#464646] bg-[#181818] opacity-90 sm:max-w-[347.73px] max-w-[250.73px] w-full sm:min-w-70 min-w-56 px-[13.66px] sm:py-[8.82px] py-[5.82px] rounded-[26.46px] h-[150.44px] flex items-center">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/icons/location.svg"
          alt="location-icon"
          width={42.92}
          height={42.92}
          className="object-contain"
        />
        <div className="space-y-1 font-bold text-white">
          <p className="sm:text-[30px] text-[20px] uppercase leading-[100%] tracking-[0px] ">
            Technical Field
          </p>
          <p className="sm:text-[28.03px] text-lg">OSOBGO</p>
        </div>
      </div>
    </div>
  );
};

export default LocationContent;
