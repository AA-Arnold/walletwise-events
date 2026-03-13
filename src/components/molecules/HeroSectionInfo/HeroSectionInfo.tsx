import Image from "next/image";

import AccessBtn from "@/components/atoms/AccessBtn/AccessBtn";
import DateContent from "@/components/atoms/DateContent/DateContent";
import LocationContent from "@/components/atoms/LocationContent/LocationContent";

const HeroSectionInfo = () => {
  return (
    <div className="max-w-[703.69px] md:min-w-100 min-w-[#300px] space-y-16">
      <div className="max-w-[659.81px] w-full max-h-[193.57px] bg-linear-to-br from-[#1A0304] to-[#050505]">
        <Image
          src="/assets/images/bred.svg"
          alt="preview"
          width={659.81}
          height={193.57}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center gap-4 max-lg:flex-wrap">
        <DateContent />
        <LocationContent />
        <AccessBtn />
      </div>
    </div>
  );
};

export default HeroSectionInfo;
