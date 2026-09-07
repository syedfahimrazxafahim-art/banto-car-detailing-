import React from 'react';
import { Award, UserCheck, Eye, HeartHandshake } from 'lucide-react';
import { VALUE_POINTS, ASSETS } from '../data/business';

export const WhyChooseUs: React.FC = () => {
  const iconMap = [
    <Award key="award" className="w-6 h-6 text-[#D4AF37]" />,
    <UserCheck key="user" className="w-6 h-6 text-[#D4AF37]" />,
    <Eye key="eye" className="w-6 h-6 text-[#D4AF37]" />,
    <HeartHandshake key="heart" className="w-6 h-6 text-[#D4AF37]" />,
  ];

  return (
    <section id="why-choose-us" className="bg-[#050505] py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle automotive background visual with heavy dark overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img
          src={ASSETS.whyChooseUsBg}
          alt="Banto Auto Detailing deep paint luster"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-60"
        />
        <div className="absolute inset-0 bg-[#050505]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] block mb-3">
            Our Standard
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            WHY CHOOSE <span className="text-[#F5C542]">BANTO</span>
          </h2>
          <div className="w-16 h-[2px] bg-metallic-gold-gradient mx-auto mb-6" />
          <p className="text-base text-[#A8A8A8] font-light max-w-xl mx-auto">
            Every vehicle in our care is treated with meticulous dedication, ensuring an uncompromising standard of finish.
          </p>
        </div>

        {/* 4 Value Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_POINTS.map((point, index) => (
            <div
              key={index}
              className="bg-[#101010]/80 backdrop-blur-sm border border-[#8C6B18]/30 hover:border-[#D4AF37] p-8 rounded-sm transition-all duration-300 group flex flex-col justify-between shadow-xl shadow-black/80"
            >
              <div>
                {/* Icon wrapper with subtle gold glow */}
                <div className="w-12 h-12 rounded-sm bg-[#050505] border border-[#8C6B18]/50 flex items-center justify-center mb-6 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all">
                  {iconMap[index]}
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-2 tracking-wide group-hover:text-[#F5C542] transition-colors">
                  {point.title}
                </h3>

                {/* Thin gold divider line */}
                <div className="w-8 h-[1px] bg-[#8C6B18] mb-4 group-hover:w-12 transition-all duration-300" />

                <p className="text-sm text-[#A8A8A8] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
