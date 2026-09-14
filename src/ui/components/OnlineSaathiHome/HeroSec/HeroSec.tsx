import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "../../../../assets/home-assets/homeimg3.png";
import image2 from "../../../../assets/home-assets/Homeimg2.png";
import image3 from "../../../../assets/home-assets/Workers Image.png";
import Content from "./Content";

interface Slide {
  image: string;
  title: string;
  eyebrow?: string;
  description: string;
  stats: {
    value: string;
    label: string;}[];
}

const slides: Slide[] = [
  {
    image: image1,

    title: "Bridging Gaps for India's Unorganized Workforce",

    eyebrow: "Online Saathi",

    description:
      "Online Saathi has provided personalized job-matching services, helping over 12,500 individuals find work.",

    stats: [
      {
        value: "1500 +",
        label: "Saathis",
      },
      {
        value: "25 +",
        label: "State Partner",
      },
      {
        value: "100 +",
        label: "District Partner",
      },
    ],
  },

  {
    image: image2,

    title: "Fostering a Thriving Worker Community",

    eyebrow: "Online Saathi",

    description:
      "The platform has fostered a thriving community of workers and supporters, creating a network where individuals can grow, share experiences, and continuously improve their career prospects.",

    stats: [
      {
        value: "200 +",
        label: "Job offer",
      },
      {
        value: "50 +",
        label: "Services",
      },
      {
        value: "20 +",
        label: "Company",
      },
    ],
  },

  {
    image: image3,

    title: "Empowering Workers Across India",

    eyebrow: "Online Saathi",

    description:
      "Connecting workers with opportunities and services to help them build a better future.",

    stats: [
      {
        value: "5000 +",
        label: "Workers",
      },
      {
        value: "75 +",
        label: "Partners",
      },
      {
        value: "150 +",
        label: "Companies",
      },
    ],
  },
];


const HeroSec = () => {
      const [currentImage, setCurrentImage] = useState(0);

  // Next slide
  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % slides.length);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentImage];
  return (
    <div className="relative h-screen w-full overflow-hidden rounded-b-2xl shadow-xl shadow-black/60">
        {/* Background Images */}
        {slides.map((slide, index) => (
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
          {slides.map((_, index) => (
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