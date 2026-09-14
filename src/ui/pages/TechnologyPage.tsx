import TechnologyHero from "../components/technology/TechnologyHero";
import TechnologyFeature from "../components/technology/TechnologyFeature";
import { technologyFeatures } from "../data/technologyPageData";
import WhyItMatters from "../components/technology/WhyItMatters";
import TechnologyCTA from "../components/technology/TechnologyCTA";
import Footer from "../components/Footer";

const TechnologyPage = () => {
  return (
    <div className="min-h-screen">
      <TechnologyHero />

      {technologyFeatures.map((feature, index) => (
        <TechnologyFeature
          key={feature.title}
          feature={feature}
          reverse={index % 2 === 1}
        />
      ))}

      <WhyItMatters />
      <TechnologyCTA />
      <Footer />
    </div>
  );
};

export default TechnologyPage;