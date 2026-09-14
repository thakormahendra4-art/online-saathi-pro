import type { JSX } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../../data/contactPageData";
import { useAccordion } from "../../../hooks/useAccordion";

const ContactFAQ = (): JSX.Element => {
  const { openIndex, toggle } = useAccordion();

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
                  onClick={() => toggle(index)}
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