import type { JSX } from "react";
import { CheckCircle, Fingerprint, Send, UserCheck } from "lucide-react";

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: UserCheck,
    title: "Register Sender",
    description:
      "The sender provides Aadhaar and basic details. One-time KYC takes less than 2 minutes.",
  },
  {
    number: "02",
    icon: Fingerprint,
    title: "Biometric Verification",
    description:
      "Fingerprint authentication ensures the transaction is secure and authorized by the sender.",
  },
  {
    number: "03",
    icon: Send,
    title: "Send Money",
    description:
      "Enter the recipient's details in Nepal, amount, and confirm. Money is sent instantly via IMPS.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Instant Delivery",
    description:
      "Recipient receives the funds in their Nepali bank account or mobile wallet within minutes.",
  },
];

const IndoNepalProcess = (): JSX.Element => {
  return (
    <section
      id="remittance-process"
      className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            How It Works
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            Simple, secure, and instant — send money to Nepal in 4 easy steps.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="rounded-xl border border-[#e0e5ee] bg-white p-6 text-center shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#deeffa] text-[#0078aa]">
                  <Icon size={22} />
                </div>

                <p className="mt-4 text-xs font-bold text-[#c7d4e0]">
                  Step {step.number}
                </p>

                <h3 className="mt-2 text-sm font-bold text-[#10182f] sm:text-base">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#667085] sm:text-[13px]">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndoNepalProcess;