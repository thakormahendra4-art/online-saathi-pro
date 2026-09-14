import SafeJobHero from "../components/services/safejob/SafeJobHero";
import JobPortalProcess from "../components/services/safejob/JobPortalProcess";
import FeaturedJobs from "../components/services/safejob/FeaturedJobs";
import WhyChooseUs from "../components/services/safejob/WhyChooseUs";
import FAQSection from "../components/FaqSection";
import Footer from "../components/Footer";

const SafeJobConnectPage = () => {
  return (
    <div className="min-h-screen">
      <SafeJobHero />
      <JobPortalProcess />
      <FeaturedJobs />
      <WhyChooseUs />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default SafeJobConnectPage;