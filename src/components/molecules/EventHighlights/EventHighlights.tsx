import SummaryCard from "@/components/atom/SummaryCard/SummaryCard";
import EventInfo from "../EventInfo/EventInfo";
import EventLocation from "../EventLocation/EventLocation";
import EventLineUp from "../EventLineUp/EventLineUp";

const EventHighlights = () => {
  return (
    <div className="max-w-212 w-full space-y-8">
      <div className="space-y-4">
        <h4 className="text-[#262626] sm:text-[20px] text-lg font-semibold">
          Burna boy- Live at Eko Convention Centre
        </h4>
        <div className="flex flex-wrap gap-6">
          <SummaryCard
            iconUrl="/assets/icons/Users.svg"
            desc="Seats left"
            value="620"
          />
          <SummaryCard
            iconUrl="/assets/icons/Ticket.png"
            desc="Ticket tiers"
            value="4"
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
          <p className="">
            Burna Boy returns to Lagos for a full-scale live show at Eko
            Convention Centre, built for fans who want the arena version of his
            biggest records. Expect a live band, extended production, and a
            setlist spanning Ye, Last Last, City Boys, and new material. <br />
            <br /> Doors open early for check-in and warm-up DJ sets. Ticket
            holders should arrive with a valid booking confirmation and ID so
            entry stays smooth before the headline performance starts.
          </p>
        </div>
        <div className="flex gap-4.75 flex-wrap">
          <EventInfo />
          <EventLocation />
        </div>
        <EventLineUp />
      </div>
    </div>
  );
};

export default EventHighlights;
