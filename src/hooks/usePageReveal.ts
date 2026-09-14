import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const usePageReveal = (
  rootRef: RefObject<HTMLElement | null>,
  key: string
) => {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const page = (root.firstElementChild as HTMLElement | null) ?? root;
    const sections = Array.from(page.children).filter(
      (el): el is HTMLElement => el instanceof HTMLElement
    );

    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 48 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, [rootRef, key]);
};