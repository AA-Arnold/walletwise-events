import type { Metadata } from "next";

import Header from "@/features/pageantry/components/organisms/Header/Header";
import MainLayout from "@/features/pageantry/components/templates/MainLayout/MainLayout";
import HeroSection from "@/features/pageantry/components/organisms/HeroSection/HeroSection";
import PrizeSection from "@/features/pageantry/components/organisms/PrizeSection/PrizeSection";
import FormSection from "@/features/pageantry/components/organisms/FormSection/FormSection";
import Footer from "@/features/pageantry/components/organisms/Footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "Apply | Miss Indigenous Nigeria",
    template: "%s | Miss Indigenous Nigeria",
  },

  description:
    "Apply for Miss Indigenous Nigeria 2026 — a platform celebrating culture, beauty, intelligence, leadership, and the empowerment of indigenous Nigerian women.",

  keywords: [
    "Miss Indigenous Nigeria",
    "Beauty Pageant Nigeria",
    "Pageantry",
    "Miss Nigeria",
    "Cultural Pageant",
    "Beauty Contest",
    "Female Empowerment",
    "Indigenous Nigeria",
    "Nigeria Fashion",
    "Leadership Program",
    "Beauty Queen",
    "Apply for Pageant",
  ],

  authors: [{ name: "Miss Indigenous Nigeria" }],

  openGraph: {
    title: "Miss Indigenous Nigeria 2026 Application",
    description:
      "Join Miss Indigenous Nigeria 2026 and represent culture, beauty, confidence, and leadership on a national stage.",
    url: "https://events.walletwise.ng/miss-indidenous-nigeria",
    siteName: "Miss Indigenous Nigeria",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Miss Indigenous Nigeria 2026",
    description:
      "Apply now for Miss Indigenous Nigeria 2026 and showcase your beauty, culture, and leadership.",
  },

  metadataBase: new URL("https://events.walletwise.ng/miss-indidenous-nigeria"),
};

const MissIndigenousNigeriaPage = () => {
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

export default MissIndigenousNigeriaPage;
