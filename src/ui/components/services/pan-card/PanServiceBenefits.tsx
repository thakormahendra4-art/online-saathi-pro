import type { JSX } from "react";
import { panBenefits } from "../../../data/panCardCenterPageData";

const PanServiceBenefits = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            Service Benefits
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            Everything you need to run a successful PAN card service center.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {panBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group rounded-xl border border-[#e0e5ee] bg-white p-5 shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa] transition-colors group-hover:bg-[#0078aa] group-hover:text-white">
                  <Icon size={18} />
                </div>

                <h3 className="mt-4 text-sm font-bold text-[#10182f] sm:text-[15px]">
                  {benefit.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-[#667085] sm:text-[13px]">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PanServiceBenefits;