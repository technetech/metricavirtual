import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMethodology } from './components/AboutMethodology';
import { ServicesSection } from './components/ServicesSection';
import { SectorsSection } from './components/SectorsSection';
import { DemosSection } from './components/DemosSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const [contactSubject, setContactSubject] = useState<string | undefined>(undefined);
  const [quoteData, setQuoteData] = useState<{
    sector: string;
    areaSqMeters: number;
    addons: string[];
    estimatedPriceMXN: string;
    estimatedDays: number;
  } | null>(null);

  const handleOpenContact = (subject?: string) => {
    setContactSubject(subject);
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuote = () => {
    const element = document.getElementById('cotizador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyQuote = (quoteInfo: {
    sector: string;
    areaSqMeters: number;
    addons: string[];
    estimatedPriceMXN: string;
    estimatedDays: number;
  }) => {
    setQuoteData(quoteInfo);
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2C323B] font-sans antialiased flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Banner */}
        <Hero onOpenContact={() => handleOpenContact('Consulta General de Tours Virtuales')} />

        {/* About & Methodology (MetricaData + Inmersys inspiration) */}
        <AboutMethodology />

        {/* Services Breakdown */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* Sectors Served */}
        <SectorsSection onOpenContact={handleOpenContact} />

        {/* Demos & Showroom 360° with "PRÓXIMAMENTE" Badges & Interactive Viewer Simulator */}
        <DemosSection onOpenContact={handleOpenContact} />

        {/* Clear and Accessible Contact Section */}
        <ContactSection initialSubject={contactSubject} initialQuoteData={quoteData} />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
