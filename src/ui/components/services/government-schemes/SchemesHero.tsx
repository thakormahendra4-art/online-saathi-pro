import type { JSX } from "react";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { Link } from "react-router";
import { schemeStats } from "../../../data/governmentSchemesPageData";

const SchemesHero = (): JSX.Element => {
  return (
    <section className="bg-[#f9f8ff] px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto max-w-[1250px] text-center">
        <span className="inline-flex items-center rounded-full bg-[#e3f2ff] px-3 py-1.5 text-[10px] font-semibold text-[#0078aa] sm:text-[11px]">
          <HeartHandshake size={12} className="mr-1" />
          Social Welfare Schemes
        </span>

        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#10182f] sm:text-5xl">
          Government Schemes You
          <span className="block text-[#0075a8]">May Be Eligible For</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#667085] sm:text-[15px] sm:leading-7">
          Online Saathi helps rural and migrant workers discover, apply for,
          and track government schemes — with on-ground support from local
          Saathis at every step.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#scheme-discovery"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0075a8] px-5 py-3 text-sm font-semibold text-white shadow-[0_7px_18px_rgba(0,117,168,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00658f]"
          >
            Find Schemes for You
            <ArrowRight size={14} />
          </a>

          <Link
            to="/contact"
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#32415a] transition hover:border-[#0075a8] hover:bg-[#f4fbff]"
          >
            Talk to a Saathi
          </Link>
        </div>

        <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-4">
          {schemeStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[#e0e5ee] bg-white px-3 py-4 shadow-[0_3px_10px_rgba(15,23,42,0.03)]"
            >
              <p className="text-lg font-bold text-[#0075a8] sm:text-xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[10px] text-[#667085] sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchemesHero;