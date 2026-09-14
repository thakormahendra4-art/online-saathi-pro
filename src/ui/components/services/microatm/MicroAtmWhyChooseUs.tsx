import type { JSX } from "react";
import {
  BadgeCheck,
  IndianRupee,
  ShieldCheck,
  Sparkles,
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
    text: "Every device and agent is verified through Aadhaar eKYC, ensuring authenticity and regulatory compliance.",
  },
  {
    icon: IndianRupee,
    title: "Value for Work",
    text: "Earn competitive commissions on every transaction — no middlemen, transparent settlement directly to your bank.",
  },
  {
    icon: ShieldCheck,
    title: "Trust for Partners",
    text: "Bank-grade security and encrypted transactions protect every customer interaction, building long-term trust.",
  },
];

const MicroAtmWhyChooseUs = (): JSX.Element => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#e3f2ff] px-3 py-1.5 text-[10px] font-semibold text-[#0078aa] sm:text-[11px]">
              <Sparkles size={12} className="mr-1" />
              Why Choose Us
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
              A Micro ATM service you
              <span className="block text-[#0075a8]">can rely on</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#334259] sm:text-[15px] sm:leading-7">
              Online Saathi provides end-to-end Micro ATM solutions — from
              device provisioning and training to real-time transaction
              support — so you can focus on serving your community.
            </p>

            <p className="mt-3 text-sm leading-7 text-[#334259] sm:text-[15px] sm:leading-7">
              Our transparent commission structure and reliable settlement
              process mean you earn consistently while delivering essential
              banking services to your neighbourhood.
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

export default MicroAtmWhyChooseUs;