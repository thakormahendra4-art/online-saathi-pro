import Footer from "../components/Footer";
import ChallengeSection from "../components/OnlineSaathiHome/ChallengeSection/ChallengeSection";
import SolutionSection from "../components/OnlineSaathiHome/SolutionSection/SolutionSection";
import TechnologySection from "../components/OnlineSaathiHome/TechnologySection/TechnologySection";
import InnovationServices from "../components/OnlineSaathiHome/InnovationServices/InnovationServices";
import StrengthAssurance from "../components/OnlineSaathiHome/StrengthAssurance/StrengthAssurance";
import BecomeSaathi from "../components/OnlineSaathiHome/BecomeSaathi/BecomeSaathi";
import PresenceSection from "../components/OnlineSaathiHome/PresenceSection/PresenceSection";
import PartnerOfferings from "../components/OnlineSaathiHome/PartnerOfferings/PartnerOfferings";
import PartnersSection from "../components/OnlineSaathiHome/PartnersSection/PartnersSection";
import Testimonials from "../components/OnlineSaathiHome/Testimonials/Testimonials";
import ContactSection from "../components/OnlineSaathiHome/ContactSection/ContactSection";
import HeroSec from "../components/OnlineSaathiHome/HeroSec/HeroSec";

const OnlineSaathiHomePage = () => {
  return (
    <main className="overflow-hidden bg-white">
      <HeroSec/>
      <ChallengeSection />
      <SolutionSection />
      <TechnologySection />
      <InnovationServices />
      <StrengthAssurance />
      <BecomeSaathi />
      <PresenceSection />
      <PartnerOfferings />
      <PartnersSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default OnlineSaathiHomePage;