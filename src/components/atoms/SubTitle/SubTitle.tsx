const SubTitle = ({ title }: { title: string }) => {
  return (
    <h5 className="font-geist font-bold text-center leading-[2.9] tracking-[0.25em] text-xs sm:text-sm md:text-[15px] lg:text-base text-[#D4B038]">
      {title}
    </h5>
  );
};

export default SubTitle;
