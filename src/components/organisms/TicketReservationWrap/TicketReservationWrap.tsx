import Container from "@/components/atoms/Container/Container";
import TicketCard from "@/components/atoms/TicketCard/TicketCard";

import { ticketPrices } from "@/lib/constants";

const TicketReservationWrap = () => {
  return (
    <div className="bg-black/20 p-10  border-b border-[#706860]">
      <Container className="px-4 sm:px-6">
        <div className="space-y-10">
          <h6 className="font-bold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[24px] leading-none tracking-[2px] md:tracking-[7.8px] text-center uppercase text-[#FFF5E4]">
            Tickets Reservations
          </h6>
          <div className="flex items-center justify-center gap-10 flex-wrap">
            {ticketPrices?.map((ticket, i) => (
              <TicketCard
                key={ticket?.title}
                title={ticket?.title}
                price={ticket?.price}
                borderRadius={
                  i + 1 === ticketPrices?.length
                    ? ""
                    : "md:border-r-8 border-[#FFF5E4] md:pr-10"
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TicketReservationWrap;
