const Title = ({ title }: { title: string }) => {
  return (
    <h6 className="text-white font-bold text-center leading-none tracking-normal text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-fraunces">
      {title}
    </h6>
  );
};

export default Title;
