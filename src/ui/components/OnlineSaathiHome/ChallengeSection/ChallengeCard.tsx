import {
  EyeOff,
  FileText,
  HelpCircle,
  Info,
  Lock,
  TrendingDown,
} from "lucide-react";
import type { Challenge } from "../../../data/homePageData";

const challengeIcons = [
  Lock,
  EyeOff,
  TrendingDown,
  Info,
  FileText,
  HelpCircle,
];

type ChallengeCardProps = {
  challenge: Challenge;
  index: number;
};

const ChallengeCard = ({ challenge, index }: ChallengeCardProps) => {
  const Icon = challengeIcons[index % challengeIcons.length];

  return (
    <div
      className="
        group flex h-full flex-col
        rounded-2xl
        border border-[#e0e5ee]
        bg-[#f7f8ff]
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#bcd7ec]
        hover:bg-white
        hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]
        sm:p-7
      "
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#006b9e] shadow-sm">
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <h3 className="mt-5 text-lg font-bold leading-snug text-[#10182f]">
        {challenge.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#475467]">
        {challenge.description}
      </p>
    </div>
  );
};

export default ChallengeCard;