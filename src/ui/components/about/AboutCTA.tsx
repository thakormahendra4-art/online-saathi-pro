import type { JSX } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const AboutCTA = (): JSX.Element => {
  return (
    <section className="px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
      <div className="mx-auto max-w-[1250px] rounded-xl bg-[#29354c] px-6 py-12 text-center shadow-[0_14px_35px_rgba(15,23,42,0.15)] sm:px-10 sm:py-14">
        <h2 className="mx-auto max-w-3xl text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Be a part of Bharat&apos;s financial inclusion revolution.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
          Whether you&apos;re a local retail entrepreneur eager to scale your
          business earnings or an enterprise seeking distribution in
          Tier-3+ markets, we are ready to build together.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://dash.onlinesaathi.org/login"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0ca9e2] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0799d0]"
          >
            Become a Retail Saathi
            <ArrowRight size={13} />
          </a>

          <Link
            to="/contact"
            className="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Enterprise Inquiries
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;