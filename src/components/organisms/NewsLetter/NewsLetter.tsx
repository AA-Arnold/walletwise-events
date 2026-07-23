import Container from "@/components/atom/Container/Container";
import AppleIcon from "@/components/atom/icons/AppleIcon";
import PlayStoreIcon from "@/components/atom/icons/PlayStoreIcon";
import Tags from "@/components/atom/icons/Tags";

const NewsLetter = () => {
  return (
    <section>
      <Container>
        <div className="rounded-[8px] p-4 bg-linear-to-tr from-0% from-[#8963DD] to-100% to-[#03A48B] ">
          <div className="flex md:items-center gap-3.25 ">
            <div className="max-sm:pt-2">
              <Tags />
            </div>
            <div className="flex items-center justify-between flex-wrap gap-3.25 flex-1">
              <p className="text-white font-medium max-sm:text-sm">
                Cheaper tickets, only on the WalletWise app. Download now{" "}
              </p>
              <div className="rounded-full border border-[#F5F5F5] text-white flex items-center overflow-hidden">
                <a
                  href="https://apps.apple.com/us/app/walletwise-seamless-payment/id6744754064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 gap-2 border-r border-[#F5F5F5] bg-white/15"
                >
                  <span className="font-medium sm:text-sm text-xs">
                    App Store
                  </span>
                  <PlayStoreIcon />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.finance.walletwise.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 gap-2 bg-white/15"
                >
                  <span className="font-medium sm:text-sm text-xs">
                    Google Play
                  </span>
                  <AppleIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetter;
