import Link from "next/link";

import Container from "@/components/atom/Container/Container";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <div className="py-6">
          <div
            className="h-116.25 w-full rounded-[24px] overflow-hidden"
            style={{
              background: "url('/assets/images/PERRUZI1.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="h-full bg-linear-to-b from-[#930C1000] to-[#000000BF]">
              <div className="flex w-full items-end sm:py-10 sm:px-8 p-6 h-full">
                <div className="max-w-107.25 w-full text-white space-y-2">
                  <div className="flex items-center gap-2  font-semibold text-sm">
                    <span>NEXT UP</span> • <span>FRI 31ST July 2026</span>
                  </div>
                  <h1 className="sm:text-[48px] text-[35px] leading-[100%] tracking-normal font-extrabold uppercase">
                    Peruzzi <br />
                    Live in Abuja
                  </h1>
                  <Link
                    href={"/peruzzi"}
                    className="flex items-center gap-2 bg-white border border-[#E5E5E5] p-3 rounded-[10px] text-[#262626] w-fit"
                  >
                    <span className="text-xs">View details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
