const SectionParagraph = ({ desc }: { desc: string }) => {
  return (
    <div className="max-w-112.5 w-full">
      <p className="font-geist font-medium text-center tracking-normal text-[13px] sm:text-[14px] md:text-[15px] lg:text-base text-white">
        {desc}
      </p>
    </div>
  );
};

export default SectionParagraph;
