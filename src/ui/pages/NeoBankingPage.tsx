import type { JSX } from "react";
import NeoBankingHero from "../components/services/neobanking/NeoBankingHero";
import SaathiNetwork from "../components/services/neobanking/SaathiNetwork";
import NeoBankingServices from "../components/services/neobanking/NeoBankingServices";
import NeoBankingCTA from "../components/services/neobanking/NeoBankingCTA";
import Footer from "../components/Footer";

const NeoBankingPage = (): JSX.Element => {
  return (
    <div className="min-h-screen">
      <NeoBankingHero />
      <SaathiNetwork />
      <NeoBankingServices />
      <NeoBankingCTA />
      <Footer />
    </div>
  );
};

export default NeoBankingPage;