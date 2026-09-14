import AboutHero from "../components/about/AboutHero";
import CompanyJourney from "../components/about/CompanyJourney";
import CoreValues from "../components/about/CoreValues";
import AboutLeadership from "../components/about/AboutLeadership";
import AboutMission from "../components/about/AboutMission";
import AboutCTA from "../components/about/AboutCTA";
import ChairmanMessage from "../components/about/ChairmanMessage";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <CompanyJourney />
      <CoreValues />
      <AboutLeadership />
      <AboutMission />
      <ChairmanMessage />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default AboutPage;