import type { JSX } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import aboutImage from "../../../assets/about-assets/c.jpeg";

const AboutHero = (): JSX.Element => {
  return (
    <section className="bg-[#f9f8ff] px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-full max-w-[1250px]">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#e3f2ff] px-3 py-1.5 text-[10px] font-semibold text-[#0078aa] sm:text-[11px]">
              ✦ About Us
            </span>

            <h1 className="mt-5 max-w-[620px] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#10182f] sm:text-5xl lg:text-[45px]">
              Transforming Access and Opportunities for India&apos;s Informal
              Workforce
            </h1>

            <p className="mt-5 max-w-[620px] text-sm leading-6 text-[#667085] sm:text-[15px] sm:leading-7">
              A tech-driven network bridging the gap for informal workers to
              access essential services, social welfare schemes, safe job
              opportunities, and on-demand services like banking, insurance,
              travel, and e-governance services.
            </p>

            <p className="mt-3 max-w-[620px] text-sm leading-6 text-[#667085] sm:text-[15px] sm:leading-7">
              Online Saathi connects rural and migrant workers with crucial
              services, empowering communities through a network of dedicated
              agents.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0075a8] px-5 py-3 text-sm font-semibold text-white shadow-[0_7px_18px_rgba(0,117,168,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00658f] hover:shadow-[0_12px_25px_rgba(0,117,168,0.24)]"
              >
                Explore Open Roles
                <ArrowRight size={14} />
              </button>

              <Link
                to="/history"
                className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#32415a] transition hover:border-[#0075a8] hover:bg-[#f4fbff]"
              >
                Our Journey
              </Link>
            </div>
          </div>

          <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-[#dce2eb] bg-white p-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
              <div className="h-[260px] overflow-hidden rounded-xl sm:h-[310px] lg:h-[300px]">
                <img
                  src={aboutImage}
                  alt="Online Saathi team at work"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;