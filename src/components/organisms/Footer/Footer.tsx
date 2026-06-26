"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/atom/Container/Container";
import DownloadWalletwise from "@/components/atom/DownloadWalletwise/DownloadWalletwise";
import OurSocials from "@/components/molecules/OurSocials/OurSocials";

import { categories, tabs } from "@/lib/constants";

const Footer = ({
  filter,
  setFilter,
  tab,
  onClick,
}: {
  filter?: string;
  tab?: string;
  onClick?: (item: string) => void;
  setFilter?: (value: string) => void;
}) => {
  const showFilter = filter !== undefined && setFilter !== undefined;

  const showTab = tab !== undefined && onClick !== undefined;

  return (
    <footer className="border-t border-[#E5E5E5] py-8 w-full">
      <Container>
        <div className="space-y-43.5">
          <div className="w-full flex flex-wrap justify-between gap-10">
            <div className="space-y-2 max-w-66.25 w-full">
              <div className="w-12 h-12">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </div>
              <p className="leading-6 text-[#262626]">
                Discover and book the best live experience across Nigeria
              </p>
              <OurSocials />
            </div>
            <div className="flex md:gap-30.25 sm:gap-20 gap-10 flex-wrap">
              {showTab && (
                <div className="space-y-4">
                  <h6 className="text-[#262626] font-semibold uppercase">
                    Explore
                  </h6>
                  <div className="flex flex-col gap-2 items-start">
                    {tabs?.map((link, index) => (
                      <button
                        type="button"
                        key={index}
                        onClick={() => onClick(link)}
                        className={` text-sm font-medium transition-colors cursor-pointer duration-300 capitalize ${tab === link ? "text-[#5A27CC]" : "font-[#737373] hover:text-[#5A27CC] "}`}
                      >
                        {link}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {showFilter && (
                <div className="space-y-4">
                  <h6 className="text-[#262626] font-semibold">CATEGORIES</h6>
                  <div className="flex flex-col gap-2 items-start">
                    {categories?.map((link, index) => (
                      <button
                        key={index}
                        onClick={() => setFilter(link.value)}
                        className={` text-sm font-medium transition-colors cursor-pointer duration-300 capitalize ${filter === link.value ? "text-[#5A27CC]" : "font-[#737373] hover:text-[#5A27CC] "}`}
                      >
                        {link.subTitle}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <DownloadWalletwise />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="text-[#737373] text-xs font-medium">
              © 2026 WalletWise Ltd. All right reserved
            </p>
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="text-[#737373] text-xs font-medium hover:text-[#5A27CC] transition-colors duration-300"
              >
                Privacy policy
              </Link>
              <div className="w-1 h-1 rounded-full bg-black" />
              <Link
                href="/"
                className="text-[#737373] text-xs font-medium hover:text-[#5A27CC] transition-colors duration-300"
              >
                Terms of use
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
