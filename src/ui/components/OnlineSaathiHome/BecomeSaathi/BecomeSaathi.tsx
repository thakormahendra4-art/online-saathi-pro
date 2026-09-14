import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { saathiBenefits } from "../../../data/homePageData";
import saathiIllustration from "../../../../assets/home-assets/Workers Image.png";
import EntrepreneurBenefitCard from "./EntrepreneurBenefitCard";

const BecomeSaathi = () => {
  return (
    <section className="w-full bg-[#f3f4fb] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#006b9e]">
            Become a Saathi
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#11182d] sm:text-4xl lg:text-[40px]">
            Become a Saathi
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#475467] sm:text-[15px] sm:leading-7">
            Saathi agents are dedicated guides who assist workers in navigating
            the job search process. They provide personalized support through
            skill assessments, job matching, and hands-on help with
            applications, resumes, and interview preparation.
          </p>
        </div>

        {/* Body */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Benefits */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-[#11182d] sm:text-base">
              Our Local Entrepreneurs do the following:
            </p>

            {saathiBenefits.map((benefit, index) => (
              <EntrepreneurBenefitCard key={benefit} benefit={benefit} index={index} />
            ))}

            <div className="pt-3">
              <Link
                to="/partner"
                className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-lg bg-[#13a5df] px-6 text-[15px] font-semibold text-white shadow-[0_7px_16px_rgba(19,165,223,0.2)] transition hover:bg-[#0796d0]"
              >
                Join as a Saathi
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[480px] overflow-hidden rounded-[28px] shadow-[0_16px_45px_rgba(15,23,42,0.18)]">
              <img
                src={saathiIllustration}
                alt="Saathi illustration"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeSaathi;