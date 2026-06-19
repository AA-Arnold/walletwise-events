const Prize = ({ id, prize }: { id: string; prize: string }) => {
  return (
    <div className="bg-[#2C0709] rounded-[64px] p-4 flex items-center gap-6 w-full text-white">
      <p className="w-14 h-14 sm:w-16 sm:h-16 lg:w-16.5 lg:h-16.5 rounded-full gap-2 flex items-center justify-center bg-[#210A06] text-[24px] sm:text-[30px] md:text-[36px] font-extralight">
        {id}
      </p>
      <p className="font-bold leading-none tracking-normal text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px]">
        {prize}
      </p>
    </div>
  );
};

export default Prize;
