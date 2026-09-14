import type { JSX } from "react";
import { ArrowRight, ArrowUpRight, BedDouble, MapPin, Timer } from "lucide-react";
import { Link } from "react-router";
import { useFeaturedJobs } from "../../../../hooks/useFeaturedJobs";

const FeaturedJobs = (): JSX.Element => {
  const {
    showAll,
    visibleJobs,
    totalJobs,
    initialVisible,
    toggleShowAll,
  } = useFeaturedJobs();

  return (
    <section id="featured-jobs" className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1250px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#10182f] sm:text-4xl">
            Featured Jobs
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#667085] sm:text-[15px]">
            Verified opportunities matched to your skills, with Saathi support
            at every step.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleJobs.map((job) => (
            <article
              key={job.details + job.company}
              className="rounded-xl border border-[#e0e5ee] bg-white p-6 shadow-[0_4px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]"
            >
              <p className="text-[10px] font-medium text-[#667085] sm:text-[11px]">
                {job.date}
              </p>

              <h3 className="mt-1 text-base font-bold text-[#10182f]">
                {job.company}
              </h3>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#334259] sm:text-xs">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={13} className="text-[#0078aa]" />
                  {job.location}
                </span>

                <span className="inline-flex items-center gap-1">
                  <Timer size={13} className="text-[#0078aa]" />
                  {job.experience}
                </span>
              </div>

              <p className="mt-4 text-xs leading-5 text-[#667085] sm:text-[13px]">
                {job.details}
              </p>

              <p className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-[#f0f7fc] px-3 py-1.5 text-[11px] font-medium text-[#0078aa]">
                <BedDouble size={13} />
                {job.perks}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-[#edf1f6] pt-4">
                <p className="text-sm font-bold text-[#0075a8]">
                  {job.wage.split(" Per Day")[0]}
                  <span className="ml-1 text-[10px] font-medium text-[#667085]">
                    Per Day
                  </span>
                </p>

                <Link
                  to="/contact"
                  className="rounded-md bg-[#0075a8] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#00658f]"
                >
                  Apply
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={toggleShowAll}
            className="inline-flex items-center gap-2 rounded-md border border-[#0075a8] px-5 py-3 text-sm font-semibold text-[#0075a8] transition hover:bg-[#f4fbff]"
          >
            {showAll ? "Show Less Jobs" : "Explore More Jobs"}
            {showAll ? <ArrowUpRight size={14} /> : <ArrowRight size={14} />}
          </button>

          {!showAll && (
            <p className="mt-3 text-xs text-[#667085]">
              Showing {initialVisible} of {totalJobs} verified jobs
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;