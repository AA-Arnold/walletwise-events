import EventInfo from "@/components/atoms/EventInfo/EventInfo";
import Container from "@/components/atoms/Container/Container";

const EventDetails = () => {
  return (
    <div className="relative bg-[#080D0F]">
      <div className="border-y-4 border-[#DD9B59]">
        <Container>
          <div className=" grid lg:grid-cols-5 grid-cols-3">
            <EventInfo
              title="Venue"
              desc="CONGRESS HALL TRANSCORP HILTON ABUJA"
              iconUrl="/assets/icons/location 2.svg"
              isBorder="sm:border-r-[1.73px] border-[#DD9B59]"
              className="sm:col-span-2 col-span-3"
            />
            <EventInfo
              title="TIME"
              desc="6PM"
              iconUrl="/assets/icons/time-fill.svg"
              isBorder="lg:border-r-[1.73px] border-[#DD9B59]"
              className="sm:col-span-1 col-span-3 w-full max-sm:border-t-[1.73px] border-[#DD9B59]"
            />
            <EventInfo
              title="ONLINE TICKET"
              desc="EVENTWALLETWISE.NG"
              iconUrl="/assets/icons/global-line.svg"
              className="lg:col-span-2 col-span-3 max-lg:border-t-[1.73px] border-[#DD9B59]"
              isBorder=""
            />
          </div>
        </Container>
      </div>

      <div className="border-b-4 border-[#DD9B59]  ">
        <Container>
          <div className="flex max-sm:flex-col">
            <div className="flex-1 w-full min-w-72.5 ">
              <h6 className="text-[#DD9B59] py-6 flex-1 text-center font-extrabold uppercase lg:text-[80px] text-[50px] sm:border-r-[1.73px] max-sm:border-b-[1.73px] border-[#DD9B59]">
                31st july
              </h6>
            </div>{" "}
            <div className="flex-1 w-full px-6 flex flex-col justify-center items-center py-6 ">
              <div className="space-y-4.5">
                <p className="text-[#DD9B59] font-medium lg:text-[27.61px] text-xl">
                  PACKAGED BY
                </p>
                <h4 className="font-medium lg:text-[27.61px] text-xl ">
                  EJANLA OF ABUJA
                </h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default EventDetails;
