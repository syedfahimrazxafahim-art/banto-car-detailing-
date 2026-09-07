import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_DATA, NAV_LINKS } from '../data/business';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#050505] text-white border-t border-[#8C6B18]/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Short Tagline */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-flex items-center gap-3 mb-4 group"
              aria-label="Banto Auto Detailing Home"
            >
              <div className="overflow-hidden rounded-sm border border-[#8C6B18]/50 p-1 bg-[#101010] group-hover:border-[#D4AF37] transition-all duration-300 shadow-md shadow-black/80 shrink-0">
                <img
                  src={BUSINESS_DATA.logoUrl}
                  alt="Banto Auto Detailing Logo"
                  referrerPolicy="no-referrer"
                  className="h-10 w-auto max-w-[52px] object-contain rounded-xs"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl tracking-[0.2em] text-white group-hover:text-[#F5C542] transition-colors">
                  BANTO
                </span>
                <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase -mt-0.5 font-sans font-medium">
                  Auto Detailing
                </span>
              </div>
            </a>
            <p className="text-xs text-[#A8A8A8] font-light leading-relaxed mb-6">
              Precision hand car washing and automotive detailing elevating finish and gloss for vehicles across Los Angeles, California.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Banto Auto Detailing on Instagram."
                className="w-8 h-8 rounded-sm bg-[#101010] border border-[#8C6B18]/40 hover:border-[#D4AF37] hover:text-[#F5C542] flex items-center justify-center text-xs font-semibold tracking-wider text-white transition-all"
                title="Instagram"
              >
                IG
              </a>
              <a
                href={BUSINESS_DATA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Banto Auto Detailing on Facebook."
                className="w-8 h-8 rounded-sm bg-[#101010] border border-[#8C6B18]/40 hover:border-[#D4AF37] hover:text-[#F5C542] flex items-center justify-center text-xs font-semibold tracking-wider text-white transition-all"
                title="Facebook"
              >
                FB
              </a>
            </div>
          </div>

          {/* Minimal Navigation */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={`footer-${link.label}`}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#A8A8A8] hover:text-[#F5C542] transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8A8A8]">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors"
                >
                  Car Washing (Primary Offering)
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  onClick={(e) => handleNavClick(e, '#packages')}
                  className="hover:text-white transition-colors"
                >
                  Basic Detail
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  onClick={(e) => handleNavClick(e, '#packages')}
                  className="hover:text-[#F5C542] transition-colors"
                >
                  Premium Detail (Most Popular)
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  onClick={(e) => handleNavClick(e, '#packages')}
                  className="hover:text-white transition-colors"
                >
                  Full Detail & Ultimate Detail
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2 text-[#A8A8A8]">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>{BUSINESS_DATA.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${BUSINESS_DATA.phoneRaw}`}
                  className="text-white hover:text-[#F5C542] transition-colors"
                >
                  {BUSINESS_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_DATA.email}`}
                  className="text-white hover:text-[#F5C542] transition-colors break-all"
                >
                  {BUSINESS_DATA.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8A8A8]/70 gap-4">
          <p>© 2026 Banto Auto Detailing. All Rights Reserved.</p>
          <p className="text-[11px] tracking-wider uppercase text-[#A8A8A8]/50">
            Los Angeles, California
          </p>
        </div>
      </div>
    </footer>
  );
};
