import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import {
  type TestimonialSlide,
  testimonialSlides,
} from "../../../data/homePageData";
import { useTestimonialCarousel } from "../../../../hooks/useTestimonialCarousel";

interface TestimonialCardProps {
  testimonial: TestimonialSlide;
  position: "far-left" | "left" | "center" | "right" | "far-right";
  active?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  position,
  active = false,
}) => {
  const positionClasses: Record<TestimonialCardProps["position"], string> = {
    "far-left": "left-[3%] scale-[0.88] opacity-60",
    left: "left-[16%] scale-[0.96] opacity-70",
    center: "left-1/2 -translate-x-1/2 scale-100 opacity-100",
    right: "right-[16%] scale-[0.96] opacity-70",
    "far-right": "right-[3%] scale-[0.88] opacity-60",
  };

  if (!active) {
    return (
      <div
        className={`
          absolute top-1/2 z-10 hidden w-[200px] -translate-y-1/2 transition-all
          duration-700 sm:block ${positionClasses[position]}
        `}
      >
        <div className="relative flex min-h-[320px] flex-col items-center overflow-hidden rounded-[14px] bg-[#e6eefb] px-6 py-6 text-center shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
          <Quote
            size={90}
            strokeWidth={1}
            className="pointer-events-none absolute -right-6 -top-6 rotate-12 text-[#bcd3f0]"
          />
          <div className="h-[90px] w-[90px] overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_4px_12px_rgba(50,105,216,0.15)]">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="mt-4 text-[15px] font-semibold text-[#5d6d7c]">
            {testimonial.name}
          </h3>

          <p className="mt-1.5 text-[12px] font-medium uppercase tracking-wider text-[#6b7c8c]">
            {testimonial.role}
          </p>

          <p className="mt-4 text-[13px] italic leading-6 text-[#708191]">
            &quot;{testimonial.quote}&quot;
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        absolute left-1/2 top-1/2 z-20 w-[92%] max-w-[280px] -translate-x-1/2 -translate-y-1/2
        sm:w-[360px] sm:max-w-none lg:w-[440px]
      `}
    >
      <div
        data-testimonial-card
        className="relative flex min-h-[430px] flex-col items-center overflow-hidden rounded-[16px] bg-gradient-to-b from-[#e8f0fb] via-[#d9e7f8] to-[#c8dcf4] px-6 py-8 text-center shadow-[0_22px_55px_rgba(50,105,216,0.16)] ring-1 ring-white/60 sm:min-h-[450px] sm:px-8 lg:min-h-[470px] lg:px-10"
      >
        {/* Top accent */}
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#3b9be8] via-[#0d5c84] to-[#3b9be8]" />

        {/* Watermark quote */}
        <Quote
          size={120}
          strokeWidth={1}
          className="pointer-events-none absolute -right-8 -top-8 rotate-12 text-white/70"
        />

        {/* Image */}
        <div
          data-testimonial-item
          className="relative
            h-[120px] w-[120px] overflow-hidden rounded-full border-[6px] border-white
            bg-white shadow-[0_8px_20px_rgba(50,105,216,0.25)]
            sm:h-[150px] sm:w-[150px]
          "
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Name */}
        <h3
          data-testimonial-item
          className="mt-5 text-[19px] font-bold text-[#2c3e56] sm:text-[21px]"
        >
          {testimonial.name}
        </h3>

        {/* Role */}
        <p
          data-testimonial-item
          className="mt-2 rounded-full bg-white/70 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3b7bb5]"
        >
          {testimonial.role}
        </p>

        {/* Quote */}
        <Quote data-testimonial-item size={22} className="mt-5 text-[#3b7bb5]" />

        <p
          data-testimonial-item
          className="mt-3 max-w-[420px] text-[15px] italic leading-[1.7] text-[#405467] sm:text-[16px]"
        >
          &quot;{testimonial.quote}&quot;
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const {
    activeIndex,
    setIsPaused,
    carouselRef,
    getOffsetIndex,
    handlePrevious,
    handleNext,
    swapTo,
  } = useTestimonialCarousel(testimonialSlides.length);

  return (
    <section
      className="w-full overflow-hidden bg-gradient-to-b from-[#f6f9ff] via-white to-[#edf4ff] py-14 sm:py-16 lg:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-[#c9e4f6] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d5c84] shadow-sm">
            Testimonials
          </span>

          <h2 className="mt-5 text-[30px] font-bold leading-tight text-[#303030] sm:text-[38px] lg:text-[42px]">
            What our community says
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#64748b] sm:text-base">
            Real stories from partners, agents, and users who experience
            Online Saathi every day.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-8 h-[450px] sm:mt-10 sm:h-[470px] lg:mt-12 lg:h-[490px]">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute left-[8%] top-[18%] -z-0 h-40 w-40 rounded-full bg-[#bcd9f5]/40 blur-3xl" />
          <div className="pointer-events-none absolute right-[8%] bottom-[12%] -z-0 h-44 w-44 rounded-full bg-[#d9e9fb]/50 blur-3xl" />
          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
            className="
              absolute left-0 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center
              justify-center rounded-full border border-[#d8e2f0] bg-white text-[#3b9be8]
              shadow-[0_3px_12px_rgba(0,0,0,0.08)] transition-all duration-300
              hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b9be8]
            "
          >
            <ChevronLeft size={30} strokeWidth={1.7} />
          </button>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="
              absolute right-0 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center
              justify-center rounded-full border border-[#d8e2f0] bg-white text-[#3b9be8]
              shadow-[0_3px_12px_rgba(0,0,0,0.08)] transition-all duration-300
              hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b9be8]
            "
          >
            <ChevronRight size={30} strokeWidth={1.7} />
          </button>

          {/* TESTIMONIALS */}
          <div ref={carouselRef} className="relative flex h-full items-center justify-center">
            <TestimonialCard
              testimonial={testimonialSlides[getOffsetIndex(-2)]}
              position="far-left"
            />

            <TestimonialCard
              testimonial={testimonialSlides[getOffsetIndex(-1)]}
              position="left"
            />

            <TestimonialCard
              testimonial={testimonialSlides[activeIndex]}
              position="center"
              active
            />

            <TestimonialCard
              testimonial={testimonialSlides[getOffsetIndex(1)]}
              position="right"
            />

            <TestimonialCard
              testimonial={testimonialSlides[getOffsetIndex(2)]}
              position="far-right"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {testimonialSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => swapTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-[#3b9be8]"
                  : "w-2.5 bg-[#c3d3e5] hover:bg-[#9db6d0]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;