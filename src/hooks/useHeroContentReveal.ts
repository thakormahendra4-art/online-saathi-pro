import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const useHeroContentReveal = (
  eyebrow?: string,
  title?: string,
  description?: string,
) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-item]",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.12,
          clearProps: "all",
        },
      );
    }, contentRef);

    return () => context.revert();
  }, [eyebrow, title, description]);

  return contentRef;
};