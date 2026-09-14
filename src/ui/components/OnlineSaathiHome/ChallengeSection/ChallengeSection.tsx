import { challenges } from "../../../data/homePageData";
import ChallengeCard from "./ChallengeCard";

const ChallengeSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#006b9e]">
            The Reality for India&apos;s Invisible Workforce
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#11182d] sm:text-4xl lg:text-[40px]">
            Overcoming Challenges in the
            <span className="block text-[#006b9e]">
              Unorganized Sector
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#475467] sm:text-[15px] sm:leading-7">
            India&apos;s informal workforce faces significant barriers in
            accessing essential welfare schemes and services. Despite the
            government&apos;s investment of ₹72 lakh crore in welfare programs,
            over 83% of these workers earn less than ₹1.2 lakh annually. They
            encounter challenges such as:
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={`${challenge.title}-${index}`}
              challenge={challenge}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;