import InfoColumn from "@/components/atom/InfoColumn/InfoColumn";
import { numberWithCommas } from "@/lib/helpers/formatNumber";

import { EventType } from "@/lib/types";

import { Calendar, MapPin, Ticket, Timer, Users } from "lucide-react";

const EventInfo = ({ event }: { event: EventType }) => {
  const timeFormate =
    event.time && event?.endTime
      ? `${event?.time} - ${event?.endTime}`
      : event.time && !event?.endTime
        ? event.time
        : "NIL";

  return (
    <div className="max-w-103.5 w-full min-w-72.5 rounded-[16px] border border-[#E5E5E5] p-6 space-y-5.75">
      <h6 className="font-semibold">Event Info</h6>
      <div className="space-y-4">
        <InfoColumn
          Icon={Calendar}
          label="Date"
          value={event?.computed?.formattedDate}
        />
        <InfoColumn Icon={Timer} label="Time" value={timeFormate} />
        <InfoColumn Icon={MapPin} label="Venue" value={event?.address} />
        <InfoColumn
          Icon={Ticket}
          label="Ticket price"
          value={
            event?.computed?.lowestTicketPrice &&
            numberWithCommas(event?.computed?.lowestTicketPrice)
          }
        />
        <InfoColumn
          Icon={Users}
          label="Capacity"
          value={event?.computed?.capacityFormatted}
        />
      </div>
    </div>
  );
};

export default EventInfo;
