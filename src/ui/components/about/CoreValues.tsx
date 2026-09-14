import type { JSX } from "react";
import { coreValues } from "../../data/aboutPageData";

const CoreValues = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            Our Core Values
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            The principles that guide our product development, team culture,
            and customer commitment.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {coreValues.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group min-h-[145px] rounded-xl border border-[#dfe4ef] bg-[#f0f2ff] p-5 shadow-[0_3px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa]">
                  <Icon size={16} />
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#10182f] sm:text-base">
                  {value.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#667085] sm:text-[13px]">
                  {value.text}
                </p>

                {value.badge && (
                  <span className="mt-4 inline-block text-[11px] font-semibold text-[#148fc2]">
                    {value.badge}
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;