import { useHeroContentReveal } from "../../../../hooks/useHeroContentReveal";

interface Stat {
  value: string;
  label: string;
}

interface ContentProps {
  eyebrow?: string;
  title: string;
  description: string;
  stats: Stat[];
}

const Content = ({ eyebrow, title, description, stats }: ContentProps) => {
  const contentRef = useHeroContentReveal(eyebrow, title, description);

  return (
    <div
      ref={contentRef}
      className="relative z-10 mx-auto flex h-full w-full max-w-[1250px] items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8"
    >
      <div className="w-full py-20">
        {/* Eyebrow */}
        {eyebrow ? (
          <p
            data-hero-item
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#13a5df]" />
            {eyebrow}
          </p>
        ) : null}

        {/* Heading */}
        <h1
          data-hero-item
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight drop-shadow-md md:text-5xl lg:text-[56px] lg:leading-[1.12]"
        >
          {title}
        </h1>

        {/* Description */}
        <p
          data-hero-item
          className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-white/85 md:text-lg md:leading-8 lg:text-xl"
        >
          {description}
        </p>

        {/* Statistics */}
        <div
          data-hero-item
          className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-1 divide-y divide-white/15 rounded-2xl border border-white/15 bg-white/10 px-4 py-6 backdrop-blur-md sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="py-3 sm:py-0">
              <h2 className="text-3xl font-extrabold text-white">
                {stat.value}
              </h2>

              <p className="mt-1.5 text-sm font-medium text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Apply card */}
        <div
          data-hero-item
          className="mx-auto mt-10 flex w-full max-w-2xl flex-col items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/10 px-6 py-5 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:flex-row sm:px-8"
        >
          <p className="text-center text-base font-bold text-white sm:text-left sm:text-lg">
            Become a Saathi and
            <br />
            earn up to 20k
          </p>

          <a
            href="https://dash.onlinesaathi.org/login"
            className="shrink-0 rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50"
          >
            Apply now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;