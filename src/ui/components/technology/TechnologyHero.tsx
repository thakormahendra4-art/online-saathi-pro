import { ArrowRight, HeartHandshake, Landmark, Smartphone, Users } from "lucide-react";
import { Link } from "react-router";

const stats = [
  { value: "20,000+", label: "Migrants & workers supported" },
  { value: "7+", label: "Everyday services in one place" },
  { value: "24/7", label: "Assistance via local Saathis" },
  { value: "0", label: "Hidden fees" },
];

const heroServices = [
  { icon: Smartphone, label: "Bill Payments" },
  { icon: Landmark, label: "AEPS Cashout" },
  { icon: HeartHandshake, label: "Welfare Schemes" },
  { icon: Users, label: "Jobs Connect" },
];

const TechnologyHero = () => {
  return (
    <section className="border-b border-slate-200 bg-[#f8fbfd]">
      <div className="mx-auto max-w-[1250px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#0075a8]">
              Our Technology
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#10182f] sm:text-5xl">
              Bridging Rural Communities
              <span className="block text-[#0075a8]">
                to Essential Services
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500 sm:text-[15px]">
              Online Saathi leverages a powerful, community-centric technology
              platform to bridge the gap between rural communities and
              essential services. Designed with simplicity, accessibility, and
              local needs in mind, our technology empowers Saathis (community
              agents) to deliver a wide range of services directly to
              underserved populations.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-[15px]">
              From financial transactions and product orders to social welfare
              schemes and job opportunities — everything flows through one
              trusted local network.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0075a8] px-5 py-3 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(0,117,168,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#00658f] hover:shadow-[0_14px_30px_rgba(0,117,168,0.25)]"
              >
                Explore Services
                <ArrowRight size={14} />
              </Link>

              <Link
                to="/saathi"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-xs font-semibold text-slate-700 transition hover:border-[#0075a8] hover:text-[#0075a8]"
              >
                Become a Saathi
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-sm font-bold text-[#0075a8] sm:text-base">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Network Panel */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-[#0075a8]/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-[#07182d] shadow-[0_20px_45px_rgba(15,23,42,0.22)]">
              {/* Panel Header */}
              <div className="flex items-center justify-between border-b border-slate-700 bg-[#0b1d34] px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="ml-2 text-[9px] text-slate-400">
                    saathi-desk.onlinesaathi.in/community
                  </span>
                </div>

                <span className="rounded bg-emerald-500/20 px-2 py-1 text-[8px] font-semibold text-emerald-400">
                  LIVE
                </span>
              </div>

              {/* Services Grid */}
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-widest text-slate-500">
                  Every essential service, in one place
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {heroServices.map((service) => {
                    const Icon = service.icon;

                    return (
                      <div
                        key={service.label}
                        className="rounded-lg border border-slate-700 bg-[#0b1d34] px-4 py-3"
                      >
                        <Icon size={16} className="text-[#2bb6e2]" />
                        <p className="mt-2 text-[10px] font-medium text-slate-300">
                          {service.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
                  <p className="text-[10px] font-semibold text-emerald-400">
                    Assisted by Saathis
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-400">
                    Every transaction supported by a trusted local agent.
                  </p>
                </div>
              </div>

              {/* Panel Footer */}
              <div className="flex items-center justify-between border-t border-slate-700 bg-[#061326] px-4 py-3 text-[8px]">
                <span className="text-slate-500">Community-First Network</span>
                <span className="text-emerald-400">Trusted</span>
                <span className="text-slate-500">Local &amp; Accessible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyHero;