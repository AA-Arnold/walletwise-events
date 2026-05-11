import Container from "@/components/atoms/Container copy 2/Container";

const Footer = () => {
  return (
    <footer className="pt-16 pb-28 border-t border-[#242424] font-fraunces">
      <Container>
        <div className="text-[#D4B038]">
          <p className="text-center text-white font-bold leading-[0.92] tracking-normal text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
            Miss Indigenous Nigeria
          </p>
          <p className="text-center pt-2 font-medium leading-[1.37] tracking-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
            More than just a pageant • 10th Edition 2026
          </p>
          <p className="font-medium leading-[1.37] tracking-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] mt-16 text-center">
            +234 706 803 8186
          </p>
          <p className="font-medium leading-[1.37] tracking-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-center">
             www.indigenous.ng
          </p>

          <p className="text-center mt-14 font-medium uppercase  leading-[1.37] tracking-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
            Packaged by Ejanla 1 of Abuja  · {" "}
            <span className="text-gray-600">©</span> 2026 Miss Indigenous
            Nigeria Beauty Pageant
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
