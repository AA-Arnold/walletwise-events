import Container from "../../atoms/Container/Container";

const Header = () => {
  return (
    <div className="">
      <Container className="">
        <header className="w-full flex flex-col justify-center items-center h-24.25 gap-4 pt-10">
          <h6 className="font-medium md:text-base sm:text-sm text-xs uppercase sm:tracking-[3.95px] tracking-[2px] text-center">
            Collaboration 01
          </h6>
          <h4 className="lg:text-2xl md:text-xl sm:text-lg sm:leading-[100%] md:tracking-[7.66px] sm:tracking-[4px] tracking-[3px] text-center uppercase">
            Sensei Musik Lab <span className="text-[#F7BB76] ">X </span>Clint
            Entertainment
          </h4>
          <p className="uppercase text-[#F7BB76] font-medium md:text-base sm:text-sm text-xs sm:tracking-[25.08px] tracking-[12px]">
            Presents
          </p>
        </header>
      </Container>
    </div>
  );
};

export default Header;
