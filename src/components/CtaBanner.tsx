import React from 'react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA, ASSETS } from '../data/business';

interface CtaBannerProps {
  onBookNowClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onBookNowClick }) => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden border-t border-b border-[#8C6B18]/30">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={ASSETS.ctaBg}
          alt="Banto Auto Detailing showroom finish"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-[0.25] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#050505]" />
      </div>

      {/* Subtle Gold Glow Behind Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4AF37]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Gold accent line */}
        <div className="w-12 h-[2px] bg-metallic-gold-gradient mb-6" />

        {/* Headline */}
        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          READY TO MAKE <br className="hidden sm:inline" />
          <span className="text-gold-gradient drop-shadow-[0_4px_20px_rgba(212,175,55,0.35)]">
            YOUR CAR SHINE?
          </span>
        </h2>

        {/* Short copy */}
        <p className="max-w-xl text-base sm:text-lg text-[#A8A8A8] font-light leading-relaxed mb-10">
          Experience uncompromising precision and deep gloss finish in Los Angeles. Reserve your appointment today or speak directly with our team.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md">
          {/* Primary button: BOOK YOUR DETAIL */}
          <button
            id="cta-book-detail-btn"
            onClick={onBookNowClick}
            className="w-full sm:w-auto min-w-[210px] inline-flex items-center justify-center gap-2.5 bg-metallic-gold-gradient text-[#050505] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-sm hover:brightness-110 active:scale-[0.98] transition-all duration-300 shadow-xl shadow-[#D4AF37]/25 border border-[#F5C542] group"
          >
            <Calendar className="w-4 h-4 text-[#050505]" />
            <span>BOOK YOUR DETAIL</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary button: CALL NOW */}
          <a
            id="cta-call-now-btn"
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="w-full sm:w-auto min-w-[190px] inline-flex items-center justify-center gap-2.5 bg-[#101010]/90 hover:bg-[#151515] text-white hover:text-[#F5C542] font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-sm border border-[#8C6B18]/70 hover:border-[#D4AF37] transition-all duration-300 shadow-lg shadow-black/80"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>CALL NOW</span>
          </a>
        </div>
      </div>
    </section>
  );
};
