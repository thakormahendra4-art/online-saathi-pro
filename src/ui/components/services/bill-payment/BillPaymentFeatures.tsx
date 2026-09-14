import type { JSX } from "react";
import { Lightbulb, ShieldCheck, Zap } from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Instant Confirmation",
    description:
      "Every payment is processed in real-time with instant acknowledgment — no delays, no uncertainty for your customers.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Powered by BBPS with bank-grade encryption and guaranteed settlement — your customers' payments are always safe.",
  },
  {
    icon: Lightbulb,
    title: "Easy to Operate",
    description:
      "Simple interface designed for agents with minimal training. Enter the biller, amount, and customer details — done.",
  },
];

const BillPaymentFeatures = (): JSX.Element => {
  return (
    <section
      id="billpay-features"
      className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            Why Bill Payment Works for You
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            Simple, secure, and profitable — bill payment is a high-demand
            service in every neighbourhood.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat) => {
            const Icon = feat.icon;

            return (
              <article
                key={feat.title}
                className="rounded-xl border border-[#e0e5ee] bg-white p-6 shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa]">
                  <Icon size={20} />
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#10182f] sm:text-base">
                  {feat.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#667085] sm:text-[13px]">
                  {feat.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BillPaymentFeatures;