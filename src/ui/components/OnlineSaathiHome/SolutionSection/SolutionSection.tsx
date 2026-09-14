import { solutions } from "../../../data/homePageData";
import SolutionCard from "./SolutionCard";

const SolutionSection = () => {
  return (
    <section className="w-full bg-[#0f172a] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ade7ff]">
            Our Solution
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-[40px]">
            A trusted ecosystem built on four pillars
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
            We connect communities, transactions, technology, and data to bring
            welfare and financial services within reach of every informal
            worker.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {solutions.map((solution) => (
            <SolutionCard key={solution.key} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;