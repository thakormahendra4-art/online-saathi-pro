import type { JSX } from "react";
import { Building2, Mail, MessageCircle, Phone, Send } from "lucide-react";

type Channel = {
  icon: React.ElementType;
  title: string;
  detail: string;
  availability: string;
  tone: "green" | "blue";
};

const channels: Channel[] = [
  {
    icon: Phone,
    title: "Toll-Free Helpline",
    detail: "1800-XXX-XXXX · Hindi, English & regional languages",
    availability: "24 × 7",
    tone: "green",
  },
  {
    icon: Mail,
    title: "Email Support Desk",
    detail: "support@onlinesaathi.in · NEFT & settlement queries",
    availability: "< 2 hrs",
    tone: "blue",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Care",
    detail: "Chat with a support agent directly from your merchant app",
    availability: "24 × 7",
    tone: "green",
  },
  {
    icon: Send,
    title: "Merchant Telegram Bot",
    detail: "Automated balance, transaction, and status lookups",
    availability: "Instant",
    tone: "blue",
  },
  {
    icon: Building2,
    title: "Regional Branch Visit",
    detail: "Walk-in support at 316 district hubs across 22 states",
    availability: "On-site",
    tone: "green",
  },
  {
    icon: Building2,
    title: "Corporate Office",
    detail: "Jaipur HQ & Bengaluru office for enterprise accounts",
    availability: "Mon–Sat",
    tone: "blue",
  },
];

const toneClasses: Record<Channel["tone"], string> = {
  green: "bg-emerald-50 text-emerald-600",
  blue: "bg-blue-50 text-blue-600",
};

const SupportChannels = (): JSX.Element => {
  return (
    <section className="px-5 py-8 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <h2 className="text-3xl font-bold tracking-tight text-[#11182f] sm:text-4xl">
          Reach Us Any Way You Like
        </h2>

        <p className="mt-1 text-sm text-[#667085] sm:text-[15px]">
          Choose the channel that fits how you work.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel) => {
            const Icon = channel.icon;

            return (
              <div
                key={channel.title}
                className="group rounded-xl border border-[#e0e4ee] bg-white p-5 shadow-[0_4px_14px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_16px_35px_rgba(15,23,42,0.12)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e0f5ff] text-[#0075a8]">
                    <Icon size={18} />
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${toneClasses[channel.tone]}`}
                  >
                    {channel.availability}
                  </span>
                </div>

                <h3 className="mt-4 text-sm font-bold text-[#11182f] sm:text-base">
                  {channel.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-[#667085] sm:text-[13px]">
                  {channel.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SupportChannels;