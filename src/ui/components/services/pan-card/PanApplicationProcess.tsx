import type { JSX } from "react";
import { panSteps } from "../../../data/panCardCenterPageData";

const PanApplicationProcess = (): JSX.Element => {
  return (
    <section
      id="pan-process"
      className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            Application Process
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            A simple 7-step process to get PAN cards for your customers.
          </p>
        </div>

        <div className="relative mt-10">
          {/* Vertical line — desktop only */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-[#deeffa] lg:block" />

          <div className="space-y-6">
            {panSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="relative flex items-start gap-6 rounded-xl border border-[#e0e5ee] bg-white p-6 shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)] lg:ml-10"
                >
                  {/* Step number dot */}
                  <div className="absolute -left-5 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-[#deeffa] bg-white text-xs font-bold text-[#0078aa] shadow-sm lg:flex">
                    {step.number}
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa]">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#10182f] sm:text-base">
                      {step.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-[#667085] sm:text-[13px]">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanApplicationProcess;