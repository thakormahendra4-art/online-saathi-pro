import { ChevronLeft, ChevronRight } from "lucide-react";

import { heroSlides } from "../../../data/homePageData";
import { useHeroCarousel } from "../../../../hooks/useHeroCarousel";
import Content from "./Content";

const HeroSec = () => {
  const { currentImage, nextSlide, prevSlide, setCurrentImage } =
    useHeroCarousel(heroSlides.length);

  const currentSlide = heroSlides[currentImage];
  return (
    <div className="relative h-screen w-full overflow-hidden rounded-b-2xl shadow-xl shadow-black/60">
        {/* Background Images */}
        {heroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={`Hero ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/75" />

        {/* Dynamic Content */}
        <Content
          eyebrow={currentSlide.eyebrow}
          title={currentSlide.title}
          description={currentSlide.description}
          stats={currentSlide.stats}
        />

        {/* Left Arrow */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/25 bg-white/10 p-2 text-white backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-white/20 sm:left-6 lg:left-8"
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/25 bg-white/10 p-2.5 text-white backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-white/20 sm:right-6 lg:right-8"
        >
          <ChevronRight size={28} strokeWidth={2} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2.5">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentImage(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentImage === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
  )
}

export default HeroSec