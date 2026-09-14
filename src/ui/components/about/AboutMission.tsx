import type { JSX } from "react";
import { missionPillars } from "../../data/aboutPageData";

const AboutMission = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            Vision &amp; Mission
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            The purpose that guides every decision we make and every product
            we build.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {missionPillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.label}
                className="rounded-xl border border-[#dfe4ef] bg-[#f0f2ff] p-6 shadow-[0_3px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)] sm:p-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa]">
                  <Icon size={18} />
                </div>

                <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-[#0078aa] sm:text-base">
                  {pillar.label}
                </h3>

                <p className="mt-3 text-base leading-7 text-[#334259] sm:text-lg sm:leading-8">
                  {pillar.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;