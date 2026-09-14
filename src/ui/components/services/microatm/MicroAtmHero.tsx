import type { JSX } from "react";
import { ArrowRight, ChevronDown, Smartphone } from "lucide-react";
import { Link } from "react-router";
import microAtmImage from "../../../../assets/services-assets/m1.png";

const MicroAtmHero = (): JSX.Element => {
  return (
    <section className="bg-[#f9f8ff] px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto grid max-w-[1250px] items-center gap-10 lg:grid-cols-2">
        {/* Left: text */}
        <div>
          <span className="inline-flex items-center rounded-full bg-[#e3f2ff] px-3 py-1.5 text-[10px] font-semibold text-[#0078aa] sm:text-[11px]">
            <Smartphone size={12} className="mr-1" />
            Micro ATM Service
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#10182f] sm:text-5xl">
            Offer Bank-Quality
            <span className="block text-[#0075a8]">Cash Services Locally</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-[#667085] sm:text-[15px] sm:leading-7">
            Enable AEPS cash withdrawals, balance inquiries, and mini
            statements right from your shop — serving unbanked and
            underbanked communities in your neighbourhood.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#d5e8d4] bg-[#f0faf0] px-4 py-2.5">
            <span className="text-sm font-bold text-[#15803d] sm:text-base">
              Starting from ₹2.99 / txn
            </span>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#microatm-services"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0075a8] px-5 py-3 text-sm font-semibold text-white shadow-[0_7px_18px_rgba(0,117,168,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00658f]"
            >
              Explore Services
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

        {/* Right: hero visual */}
        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          <img
            src={microAtmImage}
            alt="Micro ATM device for AEPS cash withdrawal"
            className="w-full rounded-2xl object-cover shadow-[0_30px_60px_rgba(0,117,168,0.12)]"
          />

          <div className="absolute left-6 top-10 rounded-xl border border-[#e0e5ee] bg-white px-4 py-3 shadow-lg">
            <p className="text-[10px] font-semibold text-[#667085]">Today&apos;s Collection</p>
            <p className="text-lg font-bold text-[#15803d]">₹12,450</p>
          </div>

          <div className="absolute bottom-14 right-6 rounded-xl border border-[#e0e5ee] bg-white px-4 py-3 shadow-lg">
            <p className="text-[10px] font-semibold text-[#667085]">Transactions</p>
            <p className="text-lg font-bold text-[#0075a8]">47</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mx-auto mt-10 flex max-w-[1250px] justify-center lg:mt-6">
        <a
          href="#microatm-features"
          className="flex flex-col items-center gap-1 text-[#667085] transition hover:text-[#0075a8]"
        >
          <span className="text-[10px] font-semibold sm:text-[11px]">Scroll to explore</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default MicroAtmHero;