import { CheckCircle2 } from "lucide-react";

type EntrepreneurBenefitCardProps = {
  benefit: string;
  index: number;
};

const EntrepreneurBenefitCard = ({
  benefit,
  index,
}: EntrepreneurBenefitCardProps) => {
  return (
    <div
      className="
        flex items-center gap-4
        rounded-2xl border border-[#e0e5ee] bg-white p-5
        transition-all duration-300
        hover:-translate-y-0.5 hover:border-[#bcd7ec] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)]
      "
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e3f2ff] text-[#006b9e]">
        <span className="text-sm font-bold">{String(index + 1).padStart(2, "0")}</span>
      </div>

      <p className="flex-1 text-[15px] font-semibold leading-6 text-[#10182f]">
        {benefit}
      </p>

      <CheckCircle2 size={20} className="shrink-0 text-[#0aa5a0]" />
    </div>
  );
};

export default EntrepreneurBenefitCard;