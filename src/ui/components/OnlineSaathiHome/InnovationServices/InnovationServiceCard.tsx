import { ArrowUpRight, Briefcase, Landmark, LayoutGrid, Users } from "lucide-react";
import { Link } from "react-router";
import type { Innovation } from "../../../data/homePageData";

const innovationIcons = [LayoutGrid, Briefcase, Landmark, Users];

type InnovationServiceCardProps = {
  innovation: Innovation;
  index: number;
};

const InnovationServiceCard = ({
  innovation,
  index,
}: InnovationServiceCardProps) => {
  const Icon = innovationIcons[index % innovationIcons.length];

  return (
    <Link
      to={innovation.path}
      className="
        group flex h-full flex-col
        rounded-2xl border border-[#e0e5ee] bg-white p-7
        transition-all duration-300
        hover:-translate-y-1 hover:border-[#bcd7ec] hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]
      "
    >
      <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#e3f2ff] p-3 text-[#006b9e] transition-colors duration-300 group-hover:bg-[#d3eaff]">
        <Icon size={24} strokeWidth={1.8} />
      </div>

      <h3 className="mt-6 flex items-center gap-2 text-lg font-bold leading-snug text-[#10182f]">
        {innovation.title}
        <ArrowUpRight
          size={18}
          className="text-[#006b9e] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-[#475467]">
        Explore how Online Saathi supports you through {innovation.title}.
      </p>

      <span className="mt-5 text-sm font-semibold text-[#006b9e]">
        Learn more
      </span>
    </Link>
  );
};

export default InnovationServiceCard;