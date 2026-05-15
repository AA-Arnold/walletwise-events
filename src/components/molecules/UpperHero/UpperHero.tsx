import Image from "next/image";

const UpperHero = () => {
  return (
    <div className="relative flex justify-center items-center flex-col">
      <div className="max-w-120 h-150 max-sm:h-70 max-sm:max-w-70 w-full">
        <Image
          src="/assets/images/peruzzi.png"
          width={800}
          height={800}
          alt="peruzzi"
          priority
          className="w-full h-auto"
        />
      </div>
      <div className="absolute md:bottom-0 max-sm:-bottom-8 z-10 ">
        <div className="relative">
          {" "}
          <h1 className="font-cinzel_decorative font-black text-[60px] sm:text-[96px] md:text-[140px] lg:text-[170px] xl:text-[198.8px] leading-[0.95] tracking-[3.98px] text-center text-[#111111]">
            Peruzzi
          </h1>
          <div className="absolute md:bottom-10 sm:top-16 top-7 z-10">
            <h4 className="">
              <span className="text-[54px] sm:text-[80px] md:text-[120px] lg:text-[150px] xl:text-[186.25px] leading-none tracking-[0px] text-center font-seaweed_script text-[#AB1D22] pr-3">
                Live
              </span>{" "}
              <span className="font-extrabold text-[24px] sm:text-[40px] md:text-[52px] lg:text-[60px] xl:text-[63.9px] leading-none tracking-[3.5px] text-center uppercase font-Playfair_Display">
                In Abuja
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperHero;
