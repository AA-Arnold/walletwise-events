import Image from "next/image";

const DownloadWalletwise = () => {
  return (
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
  );
};

export default DownloadWalletwise;
