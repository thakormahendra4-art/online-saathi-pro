import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export const useTestimonialCarousel = (total: number) => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isSwappingRef = useRef(false);

  const getIndex = useCallback(
    (index: number) => (index + total) % total,
    [total],
  );

  const getOffsetIndex = useCallback(
    (offset: number) => getIndex(activeIndex + offset),
    [activeIndex, getIndex],
  );

  const swapTo = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex || isSwappingRef.current) return;

      const delta = getIndex(nextIndex - activeIndex);
      const forward = delta === 1 || delta === 2;

      const card =
        carouselRef.current?.querySelector<HTMLElement>("[data-testimonial-card]");
      if (!card) {
        setActiveIndex(nextIndex);
        return;
      }

      isSwappingRef.current = true;

      gsap.to(card, {
        x: forward ? -90 : 90,
        autoAlpha: 0,
        scale: 0.92,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          isSwappingRef.current = false;
          setActiveIndex(nextIndex);
        },
      });
    },
    [activeIndex, getIndex],
  );

  const handlePrevious = useCallback(
    () => swapTo(getIndex(activeIndex - 1)),
    [swapTo, getIndex, activeIndex],
  );

  const handleNext = useCallback(
    () => swapTo(getIndex(activeIndex + 1)),
    [swapTo, getIndex, activeIndex],
  );

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(handleNext, 4000);

    return () => clearInterval(interval);
  }, [isPaused, activeIndex, handleNext]);

  useLayoutEffect(() => {
    const card = carouselRef.current?.querySelector<HTMLElement>(
      "[data-testimonial-card]",
    );
    if (!card) return;

    const items = card.querySelectorAll<HTMLElement>("[data-testimonial-item]");

    gsap.killTweensOf(card);
    gsap.killTweensOf(items);

    gsap
      .timeline()
      .fromTo(
        card,
        { x: 90, autoAlpha: 0, scale: 0.92 },
        { x: 0, autoAlpha: 1, scale: 1, duration: 0.5, ease: "power3.out" },
      )
      .fromTo(
        items,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: "power3.out",
        },
        "-=0.3",
      );
  }, [activeIndex]);

  return {
    activeIndex,
    isPaused,
    setIsPaused,
    carouselRef,
    getOffsetIndex,
    handlePrevious,
    handleNext,
    swapTo,
  };
};