import Image from "next/image";
import Link from "next/link";

import Container from "@/components/atom/Container/Container";

import { footerLinks, socialLinks } from "@/lib/constants";

const Footer = () => {
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
              <div className="flex items-center gap-2">
                {socialLinks?.map((item) => (
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                    className="bg-[#F5F5F5] rounded-[11.43px] w-10 h-10 flex items-center justify-center group"
                  >
                    <Image
                      src={item.iconUrl}
                      alt={item?.name}
                      width={17}
                      height={17}
                      className="hover:scale-110 transition-all duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex md:gap-30.25 sm:gap-20 gap-10 flex-wrap">
              {footerLinks?.map((item) => (
                <div key={item?.title} className="space-y-4">
                  <h6 className="text-[#262626] font-semibold">
                    {item?.title}
                  </h6>
                  <div className="flex flex-col gap-2">
                    {item?.links?.map((link, index) => (
                      <Link
                        key={index}
                        href={link.subTitle}
                        className="font-[#737373] text-sm font-medium hover:text-[#5A27CC] transition-colors duration-300"
                      >
                        {link.subTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
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
