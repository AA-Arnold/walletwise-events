import Container from "../../atoms/Container/Container";

const Header = () => {
  return (
    <div className="bg-[#6A1011] py-6">
      <Container>
        <div className="flex justify-center items-center h-full">
          <div className="text-sm sm:text-base md:text-[18px] lg:text-[20.37px] space-y-2">
            <h4 className="text-center uppercase tracking-[0.21em] leading-none text-[#FFF5E4] font-medium">
              MISS INDIGENOUS BEAUTY PAGEANT
            </h4>
            <h6 className="text-[#F0D8B0] font-medium uppercase leading-none tracking-[0.2em] text-center">
              PACKAGED BY EJANLA 1 OF ABUJA
            </h6>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
