import { useCallback, useEffect, useState } from "react";

export const useHeroCarousel = (slideCount: number) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentImage((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  }, [slideCount]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return { currentImage, nextSlide, prevSlide, setCurrentImage };
};