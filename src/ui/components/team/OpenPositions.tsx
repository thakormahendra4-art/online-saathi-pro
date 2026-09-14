import type { JSX } from "react";
import { ArrowRight } from "lucide-react";

interface Position {
  title: string;
  meta: string;
}

const positions: Position[] = [
  {
    title: "Senior Backend Engineer - Core Banking",
    meta: "Engineering • Bangalore / Remote • Full-Time",
  },
  {
    title: "Product Designer - Design Systems",
    meta: "Design • Mumbai / Hybrid • Full-Time",
  },
  {
    title: "Compliance & Risk Officer",
    meta: "Legal & Risk • Delhi NCR • Full-Time",
  },
];

const OpenPositions = (): JSX.Element => {
  return (
    <section className="px-5 py-8 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-[#11182f] sm:text-4xl">
              Join Our Mission
            </h2>

            <p className="mt-1 text-xs text-[#667085] sm:text-sm">
              Explore open roles and build the future of money with us.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#13a5df] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_6px_16px_rgba(19,165,223,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0796d0] hover:shadow-lg"
          >
            View All Openings
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="mt-7 space-y-3">
          {positions.map((position) => (
            <div
              key={position.title}
              className="flex flex-col gap-4 rounded-xl border border-[#e0e4ee] bg-white p-4 shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b9dff0] hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)] sm:flex-row sm:items-center sm:justify-between sm:px-5"
            >
              <div>
                <h3 className="text-sm font-bold text-[#11182f] sm:text-base">
                  {position.title}
                </h3>

                <p className="mt-1 text-xs text-[#667085] sm:text-[13px]">
                  {position.meta}
                </p>
              </div>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-lg border border-[#dce4ee] px-4 py-2 text-xs font-medium text-[#0075a8] transition hover:border-[#8ecde7] hover:bg-[#f3fbfe] sm:w-[75px]"
              >
                Apply
                <span className="ml-1">Now</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;