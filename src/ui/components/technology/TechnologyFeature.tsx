import type { JSX } from "react";
import { CheckCircle2 } from "lucide-react";
import type { TechnologyFeatureType } from "./technologyFeatures";

interface TechnologyFeatureProps {
  feature: TechnologyFeatureType;
  reverse?: boolean;
}

const TechnologyFeature = ({
  feature,
  reverse = false,
}: TechnologyFeatureProps): JSX.Element => {
  return (
    <article className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div
        className={`mx-auto grid max-w-[1250px] items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Text */}
        <div>
          <span
            className={`inline-flex rounded-full bg-gradient-to-r ${feature.accent} px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white`}
          >
            {feature.eyebrow}
          </span>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#10182f] sm:text-3xl">
            {feature.title}
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500 sm:text-[15px]">
            {feature.description}
          </p>

          <ul className="mt-6 space-y-3">
            {feature.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm text-[#334259] sm:text-[14px]"
              >
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual Panel */}
        <div className="relative mx-auto w-full max-w-[420px]">
          <img
            src={feature.image}
            alt={feature.title}
            className="max-h-[340px] w-full rounded-2xl object-contain shadow-[0_18px_40px_rgba(15,23,42,0.18)]"
          />
        </div>
      </div>
    </article>
  );
};

export default TechnologyFeature;