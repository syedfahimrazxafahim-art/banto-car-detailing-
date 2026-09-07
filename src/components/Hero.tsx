import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_DATA, ASSETS } from '../data/business';

interface HeroProps {
  onBookNowClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookNowClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden"
    >
      {/* Cinematic Automotive Background with Dark Black Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={ASSETS.heroBg}
          alt="Banto Auto Detailing luxury vehicle finish"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-45 brightness-90 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered dark radial and linear gradients for depth and contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/95 via-[#050505]/75 to-[#050505]" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#050505]/60 to-[#050505]" />
        {/* Subtle warm gold ambient aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D4AF37]/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top subtle location badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8C6B18]/50 bg-[#101010]/80 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(212,175,55,0.1)] animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#F5C542]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37]">
            {BUSINESS_DATA.location}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08] mb-6">
          PREMIUM CARE.
          <br />
          <span className="text-gold-gradient drop-shadow-[0_4px_24px_rgba(212,175,55,0.3)]">
            PERFECT FINISH.
          </span>
        </h1>

        {/* Supporting text */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#A8A8A8] font-normal leading-relaxed mb-10 tracking-wide">
          Professional Auto Detailing That Makes Your Vehicle Shine Like New.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          {/* Primary CTA: BOOK NOW (Metallic Gold) */}
          <button
            id="hero-book-now-btn"
            onClick={onBookNowClick}
            className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-2 bg-metallic-gold-gradient text-[#050505] font-bold text-sm tracking-[0.18em] uppercase px-8 py-4 rounded-sm hover:brightness-110 active:scale-[0.98] transition-all duration-300 shadow-xl shadow-[#D4AF37]/25 border border-[#F5C542]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white group"
          >
            <span>BOOK NOW</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#050505]" />
          </button>

          {/* Secondary CTA: CALL NOW (Transparent / Black) */}
          <a
            id="hero-call-now-btn"
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-2.5 bg-[#101010]/80 hover:bg-[#101010] text-white hover:text-[#F5C542] font-semibold text-sm tracking-[0.18em] uppercase px-8 py-4 rounded-sm border border-[#8C6B18]/70 hover:border-[#D4AF37] transition-all duration-300 shadow-lg shadow-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>CALL NOW</span>
          </a>
        </div>

        {/* Subtle gold line & glow underneath the main content */}
        <div className="w-full max-w-md mt-14 flex items-center justify-center gap-3">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#8C6B18] to-transparent" />
          <div className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#F5C542]/40 shadow-[0_0_8px_#D4AF37]" />
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#8C6B18] to-transparent" />
        </div>
      </div>
    </section>
  );
};
