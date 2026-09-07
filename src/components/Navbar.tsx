import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_DATA, NAV_LINKS } from '../data/business';

interface NavbarProps {
  activeSection: string;
  onBookNowClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onBookNowClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Handle scroll detection for glass navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu scroll locking and escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Focus management
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

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
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#8C6B18]/30 py-3 shadow-2xl shadow-black/80'
            : 'bg-[#050505]/60 backdrop-blur-sm border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm py-1"
            aria-label="Banto Auto Detailing Home"
          >
            <div className="relative overflow-hidden rounded-sm border border-[#8C6B18]/50 p-1 bg-[#101010] group-hover:border-[#D4AF37] transition-all duration-300 shadow-md shadow-black/60 shrink-0">
              <img
                src={BUSINESS_DATA.logoUrl}
                alt="Banto Auto Detailing Logo"
                referrerPolicy="no-referrer"
                className="h-9 sm:h-11 w-auto max-w-[56px] object-contain rounded-xs"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg sm:text-2xl tracking-[0.18em] text-white group-hover:text-[#F5C542] transition-colors leading-none">
                BANTO
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#D4AF37] uppercase mt-1 font-sans font-medium">
                Auto Detailing
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium tracking-wider uppercase transition-all duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm ${
                    isActive
                      ? 'text-[#F5C542] font-semibold'
                      : 'text-white/85 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#F5C542] rounded-full shadow-[0_0_8px_#D4AF37]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_DATA.phoneRaw}`}
              className="text-xs font-semibold tracking-wider text-[#A8A8A8] hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 py-2 px-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
              title={`Call ${BUSINESS_DATA.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{BUSINESS_DATA.phone}</span>
            </a>

            <button
              id="navbar-book-now-btn"
              onClick={onBookNowClick}
              className="bg-metallic-gold-gradient text-[#050505] font-bold text-xs uppercase tracking-[0.15em] px-5 py-2.5 rounded-sm hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#D4AF37]/20 border border-[#F5C542]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              id="navbar-book-now-mobile-quick-btn"
              onClick={onBookNowClick}
              className="bg-[#D4AF37] text-[#050505] font-bold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-sm"
            >
              BOOK
            </button>
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-white hover:text-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay (100dvh) */}
      <div
        id="mobile-navigation-overlay"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`fixed inset-0 z-50 bg-[#050505] transition-all duration-300 flex flex-col justify-between p-6 overflow-y-auto ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        style={{ minHeight: '100dvh', height: '100dvh' }}
      >
        {/* Top bar inside mobile overlay */}
        <div className="flex items-center justify-between border-b border-[#8C6B18]/30 pb-4">
          <div className="flex items-center gap-3">
            <div className="overflow-hidden rounded-sm border border-[#8C6B18]/50 p-1 bg-[#101010] shrink-0">
              <img
                src={BUSINESS_DATA.logoUrl}
                alt="Banto Auto Detailing Logo"
                referrerPolicy="no-referrer"
                className="h-10 w-auto max-w-[50px] object-contain rounded-xs"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl tracking-[0.2em] text-white">
                BANTO
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-sans">
                Auto Detailing
              </span>
            </div>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 text-[#A8A8A8] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6 text-[#D4AF37]" />
          </button>
        </div>

        {/* Navigation list */}
        <nav className="flex flex-col space-y-5 my-auto py-6" aria-label="Mobile Navigation Links">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={`mobile-${link.label}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xl font-heading tracking-widest uppercase transition-all py-1.5 border-b border-white/5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                  isActive ? 'text-[#F5C542] font-bold' : 'text-white/80 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Bottom Actions inside mobile overlay */}
        <div className="border-t border-[#8C6B18]/30 pt-5 space-y-3 pb-safe">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookNowClick();
            }}
            className="w-full bg-metallic-gold-gradient text-[#050505] font-bold text-sm uppercase tracking-[0.2em] py-3.5 rounded-sm shadow-lg shadow-[#D4AF37]/20 border border-[#F5C542]/50 active:scale-[0.99] transition-transform"
          >
            BOOK NOW
          </button>

          <a
            href={`tel:${BUSINESS_DATA.phoneRaw}`}
            className="w-full flex items-center justify-center gap-2 border border-[#8C6B18] text-white font-medium text-xs uppercase tracking-wider py-3 rounded-sm hover:bg-[#101010] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Call {BUSINESS_DATA.phone}</span>
          </a>

          <div className="text-center text-[11px] text-[#A8A8A8] pt-2">
            Los Angeles, California
          </div>
        </div>
      </div>
    </>
  );
};
