import type { JSX } from "react";
import {
  BadgeCheck,
  HeartHandshake,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

interface Reason {
  icon: React.ElementType;
  title: string;
  text: string;
}

const reasons: Reason[] = [
  {
    icon: BadgeCheck,
    title: "Verified",
    text: "Every employer and job is verified so workers can trust what they apply for.",
  },
  {
    icon: IndianRupee,
    title: "Value for Work",
    text: "Fair, transparent wages with clear terms — respected and paid on time.",
  },
  {
    icon: ShieldCheck,
    title: "Trust for Partners",
    text: "Reliable workers and dependable placements build lasting relationships with employers.",
  },
];

const WhyChooseUs = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#e3f2ff] px-3 py-1.5 text-[10px] font-semibold text-[#0078aa] sm:text-[11px]">
              <HeartHandshake size={12} className="mr-1" />
              Why Choose Us
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
              More than a job — a path to economic empowerment
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#334259] sm:text-[15px] sm:leading-7">
              By offering this comprehensive support system, Online Saathi not
              only enhances the chances of workers securing gainful employment
              but also contributes significantly to their economic empowerment.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#334259] sm:text-[15px] sm:leading-7">
              This holistic approach not only focuses on job placement but also
              on equipping individuals with the necessary tools and confidence
              to succeed in the competitive job market.
            </p>
          </div>

          <div className="space-y-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="flex items-start gap-4 rounded-xl border border-[#dfe4ef] bg-[#f0f2ff] p-5 shadow-[0_3px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa]">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#10182f] sm:text-base">
                      {reason.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-[#667085] sm:text-[13px]">
                      {reason.text}
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

export default WhyChooseUs;