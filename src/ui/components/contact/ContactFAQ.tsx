import type { JSX } from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What should I do if an AEPS transaction fails?",
    answer:
      "Share the transaction reference number with our helpline or WhatsApp Care. Failed AEPS debits are auto-reversed within T+1, and our resolution desk tracks every case to closure.",
  },
  {
    question: "How long does a settlement take?",
    answer:
      "Commissions and settlements follow T+0 instant payouts for completed transactions. Reversed and disputed cases settle within T+1 working day.",
  },
  {
    question: "How do I raise a dispute or chargeback?",
    answer:
      "Open a ticket from your merchant dashboard or email dispute@onlinesaathi.in with supporting proof. A dedicated risk officer responds within 4 working hours.",
  },
  {
    question: "Is 24×7 support really available?",
    answer:
      "Yes. The toll-free helpline and WhatsApp Care operate around the clock, 365 days a year, with escalation coverage through every national holiday.",
  },
  {
    question: "Can I get support in my local language?",
    answer:
      "Our regional hubs cover Hindi, English, Tamil, Telugu, Bengali, Marathi, and Gujarati. Choose your language in the IVR menu or reach your district hub.",
  },
  {
    question: "How do I apply to become a partner or distributor?",
    answer:
      "Use the inquiry form with Inquiry Type 'Partner / Distribution'. Our partnership team responds within 24 hours with a fit-to-role call.",
  },
];

const ContactFAQ = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-5 py-8 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[900px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#11182f] sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-1 text-sm text-[#667085] sm:text-[15px]">
            Quick answers to the questions merchants ask us most.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-[#e0e4ee] bg-white shadow-[0_4px_14px_rgba(15,23,42,0.04)]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-xs font-bold text-[#11182f] sm:text-sm">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={15}
                    className={`shrink-0 text-[#0075a8] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="border-t border-[#eef1f6] px-5 py-4 text-xs leading-6 text-[#667085] sm:text-[13px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;