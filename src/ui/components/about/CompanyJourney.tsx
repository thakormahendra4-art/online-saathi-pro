import type { JSX } from "react";
import { journeyItems } from "../../data/aboutPageData";

const CompanyJourney = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            The Story of Online Saathi
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            From a young man&apos;s conviction in 2015 to a nationwide movement
            fighting for migrant workers.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative space-y-8 before:absolute before:bottom-2 before:left-[19px] before:top-2 before:w-px before:bg-[#dce6ef]">
            {journeyItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.year} className="relative flex gap-5 sm:gap-6">
                  <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#b9dff0] bg-white text-[#0078aa] shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                    <Icon size={16} />
                  </div>

                  <article className="flex-1 rounded-xl border border-[#e0e5ee] bg-white p-5 shadow-[0_4px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)] sm:p-6">
                    <span className="text-xs font-semibold text-[#148fc2]">
                      {item.year}
                    </span>

                    <h3 className="mt-1 text-sm font-bold text-[#10182f] sm:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#667085] sm:text-[13px] sm:leading-6">
                      {item.description}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyJourney;