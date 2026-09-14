import { Check, RotateCw, type LucideIcon } from "lucide-react";

type PartnershipTypeCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  number?: string;
  items?: string[];
};

const PartnershipTypeCard = ({
  title,
  description,
  icon: Icon,
  number,
  items,
}: PartnershipTypeCardProps) => {
  const hasDetailList = Boolean(items && items.length > 0);

  return (
    <div className="group h-full [perspective:1200px]">
      <div className="relative h-full min-h-[380px] w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl border border-[#e0e6f2] bg-white p-8 text-center shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-shadow duration-300 group-hover:shadow-[0_22px_45px_rgba(8,125,245,0.12)] [backface-visibility:hidden]">
          <div className="relative">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e3f2ff] to-[#cfE9fb] text-[#0d5c84] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:from-[#0d5c84] group-hover:to-[#006b9e] group-hover:text-white">
              <Icon size={28} strokeWidth={1.8} />
            </div>

            {number && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-[#c9e4f6] bg-white text-[11px] font-bold text-[#0d5c84] shadow-sm">
                {number}
              </span>
            )}
          </div>

          <h3 className="text-[24px] font-bold leading-tight tracking-[-0.03em] text-[#10182f] sm:text-[26px]">
            {title}
          </h3>

          <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-[#b5c7e0] text-[#98a2b3] transition-all duration-300 group-hover:border-[#0d5c84] group-hover:text-[#0d5c84]">
            <RotateCw size={14} strokeWidth={2} />
          </span>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col justify-center overflow-hidden rounded-2xl border border-[#c9e4f6] bg-gradient-to-br from-white via-[#f1f6ff] to-[#e8f4ff] p-7 shadow-[0_18px_40px_rgba(15,23,42,0.08)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#13a5df]/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-14 -left-14 h-36 w-36 rounded-full bg-[#087df5]/10 blur-2xl" />

          <Icon size={26} strokeWidth={1.8} className="text-[#0d5c84]" />

          <p className="mt-3 text-[15px] font-medium leading-6 text-[#10182f]">
            {description}
          </p>

          {hasDetailList && (
            <ul className="mt-5 space-y-3">
              {items!.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-5 text-[#475467]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#087df5]/10 text-[#087df5]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnershipTypeCard;