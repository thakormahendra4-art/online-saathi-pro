import type { JSX } from "react";
import { CheckCircle, Heart, Shield, Sparkles } from "lucide-react";

interface SaathiTrait {
  icon: React.ElementType;
  title: string;
  description: string;
}

const traits: SaathiTrait[] = [
  {
    icon: Shield,
    title: "Verified & Trained",
    description:
      "Every Saathi undergoes thorough background verification and receives comprehensive training on our platform and services.",
  },
  {
    icon: Heart,
    title: "Community-First",
    description:
      "Saathis are selected from local communities, making them trusted figures who understand the unique challenges faced by their neighbors.",
  },
  {
    icon: CheckCircle,
    title: "Government Schemes Engine",
    description:
      "Saathis help people navigate social welfare schemes, job opportunities, and more — acting as connectors who spread awareness about available services.",
  },
  {
    icon: Sparkles,
    title: "People-Centric Platform",
    description:
      "Their involvement ensures that Online Saathi remains a people-centric platform, bridging the gap between technology and real-world impact.",
  },
];

const SaathiNetworkSaathis = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
              Meet Our Saathis
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#334259] sm:text-[15px] sm:leading-7">
              Saathis are community representatives trained to deliver
              Online Saathi's services at the grassroots level. These
              individuals act as connectors, spreading awareness about
              available services and helping people navigate social welfare
              schemes, job opportunities, and more.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#334259] sm:text-[15px] sm:leading-7">
              Saathis are selected from local communities, making them
              trusted figures who understand the unique challenges faced
              by their neighbors. Their involvement ensures that Online
              Saathi remains a people-centric platform.
            </p>
          </div>

          <div className="space-y-4">
            {traits.map((trait) => {
              const Icon = trait.icon;

              return (
                <article
                  key={trait.title}
                  className="flex items-start gap-4 rounded-xl border border-[#dfe4ef] bg-[#f0f2ff] p-5 shadow-[0_3px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa]">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#10182f] sm:text-base">
                      {trait.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-[#667085] sm:text-[13px]">
                      {trait.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaathiNetworkSaathis;