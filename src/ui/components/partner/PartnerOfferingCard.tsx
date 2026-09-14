type PartnerOfferingCardProps = {
  image: string;
  title: string;
  description: string;
};

const PartnerOfferingCard = ({
  image,
  title,
  description,
}: PartnerOfferingCardProps) => {
  return (
    <div
      className="
        group
        flex h-full flex-col
        rounded-2xl
        border border-[#dce3f2]
        bg-[#f1f3ff]
        p-6
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-[#b9dced]
        hover:bg-white
        hover:shadow-[0_18px_45px_rgba(20,100,150,0.14)]
        sm:p-7
      "
    >
      <div
        className="
          flex h-14 w-14 shrink-0 items-center justify-center
          rounded-xl
          bg-[#dce9f8]
          transition-all duration-300
          group-hover:bg-[#d7f1fb]
          group-hover:shadow-sm
        "
      >
        <img
          src={image}
          alt={title}
          className="h-9 w-9 object-contain"
        />
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold leading-snug text-[#101828]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#475467]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PartnerOfferingCard;