import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/business';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const primaryService = SERVICES_DATA[0];

  return (
    <section id="services" className="bg-[#050505] py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] block mb-3">
            Primary Service Offering
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            PRECISION <span className="text-[#F5C542]">CAR WASHING</span>
          </h2>
          <div className="w-16 h-[2px] bg-metallic-gold-gradient mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#A8A8A8] font-light leading-relaxed">
            Our specialized focus is dedicated hand car washing, engineered to remove road film, brake dust, and environmental contamination while safeguarding your vehicle’s factory clear coat.
          </p>
        </div>

        {/* Dominant Service Presentation Card */}
        <div className="relative rounded-sm bg-[#101010] border border-[#8C6B18]/40 hover:border-[#D4AF37] transition-all duration-500 overflow-hidden shadow-2xl shadow-black/90 group">
          {/* Subtle gold glow highlight on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image showcase */}
            <div className="lg:col-span-6 relative overflow-hidden min-h-[320px] sm:min-h-[420px]">
              <img
                src={primaryService.imageUrl}
                alt="Car Washing at Banto Auto Detailing"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105 brightness-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#101010] via-transparent to-transparent opacity-80" />

              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#050505]/80 backdrop-blur-md border border-[#D4AF37]/60 text-[#F5C542] text-[11px] font-bold tracking-widest uppercase rounded-sm">
                  <Sparkles className="w-3 h-3 text-[#F5C542]" />
                  Confirmed Primary Offering
                </span>
              </div>
            </div>

            {/* Service details */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
                  {primaryService.subtitle}
                </div>
                <h3 className="font-heading text-2xl sm:text-4xl font-bold text-white mb-4">
                  {primaryService.title}
                </h3>
                <p className="text-[#A8A8A8] text-sm sm:text-base leading-relaxed mb-8">
                  {primaryService.description}
                </p>

                {/* Key attributes */}
                <div className="space-y-3 mb-8">
                  {primaryService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                      <span className="text-sm text-white/90 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#8C6B18]/30 flex flex-col sm:flex-row items-center gap-4">
                <button
                  id="services-book-car-washing-btn"
                  onClick={() => onSelectService('Car Washing')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-metallic-gold-gradient text-[#050505] font-bold text-xs uppercase tracking-[0.18em] px-8 py-3.5 rounded-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-[#D4AF37]/20"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  id="services-request-estimate-btn"
                  onClick={() => onSelectService('Car Washing - Free Estimate')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-white hover:text-[#F5C542] border border-[#8C6B18]/60 hover:border-[#D4AF37] font-semibold text-xs uppercase tracking-[0.18em] px-6 py-3.5 rounded-sm transition-all"
                >
                  <span>Get A Free Estimate</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Factually honest note regarding additional or specialized requests */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#A8A8A8] max-w-2xl mx-auto italic">
            Note: Additional vehicle treatment inquiries or custom requests can be submitted through our booking form or directly via telephone consultation.
          </p>
        </div>
      </div>
    </section>
  );
};
