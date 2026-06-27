import Header from "@/components/organisms/Header/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <Header />
      <main className="">{children}</main>
    </div>
  );
};

export default MainLayout;
