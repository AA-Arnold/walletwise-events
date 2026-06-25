import SummaryCard from "@/components/atom/SummaryCard/SummaryCard";
import EventInfo from "../EventInfo/EventInfo";
import EventLocation from "../EventLocation/EventLocation";
import EventLineUp from "../EventLineUp/EventLineUp";

import { EventType } from "@/lib/types";
import { numberWithCommas } from "@/lib/helpers/formatNumber";

const EventHighlights = ({ event }: { event: EventType }) => {
  return (
    <div className="max-w-212 w-full space-y-8">
      <div className="space-y-4">
        <h4 className="text-[#262626] sm:text-[20px] text-lg font-semibold">
          {event?.title}
        </h4>
        <div className="flex flex-wrap gap-6">
          <SummaryCard
            iconUrl="/assets/icons/Users.svg"
            desc="Capacity"
            value={
              event?.computed?.totalCapacity &&
              numberWithCommas(event?.computed?.totalCapacity)
            }
          />
          <SummaryCard
            iconUrl="/assets/icons/Ticket.png"
            desc="Ticket tiers"
            value={event?.ticketTypes?.length || 1}
          />
          <SummaryCard
            iconUrl="/assets/icons/Music4.svg"
            desc="Expected songs"
            value="20+"
          />
        </div>
      </div>
      <div className="space-y-12">
        <div className="space-y-3.5">
          <h6 className=" font-semibold">About this event</h6>
          <p className="">{event?.description}</p>
        </div>
        <div className="flex gap-4.75 flex-wrap">
          <EventInfo event={event} />
          <EventLocation location={event?.address} />
        </div>
        <EventLineUp />
      </div>
    </div>
  );
};

export default EventHighlights;
