import type { JSX } from "react";
import MicroAtmHero from "../components/services/microatm/MicroAtmHero";
import MicroAtmFeatures from "../components/services/microatm/MicroAtmFeatures";
import MicroAtmServices from "../components/services/microatm/MicroAtmServices";
import MicroAtmWhyChooseUs from "../components/services/microatm/MicroAtmWhyChooseUs";
import Footer from "../components/Footer";

const MicroAtmPage = (): JSX.Element => {
  return (
    <div className="min-h-screen">
      <MicroAtmHero />
      <MicroAtmFeatures />
      <MicroAtmServices />
      <MicroAtmWhyChooseUs />
      <Footer />
    </div>
  );
};

export default MicroAtmPage;