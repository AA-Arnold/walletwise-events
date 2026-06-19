import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen h-full relative w-full bg-linear-to-b from-0% from-[#080D0F] to-100% to-[#0B0D10]">
      {children}
    </div>
  );
};

export default MainLayout;
