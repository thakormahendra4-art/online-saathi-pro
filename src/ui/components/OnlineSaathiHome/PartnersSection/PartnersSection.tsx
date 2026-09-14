import { partners } from "../../../data/homePageData";
import { useMarquee } from "../../../../hooks/useMarquee";

const PartnersSection = () => {
  const trackRef = useMarquee();

  return (
    <section className="w-full bg-[#f3f4fb] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#006b9e]">
            Our Partners
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#11182d] sm:text-4xl lg:text-[40px]">
            Trusted by leading companies
          </h2>
        </div>

        <div className="mx-auto mt-10 flex w-full justify-center overflow-hidden">
          <div className="relative flex h-28 w-full items-center overflow-hidden rounded-2xl border border-[#e0e5ee] bg-white">
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
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;