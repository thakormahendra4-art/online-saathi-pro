import type { JSX } from "react";
import {
  AlertTriangle,
  CalendarClock,
  FileText,
  Mail,
  RefreshCcw,
  Scale,
  UserCheck,
} from "lucide-react";
import Footer from "../components/Footer";

type PolicySection = {
  id: string;
  icon: typeof FileText;
  number: string;
  heading: string;
  points?: string[];
  subSections?: {
    heading: string;
    points?: string[];
  }[];
};

const policySections: PolicySection[] = [
  {
    id: "overview",
    icon: FileText,
    number: "01",
    heading: "Overview",
    points: [
      "At Online Saathi, we act solely as a third-party technology platform connecting users with various service providers. We do not directly provide or control the services delivered by our partners. This Refund Policy outlines the limited scenarios where refunds may be applicable and clarifies our role and responsibility.",
    ],
  },
  {
    id: "general-refund-terms",
    icon: Scale,
    number: "02",
    heading: "General Refund Terms",
    subSections: [
      {
        heading: "2.1 No Refunds for Completed Services",
        points: [
          "Once a user successfully purchases a service, subscription, or offer through Online Saathi, and the order is processed with the service provider, no refund will be provided.",
          "Users are requested to carefully verify all details before making a payment.",
        ],
      },
      {
        heading: "2.2 Platform Service Fee",
        points: [
          "Any platform convenience charges collected by Online Saathi are non-refundable, even if the transaction is later canceled by the user or the service provider.",
        ],
      },
      {
        heading: "2.3 Third-Party Services",
        points: [
          "Refunds related to the quality, delay, or non-delivery of the service are subject to the respective service provider\u2019s refund or grievance redressal policy.",
          "Online Saathi will facilitate communication between the user and service provider but is not responsible for any final outcome of refund claims.",
        ],
      },
    ],
  },
  {
    id: "failed-transactions",
    icon: RefreshCcw,
    number: "03",
    heading: "Refunds for Failed Transactions",
    subSections: [
      {
        heading: "3.1 Automatic Refunds for Failed Transactions",
        points: [
          "If a user\u2019s payment is deducted but the transaction fails at Online Saathi\u2019s payment gateway level, the amount will be automatically refunded to the user\u2019s original payment method within 3 to 21 working days.",
          "Refunds will cover only the net transaction amount (excluding any applicable gateway charges, bank fees, or taxes).",
        ],
      },
      {
        heading: "3.2 Disputed Transactions",
        points: [
          "If a transaction appears successful but the user does not receive service access:",
          "The user must raise a support request by emailing support@onlinesaathi.org within 48 hours of the transaction.",
          "Online Saathi will investigate with the payment gateway and/or service provider.",
          "Based on the investigation, a refund may be facilitated, but the final decision rests with the service provider.",
        ],
      },
    ],
  },
  {
    id: "kyc-failure",
    icon: UserCheck,
    number: "04",
    heading: "KYC Verification Failure",
    points: [
      "If a user fails to complete KYC (Know Your Customer) verification, resulting in account non-activation, the payment made will not be refunded.",
    ],
  },
  {
    id: "important-terms",
    icon: AlertTriangle,
    number: "05",
    heading: "Important Terms",
    points: [
      "Role Clarification: Online Saathi is a facilitator platform. The responsibility for service fulfillment lies with third-party providers.",
      "Maximum Liability: Our liability is strictly limited to refunding the transaction amount collected by us, if applicable.",
      "No Consequential Damages: Online Saathi is not responsible for any indirect losses, damages, or inconvenience suffered by the user.",
    ],
  },
  {
    id: "policy-changes",
    icon: CalendarClock,
    number: "06",
    heading: "Changes to This Policy",
    points: [
      "We may revise this Refund Policy from time to time. Updates will be posted on our website and/or communicated via email or SMS, as appropriate.",
    ],
  },
  {
    id: "contact",
    icon: Mail,
    number: "07",
    heading: "Contact Us",
    points: [
      "For any refund-related queries, please reach out to:",
      "Email: support@onlinesaathi.org",
      "Phone: +91-9099005251",
      "Website: www.onlinesaathi.org",
    ],
  },
];

const RefundPolicyPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#f3f4fb]">
      {/* Hero */}
      <section className="bg-[#0f172a] px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-[1250px]">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#ade7ff]">
              <Scale size={22} />
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ade7ff]">
              Legal &amp; Policies
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
                Refund Policy
              </h1>

              <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-[15px]">
                Effective Date: April 22, 2024
              </p>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-400">
              Understand the limited scenarios where refunds may be applicable
              and Online Saathi&apos;s role as a publicly available facilitator
              platform.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-[1250px] gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
          {/* Sticky Nav */}
          <aside className="h-fit lg:sticky lg:top-6">
            <div className="rounded-2xl border border-[#e0e5ee] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0078aa]">
                On this page
              </p>

              <nav className="mt-4 space-y-1">
                {policySections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-[#475467] transition-colors hover:bg-[#eef5fb] hover:text-[#0078aa]"
                  >
                    <span className="text-[11px] font-bold text-[#0078aa]/60 transition-colors group-hover:text-[#0078aa]">
                      {section.number}
                    </span>
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-6">
            {policySections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-6 rounded-2xl border border-[#e0e5ee] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-[#bcd7ec] sm:p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e3f2ff] text-[#0078aa]">
                      <Icon size={22} />
                    </span>

                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0078aa]/60">
                        Section {section.number}
                      </span>

                      <h2 className="mt-0.5 text-xl font-bold tracking-tight text-[#10182f] sm:text-2xl">
                        {section.heading}
                      </h2>
                    </div>
                  </div>

                  {section.points && (
                    <div className="mt-5 space-y-3 border-l-2 border-[#dcebf5] pl-5">
                      {section.points.map((point, index) => (
                        <p
                          key={index}
                          className="text-sm leading-6 text-[#475467] sm:text-[15px] sm:leading-7"
                        >
                          {point}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.subSections && (
                    <div className="mt-6 space-y-6">
                      {section.subSections.map((sub) => (
                        <div key={sub.heading}>
                          <h3 className="flex items-center gap-2.5 text-base font-semibold text-[#10182f] sm:text-lg">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#0078aa]" />
                            {sub.heading}
                          </h3>

                          {sub.points && (
                            <div className="mt-3 space-y-3 pl-4">
                              {sub.points.map((point, index) => (
                                <p
                                  key={index}
                                  className="text-sm leading-6 text-[#475467] sm:text-[15px] sm:leading-7"
                                >
                                  {point}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}

            <div className="rounded-2xl border border-[#cfe0ef] bg-[#e8f4fb] p-6 sm:p-8">
              <p className="text-sm font-semibold text-[#0f3c5c] sm:text-[15px]">
                By using Online Saathi, you agree to this Refund Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPolicyPage;