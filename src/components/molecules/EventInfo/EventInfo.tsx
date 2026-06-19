import InfoColumn from "@/components/atom/InfoColumn/InfoColumn";

import { Calendar, MapPin, Ticket, Timer, Users } from "lucide-react";

const EventInfo = () => {
  return (
    <div className="max-w-103.5 w-full min-w-72.5 rounded-[16px] border border-[#E5E5E5] p-6 space-y-5.75">
      <h6 className="font-semibold">Event Info</h6>
      <div className="space-y-4">
        <InfoColumn Icon={Calendar} label="Date" value="Friday, 16 May 2026" />
        <InfoColumn Icon={Timer} label="Time" value="8:00 PM - 12 AM" />
        <InfoColumn
          Icon={MapPin}
          label="Venue"
          value="Eko Convention Centre, Victoria Island"
        />
        <InfoColumn Icon={Ticket} label="Ticket price" value="From N5,000" />
        <InfoColumn Icon={Users} label="Capacity" value="3,500 capacity" />
      </div>
    </div>
  );
};

export default EventInfo;
