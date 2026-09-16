"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

type Testimonial = {
  name: string;
  country: string;
  image: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ayesha Khan",
    country: "Germany",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Thanks to Badder Zaman Consultancy, I got DAAD scholarship. Their guidance was excellent!",
  },
  {
    name: "Muhammad Ali",
    country: "Australia",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "I received my visa within 3 weeks! Highly professional team and great support throughout.",
  },
  {
    name: "Fatima Noor",
    country: "Canada",
    image: "https://i.pravatar.cc/150?img=44",
    review:
      "They helped me secure fully funded scholarship in Canada. Highly recommended!",
  },
  {
    name: "Hassan Ahmed",
    country: "UK",
    image: "https://i.pravatar.cc/150?img=11",
    review:
      "The team guided me throughout the complete application process. Everything was very smooth.",
  },
  {
    name: "Sara Malik",
    country: "Italy",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Amazing support from start to finish. I would definitely recommend their consultancy.",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Get 4 cards for desktop
  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className="relative pt-1">
      <div className="relative">

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
   {visibleTestimonials.map((testimonial, index) => (
     <article
      key={`${testimonial.name}-${index}`}
      className={`
        rounded-[22px] border border-slate-100 bg-white p-6
        shadow-sm transition-all duration-500
        hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl
        ${index === 1 ? "hidden md:block" : ""}
        ${index === 2 ? "hidden lg:block" : ""}
        ${index === 3 ? "hidden lg:block" : ""}
      `}
    >
      {/* User */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <h3 className="text-sm font-bold text-slate-950">
            {testimonial.name}
          </h3>

          <p className="text-xs text-slate-500">
            {testimonial.country}
          </p>
        </div>
      </div>

      {/* Stars */}
      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}
      <p className="mt-5 text-sm leading-7 text-slate-600">
        {testimonial.review}
      </p>

      {/* Quote */}
      <div className="mt-4 flex justify-end">
        <Quote
          size={30}
          className="fill-blue-600 text-blue-600"
        />
      </div>
    </article>
  ))}
</div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-md transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white md:flex"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="absolute right-0 top-1/2 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-md transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white md:flex"
        >
          <ChevronRight size={20} />
        </button>

        {/* Mobile Arrows */}
        <div className="mt-6 flex justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-sm transition hover:bg-blue-600 hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-sm transition hover:bg-blue-600 hover:text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-6 bg-blue-600"
                  : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}