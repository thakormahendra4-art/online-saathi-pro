import type { JSX } from "react";
import {
  AlertTriangle,
  FileCheck,
  Info,
  Lightbulb,
  MessageSquare,
} from "lucide-react";
import Footer from "../components/Footer";
import { policySections } from "../data/termsConditionsPageData";
import type {
  CalloutInfo,
  CalloutKind,
  Point,
} from "../data/termsConditionsPageData";

const calloutStyles: Record<
  CalloutKind,
  { icon: typeof Info; box: string; iconColor: string }
> = {
  important: {
    icon: Info,
    box: "border-[#b7d9f5] bg-[#e8f4ff]",
    iconColor: "text-[#0b4a7a]",
  },
  note: {
    icon: Info,
    box: "border-[#c8e3f5] bg-[#eff8ff]",
    iconColor: "text-[#0c5c7c]",
  },
  tip: {
    icon: Lightbulb,
    box: "border-[#bfe6cf] bg-[#eafaf1]",
    iconColor: "text-[#14603a]",
  },
  warning: {
    icon: AlertTriangle,
    box: "border-[#f3d9ad] bg-[#fff6e8]",
    iconColor: "text-[#7a4a08]",
  },
  advice: {
    icon: MessageSquare,
    box: "border-[#c6d9f2] bg-[#f0f7ff]",
    iconColor: "text-[#25497a]",
  },
};

const isCallout = (point: Point): point is CalloutInfo =>
  typeof point !== "string";

const CalloutBox = ({ callout }: { callout: CalloutInfo }) => {
  const style = calloutStyles[callout.kind];
  const Icon = style.icon;

  return (
    <div className={`rounded-xl border p-4 ${style.box}`}>
      <div className="flex items-start gap-3">
        <Icon size={18} className={`mt-0.5 shrink-0 ${style.iconColor}`} />
        <p className="text-sm leading-6 text-[#334155] sm:text-[15px] sm:leading-7">
          <span className="font-semibold capitalize">{callout.kind}: </span>
          {callout.body}
        </p>
      </div>
    </div>
  );
};

const PointList = ({ points }: { points: Point[] }) => (
  <div className="mt-5 space-y-3">
    {points.map((point, index) =>
      isCallout(point) ? (
        <CalloutBox key={index} callout={point} />
      ) : (
        <div key={index} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0078aa]" />
          <p className="text-sm leading-6 text-[#475467] sm:text-[15px] sm:leading-7">
            {point}
          </p>
        </div>
      ),
    )}
  </div>
);

const TermsConditionsPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#f3f4fb]">
      {/* Hero */}
      <section className="bg-[#0f172a] px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-[1250px]">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#ade7ff]">
              <FileCheck size={22} />
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ade7ff]">
              Legal &amp; Policies
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
                Terms &amp; Conditions
              </h1>

              <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-[15px]">
                Governs your use of the Online Saathi Platform and the services
                offered through it.
              </p>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-400">
              By accessing or using the Platform, you agree to be legally bound
              by these Terms. If you do not agree, please do not use the
              Platform.
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

                  {section.points && <PointList points={section.points} />}

                  {section.subSections && (
                    <div className="mt-6 space-y-6">
                      {section.subSections.map((sub) => (
                        <div key={sub.heading}>
                          <h3 className="flex items-center gap-2.5 text-base font-semibold text-[#10182f] sm:text-lg">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#0078aa]" />
                            {sub.heading}
                          </h3>

                          {sub.points && <PointList points={sub.points} />}
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}

            <div className="rounded-2xl border border-[#cfe0ef] bg-[#e8f4fb] p-6 sm:p-8">
              <p className="text-sm font-semibold text-[#0f3c5c] sm:text-[15px]">
                By continuing to use Online Saathi's services, you acknowledge
                that you have read, understood, and agreed to these Terms &amp;
                Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditionsPage;