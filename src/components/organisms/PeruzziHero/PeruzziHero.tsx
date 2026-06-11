import PeruzziEventName from "@/components/atoms/PeruzziEventName/PeruzziEventName";
import Header from "../Header/Header";
import Image from "next/image";
import EventDetails from "@/components/molecules/EventDetails/EventDetails";

const PeruzziHero = () => {
  return (
    <div
      className="relative text-white"
      style={{
        background: "url('/assets/images/bg.svg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header />
      <PeruzziEventName />
      <div className="sm:h-216.25 h-70 w-full">
        <Image
          src="/assets/images/abuja.png"
          alt=""
          width={1407}
          height={865}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <EventDetails />
    </div>
  );
};

export default PeruzziHero;
