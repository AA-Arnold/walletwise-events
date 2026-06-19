import Image from "next/image";

const EventLineUp = () => {
  return (
    <div className="rounded-[16px] border border-[#E5E5E5] p-6 space-y-5.75">
      <h6 className="font-semibold">Lineup</h6>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        {["", "", "", ""].map((_, i) => (
          <div className="flex items-center gap-3.5" key={i}>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={"/assets/images/profile.jpg"}
                width={40}
                height={40}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-0.5">
              <p className="font-medium">Burna Boy</p>
              <p className="text-[#737373]">Headliner</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventLineUp;
