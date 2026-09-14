import type { JSX } from "react";
import { Banknote, FileSearch, ReceiptText } from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight: string;
}

const services: Service[] = [
  {
    icon: Banknote,
    title: "Cash Withdrawal",
    description:
      "Enable customers to withdraw cash using Aadhaar biometric authentication — no debit card required. Ideal for rural areas with limited bank access.",
    highlight: "AEPS Based",
  },
  {
    icon: FileSearch,
    title: "Balance Inquiry",
    description:
      "Let customers instantly check their bank balance through biometric verification. Quick, accurate, and builds trust in your services.",
    highlight: "Instant Result",
  },
  {
    icon: ReceiptText,
    title: "Mini Statement",
    description:
      "Provide printed or digital mini statements of recent transactions. Helps customers track spending and plan their finances better.",
    highlight: "Last 10 Txns",
  },
];

const MicroAtmServices = (): JSX.Element => {
  return (
    <section
      id="microatm-services"
      className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            Services You Can Offer
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            Core banking services your customers need, right at your doorstep.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => {
            const Icon = svc.icon;

            return (
              <article
                key={svc.title}
                className="group rounded-xl border border-[#e0e5ee] bg-white p-6 shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa] transition-colors group-hover:bg-[#0078aa] group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <span className="rounded-full bg-[#e3f2ff] px-2.5 py-1 text-[10px] font-semibold text-[#0078aa]">
                    {svc.highlight}
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#10182f] sm:text-base">
                  {svc.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#667085] sm:text-[13px]">
                  {svc.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MicroAtmServices;