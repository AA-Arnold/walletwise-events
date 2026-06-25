import EventCard from "@/components/atom/EventCard/EventCard";
import EventCardSkeleton from "@/components/atom/skeleton/EventCardSkeleton";

import { EventType } from "@/lib/types";

const EventWrapper = ({
  title = "Upcoming Events",
  events,
  isLoading,
}: {
  title?: string;
  events: EventType[];
  isLoading: boolean;
}) => {
  return (
    <div className="space-y-4">
      <h6 className="text-[#262626] font-semibold sm:text-[20px] text-lg">
        {title}
      </h6>

      <div className="flex gap-4 flex-wrap">
        {isLoading ? (
          <EventCardSkeleton />
        ) : (
          <>
            {events?.map((item) => (
              <EventCard
                key={item?.title}
                imgUrl={item?.imageUrl}
                category={item?.category}
                amount={item?.computed.lowestTicketPrice}
                date={item?.computed.formattedDate}
                eventName={item?.title}
                location={item?.address}
                link={`/event/info/${item.eventId}`}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default EventWrapper;
