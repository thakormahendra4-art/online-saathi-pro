import TeamHero from "../components/team/TeamHero";
import ExecutiveLeadership from "../components/team/ExecutiveLeadership";
import AdvisoryBoard from "../components/team/AdvisoryBoard";
import CultureWorkspace from "../components/team/CultureWorkspace";
// import OpenPositions from "../components/team/OpenPositions";
import Footer from "../components/Footer";

const TeamPage = () => {
  return (
    <div className="min-h-screen">
      <TeamHero />
      <ExecutiveLeadership />
      <AdvisoryBoard />
      <CultureWorkspace />
      {/* <OpenPositions /> */}
      <Footer />
    </div>
  );
};

export default TeamPage;