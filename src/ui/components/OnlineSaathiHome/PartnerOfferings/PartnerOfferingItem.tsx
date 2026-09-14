import type { PartnerOffering } from "../../../data/homePageData";

type PartnerOfferingItemProps = {
  offering: PartnerOffering;
};

const PartnerOfferingItem = ({ offering }: PartnerOfferingItemProps) => {
  return (
    <div
      className="
        group flex h-full flex-col
        rounded-2xl border border-[#dce3f2] bg-[#f1f3ff] p-6
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:border-[#b9dced] hover:bg-white hover:shadow-[0_18px_45px_rgba(20,100,150,0.14)]
        sm:p-7
      "
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#dce9f8] transition-all duration-300 group-hover:bg-[#d7f1fb] group-hover:shadow-sm">
        <img
          src={offering.image}
          alt={offering.title}
          className="h-9 w-9 object-contain"
        />
      </div>

      <h3 className="mt-6 text-lg font-semibold leading-snug text-[#101828]">
        {offering.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-[#475467]">
        {offering.description}
      </p>
    </div>
  );
};

export default PartnerOfferingItem;