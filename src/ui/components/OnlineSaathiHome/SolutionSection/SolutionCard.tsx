import {
  ArrowLeftRight,
  Cpu,
  TrendingUp,
  Users,
} from "lucide-react";
import type { Solution } from "../../../data/homePageData";

const solutionIcons = [Users, ArrowLeftRight, Cpu, TrendingUp];

type SolutionCardProps = {
  solution: Solution;
};

const SolutionCard = ({ solution }: SolutionCardProps) => {
  const index = ["TRUST", "TRANSACTIONS", "TECHNOLOGY", "TRENDS"].indexOf(
    solution.key,
  );
  const Icon = solutionIcons[(index >= 0 ? index : 0) % solutionIcons.length];

  return (
    <div
      className="
        group h-full rounded-2xl border border-white/10
        bg-white/5 p-7 text-center
        transition-all duration-300
        hover:-translate-y-1 hover:border-[#ade7ff] hover:bg-white/10
      "
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ade7ff]/10 text-[#ade7ff] transition-colors duration-300 group-hover:bg-[#ade7ff]/20">
        <Icon size={26} strokeWidth={1.7} />
      </div>

      <h3 className="mt-6 text-xl font-bold leading-tight tracking-[0.08em] text-white">
        {solution.key}
      </h3>

      <p className="mt-2 text-sm leading-5 text-slate-300">
        {solution.tagline}
      </p>
    </div>
  );
};

export default SolutionCard;