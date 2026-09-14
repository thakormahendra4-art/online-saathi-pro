import { ChevronDown } from "lucide-react";
import { useAccordion } from "../../hooks/useAccordion";

const FAQSection = () => {
  const { openIndex, toggle: toggleFAQ } = useAccordion();

  const faqs = [
  {
    question: "How can I check my PAN card status?",
    answer: "You can check it on the UTIITSL or NSDL website by entering your acknowledgement number."
  },
  {
    question: "How do I apply for UTI e-PAN?",
    answer: "Visit the UTIITSL portal and follow the steps to apply online using your Aadhaar number."
  },
  {
    question: "How to download a UTI PAN card?",
    answer: "Log in to the UTIITSL website and use the download e-PAN option with your PAN/Aadhaar."
  },
  {
    question: "How can I make corrections to my UTIITSL PAN card details?",
    answer: "Fill out the PAN correction form on the UTI portal and submit the required documents."
  }
];

  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#006b9e]">
            Frequently Asked Questions
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Everything you need to know
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-sm leading-6 text-gray-500 sm:text-base">
            Everything you need to know about becoming an OnlineSaathi
            partner and using our fintech services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-10 w-full max-w-[820px] space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#159fda] bg-white shadow-[0_8px_25px_rgba(21,159,218,0.08)]"
                    : "border-gray-200 bg-[#f7f8ff] hover:border-[#b9dff0] hover:bg-white hover:shadow-sm"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm font-semibold leading-6 sm:text-[15px] ${
                      isOpen ? "text-[#006b9e]" : "text-[#172039]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#e4f5fc] text-[#008dcc]"
                        : "bg-white text-gray-500"
                    }`}
                  >
                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gray-100 px-5 pb-5 pt-4 sm:px-6">
                      <p className="max-w-[700px] text-sm leading-6 text-gray-500">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;