import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import {
  onDemandServices,
  topServices,
} from "../data/servicesPageData";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-[#f9f8ff] px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-14">
        <div className="mx-auto max-w-[1250px] text-center">
          <span className="inline-flex items-center rounded-full bg-[#e3f2ff] px-3 py-1.5 text-[10px] font-semibold text-[#0078aa] sm:text-[11px]">
            ✦ Our Services
          </span>

          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#10182f] sm:text-5xl">
            Every essential service,
            <span className="block text-[#0075a8]">close to home</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#667085] sm:text-[15px] sm:leading-7">
            Online Saathi connects rural and migrant workers with crucial
            services — empowering communities through a network of dedicated
            local agents.
          </p>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-[1250px]">
          <div className="grid gap-4 md:grid-cols-2">
            {topServices.map((service) => {
              const Icon = service.icon;

              const card = (
                <article
                  key={service.title}
                  className="flex items-start gap-4 rounded-xl border border-[#dfe4ef] bg-[#f0f2ff] p-6 shadow-[0_3px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:bg-white hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa]">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h2 className="text-sm font-bold text-[#10182f] sm:text-base">
                      {service.title}
                    </h2>

                    <p className="mt-2 text-xs leading-5 text-[#667085] sm:text-[13px]">
                      {service.text}
                    </p>
                  </div>
                </article>
              );

              return service.title === "Safe Jobs Connect" ? (
                <Link
                  key={service.title}
                  to="/safe-jobs"
                  className="block"
                  title="Explore Safe Jobs Connect"
                >
                  {card}
                </Link>
              ) : service.title === "Social Welfare Schemes" ? (
                <Link
                  key={service.title}
                  to="/government-schemes"
                  className="block"
                  title="Explore Social Welfare Schemes"
                >
                  {card}
                </Link>
              ) : (
                card
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-[1250px]">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[#10182f] sm:text-3xl">
              On-Demand Services
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
              Delivered by trusted Saathis, right in your neighbourhood.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {onDemandServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-xl border border-[#e0e5ee] bg-white p-5 shadow-[0_4px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa]">
                    <Icon size={17} />
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-[#10182f] sm:text-base">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#667085] sm:text-[13px]">
                    {service.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-[1250px] rounded-xl bg-[#29354c] px-6 py-12 text-center shadow-[0_14px_35px_rgba(15,23,42,0.15)] sm:px-10 sm:py-14">
          <h2 className="mx-auto max-w-3xl text-2xl font-bold text-white sm:text-3xl">
            Need a service near you? Your local Saathi can help.
          </h2>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/saathi"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0ca9e2] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0799d0]"
            >
              Find a Saathi
              <ArrowRight size={14} />
            </Link>

            <Link
              to="/contact"
              className="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;