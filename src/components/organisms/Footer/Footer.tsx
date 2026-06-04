import Container from "@/components/atoms/Container/Container";
import DownloadWalletwise from "@/components/atoms/DownloadWalletwise/DownloadWalletwise";

const Footer = () => {
  return (
    <footer className="">
      <div className="border-y border-[#706860]">
        <Container className="px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="md:border-r max-lg:border-b  border-[#706860] px-6 py-10 space-y-6">
              <p className="font-light text-[8px] sm:text-[9px] leading-none tracking-[1px] md:tracking-[2.25px] uppercase text-white/60">
                Packaged By /
              </p>
              <h2 className="font-cinzel_decorative text-white font-black text-[22px] sm:text-[34px] md:text-[48px] lg:text-[56.8px] leading-[1.1] tracking-[0.5px] md:tracking-[1.14px]">
                Ejanla 1
              </h2>
              <p className="font-light text-[8px] sm:text-[9px] leading-none tracking-[1px] md:tracking-[2.25px] uppercase text-white/60">
                Of Abuja
              </p>
            </div>
            <div className="px-6 py-10 space-y-6 lg:border-r  max-lg:border-b border-[#706860]">
              <p className="font-light text-[8px] sm:text-[9px] leading-none tracking-[1px] md:tracking-[2.25px] uppercase text-white/60">
                Enquiries / Sponsorship
              </p>
              <h6 className="text-[#FFF5E4] font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22.72px] leading-normal md:leading-[38.62px] tracking-[0.5px] md:tracking-[0.91px]">
                +234 706 803 8186 <br /> 0901 360 2097{" "}
              </h6>
            </div>
            <div className="py-10 max-md:w-fit">
              <DownloadWalletwise />
            </div>
          </div>
        </Container>
      </div>
      <div className="">
        <Container className="px-4 sm:px-6">
          <div className="flex justify-between items-end flex-wrap py-6 gap-10">
            <div className="max-w-105 w-full ">
              <p className="font-normal text-[7px] sm:text-[8px] leading-3.5 md:leading-[15.2px] tracking-[0.4px] md:tracking-[0.8px] uppercase text-white/60">
                All right reserved. No part of this design may be reproduced,
                distributed or transmitted in any form or by any means without
                prior or written knowledge of Ejanla 1 of Abuja © Kingz Design
                Lab{" "}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 text-white/60">
              <p className="font-normal text-[7.5px] sm:text-[8px] md:text-[8.5px] leading-3.5 md:leading-[15.3px] tracking-[1px] md:tracking-[1.87px] text-right uppercase">
                Design Agency{" "}
              </p>
              <p className="font-normal text-[7.5px] sm:text-[8px] md:text-[8.5px] leading-3.5 md:leading-[15.3px] tracking-[1px] md:tracking-[1.87px] text-right uppercase">
                {" "}
                Kingz Design Lab
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
