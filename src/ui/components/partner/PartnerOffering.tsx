import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import PartnerOfferingCard from "./PartnerOfferingCard";

interface Offering {
  image: string;
  title: string;
  description: string;
}

const offerings: Offering[] = [
  {
    image: "https://onlinesaathi.org/assets/profit-C_FAd-3T.gif",
    title: "Access to India’s Informal and Underserved Markets",
    description:
      "Reach communities that mainstream financial channels miss through our established village-level Saathi agent network.",
  },
  {
    image: "https://onlinesaathi.org/assets/sol1-Cgu19HrU.gif",
    title: "Last-Mile Delivery and Distribution",
    description:
      "Deliver services, kits, and consumer products to customers through our trusted last-mile network across districts.",
  },
  {
    image: "https://onlinesaathi.org/assets/call-center-CEqof3z6.gif",
    title: "Jobs Connect",
    description:
      "Tap into our verified workforce pipeline and connect job seekers to relevant employment opportunities.",
  },
  {
    image: "https://onlinesaathi.org/assets/business-D1NtHCfu.gif",
    title: "Digital Finance Services & Cost-Effective Delivery",
    description:
      "Deploy digital finance services with low acquisition costs and shared distribution infrastructure.",
  },
  {
    image: "https://onlinesaathi.org/assets/delivery-np13kPgU.gif",
    title: "Consumer Insights & Market Intelligence",
    description:
      "Leverage anonymised, real-time data on spending behaviour to sharpen product and go-to-market decisions.",
  },
];

const PartnerOfferings: React.FC = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1250px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0077a8]">
            Partner Program
          </p>

          <h2 className="mt-4 text-[30px] font-bold leading-tight tracking-[-0.03em] text-[#11182d] sm:text-[36px] lg:text-[38px]">
            What{" "}
            <span className="text-[#087df5]">we offer</span>{" "}
            to Our Partners
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#475467] sm:text-[15px]">
            Unlock the advantages that help partners scale distribution and
            revenue in India’s underserved markets.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {offerings.map((offering) => (
            <PartnerOfferingCard key={offering.title} {...offering} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/technology"
            className="
              inline-flex items-center gap-2
              rounded-[10px]
              bg-[#087df5]
              px-10
              py-4
              text-[16px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#006fe6]
              hover:shadow-[0_12px_25px_rgba(8,125,245,0.25)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#087df5]
              focus-visible:ring-offset-2
            "
          >
            Know More
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerOfferings;