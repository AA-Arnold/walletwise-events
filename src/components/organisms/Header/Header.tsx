import Image from "next/image";

import Container from "@/components/atom/Container/Container";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-[#F2F2F2] sm:h-23 h-20 flex items-center">
      <Container>
        <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
          <div className="h-6.5 w-6.5">
            <Image
              src="/logo.svg"
              alt="walletwise logo"
              width={26}
              height={26}
            />
          </div>
          <h2 className="text-[#5A27CC] font-semibold sm:text-2xl text-xl">
            WalletWise Events
          </h2>
        </Link>
      </Container>
    </header>
  );
};

export default Header;
