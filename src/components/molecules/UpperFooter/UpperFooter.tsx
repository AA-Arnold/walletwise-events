import FooterCardWrapper from "@/components/atoms/FooterCardWrapper/FooterCardWrapper";
import Image from "next/image";

const UpperFooter = () => {
  return (
    <div className="flex justify-center flex-wrap gap-4">
      <FooterCardWrapper className="bg-white/5 border-white/25">
        <div className="p-4 space-y-2">
          <p className="text-[#A0A0A0] font-semibold sm:text-sm text-xs">
            SPONSORSHIP BY
          </p>
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt=""
              width={38.63}
              height={38.72}
              className="object-contain"
            />
            <p className="text-white sm:text-[29.86px] text-lg font-semibold">
              WalletWise
            </p>
          </div>
        </div>
      </FooterCardWrapper>
      <FooterCardWrapper>
        <div className="p-4 space-y-2">
          <p className="text-[#A0A0A0] font-semibold sm:text-sm text-xs text-center">
            DOWNLOAD WALLETWISE
          </p>
          <div className="flex items-center justify-center flex-wrap gap-2">
            <a
              href="https://apps.apple.com/us/app/walletwise-seamless-payment/id6744754064"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/appStore.svg"
                alt=""
                width={124}
                height={39}
                className="object-contain"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.finance.walletwise.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/google.svg"
                alt=""
                width={124}
                height={39}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </FooterCardWrapper>
      <FooterCardWrapper className="border-white/25 bg-white/10">
        <div className="py-[20.2px] px-[33.67px] space-y-2">
          <p className="sm:text-sm text-xs text-[#A0A0A0] ">
            PHYSICAL TICKETS AVAILABLE @
          </p>
          <p className="font-semibold sm:text-[19.33px]  text-white">
            ARMSTRONG PAINT OSOGBO
          </p>
        </div>
      </FooterCardWrapper>
      <FooterCardWrapper>
        <div className="py-4 px-6">
          <p className="text-[#A0A0A0] font-semibold max-sm:text-sm text-xs">
            FOR SPONSORSHIP & ENQUIRES
          </p>
          <p className="sm:text-[32.52px] text-lg font-bold text-white">
            +234 706 803 8186
          </p>
        </div>
      </FooterCardWrapper>
    </div>
  );
};

export default UpperFooter;
