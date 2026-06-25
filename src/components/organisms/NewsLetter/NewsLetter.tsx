import Container from "@/components/atom/Container/Container";
import OurSocials from "@/components/molecules/OurSocials/OurSocials";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <section>
      <Container>
        <div className="rounded-[24px] py-10 sm:px-8 px-6 bg-[#A53D41] relative">
          <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0">
            <Image
              src={"/assets/images/david.png"}
              alt="david"
              width={1280}
              height={148}
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center justify-between flex-wrap gap-10">
            <div className="">
              <h6 className="sm:text-[28px] text-2xl font-semibold text-white">
                New events drop regularly
              </h6>
              <p className="text-white/60 sm:text-xl text-lg font-medium">
                Be the first to know
              </p>
            </div>
            <OurSocials />
          </div>
          <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-between flex-wrap gap-10 sm:px-8 px-6 z-10">
            <div className="">
              <h6 className="sm:text-[28px] text-2xl font-semibold text-white">
                New events drop regularly
              </h6>
              <p className="text-white/60 sm:text-xl text-lg font-medium">
                Be the first to know
              </p>
            </div>
            <OurSocials />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetter;
