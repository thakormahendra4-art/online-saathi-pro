import type { JSX } from "react";
import {
  Wifi,
  Tv,
  Zap,
  Droplets,
  Flame,
  Smartphone,
  Cable,
  Landmark,
} from "lucide-react";
import BillPaymentHero from "../components/services/bill-payment/BillPaymentHero";
import BillPaymentFeatures from "../components/services/bill-payment/BillPaymentFeatures";
import BillPaymentFeatureCard from "../components/services/bill-payment/BillPaymentFeatureCard";
import BillPaymentCTA from "../components/services/bill-payment/BillPaymentCTA";
import FAQSection from "../components/FaqSection";
import Footer from "../components/Footer";

const billCategories = [
  {
    icon: Zap,
    title: "Electricity",
    description: "Pay electricity bills for all major state and private boards instantly.",
    highlight: "Most Popular",
  },
  {
    icon: Smartphone,
    title: "Mobile Recharge",
    description: "Prepaid and postpaid mobile recharges for all operators across India.",
  },
  {
    icon: Tv,
    title: "DTH Recharge",
    description: "Recharge DTH connections for Tata Play, Airtel, Dish TV, and more.",
  },
  {
    icon: Droplets,
    title: "Water Bill",
    description: "Pay municipal water supply bills with instant confirmation.",
  },
  {
    icon: Flame,
    title: "Gas Bill",
    description: "Pay Piped Natural Gas and LPG cylinder booking bills easily.",
  },
  {
    icon: Wifi,
    title: "Broadband",
    description: "Pay broadband and fiber internet bills for all major providers.",
  },
  {
    icon: Cable,
    title: "Cable TV",
    description: "Recharge cable TV subscriptions for local and national operators.",
  },
  {
    icon: Landmark,
    title: "Insurance Premium",
    description: "Pay life and general insurance premiums before the due date.",
  },
];

const BillPaymentPage = (): JSX.Element => {
  return (
    <div className="min-h-screen">
      <BillPaymentHero />
      <BillPaymentFeatures />

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-[1250px]">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
              Bill Categories You Can Serve
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
              All essential bill payment services under one platform.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {billCategories.map((cat) => (
              <BillPaymentFeatureCard
                key={cat.title}
                icon={cat.icon}
                title={cat.title}
                description={cat.description}
                highlight={cat.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      <BillPaymentCTA />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default BillPaymentPage;