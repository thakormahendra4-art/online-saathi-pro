import type { JSX } from "react";
import { ArrowRight, Headphones, Mail, Phone } from "lucide-react";

const ContactHero = (): JSX.Element => {
  return (
    <section className="bg-[#f8f7ff] px-5 pb-10 pt-10 sm:pb-14 sm:pt-14 lg:px-8 lg:pb-16 lg:pt-16">
      <div className="mx-auto max-w-[1250px] text-center">
        <span className="inline-flex rounded-full bg-[#dfeaff] px-4 py-1.5 text-[10px] font-semibold text-[#3179ae] sm:text-[11px]">
          Support &amp; Contact
        </span>

        <h1 className="mx-auto mt-5 max-w-[850px] text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#11182f] sm:text-5xl lg:text-[48px]">
          We&apos;re Here for Every
          <span className="block text-[#0075a8]">Merchant & Partner</span>
        </h1>

        <p className="mx-auto mt-5 max-w-[820px] text-sm leading-6 text-[#667085] sm:text-[15px] sm:leading-7">
          Regional teams, toll-free lines, and a round-the-clock support
          desk — because a payment problem should never wait until
          tomorrow.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <button className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0075a8] px-5 py-3 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(0,117,168,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#00658f] hover:shadow-[0_14px_30px_rgba(0,117,168,0.25)]">
            Raise a Support Ticket
            <ArrowRight size={14} />
          </button>

          <button className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-xs font-semibold text-slate-700 transition hover:border-[#0075a8] hover:text-[#0075a8]">
            <Phone size={14} />
            1800-XXX-XXXX
          </button>
        </div>

        <div className="mx-auto mt-9 grid max-w-[900px] grid-cols-1 gap-3 sm:grid-cols-3">
          <QuickItem
            icon={Headphones}
            label="Toll-Free Availability"
            value="24 x 7 x 365"
          />

          <QuickItem
            icon={Mail}
            label="Avg. Email Response"
            value="Under 2 hours"
          />

          <QuickItem
            icon={Phone}
            label="On-Hold Wait"
            value="Under 45 seconds"
          />
        </div>
      </div>
    </section>
  );
};

type QuickItemProps = {
  icon: React.ElementType;
  label: string;
  value: string;
};

const QuickItem = ({ icon: Icon, label, value }: QuickItemProps) => (
  <div className="flex items-center gap-3 rounded-xl border border-[#e0e4ee] bg-white p-4 shadow-[0_4px_14px_rgba(15,23,42,0.04)]">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e0f5ff] text-[#0075a8]">
      <Icon size={16} />
    </div>

    <div className="min-w-0 text-left">
      <p className="text-[10px] text-[#667085]">{label}</p>
      <p className="text-xs font-bold text-[#11182f] sm:text-[13px]">
        {value}
      </p>
    </div>
  </div>
);

export default ContactHero;