import type { JSX } from "react";
import { ArrowRight, CreditCard } from "lucide-react";
import { Link } from "react-router";

const PanCardCTA = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="rounded-xl bg-[#29354c] px-6 py-12 text-center shadow-[0_14px_35px_rgba(15,23,42,0.15)] sm:px-10 sm:py-14">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
            <CreditCard size={24} />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-bold text-white sm:text-3xl">
            Ready to start your PAN card service center?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-[15px]">
            Join thousands of authorized agents across India. Register today
            and start earning from PAN card services in your neighbourhood.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0ca9e2] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0799d0]"
            >
              Become an Agent
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
      </div>
    </section>
  );
};

export default PanCardCTA;