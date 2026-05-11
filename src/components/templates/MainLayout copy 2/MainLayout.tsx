import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-b from-[#1A0304] to-[#050505]">
      {children}
    </div>
  );
};

export default MainLayout;
