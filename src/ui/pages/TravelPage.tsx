import type { JSX } from "react";
import TravelHero from "../components/services/travel/TravelHero";
import Footer from "../components/Footer";

const TravelPage = (): JSX.Element => {
  return (
    <div className="min-h-screen">
      <TravelHero />
      <Footer />
    </div>
  );
};

export default TravelPage;