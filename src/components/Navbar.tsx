import React, { useState, useEffect } from 'react';
import { Compass, Phone, Mail, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenContact: (subject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sectores', href: '#sectores' },
    { label: 'Demos 360°', href: '#demos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar for high accessibility contact info */}
      <div className="bg-[#0B221E] text-[#D8E6E2] text-xs py-2 px-4 border-b border-[#163931]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[#CFA760] text-[11px] font-medium tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#CFA760]" />
              Especialistas en Captura 3D & Tours Virtuales
            </span>
            <span className="hidden md:inline text-[#1E4A3E]">|</span>
            <span className="hidden md:inline text-[#8FAEA5] text-xs">{COMPANY_INFO.coverage}</span>
          </div>
          <div className="flex items-center gap-5 text-xs">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 text-[#D8E6E2] hover:text-[#CFA760] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#CFA760]" />
              <span className="font-mono text-[11px]">{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-1.5 text-[#D8E6E2] hover:text-[#CFA760] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#CFA760]" />
              <span className="hidden sm:inline font-mono text-[11px]">{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Clean White Background */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#E2E0D5] py-3'
            : 'bg-white border-b border-[#E2E0D5] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-sm bg-[#0B221E] border border-[#0B221E] flex items-center justify-center text-[#CFA760] shadow-sm">
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500 text-[#CFA760]" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#0B221E] block leading-none">
                MÉTRICA <span className="font-light italic text-[#CFA760]">VIRTUAL</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#4F635D] block mt-0.5 font-semibold">
                Tours Virtuales 360° & Captura 3D
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-[#0B221E] hover:text-[#CFA760] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#CFA760] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenContact()}
              className="text-xs font-semibold text-white bg-[#0B221E] hover:bg-[#12312B] px-4 py-2.5 rounded-sm transition-all shadow-sm flex items-center gap-1.5 uppercase tracking-wider group"
            >
              <span>Contacto</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#CFA760]" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-[#0B221E] hover:bg-[#F0EFE8] transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F9F8F4] border-b border-[#E2E0D5] px-4 pt-4 pb-6 space-y-3 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#0B221E] hover:text-[#CFA760] py-2 px-3 text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#EFECE6] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-[#E2E0D5] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full text-center text-xs font-semibold text-white bg-[#0B221E] py-2.5 rounded-sm uppercase tracking-wider"
              >
                Contacto Directo
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
