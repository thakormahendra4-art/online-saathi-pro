import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { technologies } from "../../../data/homePageData";
import TechnologyFeature from "./TechnologyFeature";

const TechnologySection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#006b9e]">
            Our Technology
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#11182d] sm:text-4xl lg:text-[40px]">
            Technology built for the
            <span className="block text-[#006b9e]">last mile</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#475467] sm:text-[15px] sm:leading-7">
            A simple, reliable technology stack that empowers Saathis to
            deliver jobs, government schemes, financial services, and community
            support in every village.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {technologies.map((tech, index) => (
            <TechnologyFeature key={tech.title} tech={tech} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/technology"
            className="group inline-flex items-center gap-2 rounded-[10px] bg-[#087df5] px-10 py-4 text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#006fe6] hover:shadow-[0_12px_25px_rgba(8,125,245,0.25)]"
          >
            Know More
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;