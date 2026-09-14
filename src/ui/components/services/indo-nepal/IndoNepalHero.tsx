import type { JSX } from "react";
import { ArrowRight, Globe } from "lucide-react";
import { Link } from "react-router";

const IndoNepalHero = (): JSX.Element => {
  return (
    <section className="bg-[#f9f8ff] px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto max-w-[1250px] text-center">
        <span className="inline-flex items-center rounded-full bg-[#e3f2ff] px-3 py-1.5 text-[10px] font-semibold text-[#0078aa] sm:text-[11px]">
          <Globe size={12} className="mr-1" />
          Indo-Nepal Remittance
        </span>

        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#10182f] sm:text-5xl">
          Secure Cross-Border
          <span className="block text-[#0075a8]">Money Transfers</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#667085] sm:text-[15px] sm:leading-7">
          Send money from India to Nepal safely and instantly. Online
          Saathi enables secure remittance services with competitive
          exchange rates and minimal fees.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#remittance-process"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0075a8] px-5 py-3 text-sm font-semibold text-white shadow-[0_7px_18px_rgba(0,117,168,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00658f]"
          >
            How It Works
            <ArrowRight size={14} />
          </a>

          <Link
            to="/contact"
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#32415a] transition hover:border-[#0075a8] hover:bg-[#f4fbff]"
          >
            Talk to a Saathi
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndoNepalHero;