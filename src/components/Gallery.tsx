import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/business';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const modalCloseBtnRef = useRef<HTMLButtonElement>(null);

  const openLightbox = (item: GalleryItem, index: number) => {
    setActiveItem(item);
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveItem(null);
  };

  const nextImage = () => {
    const nextIdx = (activeIndex + 1) % GALLERY_ITEMS.length;
    setActiveIndex(nextIdx);
    setActiveItem(GALLERY_ITEMS[nextIdx]);
  };

  const prevImage = () => {
    const prevIdx = (activeIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setActiveIndex(prevIdx);
    setActiveItem(GALLERY_ITEMS[prevIdx]);
  };

  // Keyboard navigation for accessible lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    if (activeItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        modalCloseBtnRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItem, activeIndex]);

  return (
    <section id="gallery" className="bg-[#050505] py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] block mb-3">
            Finish & Technique Showcase
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            GALLERY OF <span className="text-[#F5C542]">FINISHES</span>
          </h2>
          <div className="w-16 h-[2px] bg-metallic-gold-gradient mx-auto mb-6" />
          <p className="text-base text-[#A8A8A8] font-light leading-relaxed">
            Visual reference showcasing the level of surface reflection, gloss preservation, and wheel cleanliness achieved through precision hand car washing methods.
          </p>
        </div>

        {/* Authentic Project Showcase badge */}
        <div className="max-w-2xl mx-auto mb-12 p-3 bg-[#101010] border border-[#8C6B18]/30 rounded-sm flex items-center justify-center gap-2 text-center text-xs text-[#A8A8A8]">
          <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span>
            Official Portfolio & Detailing Gallery — Authentic vehicle finishes by Banto Auto Detailing.
          </span>
        </div>

        {/* Grid of rectangular images with thin metallic-gold borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="relative aspect-[16/11] overflow-hidden rounded-sm border border-[#8C6B18]/50 hover:border-[#D4AF37] transition-all duration-300 group cursor-pointer bg-[#101010] shadow-xl shadow-black/80"
              onClick={() => openLightbox(item, idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(item, idx);
                }
              }}
              aria-label={`View ${item.title} image details`}
            >
              {/* Image with slight zoom on hover */}
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108 brightness-90"
              />

              {/* Dark Overlay & Gold "View Details" text on hover */}
              <div className="absolute inset-0 bg-[#050505]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A8A8A8] mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F5C542] border-b border-[#D4AF37] pb-1">
                  <Maximize2 className="w-3.5 h-3.5" />
                  View Details
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Lightbox Window */}
          <div
            className="relative max-w-4xl w-full bg-[#101010] border border-[#8C6B18] rounded-sm overflow-hidden shadow-2xl shadow-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              ref={modalCloseBtnRef}
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-[#050505]/80 hover:bg-[#050505] text-[#A8A8A8] hover:text-[#F5C542] border border-[#8C6B18]/50 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#050505]/80 hover:bg-[#050505] text-white hover:text-[#F5C542] border border-[#8C6B18]/50 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#050505]/80 hover:bg-[#050505] text-white hover:text-[#F5C542] border border-[#8C6B18]/50 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image display */}
            <div className="relative aspect-[16/10] bg-[#050505]">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-center"
              />
            </div>

            {/* Details Footer */}
            <div className="p-6 bg-[#0B0B0B] border-t border-[#8C6B18]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {activeItem.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-white mt-0.5">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-[#A8A8A8] mt-1 font-light max-w-xl">
                  {activeItem.description}
                </p>
              </div>

              <div className="text-xs text-[#A8A8A8] tracking-widest font-mono">
                {activeIndex + 1} / {GALLERY_ITEMS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
