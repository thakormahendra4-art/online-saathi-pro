import ContactHero from "../components/contact/ContactHero";
import SupportChannels from "../components/contact/SupportChannels";
import SupportTelemetry from "../components/contact/SupportTelemetry";
import InquiryForm from "../components/contact/InquiryForm";
import RegionalCenters from "../components/contact/RegionalCenters";
import FAQSection from "../components/FaqSection";
import ContactCTA from "../components/contact/ContactCTA";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <SupportChannels />
      <SupportTelemetry />
      <InquiryForm />
      <RegionalCenters />
      <FAQSection />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default ContactPage;