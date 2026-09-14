import type { JSX } from "react";
import { ArrowRight, Headset } from "lucide-react";

const ContactCTA = (): JSX.Element => {
  return (
    <section className="px-5 pb-12 sm:pb-16 lg:px-8">
      <div className="mx-auto max-w-[1250px]">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0075a8] to-[#00507a] px-6 py-12 text-center sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              <Headset size={13} />
              We Answer Fast
            </span>

            <h2 className="mx-auto mt-5 max-w-[680px] text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[42px]">
              Still Have a Question?
            </h2>

            <p className="mx-auto mt-4 max-w-[560px] text-sm leading-6 text-white/80 sm:text-[15px] sm:leading-7">
              Call the toll-free helpline, raise a ticket, or book a
              callback with a merchant support specialist today.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-[#0075a8] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,255,255,0.25)]">
                Talk to Support
                <ArrowRight size={15} />
              </button>

              <button className="rounded-md border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20">
                1800-XXX-XXXX
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;