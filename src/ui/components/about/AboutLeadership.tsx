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
    name: "Aarav Mehta",
    initials: "AM",
    role: "Chief Executive Officer",
    description:
      "Ex-Principal Architect at global payment gateways, passionate about rural economic upliftment.",
    gradient: "from-[#0075a8] to-[#00507a]",
  },
  {
    name: "Priya Sharma",
    initials: "PS",
    role: "Chief Technology Officer",
    description:
      "Spearheaded resilient real-time banking pipelines processing billions of secure transactions.",
    gradient: "from-[#0f766e] to-[#134e4a]",
  },
  {
    name: "Rohan Mehta",
    initials: "RM",
    role: "Chief Compliance Officer",
    description:
      "Regulatory expert ensuring multi-jurisdiction financial network compliance.",
    gradient: "from-[#7c3aed] to-[#4c1d95]",
  },
];

const AboutLeadership = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            Executive Leadership
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            Guided by veterans in fintech, secure banking infrastructure, and
            scalable engineering.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="rounded-xl border border-[#e0e4ed] bg-white p-4 text-center shadow-[0_4px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_28px_rgba(15,23,42,0.10)]"
            >
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${leader.gradient}`}
              >
                <span className="text-xl font-bold text-white">
                  {leader.initials}
                </span>
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#10182f] sm:text-base">
                {leader.name}
              </h3>

              <p className="mt-0.5 text-xs font-semibold text-[#0078aa] sm:text-[13px]">
                {leader.role}
              </p>

              <p className="mx-auto mt-3 max-w-[260px] text-xs leading-5 text-[#667085] sm:text-[13px]">
                {leader.description}
              </p>

              <div className="mt-4 flex justify-center gap-3 text-[#0078aa]">
                <button
                  type="button"
                  aria-label={`Share ${leader.name}`}
                  className="transition hover:scale-110"
                >
                  <Share2 size={15} />
                </button>

                <button
                  type="button"
                  aria-label={`Email ${leader.name}`}
                  className="transition hover:scale-110"
                >
                  <Mail size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;