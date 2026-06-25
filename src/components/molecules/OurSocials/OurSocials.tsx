import { socialLinks } from "@/lib/constants";
import Image from "next/image";

const OurSocials = () => {
  return (
    <div className="flex items-center gap-2">
      {socialLinks?.map((item) => (
        <a
          href={item?.url}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
          className="bg-[#F5F5F5] rounded-[11.43px] w-10 h-10 flex items-center justify-center group"
        >
          <Image
            src={item.iconUrl}
            alt={item?.name}
            width={17}
            height={17}
            className="hover:scale-110 transition-all duration-300"
          />
        </a>
      ))}
    </div>
  );
};

export default OurSocials;
