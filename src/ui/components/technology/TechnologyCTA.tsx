import { ArrowRight, CheckCircle2, Handshake } from "lucide-react";
import { Link } from "react-router";

const TechnologyCTA = () => {
  return (
    <section className="bg-[#031427] py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-[900px] px-5 text-center">
        <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-[9px] font-semibold text-blue-300">
          Join the Movement
        </span>

        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
          Building a sustainable, inclusive digital infrastructure — together.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
          Whether you&apos;re a community agent, a partner organization, or a
          rural user, Online Saathi connects you with the services that matter
          most — supported by a trusted local network.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/saathi"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#079bd6] px-5 py-3 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#08a9e8]"
          >
            Become a Saathi
            <ArrowRight size={14} />
          </Link>

          <Link
            to="/partner"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-600 px-5 py-3 text-xs font-semibold text-white transition hover:border-slate-400"
          >
            <Handshake size={14} />
            Partner With Us
          </Link>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-5 text-[9px] text-slate-500">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 size={11} className="text-emerald-400" />
            Free to join
          </span>

          <span className="inline-flex items-center gap-1">
            <CheckCircle2 size={11} className="text-emerald-400" />
            Local Saathi support
          </span>

          <span className="inline-flex items-center gap-1">
            <CheckCircle2 size={11} className="text-emerald-400" />
            Trusted community network
          </span>
        </div>
      </div>
    </section>
  );
};

export default TechnologyCTA;