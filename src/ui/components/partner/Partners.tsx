import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image1 from "../../../assets/partner-assets/image 1.png";
import image2 from "../../../assets/partner-assets/image 2.png";
import image3 from "../../../assets/partner-assets/image 3.png";
import image4 from "../../../assets/partner-assets/image 4.png";
import image5 from "../../../assets/partner-assets/image 5.png";
import image6 from "../../../assets/partner-assets/image 6.png";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: "Prabhu Money Transfer", image: image1 },
  { name: "eKO", image: image2 },
  { name: "IME", image: image3 },
  { name: "Partner 4", image: image4 },
  { name: "Partner 5", image: image5 },
  { name: "Partner 6", image: image6 },
];

const Partners = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const items = [...track.children];
    const firstSet = items[0] as HTMLElement | undefined;
    const firstSetWidth = firstSet?.offsetWidth ?? 0;

    if (!firstSetWidth) return;

    const animation = gsap.fromTo(
      track,
      { x: -firstSetWidth },
      {
        x: 0,
        duration: 35,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          gsap.set(track, { x: -firstSetWidth });
        },
      },
    );

    return () => {
      animation.kill();
    };
  }, []);

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
