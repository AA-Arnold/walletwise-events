import { ReactNode } from "react";

import CircleGradient from "@/components/atoms/CircleGradient/CircleGradient";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen h-full relative bg-linear-to-br from-[#1A0304] to-[#050505] py-6">
      <CircleGradient />
      <div className=" z-10 ">{children}</div>
    </div>
  );
};

export default MainLayout;
