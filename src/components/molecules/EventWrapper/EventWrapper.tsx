import EventCard from "@/components/atom/EventCard/EventCard";
import { dummyEvents } from "@/lib/constants";

const EventWrapper = ({ title = "Upcoming Events" }: { title?: string }) => {
  return (
    <div className="space-y-4">
      <h6 className="text-[#262626] font-semibold sm:text-[20px] text-lg">
        {title}
      </h6>
      <div className="flex gap-4 flex-wrap">
        {dummyEvents?.map((item) => (
          <EventCard
            key={item?.eventName}
            imgUrl={item?.imgUrl}
            category={item?.category}
            amount={item?.amount}
            date={item?.date}
            eventName={item?.eventName}
            location={item?.location}
            link={item?.link}
          />
        ))}
      </div>
    </div>
  );
};

export default EventWrapper;
