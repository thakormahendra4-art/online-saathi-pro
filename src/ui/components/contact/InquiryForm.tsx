import type { JSX } from "react";
import {
  Clock,
  MessageSquare,
  Send,
  ShieldCheck,
  User,
} from "lucide-react";

const inputClasses =
  "w-full rounded-lg border border-[#e0e4ee] bg-white px-3.5 py-2.5 text-xs text-[#11182f] placeholder:text-[#98a2b3] outline-none transition focus:border-[#8ecde7] focus:ring-2 focus:ring-[#e0f5ff] sm:text-[13px]";

const InquiryForm = (): JSX.Element => {
  return (
    <section className="px-5 py-8 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#11182f] sm:text-4xl">
              Submit an Inquiry
            </h2>

            <p className="mt-1 text-sm text-[#667085] sm:text-[15px]">
              Tell us what you need and the right team will reach out.
            </p>

            <div className="mt-6 space-y-4">
              <InfoItem
                icon={Clock}
                title="Response Time"
                text="Most inquiries get a first reply within 2 working hours."
              />

              <InfoItem
                icon={ShieldCheck}
                title="Data Safe"
                text="Your details are encrypted and never shared with third parties."
              />

              <InfoItem
                icon={MessageSquare}
                title="Follow-Up"
                text="Every ticket is tracked to resolution by a named agent."
              />
            </div>

            <div className="mt-6 rounded-xl border border-[#e0e4ee] bg-[#f8f7ff] p-4 text-xs leading-5 text-[#667085]">
              Prefer talking?
              <span className="font-semibold text-[#0075a8]">
                {" "}
                Call 1800-XXX-XXXX
              </span>{" "}
              and skip the form entirely.
            </div>
          </div>

          {/* Right form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-xl border border-[#e0e4ee] bg-white p-5 shadow-[0_8px_25px_rgba(15,23,42,0.05)] sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[11px] font-semibold text-[#11182f]">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={14}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#98a2b3]"
                  />

                  <input
                    type="text"
                    placeholder="Your name"
                    className={`${inputClasses} pl-9`}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[11px] font-semibold text-[#11182f]">
                  Email Address
                </label>

                <div className="relative">
                  <Send
                    size={14}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#98a2b3]"
                  />

                  <input
                    type="email"
                    placeholder="you@company.com"
                    className={`${inputClasses} pl-9`}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-[11px] font-semibold text-[#11182f]">
                Inquiry Type
              </label>

              <select className={inputClasses}>
                <option>Merchant Support</option>
                <option>Partner / Distribution</option>
                <option>Enterprise Banking</option>
                <option>API & Developer Support</option>
                <option>Press & Media</option>
                <option>Careers</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-[11px] font-semibold text-[#11182f]">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Describe your query in a few lines..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[10px] text-[#98a2b3]">
                Ticketing &amp; escalation monitored in real time.
              </p>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0075a8] px-5 py-3 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(0,117,168,0.18)] transition hover:-translate-y-0.5 hover:bg-[#00658f]"
              >
                Submit Inquiry
                <Send size={14} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

type InfoItemProps = {
  icon: React.ElementType;
  title: string;
  text: string;
};

const InfoItem = ({ icon: Icon, title, text }: InfoItemProps) => (
  <div className="flex gap-3">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e0f5ff] text-[#0075a8]">
      <Icon size={16} />
    </div>

    <div>
      <h3 className="text-xs font-bold text-[#11182f]">{title}</h3>
      <p className="mt-0.5 text-xs leading-5 text-[#667085]">{text}</p>
    </div>
  </div>
);

export default InquiryForm;