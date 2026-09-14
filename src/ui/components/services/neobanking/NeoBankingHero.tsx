import type { JSX } from "react";
import { ArrowRight, Building2 } from "lucide-react";
import neoBankingImage from "../../../../assets/services-assets/n1.jpeg";

const NeoBankingHero = (): JSX.Element => {
  return (
    <section className="bg-[#f9f8ff] px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto grid max-w-[1250px] items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center rounded-full bg-[#e3f2ff] px-3 py-1.5 text-[10px] font-semibold text-[#0078aa] sm:text-[11px]">
            <Building2 size={12} className="mr-1" />
            Neo Banking
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#10182f] sm:text-5xl">
            Neo Banking
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-[#667085] sm:text-[15px] sm:leading-7">
            Online Saathi revolutionizes banking for the informal workforce
            by delivering tailored neo-banking services that transcend
            traditional limitations.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#neobank-network"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0075a8] px-5 py-3 text-sm font-semibold text-white shadow-[0_7px_18px_rgba(0,117,168,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00658f] sm:w-auto"
            >
              Scroll Down
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="mx-auto hidden w-full max-w-sm lg:block">
          <img
            src={neoBankingImage}
            alt="Neo Banking services for informal workforce"
            className="w-full rounded-2xl object-cover shadow-[0_30px_60px_rgba(0,117,168,0.12)]"
          />
        </div>
      </div>
    </section>
  );
};

export default NeoBankingHero;