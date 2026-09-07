import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState('Car Washing');

  // Scroll to contact section smoothly
  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const navOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Track active section for navigation highlight
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'packages', 'why-choose-us', 'reviews', 'gallery', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#050505]">
      {/* Sticky Navbar */}
      <Navbar
        activeSection={activeSection}
        onBookNowClick={() => scrollToContact('Car Washing')}
      />

      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero onBookNowClick={() => scrollToContact('Car Washing')} />

        {/* 2. About */}
        <About />

        {/* 3. Services */}
        <Services onSelectService={scrollToContact} />

        {/* 4. Packages */}
        <Packages onSelectPackage={scrollToContact} />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Reviews */}
        <Reviews />

        {/* 7. Gallery */}
        <Gallery />

        {/* 8. CTA */}
        <CtaBanner onBookNowClick={() => scrollToContact('Car Washing')} />

        {/* 9. Contact */}
        <Contact selectedService={selectedService} />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
