import React from 'react';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 md:pb-28 bg-white text-[#0B221E] overflow-hidden border-b border-[#E2E0D5]">
      {/* Background Grid Accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0B221E 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-[#EFECE6] border border-[#E2E0D5] text-[#0B221E] text-[11px] font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CFA760] animate-pulse" />
              <span>Digitalización Espacial de Alta Precisión</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#0B221E] leading-[1.12]">
              Tours Virtuales 360° <br />
              <span className="italic text-[#CFA760] font-serif">Sencillos, Sobrios</span> & Elegantes.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-700 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Elevamos la presentación de inmuebles, desarrollos arquitectónicos e instalaciones industriales mediante recorridos interactivos de alta fidelidad técnica. Captura fotorrealista y métrica para impulsar sus conversiones comerciales.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-800 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B221E] shrink-0" />
                <span>Navegación Fluida Multidispositivo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B221E] shrink-0" />
                <span>Precisión Láser Métrica 99.8%</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B221E] shrink-0" />
                <span>Hotspots e Información Interactiva</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B221E] shrink-0" />
                <span>Entrega Completa en 72 horas</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="bg-[#0B221E] hover:bg-[#12312B] text-white font-semibold text-xs px-6 py-3.5 rounded-sm transition-all uppercase tracking-wider flex items-center gap-2 group shadow-sm"
              >
                <span>Solicitar Consulta o Visita</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#CFA760]" />
              </button>

            </div>

          </div>

          {/* Right Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#E2E0D5] bg-[#F9F8F4] shadow-2xl group">
              
              {/* Hero Image */}
              <img
                src="/src/assets/images/hero_virtual_tour_1785266687993.jpg"
                alt="Interior de Tour Virtual 360°"
                className="w-full h-[380px] sm:h-[420px] object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B221E]/90 via-transparent to-transparent opacity-80" />

              {/* Floating Spatial Measurement Tag */}
              <div className="absolute top-4 left-4 bg-[#0B221E]/90 backdrop-blur-md px-3.5 py-2 rounded-sm border border-[#163931] text-xs text-white flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-[#CFA760] animate-ping" />
                <span className="font-mono text-[11px] text-[#CFA760] uppercase tracking-wider font-semibold">PUNTO DE ESCANEO 3D #04</span>
                <span className="text-[#1E4A3E]">|</span>
                <span className="text-[#D8E6E2]">Escala 1:1</span>
              </div>

              {/* Bottom Card Detail */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0B221E]/95 backdrop-blur-md p-4 rounded-sm border border-[#1F4B3F] text-white shadow-xl space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-sans text-[#CFA760] uppercase tracking-widest font-semibold">Recorrido Virtual 360°</span>
                  <span className="bg-[#12312B] text-[10px] text-[#D8E6E2] px-2 py-0.5 rounded border border-[#1F4B3F] font-mono">HDR 8K</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-white">Residencia & Complejo Arquitectónico</h3>
                <p className="text-xs text-[#8FAEA5] leading-relaxed">
                  Experiencia fluida con medición de muros en tiempo real, mapas de planta y etiquetas interactivas.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Trust Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-[#E2E0D5] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {COMPANY_INFO.stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0B221E]">
                {stat.value}
              </p>
              <p className="text-[11px] text-[#4F635D] font-semibold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
