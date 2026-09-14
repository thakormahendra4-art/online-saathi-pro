import type { JSX } from "react";
import { networkStats } from "../../../data/saathiNetworkPageData";

const SaathiNetworkOverview = (): JSX.Element => {
  return (
    <section id="saathi-overview" className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
              The Sewa Saathi
              <span className="block text-[#0075a8]">Network</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#334259] sm:text-[15px] sm:leading-7">
              Complementing the Online Saathi tech platform is the Sewa
              Saathi Network, a dedicated team of on-the-ground agents who
              provide personalized assistance and support to informal workers.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#334259] sm:text-[15px] sm:leading-7">
              Online Saathi's network extends across India, empowering local
              communities through a vast network of Saathis, our trusted
              representatives who serve as the bridge between Online Saathi
              and the people we serve.
            </p>
          </div>

          <div className="space-y-4">
            {networkStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article
                  key={stat.label}
                  className="flex items-center gap-4 rounded-xl border border-[#dfe4ef] bg-[#f0f2ff] p-5 shadow-[0_3px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa]">
                    <Icon size={20} />
                  </div>

                  <div>
                    <p className="text-xl font-bold text-[#0075a8]">{stat.value}</p>
                    <p className="text-xs text-[#667085]">{stat.label}</p>
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

export default SaathiNetworkOverview;