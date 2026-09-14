import type { JSX } from "react";
import { networkLevels } from "../../../data/saathiNetworkPageData";

const SaathiNetworkDistrict = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            How Our Network Operates
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#667085] sm:text-[15px]">
            From state-level coordination to grassroots delivery — our
            three-tier structure ensures no community is left behind.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {networkLevels.map((level) => {
            const Icon = level.icon;

            return (
              <article
                key={level.title}
                className="flex flex-col rounded-xl border border-[#e0e5ee] bg-white p-6 shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa]">
                    <Icon size={20} />
                  </div>

                  {level.highlight && (
                    <span className="rounded-full bg-[#e3f2ff] px-2.5 py-1 text-[10px] font-semibold text-[#0078aa]">
                      {level.highlight}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#10182f] sm:text-base">
                  {level.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#667085] sm:text-[13px]">
                  {level.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SaathiNetworkDistrict;