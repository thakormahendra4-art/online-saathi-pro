import type { JSX } from "react";
import { Mail, Share2 } from "lucide-react";

interface Leader {
  name: string;
  initials: string;
  role: string;
  description: string;
  gradient: string;
}

const leaders: Leader[] = [
  {
    name: "Aarav Sharma",
    initials: "AS",
    role: "Chief Executive Officer & Founder",
    description:
      "Previously led engineering initiatives at top-tier fintech unicorns. Passionate about financial inclusion and scalable distributed systems.",
    gradient: "from-[#0075a8] to-[#00507a]",
  },
  {
    name: "Priya Venkat",
    initials: "PV",
    role: "Chief Technology Officer",
    description:
      "Architecting secure core banking rails and high-throughput real-time transaction engines with over 15 years of industry experience.",
    gradient: "from-[#0f766e] to-[#134e4a]",
  },
  {
    name: "Rohan Mehta",
    initials: "RM",
    role: "Chief Financial Officer",
    description:
      "Overseeing global regulatory compliance, risk management, and strategic fiscal expansion across emerging markets.",
    gradient: "from-[#7c3aed] to-[#4c1d95]",
  },
];

const ExecutiveLeadership = (): JSX.Element => {
  return (
    <section className="px-5 py-8 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#11182f] sm:text-4xl">
            Executive Leadership
          </h2>

          <p className="mt-1 text-sm text-[#667085] sm:text-[15px]">
            Guiding OnlineSaathi&apos;s long-term vision and operational
            excellence.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="group overflow-hidden rounded-xl border border-[#e0e4ee] bg-white p-4 shadow-[0_4px_14px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_16px_35px_rgba(15,23,42,0.12)] sm:p-5"
            >
              <div
                className={`flex h-[150px] w-full items-center justify-center rounded-lg bg-gradient-to-br ${leader.gradient}`}
              >
                <span className="text-4xl font-bold tracking-tight text-white/95">
                  {leader.initials}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-base font-bold text-[#11182f] sm:text-lg">
                  {leader.name}
                </h3>

                <p className="mt-0.5 text-xs font-semibold text-[#0075a8] sm:text-[13px]">
                  {leader.role}
                </p>

                <p className="mt-3 text-xs leading-5 text-[#667085] sm:text-[13px]">
                  {leader.description}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    type="button"
                    aria-label={`Share ${leader.name}`}
                    className="text-[#0075a8] transition hover:scale-110"
                  >
                    <Share2 size={17} />
                  </button>

                  <button
                    type="button"
                    aria-label={`Email ${leader.name}`}
                    className="text-[#0075a8] transition hover:scale-110"
                  >
                    <Mail size={17} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveLeadership;