import Container from "@/components/atom/Container/Container";
import InfoRow from "@/components/atom/InfoRow/InfoRow";

const EventInfoMain = () => {
  return (
    <div
      className="w-full h-141"
      style={{
        background: "url('/assets/images/hero-bg.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-linear-to-b from-[#000000BF] to-[#66666600] h-full sm:py-8 py-6">
        <Container className="h-full">
          <div className="flex items-end h-full">
            <div className="max-w-166 w-full space-y-2 text-white">
              <p className="bg-black/70 py-0.5 px-2 rounded-[32px] border-[0.5px] border-[#E5E5E533] text-xs  font-semibold w-fit">
                Upcoming Event
              </p>
              <h2 className="sm:text-[48px] text-[35px] leading-[100%] tracking-normal font-extrabold">
                BURNA BOY -LIVE AT EKO CONVENTION CENTRE
              </h2>
              <div className="flex gap-6 flex-wrap">
                <InfoRow
                  iconUrl="/assets/icons/MapPin.svg"
                  desc="Eko Convention Centre, Victoria Island"
                />
                <InfoRow
                  iconUrl="/assets/icons/MapPin.svg"
                  desc="8:00 PM - 12 AM"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default EventInfoMain;
