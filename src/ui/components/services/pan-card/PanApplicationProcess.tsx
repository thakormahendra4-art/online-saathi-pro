import type { JSX } from "react";
import {
  ClipboardCheck,
  CreditCard,
  FileCheck,
  Fingerprint,
  Send,
  UserCheck,
  Verified,
} from "lucide-react";

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
    title: "Register as Agent",
    description:
      "Sign up as an authorized PAN card agent through Online Saathi. Complete your KYC and get access to the NSDL/UTIITSL portal.",
  },
  {
    number: "02",
    icon: Fingerprint,
    title: "Collect Customer Details",
    description:
      "Gather Aadhaar, photograph, and signature from the applicant. Our guided form ensures nothing is missed.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Fill Application Online",
    description:
      "Use the agent portal to complete Form 49A or 49AA. Auto-validation checks reduce errors and rejections.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Process Payment",
    description:
      "Collect the application fee from the customer and process payment through the integrated gateway.",
  },
  {
    number: "05",
    icon: Send,
    title: "Submit Application",
    description:
      "Review and submit the application directly to NSDL or UTIITSL. Receive an acknowledgment number instantly.",
  },
  {
    number: "06",
    icon: FileCheck,
    title: "Track Status",
    description:
      "Monitor application status in real-time through the agent dashboard. Keep your customers informed at every step.",
  },
  {
    number: "07",
    icon: Verified,
    title: "Deliver PAN Card",
    description:
      "Once processed, the PAN card is dispatched to the customer's address. ePAN is delivered via email within days.",
  },
];

const PanApplicationProcess = (): JSX.Element => {
  return (
    <section
      id="pan-process"
      className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            Application Process
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            A simple 7-step process to get PAN cards for your customers.
          </p>
        </div>

        <div className="relative mt-10">
          {/* Vertical line — desktop only */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-[#deeffa] lg:block" />

          <div className="space-y-6">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="relative flex items-start gap-6 rounded-xl border border-[#e0e5ee] bg-white p-6 shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)] lg:ml-10"
                >
                  {/* Step number dot */}
                  <div className="absolute -left-5 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-[#deeffa] bg-white text-xs font-bold text-[#0078aa] shadow-sm lg:flex">
                    {step.number}
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa]">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#10182f] sm:text-base">
                      {step.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-[#667085] sm:text-[13px]">
                      {step.description}
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

export default PanApplicationProcess;