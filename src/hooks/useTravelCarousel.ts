import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

export const useTravelCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.realIndex + 1);
  };

  const slideTo = (index: number) => swiperRef?.slideToLoop(index);
  const slidePrev = () => swiperRef?.slidePrev();
  const slideNext = () => swiperRef?.slideNext();

  return {
    currentSlide,
    setSwiperRef,
    handleSlideChange,
    slideTo,
    slidePrev,
    slideNext,
  };
};