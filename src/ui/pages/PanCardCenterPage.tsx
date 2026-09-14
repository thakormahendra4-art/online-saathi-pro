import type { JSX } from "react";
import PanCardHero from "../components/services/pan-card/PanCardHero";
import PanApplicationProcess from "../components/services/pan-card/PanApplicationProcess";
import PanServiceBenefits from "../components/services/pan-card/PanServiceBenefits";
import PanCardCTA from "../components/services/pan-card/PanCardCTA";
import FAQSection from "../components/FaqSection";
import Footer from "../components/Footer";

const PanCardCenterPage = (): JSX.Element => {
  return (
    <div className="min-h-screen">
      <PanCardHero />
      <PanApplicationProcess />
      <PanServiceBenefits />
      <PanCardCTA />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default PanCardCenterPage;