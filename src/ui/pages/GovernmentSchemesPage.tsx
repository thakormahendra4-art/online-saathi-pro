import type { JSX } from "react";
import SchemesHero from "../components/services/government-schemes/SchemesHero";
import SchemeDiscovery from "../components/services/government-schemes/SchemeDiscovery";
import SchemesProcess from "../components/services/government-schemes/SchemesProcess";
import FAQSection from "../components/FaqSection";
import Footer from "../components/Footer";

const GovernmentSchemesPage = (): JSX.Element => {
  return (
    <div className="min-h-screen">
      <SchemesHero />
      <SchemeDiscovery />
      <SchemesProcess />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default GovernmentSchemesPage;