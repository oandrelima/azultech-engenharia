"use client";

import { useState, useRef } from "react";
import { api } from "~/trpc/react";
import { TestimonialModal } from "./TestimonialModal";

interface TestimonialItem {
  id: string;
  clientName: string;
  neighborhood: string;
  serviceProvided: string;
  rating: number;
  comment: string;
  verified: boolean;
  source: string;
}

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
}

export function TestimonialCarousel({ testimonials: initialTestimonials }: TestimonialCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch testimonials via TRPC with SSR initial fallback data
  const { data: testimonialsData } = api.testimonials.getAll.useQuery(undefined, {
    initialData: initialTestimonials,
    refetchOnWindowFocus: false,
  });

  const testimonials = testimonialsData ?? initialTestimonials;

  const checkScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = containerRef.current.clientWidth * 0.8;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Action Bar / Leave Review Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 px-2 sm:px-6">
        <div className="text-center sm:text-left">
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
            Mostrando {testimonials.length} avaliações de clientes
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
          </svg>
          Deixar uma Avaliação
        </button>
      </div>

      <div className="relative px-2 sm:px-6">
        {/* Left (Voltar) Button */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Depoimento Anterior"
          className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-gray-200 text-[#004488] hover:bg-[#004488] hover:text-white hover:border-[#004488] disabled:opacity-0 disabled:pointer-events-none flex items-center justify-center transition-all duration-300 shadow-xl active:scale-95 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right (Avançar) Button */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Próximo Depoimento"
          className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-xl disabled:opacity-0 disabled:pointer-events-none flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Horizontal Carousel Track */}
        <div
          ref={containerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-2 px-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t) => {
            const initials = t.clientName
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("");

            return (
              <div
                key={t.id}
                className="flex-shrink-0 w-[290px] sm:w-[340px] lg:w-[370px] snap-start"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl border border-gray-100 hover:border-orange-300 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    {/* Rating Stars & Verified Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1 text-orange-400">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5">
                        {t.source && (
                          <span className="text-[10px] font-bold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-md">
                            {t.source}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          Verificado
                        </span>
                      </div>
                    </div>

                    {/* Comment Quote */}
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic mb-6">
                      "{t.comment}"
                    </p>
                  </div>

                  {/* Client Profile Info */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100 mt-auto">
                    <div className="w-11 h-11 rounded-full bg-[#004488] text-white flex items-center justify-center font-head font-bold text-sm shadow-inner flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                      {initials}
                    </div>
                    <div>
                      <h4 className="font-head font-bold text-gray-900 text-base leading-snug">
                        {t.clientName}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium">
                        {t.neighborhood} <span className="text-gray-300">•</span> {t.serviceProvided}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Review Modal */}
      <TestimonialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
