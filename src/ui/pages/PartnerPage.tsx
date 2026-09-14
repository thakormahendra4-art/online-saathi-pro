import Footer from "../components/Footer";
import PartnerImpact from "../components/partner/PartnerImpact";
import OurPartner from "../components/partner/OurPartner";
import Partners from "../components/partner/Partners";
import PartnerOfferings from "../components/partner/PartnerOffering";

const PartnerPage = () => {
  return (
    <main className="min-h-screen bg-[#f8f8ff] text-[#111a35]">
      <OurPartner />
      <PartnerOfferings/>
      <Partners />
      <PartnerImpact />
      <Footer />
    </main>
  );
};

export default PartnerPage;