import type { JSX } from "react";
import { ArrowRight } from "lucide-react";
import { schemeSteps } from "../../../data/governmentSchemesPageData";

const SchemesProcess = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            How Your Saathi Helps
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            A simple, supported path from discovery to delivery.
          </p>
        </div>

        <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {schemeSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="relative rounded-xl border border-[#e0e5ee] bg-white p-6 shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa]">
                    <Icon size={20} />
                  </div>

                  <span className="text-sm font-bold text-[#c7d4e0]">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#10182f] sm:text-base">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#667085] sm:text-[13px]">
                  {step.description}
                </p>

                {step.number !== "04" && (
                  <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-[#0078aa] lg:block">
                    <ArrowRight size={16} />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SchemesProcess;