import Image from "next/image";

const EventLocation = ({ location }: { location: string }) => {
  return (
    <div className="max-w-103.5 w-full min-w-72.5 rounded-[16px] border border-[#E5E5E5] p-6 space-y-2">
      <h6 className="font-semibold tracking-normal leading-6">
        Event Location
      </h6>
      <p className="text-sm text-[#737373]">{location}</p>
      <div className="w-full h-68.75">
        <Image
          src={"/assets/images/map-preview.svg"}
          alt="map-preview"
          height={275}
          width={366.5}
        />
      </div>
    </div>
  );
};

export default EventLocation;
