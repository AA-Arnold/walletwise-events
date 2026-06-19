import EventCard from "@/components/atom/EventCard/EventCard";
import { dummyPastEvents } from "@/lib/constants";

const PastEvents = () => {
  return (
    <div className="space-y-4">
      <h6 className="text-[#262626] font-semibold sm:text-[20px] text-lg">
        Past Events
      </h6>
      <div className="flex gap-4 flex-wrap">
        {dummyPastEvents?.map((item) => (
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

export default PastEvents;
