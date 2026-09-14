import { strengths } from "../../../data/homePageData";
import StrengthCard from "./StrengthCard";

const StrengthAssurance = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#006b9e]">
            Our strength and assurance
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#11182d] sm:text-4xl lg:text-[40px]">
            Built to deliver, built to be trusted
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#475467] sm:text-[15px] sm:leading-7">
            Technology, people, and a single-window approach combine to create
            dependable access for the informal sector.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {strengths.map((strength, index) => (
            <StrengthCard key={strength.title} strength={strength} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthAssurance;