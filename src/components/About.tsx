import React from 'react';
import { BUSINESS_DATA, ASSETS } from '../data/business';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#101010] py-24 sm:py-32 relative overflow-hidden border-t border-b border-[#8C6B18]/20">
      {/* Background subtle texture glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Premium Automotive Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative group">
              {/* Gold frame accent offset */}
              <div className="absolute -inset-2 rounded-sm border border-[#8C6B18]/40 opacity-70 group-hover:border-[#D4AF37] transition-colors duration-500 pointer-events-none" />

              <div className="relative overflow-hidden rounded-sm bg-[#050505] shadow-2xl shadow-black/80 aspect-[4/3]">
                <img
                  src={ASSETS.aboutImg}
                  alt="Banto Auto Detailing vehicle craftsmanship in Los Angeles"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#A8A8A8] tracking-widest uppercase">
                  <span>Los Angeles Automotive Care</span>
                  <span className="text-[#D4AF37] font-semibold">Precision Hand Craft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Gold heading, White body copy, Small metallic-gold decorative line */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
              About Banto Auto Detailing
            </span>

            {/* Gold Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5C542] leading-tight mb-6">
              DEDICATED TO AUTOMOTIVE EXCELLENCE
            </h2>

            {/* Small metallic-gold decorative line */}
            <div className="w-16 h-[2px] bg-metallic-gold-gradient mb-8 shadow-[0_0_8px_#D4AF37]" />

            {/* White Body Copy */}
            <div className="space-y-4 text-[#FFFFFF] text-base leading-relaxed font-light">
              <p>
                Based in Los Angeles, California, <strong className="font-semibold text-white">Banto Auto Detailing</strong> is committed to delivering superior automotive care with an emphasis on precision hand car washing and meticulous finish.
              </p>
              <p className="text-[#A8A8A8]">
                Every vehicle entrusted to our care receives dedicated personal attention, protecting delicate surfaces and restoring the deep, mirror-like gloss that discerning drivers appreciate.
              </p>
            </div>

            {/* Supplied Business Stats */}
            <div className="mt-12 pt-8 border-t border-[#8C6B18]/30 grid grid-cols-3 gap-4 sm:gap-6">
              {BUSINESS_DATA.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white flex items-baseline tracking-tight">
                    <span>{stat.value}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-[#A8A8A8] font-medium tracking-wide uppercase mt-1">
                    {stat.label}
                  </span>
                  <div className="w-6 h-[1px] bg-[#8C6B18] mt-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
