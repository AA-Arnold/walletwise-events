import CircleGradient from "@/components/atoms/CircleGradient/CircleGradient";
import Image from "next/image";

const LowerHero = () => {
  return (
    <div className="flex justify-center items-center sm:pt-40 pt-20 relative pb-10">
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <CircleGradient />
      </div>
      <div className="space-y-8 flex justify-center items-center flex-col ">
        <div className="border-[7.8px] border-black w-fit p-4 z-10">
          <h6 className=" font-extrabold text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[87.46px] leading-[1.05] tracking-[2px] md:tracking-[4.14px] uppercase">
            <span>31ST</span>
            <span className="text-[#AB1D22] pl-4">July</span>
          </h6>
        </div>
        <div className="max-w-[928.3px] w-full min-w-70 sm:w-120 md:w-180 lg:w-200 xl:w-232 h-[106.4px] relative">
          <div className="absolute top-0 left-0 max-w-[928.3px] min-w-70 w-full h-[106.4px]">
            <Image
              src="/assets/images/vec.svg"
              width={928}
              height={106}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute z-10 top-0 left-0 max-w-[928.3px] w-full h-[106.4px] flex justify-center items-center">
            <h6 className="text-[#FFF5E4] font-extrabold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[44.42px] leading-[1.3] tracking-[-0.2px] md:tracking-[-0.58px] uppercase text-center">
              Congress Hall Transcorp hilton
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerHero;
