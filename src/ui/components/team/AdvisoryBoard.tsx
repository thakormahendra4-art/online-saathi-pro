import type { JSX } from "react";
import { advisors } from "../../data/teamPageData";

const AdvisoryBoard = (): JSX.Element => {
  return (
    <section className="px-5 py-8 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <h2 className="text-3xl font-bold text-[#11182f] sm:text-4xl">
          Advisory Board
        </h2>

        <p className="mt-1 text-xs text-[#667085] sm:text-[15px]">
          Industry veterans providing strategic oversight and governance.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {advisors.map((advisor) => (
            <article
              key={advisor.name}
              className="flex items-center gap-4 rounded-xl border border-[#e0e4ee] bg-white p-4 shadow-[0_4px_14px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.1)] sm:p-5"
            >
              <div
                className={`flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${advisor.gradient}`}
              >
                <span className="text-2xl font-bold text-white/95">
                  {advisor.initials}
                </span>
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-bold text-[#11182f] sm:text-base">
                  {advisor.name}
                </h3>

                <p className="mt-0.5 text-xs font-semibold text-[#0075a8] sm:text-[13px]">
                  {advisor.role}
                </p>

                <p className="mt-2 text-xs leading-5 text-[#667085] sm:text-[13px]">
                  {advisor.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoard;