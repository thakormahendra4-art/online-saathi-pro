import type { JSX } from "react";
import { Lock } from "lucide-react";
import Footer from "../components/Footer";
import { policySections } from "../data/privacyPolicyPageData";
import type { Point } from "../data/privacyPolicyPageData";

const PointList = ({ points }: { points: Point[] }) => (
  <div className="mt-5 space-y-3">
    {points.map((point, index) => (
      <div key={index} className="flex items-start gap-3">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0078aa]" />
        <p className="text-sm leading-6 text-[#475467] sm:text-[15px] sm:leading-7">
          {point}
        </p>
      </div>
    ))}
  </div>
);

const PrivacyPolicyPage = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-[#f3f4fb]">
      {/* Hero */}
      <section className="bg-[#0f172a] px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-[1250px]">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#ade7ff]">
              <Lock size={22} />
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ade7ff]">
              Legal &amp; Policies
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
                Privacy Policy
              </h1>

              <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-[15px]">
                Explains how we collect, use, and protect your personal
                information.
              </p>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-400">
              Your trust is at the heart of our services — we follow applicable
              Indian laws, regulations, and guidelines to keep your data safe.
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
                Your continued use of Online Saathi services means you agree to
                the terms outlined in this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;