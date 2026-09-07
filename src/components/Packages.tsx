import React from 'react';
import { Sparkles, ArrowRight, Shield } from 'lucide-react';
import { PACKAGES_DATA } from '../data/business';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="bg-[#101010] py-24 sm:py-32 relative border-t border-[#8C6B18]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] block mb-3">
            Tailored Service Tiers
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            DETAILING <span className="text-[#F5C542]">PACKAGES</span>
          </h2>
          <div className="w-16 h-[2px] bg-metallic-gold-gradient mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#A8A8A8] font-light leading-relaxed">
            Select the tier that aligns with your vehicle’s condition and detailing objectives. Estimates are custom tailored to vehicle size and current finish requirements.
          </p>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => {
            const isPopular = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-sm transition-all duration-300 group ${
                  isPopular
                    ? 'bg-[#0A0A0A] border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/15 lg:-translate-y-2'
                    : 'bg-[#050505] border border-[#8C6B18]/40 hover:border-[#D4AF37]/80 hover:shadow-xl hover:shadow-black/80'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-metallic-gold-gradient text-[#050505] text-[10px] font-black uppercase tracking-[0.2em] rounded-sm shadow-md shadow-[#D4AF37]/30 border border-[#F5C542]">
                      <Sparkles className="w-3 h-3 text-[#050505]" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Card Header & Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  <div className="mb-4 pt-2">
                    <h3 className={`font-heading text-xl sm:text-2xl font-bold tracking-wide ${
                      isPopular ? 'text-[#F5C542]' : 'text-white'
                    }`}>
                      {pkg.name}
                    </h3>
                    <div className="w-10 h-[1px] bg-[#8C6B18] mt-2 group-hover:w-16 transition-all duration-300" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#A8A8A8] leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  {/* Highlights overview */}
                  <div className="space-y-2.5 mb-8 border-t border-b border-white/5 py-5 flex-grow">
                    {pkg.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-white/85">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing/Estimate Disclosure Note */}
                  <div className="text-[11px] text-[#A8A8A8]/80 italic mb-6">
                    {pkg.note}
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    id={`package-${pkg.id}-cta-btn`}
                    onClick={() => onSelectPackage(pkg.name)}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200 ${
                      isPopular
                        ? 'bg-metallic-gold-gradient text-[#050505] hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 border border-[#F5C542]'
                        : 'bg-[#101010] text-white hover:text-[#F5C542] hover:bg-[#151515] border border-[#8C6B18]/60 hover:border-[#D4AF37]'
                    }`}
                  >
                    <span>{pkg.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Factually honest transparency banner */}
        <div className="mt-14 p-5 rounded-sm bg-[#050505] border border-[#8C6B18]/30 max-w-3xl mx-auto flex items-center gap-4 text-xs text-[#A8A8A8]">
          <Shield className="w-5 h-5 text-[#D4AF37] shrink-0" />
          <p>
            Specific package contents and tailored estimates are discussed and confirmed upfront prior to any service engagement.
          </p>
        </div>
      </div>
    </section>
  );
};
