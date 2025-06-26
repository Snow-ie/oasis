"use client";

import { useState } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { testimonials } from "../data/testimonial";

export default function TestimonialsSection() {
  const [i, set] = useState(0);

  const prev = () => set((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => set((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const { name, avatar, quote } = testimonials[i];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Heading */}
        <h2 className="text-lg sm:text-xl lg:text-3xl font-bold leading-tight flex-shrink-0">
          What&nbsp;Our&nbsp;5,000&nbsp;+
          <br className="hidden lg:block" />
          Customers&nbsp;Say
        </h2>

        {/* Testimonial Card */}
        <div
          className="
            relative flex-1 flex items-center gap-6
            max-w-full lg:max-w-xl
            lg:overflow-visible           /* keeps mobile buttons visible */
          "
        >
          {/* Blue wedge */}
          <div className="shrink-0 w-24 h-24 bg-primary [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)]" />

          {/* Quote + author */}
          <div className="flex-1 space-y-6">
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {quote}
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={avatar}
                alt={name}
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <span className="font-semibold">{name}</span>
            </div>
          </div>

          {/* Mobile & tablet controls (below card) */}
          <div className="flex gap-6 lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2">
            <button
              onClick={prev}
              aria-label="Prev"
              className="text-primary hover:text-primary-dark"
            >
              <HiChevronLeft size={28} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="text-primary hover:text-primary-dark"
            >
              <HiChevronRight size={28} />
            </button>
          </div>

          {/* Desktop controls (inside right edge) */}
          <button
            onClick={prev}
            aria-label="Prev"
            className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 text-primary hover:text-primary-dark"
          >
            <HiChevronLeft size={32} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:text-primary-dark"
          >
            <HiChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
