import { HandCoins, Layers, Monitor } from "lucide-react";
import type { Strength } from "../../../data/homePageData";

const strengthIcons = [Monitor, HandCoins, Layers];

type StrengthCardProps = {
  strength: Strength;
  index: number;
};

const StrengthCard = ({ strength, index }: StrengthCardProps) => {
  const Icon = strengthIcons[index % strengthIcons.length];

  return (
    <div
      className="
        group flex h-full flex-col
        rounded-2xl border border-[#e0e5ee] bg-[#f7f8ff] p-7
        transition-all duration-300
        hover:-translate-y-1 hover:border-[#bcd7ec] hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]
      "
    >
      <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-white p-3 text-[#006b9e] shadow-sm">
        <Icon size={24} strokeWidth={1.8} />
      </div>

      <h3 className="mt-6 text-xl font-bold leading-snug text-[#10182f]">
        {strength.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-[#475467]">
        {strength.description}
      </p>
    </div>
  );
};

export default StrengthCard;