import type { JSX } from "react";

interface SaathiNetworkCardProps {
  value: string;
  label: string;
}

const SaathiNetworkCard = ({
  value,
  label,
}: SaathiNetworkCardProps): JSX.Element => {
  return (
    <div className="rounded-xl border border-[#e0e5ee] bg-white px-4 py-5 text-center shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]">
      <p className="text-2xl font-bold text-[#0075a8] sm:text-3xl">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-semibold text-[#667085] sm:text-[11px]">
        {label}
      </p>
    </div>
  );
};

export default SaathiNetworkCard;