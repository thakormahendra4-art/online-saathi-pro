import { partners } from "../../data/partnerPageData";
import { useMarquee } from "../../../hooks/useMarquee";

const Partners = () => {
  const trackRef = useMarquee();

  return (
    <section className="mx-auto flex w-full justify-center overflow-hidden py-10 md:py-12">
      <div className="relative flex h-28 w-full items-center overflow-hidden bg-white">
        <div ref={trackRef} className="flex w-max">
          <div className="flex shrink-0">
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex h-28 w-44 shrink-0 items-center justify-center px-3"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-14 max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex shrink-0">
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex h-28 w-44 shrink-0 items-center justify-center px-3"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-14 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/85 to-transparent sm:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/85 to-transparent sm:w-24"
        />
      </div>
    </section>
  );
};

export default Partners;
