import type { JSX } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { travelSlides } from "../../../data/travelPageData";
import { useTravelCarousel } from "../../../../hooks/useTravelCarousel";

const TravelHero = (): JSX.Element => {
  const {
    currentSlide,
    setSwiperRef,
    handleSlideChange,
    slideTo,
    slidePrev,
    slideNext,
  } = useTravelCarousel();

  return (
    <section className="bg-[#f9f8ff] px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16 lg:pt-14">
      <div className="mx-auto max-w-[1250px]">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-[#e3f2ff] px-3 py-1.5 text-[10px] font-semibold text-[#0078aa] sm:text-[11px]">
            ✈ Travel Services
          </span>

          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#10182f] sm:text-5xl">
            Become an Online
            <span className="block text-[#0075a8]">Travel Agent</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#667085] sm:text-[15px] sm:leading-7">
            Book bus, train, hotel, and flight tickets for your customers —
            earn commissions on every reservation through a single platform.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-10">
          <Swiper
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Autoplay]}
            spaceBetween={0}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiperRef}
            className="travel-swiper !overflow-hidden"
          >
            {travelSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="grid min-h-[420px] items-stretch overflow-hidden rounded-2xl border border-[#e0e5ee] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:min-h-[480px] lg:grid-cols-2">
                  {/* Left: content */}
                  <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
                    <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[#deeffa] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0078aa] sm:text-[11px]">
                      {slide.tag}
                    </span>

                    <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#10182f] sm:text-3xl lg:text-[34px]">
                      {slide.title}
                      <br />
                      {slide.titleBreak}
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-[#667085] sm:text-[15px] sm:leading-7">
                      {slide.description}
                    </p>

                    <div className="mt-6 h-1 w-16 rounded-full bg-[#0075a8]" />
                  </div>

                  {/* Right: image */}
                  <div className="flex items-center justify-center bg-gradient-to-br from-[#f2f6fb] to-[#e3f2ff] px-6 py-8 sm:px-10 sm:py-10 lg:px-0 lg:py-0">
                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="h-[200px] w-full max-w-[380px] rounded-xl object-contain sm:h-[260px] sm:max-w-[420px] lg:h-[300px] lg:max-w-[460px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls row */}
          <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
            {/* Feature pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { icon: "💸", text: "Best Prices" },
                { icon: "⏳", text: "Last Minute" },
                { icon: "🌐", text: "20K+ Destinations" },
                { icon: "✅", text: "Trusted" },
                { icon: "🤝", text: "On Your Side" },
              ].map((f) => (
                <div
                  key={f.text}
                  className="flex items-center gap-1.5 rounded-full border border-[#e0e5ee] bg-white px-3 py-1.5 text-[10px] font-medium text-[#334259] shadow-[0_1px_4px_rgba(15,23,42,0.04)] sm:text-[11px]"
                >
                  <span className="text-sm leading-none">{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>

            {/* Counter + nav */}
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-[#10182f]">
                {String(currentSlide).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-1.5">
                {travelSlides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => slideTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === i + 1
                        ? "w-6 bg-[#0075a8]"
                        : "w-2 bg-[#d0d8e4] hover:bg-[#b0bcc8]"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <span className="text-2xl font-bold text-[#c7d4e0]">
                {String(travelSlides.length).padStart(2, "0")}
              </span>

              <div className="ml-1 flex gap-1.5">
                <button
                  type="button"
                  onClick={slidePrev}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e0e5ee] bg-white text-[#667085] transition hover:border-[#0075a8] hover:text-[#0075a8]"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  type="button"
                  onClick={slideNext}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e0e5ee] bg-white text-[#667085] transition hover:border-[#0075a8] hover:text-[#0075a8]"
                  aria-label="Next slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelHero;