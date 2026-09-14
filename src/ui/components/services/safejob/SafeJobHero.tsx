import type { JSX } from "react";
import { ArrowRight, BadgeCheck, IndianRupee, MapPin } from "lucide-react";
import { Link } from "react-router";

const heroHighlights = [
  { icon: MapPin, label: "Jobs near you" },
  { icon: BadgeCheck, label: "Verified employers" },
  { icon: IndianRupee, label: "Fair wages, paid right" },
];

const SafeJobHero = (): JSX.Element => {
  return (
    <section className="bg-[#f9f8ff] px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto grid max-w-[1250px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center rounded-full bg-[#e3f2ff] px-3 py-1.5 text-[10px] font-semibold text-[#0078aa] sm:text-[11px]">
            ✦ Safe Jobs Connect
          </span>

          <h1 className="mt-5 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#10182f] sm:text-5xl">
            Explore Various Jobs
            <span className="block text-[#0075a8]">at our platform</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-[#667085] sm:text-[15px] sm:leading-7">
            Online Saathi&apos;s job matching services are dedicated to
            empowering informal workers by connecting them with employment
            opportunities that best fit their skills and preferences.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#featured-jobs"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0075a8] px-5 py-3 text-sm font-semibold text-white shadow-[0_7px_18px_rgba(0,117,168,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00658f]"
            >
              Browse Featured Jobs
              <ArrowRight size={14} />
            </a>

            <Link
              to="/contact"
              className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#32415a] transition hover:border-[#0075a8] hover:bg-[#f4fbff]"
            >
              Talk to a Saathi
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 border-t border-slate-200 pt-6 sm:grid-cols-3">
            {heroHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-center gap-2">
                  <Icon size={15} className="shrink-0 text-[#0078aa]" />
                  <p className="text-[11px] font-medium text-[#334259] sm:text-xs">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative">
          <div className="absolute -inset-5 rounded-3xl bg-[#0075a8]/5 blur-2xl" />

          <div className="relative space-y-4">
            <div className="overflow-hidden rounded-xl border border-[#dce2eb] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#10182f]">
                    ABC Constructions
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#667085]">
                    📍 Gujarat • 🕒 4 Years
                  </p>
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[9px] font-semibold text-emerald-700">
                  Open
                </span>
              </div>

              <p className="mt-3 text-[11px] text-[#667085]">
                Need 60 Labours for Construction of Apartment Towers
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-bold text-[#0075a8]">
                  ₹500 - 700 <span className="text-[9px] font-medium text-[#667085]">/ Day</span>
                </p>
                <span className="rounded-md bg-[#0075a8] px-3 py-1.5 text-[10px] font-semibold text-white">
                  Apply
                </span>
              </div>
            </div>

            <div className="ml-6 overflow-hidden rounded-xl border border-[#dce2eb] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#10182f]">
                    Hotel Staff Needed
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#667085]">
                    📍 Rajasthan • 🕒 2 Years
                  </p>
                </div>
                <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[9px] font-semibold text-[#0075a8]">
                  Matched
                </span>
              </div>

              <p className="mt-3 text-[11px] text-[#667085]">
                Kitchen helpers and housekeeping roles with free food &
                accommodation
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-bold text-[#0075a8]">
                  ₹400 - 600 <span className="text-[9px] font-medium text-[#667085]">/ Day</span>
                </p>
                <span className="rounded-md bg-emerald-500 px-3 py-1.5 text-[10px] font-semibold text-white">
                  Applied
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeJobHero;