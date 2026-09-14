import type { JSX } from "react";
import {
  Activity,
  CheckCircle2,
  Clock,
  Headphones,
  Ticket,
} from "lucide-react";

const metrics = [
  {
    icon: Ticket,
    label: "Open Tickets",
    value: "142",
  },
  {
    icon: Clock,
    label: "Avg. First Response",
    value: "1m 38s",
  },
  {
    icon: CheckCircle2,
    label: "Resolved Today",
    value: "1,204",
  },
  {
    icon: Activity,
    label: "SLA Compliance",
    value: "99.2%",
  },
];

const queueRows = [
  ["Phone Queue", "8 agents", "Average wait 38s", "green"],
  ["Email Inbox", "5 agents", "Average wait 26m", "blue"],
  ["WhatsApp Care", "7 agents", "Average wait 52s", "green"],
  ["Telegram Bot", "Automated", "Instant resolution", "blue"],
  ["Escalation Desk", "2 leads", "Priority overrides", "amber"],
] as const;

const toneClasses: Record<string, string> = {
  green: "bg-emerald-50 text-emerald-600",
  blue: "bg-blue-50 text-blue-600",
  amber: "bg-amber-50 text-amber-600",
};

const SupportTelemetry = (): JSX.Element => {
  return (
    <section className="bg-[#f5f9fc] px-5 py-8 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="overflow-hidden rounded-xl border border-[#e0e4ee] bg-white shadow-[0_8px_25px_rgba(15,23,42,0.05)]">
          <div className="flex flex-col justify-between gap-3 border-b border-[#e0e4ee] px-5 py-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <Headphones size={16} className="text-[#0075a8]" />

                <h3 className="text-sm font-bold text-[#11182f]">
                  Support Desk Live Telemetry
                </h3>
              </div>

              <p className="mt-1 text-[10px] text-[#667085]">
                Real-time queue health across all support channels.
              </p>
            </div>

            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              All Channels Online
            </span>
          </div>

          <div className="grid gap-4 px-5 py-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="rounded-lg border border-[#e0e4ee] bg-[#f8fafc] p-4"
                >
                  <Icon size={15} className="text-[#0075a8]" />

                  <p className="mt-2 text-lg font-bold text-[#11182f]">
                    {metric.value}
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#667085]">
                    {metric.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="divide-y divide-[#eef1f6] border-t border-[#e0e4ee]">
            {queueRows.map(([channel, staff, wait, tone]) => (
              <div
                key={channel}
                className="grid items-center gap-3 px-5 py-3.5 md:grid-cols-[1fr_140px_140px_90px]"
              >
                <p className="text-xs font-semibold text-[#11182f]">
                  {channel}
                </p>

                <p className="text-[10px] text-[#667085]">{staff}</p>

                <p className="text-[10px] text-[#667085]">{wait}</p>

                <span
                  className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-semibold ${toneClasses[tone]}`}
                >
                  Healthy
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportTelemetry;