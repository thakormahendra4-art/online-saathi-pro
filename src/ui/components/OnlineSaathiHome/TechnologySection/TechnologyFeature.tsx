import {
  Briefcase,
  Laptop,
  Landmark,
  LifeBuoy,
  MapPin,
  Truck,
} from "lucide-react";
import type { TechnologyItem } from "../../../data/homePageData";

const technologyIcons = [Laptop, Truck, LifeBuoy, MapPin, Briefcase, Landmark];

type TechnologyFeatureProps = {
  tech: TechnologyItem;
  index: number;
};

const TechnologyFeature = ({ tech, index }: TechnologyFeatureProps) => {
  const Icon = technologyIcons[index % technologyIcons.length];

  return (
    <div
      className="
        group flex h-full items-center gap-4
        rounded-2xl border border-[#e0e5ee] bg-white p-6
        transition-all duration-300
        hover:-translate-y-1 hover:border-[#bcd7ec] hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]
        sm:p-7
      "
    >
      <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-[#e3f2ff] p-3 text-[#006b9e] transition-colors duration-300 group-hover:bg-[#d3eaff]">
        <Icon size={24} strokeWidth={1.8} />
      </div>

      <h3 className="text-base font-bold leading-snug text-[#10182f] sm:text-lg">
        {tech.title}
      </h3>
    </div>
  );
};

export default TechnologyFeature;