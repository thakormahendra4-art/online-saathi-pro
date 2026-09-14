import type { JSX } from "react";
import SaathiNetworkHero from "../components/services/saathi-network/SaathiNetworkHero";
import SaathiNetworkOverview from "../components/services/saathi-network/SaathiNetworkOverview";
import SaathiNetworkDistrict from "../components/services/saathi-network/SaathiNetworkDistrict";
import SaathiNetworkSaathis from "../components/services/saathi-network/SaathiNetworkSaathis";
import LocalEntrepreneurs from "../components/services/saathi-network/LocalEntrepreneurs";
import Footer from "../components/Footer";

const SaathiNetworkPage = (): JSX.Element => {
  return (
    <div className="min-h-screen">
      <SaathiNetworkHero />
      <SaathiNetworkOverview />
      <SaathiNetworkDistrict />
      <SaathiNetworkSaathis />
      <LocalEntrepreneurs />
      <Footer />
    </div>
  );
};

export default SaathiNetworkPage;