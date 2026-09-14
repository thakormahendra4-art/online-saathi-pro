import { innovations } from "../../../data/homePageData";
import InnovationServiceCard from "./InnovationServiceCard";

const InnovationServices = () => {
  return (
    <section className="w-full bg-[#f3f4fb] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#006b9e]">
            Our Innovation and Services
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#11182d] sm:text-4xl lg:text-[40px]">
            Services designed for real needs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#475467] sm:text-[15px] sm:leading-7">
            From on-demand services to jobs, schemes, and community platforms —
            everything the informal workforce needs in one place.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {innovations.map((innovation, index) => (
            <InnovationServiceCard
              key={innovation.title}
              innovation={innovation}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationServices;