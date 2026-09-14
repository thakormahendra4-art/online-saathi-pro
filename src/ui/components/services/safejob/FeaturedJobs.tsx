import { useState, type JSX } from "react";
import { ArrowRight, ArrowUpRight, BedDouble, MapPin, Timer } from "lucide-react";
import { Link } from "react-router";

interface Job {
  date: string;
  company: string;
  location: string;
  experience: string;
  details: string;
  perks: string;
  wage: string;
}

const jobs: Job[] = [
  {
    date: "12 Sep, 2025",
    company: "Shree Balaji Constructions",
    location: "Gujarat",
    experience: "4 Years",
    details: "Need 60 Labours for Construction of Apartment Towers",
    perks: "Free Food & Accommodation",
    wage: "₹500 - 700 Per Day",
  },
  {
    date: "10 Sep, 2025",
    company: "Ram Textiles & Exports",
    location: "Surat, Gujarat",
    experience: "2 Years",
    details: "Hiring 40 Weaving Machine Operators for Textile Unit",
    perks: "Night Shift Allowance",
    wage: "₹450 - 650 Per Day",
  },
  {
    date: "08 Sep, 2025",
    company: "Sunrise Packaging Pvt Ltd",
    location: "Delhi NCR",
    experience: "1 Year",
    details: "25 Packers required for FMCG Packaging Line",
    perks: "Health Insurance",
    wage: "₹400 - 550 Per Day",
  },
  {
    date: "05 Sep, 2025",
    company: "Ganga Brick Works",
    location: "Bihar",
    experience: "3 Years",
    details: "50 Workers needed for Auto Brick Manufacturing Plant",
    perks: "Free Accommodation & Food",
    wage: "₹600 - 800 Per Day",
  },
  {
    date: "01 Sep, 2025",
    company: "Evergreen Agro Farms",
    location: "Punjab",
    experience: "2 Years",
    details: "Seasonal harvesting staff required for 120-acre farm",
    perks: "Transport Provided",
    wage: "₹500 - 650 Per Day",
  },
  {
    date: "28 Aug, 2025",
    company: "Metro Steel & Fabrication",
    location: "Maharashtra",
    experience: "5 Years",
    details: "15 Welder/Fabricators for Bridge Project",
    perks: "Safety Gear & Bonus",
    wage: "₹700 - 900 Per Day",
  },
  {
    date: "25 Aug, 2025",
    company: "Sai Logistics Hub",
    location: "Hyderabad, Telangana",
    experience: "1 Year",
    details: "30 Warehouse Helpers and Loaders required",
    perks: "Weekly Payout",
    wage: "₹450 - 600 Per Day",
  },
  {
    date: "21 Aug, 2025",
    company: "Durga Paint & Chemicals",
    location: "Rajasthan",
    experience: "2 Years",
    details: "20 Labourers needed for Paint Manufacturing Plant",
    perks: "Free Lunch & Canteen",
    wage: "₹500 - 700 Per Day",
  },
  {
    date: "18 Aug, 2025",
    company: "Himalaya Marble Pvt Ltd",
    location: "Uttarakhand",
    experience: "3 Years",
    details: "Stone cutter and polishing staff needed",
    perks: "Skill Training Provided",
    wage: "₹600 - 850 Per Day",
  },
  {
    date: "14 Aug, 2025",
    company: "Prime Electrical Works",
    location: "Karnataka",
    experience: "2 Years",
    details: "10 Electrician helpers for residential projects",
    perks: "Full Attendance Bonus",
    wage: "₹550 - 750 Per Day",
  },
  {
    date: "10 Aug, 2025",
    company: "Aroma Spice Exports",
    location: "Kerala",
    experience: "1 Year",
    details: "Sorting and packing staff for spice export unit",
    perks: "Accommodation Available",
    wage: "₹450 - 600 Per Day",
  },
  {
    date: "05 Aug, 2025",
    company: "Shivam Auto Components",
    location: "Tamil Nadu",
    experience: "2 Years",
    details: "Assembly line workers for automobile parts plant",
    perks: "PF & ESI Benefits",
    wage: "₹500 - 700 Per Day",
  },
];

const INITIAL_VISIBLE = 6;

const FeaturedJobs = (): JSX.Element => {
  const [showAll, setShowAll] = useState(false);
  const visibleJobs = showAll ? jobs : jobs.slice(0, INITIAL_VISIBLE);

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
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-md border border-[#0075a8] px-5 py-3 text-sm font-semibold text-[#0075a8] transition hover:bg-[#f4fbff]"
          >
            {showAll ? "Show Less Jobs" : "Explore More Jobs"}
            {showAll ? <ArrowUpRight size={14} /> : <ArrowRight size={14} />}
          </button>

          {!showAll && (
            <p className="mt-3 text-xs text-[#667085]">
              Showing {INITIAL_VISIBLE} of {jobs.length} verified jobs
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;