import type { JSX } from "react";
import {
  BadgeCheck,
  Building2,
  Globe,
  HelpCircle,
  KeyRound,
  Laptop,
  Phone,
  Receipt,
  Shield,
  Zap,
} from "lucide-react";

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: BadgeCheck,
    title: "Authorized PAN Card Center",
    description:
      "Operate as a certified PAN service point backed by NSDL/UTIITSL partnership through Online Saathi.",
  },
  {
    icon: Globe,
    title: "Broad Service Scope",
    description:
      "Handle new PAN applications, corrections, reprinting, and link updates — all from a single portal.",
  },
  {
    icon: Building2,
    title: "Nationwide Retail Outlets",
    description:
      "Join a growing network of PAN card agents across India, serving both urban and rural communities.",
  },
  {
    icon: HelpCircle,
    title: "Application Assistance",
    description:
      "Step-by-step guidance and auto-validation reduce errors, ensuring faster processing and fewer rejections.",
  },
  {
    icon: Receipt,
    title: "Complete PAN Services",
    description:
      "From Form 49A to acknowledgment tracking — manage the entire PAN lifecycle through one dashboard.",
  },
  {
    icon: KeyRound,
    title: "Flexible Application Options",
    description:
      "Choose between instant ePAN or physical card delivery based on your customer's preference and urgency.",
  },
  {
    icon: Laptop,
    title: "Easy Online Access",
    description:
      "Access the agent portal from any device — desktop, tablet, or mobile — anytime and anywhere.",
  },
  {
    icon: Phone,
    title: "Dedicated Customer Support",
    description:
      "Get priority support from our team for portal issues, application queries, and technical assistance.",
  },
  {
    icon: Zap,
    title: "Fast and Affordable ePAN",
    description:
      "Deliver ePAN to customers within hours at minimal cost — ideal for time-sensitive requirements.",
  },
  {
    icon: Shield,
    title: "Choice of PAN Type",
    description:
      "Offer both physical PAN cards and instant ePAN based on customer needs and budget.",
  },
];

const PanServiceBenefits = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            Service Benefits
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            Everything you need to run a successful PAN card service center.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group rounded-xl border border-[#e0e5ee] bg-white p-5 shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa] transition-colors group-hover:bg-[#0078aa] group-hover:text-white">
                  <Icon size={18} />
                </div>

                <h3 className="mt-4 text-sm font-bold text-[#10182f] sm:text-[15px]">
                  {benefit.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-[#667085] sm:text-[13px]">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PanServiceBenefits;