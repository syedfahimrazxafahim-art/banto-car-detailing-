import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, AlertCircle } from 'lucide-react';
import { SAMPLE_REVIEWS } from '../data/business';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Responsive visible count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, SAMPLE_REVIEWS.length - visibleCount);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay handler respecting user hover, focus, tab visibility, and prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    if (!isPlaying || isHovered || isFocused || prefersReducedMotion) {
      return;
    }

    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        nextSlide();
      }
    }, 5500);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, isFocused, nextSlide]);

  // Tab visibility listener
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'visible') {
        // Automatically suspended while hidden
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <section
      id="reviews"
      className="bg-[#101010] py-24 sm:py-32 relative border-t border-b border-[#8C6B18]/20"
      aria-label="Client Feedback and Reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] block mb-3">
            Client Experience
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            TESTIMONIALS & <span className="text-[#F5C542]">REVIEWS</span>
          </h2>
          <div className="w-16 h-[2px] bg-metallic-gold-gradient mx-auto mb-6" />
        </div>

        {/* Clear Sample / Preview Disclaimer Badge */}
        <div className="max-w-xl mx-auto mb-12 p-3.5 bg-[#050505] border border-[#8C6B18]/40 rounded-sm flex items-center justify-center gap-2.5 text-center">
          <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span className="text-xs text-[#A8A8A8] uppercase tracking-wider font-medium">
            Sample Preview Content — Pending Genuine Client Submissions
          </span>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={carouselRef}
        >
          {/* Slider track */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {SAMPLE_REVIEWS.map((review) => (
                <div
                  key={review.id}
                  className="px-3 shrink-0"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="bg-[#050505] border border-[#8C6B18]/30 hover:border-[#D4AF37] p-8 rounded-sm h-full flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/80 group">
                    <div>
                      {/* Top: 5 Stars in Metallic Gold */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="text-[#F5C542] text-sm tracking-widest"
                          aria-label="5 out of 5 stars (sample rating)"
                        >
                          ★★★★★
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-[#A8A8A8]/60 bg-[#101010] px-2 py-0.5 rounded-sm border border-white/5">
                          {review.date}
                        </span>
                      </div>

                      {/* Review Body */}
                      <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light italic mb-6">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Author & Service Mentioned */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <div className="font-heading text-sm font-bold text-white tracking-wide">
                          {review.author}
                        </div>
                        <div className="text-xs text-[#D4AF37] font-medium tracking-wider">
                          {review.serviceMentioned}
                        </div>
                      </div>
                      <div className="text-[10px] text-[#A8A8A8] tracking-widest uppercase">
                        Los Angeles, CA
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls Bar */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
            {/* Play / Pause Toggle Button */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#A8A8A8] hover:text-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] px-2 py-1 rounded"
              aria-label={isPlaying ? 'Pause review autoplay' : 'Resume review autoplay'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Autoplay Active</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Autoplay Paused</span>
                </>
              )}
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentIndex === idx
                      ? 'w-6 bg-[#D4AF37]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Previous / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-10 h-10 rounded-sm bg-[#050505] border border-[#8C6B18]/40 hover:border-[#D4AF37] text-white hover:text-[#F5C542] flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                aria-label="Previous reviews slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-10 h-10 rounded-sm bg-[#050505] border border-[#8C6B18]/40 hover:border-[#D4AF37] text-white hover:text-[#F5C542] flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                aria-label="Next reviews slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
