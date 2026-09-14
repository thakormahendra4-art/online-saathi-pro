import type { JSX } from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight?: string;
}

const BillPaymentFeatureCard = ({
  icon: Icon,
  title,
  description,
  highlight,
}: FeatureCardProps): JSX.Element => {
  return (
    <article className="group rounded-xl border border-[#e0e5ee] bg-white p-5 shadow-[0_3px_10px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9dff0] hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#deeffa] text-[#0078aa] transition-colors group-hover:bg-[#0078aa] group-hover:text-white">
          <Icon size={18} />
        </div>

        {highlight && (
          <span className="rounded-full bg-[#e3f2ff] px-2.5 py-1 text-[10px] font-semibold text-[#0078aa]">
            {highlight}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-sm font-bold text-[#10182f] sm:text-[15px]">
        {title}
      </h3>

      <p className="mt-1.5 text-xs leading-5 text-[#667085] sm:text-[13px]">
        {description}
      </p>
    </article>
  );
};

export default BillPaymentFeatureCard;