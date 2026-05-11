import Footer from "@/components/organisms/Footer copy 2/Footer";
import FormSection from "@/components/organisms/FormSection/FormSection";
import Header from "@/components/organisms/Header copy/Header";
import HeroSection from "@/components/organisms/HeroSection copy 2/HeroSection";
import PrizeSection from "@/components/organisms/PrizeSection/PrizeSection";
import MainLayout from "@/components/templates/MainLayout copy 2/MainLayout";

const RegisterPage = () => {
  return (
    <MainLayout>
      <Header />
      <HeroSection />
      <PrizeSection />
      <FormSection />
      <Footer />
    </MainLayout>
  );
};

export default RegisterPage;
