import type { JSX } from "react";
import IndoNepalHero from "../components/services/indo-nepal/IndoNepalHero";
import IndoNepalFeatures from "../components/services/indo-nepal/IndoNepalFeatures";
import IndoNepalProcess from "../components/services/indo-nepal/IndoNepalProcess";
import IndoNepalCTA from "../components/services/indo-nepal/IndoNepalCTA";
import FAQSection from "../components/FaqSection";
import Footer from "../components/Footer";

const IndoNepalRemittancePage = (): JSX.Element => {
  return (
    <div className="min-h-screen">
      <IndoNepalHero />
      <IndoNepalFeatures />
      <IndoNepalProcess />
      <IndoNepalCTA />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default IndoNepalRemittancePage;