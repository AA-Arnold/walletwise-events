import Image from "next/image";
import Container from "../Container/Container";

const PeruzziEventName = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4 justify-center items-center pt-24 pb-10 xl:h-140 md:h-80 h-65">
        <div className="xl:max-w-254.5 md:max-w-150 sm:max-w-100 max-w-80 w-full">
          <Image
            src="/assets/images/title.png"
            alt="title"
            width={1018}
            height={379}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-[#BBBBBB] lg:text-2xl md:text-xl sm:text-lg text-sm md:tracking-[10px] sm:tracking-[5px] tracking-[3px] tranx font-medium text-center">
          <span className="text-[#DD9B59]">[</span> ONE NIGHT EXPERIENCE{" "}
          <span className="text-[#DD9B59]">]</span>
        </p>
      </div>
    </Container>
  );
};

export default PeruzziEventName;
