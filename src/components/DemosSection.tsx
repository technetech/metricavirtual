import React from 'react';
import { Clock, Eye } from 'lucide-react';
import { DEMO_TOURS } from '../data/companyData';

interface DemosSectionProps {
  onOpenContact: (subject?: string) => void;
}

export const DemosSection: React.FC<DemosSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="demos" className="py-20 md:py-28 bg-[#0B221E] text-white border-b border-[#163931] relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CFA760 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#163931] pb-10">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#12312B] text-[#CFA760] border border-[#1F4B3F] text-xs font-semibold tracking-widest uppercase">
              <Clock className="w-3.5 h-3.5 text-[#CFA760]" />
              <span>Galería de Muestras & Demos</span>
              <span className="bg-[#CFA760] text-[#0B221E] px-2 py-0.5 rounded-xs text-[10px] font-bold">PRÓXIMAMENTE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Showroom Interactivo de Recorridos 360°
            </h2>
            <p className="text-[#D8E6E2] text-sm sm:text-base leading-relaxed">
              Estamos preparando la liberación pública de nuestros visores 360° de alta definición. Mientras tanto, explore la simulación funcional a continuación o solicite un demo privado.
            </p>
          </div>

        </div>

        {/* Grid of Preview Cards with "PRÓXIMAMENTE" Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEMO_TOURS.map((tour) => (
            <div
              key={tour.id}
              className="bg-[#12312B] rounded-sm border border-[#1F4B3F] overflow-hidden flex flex-col justify-between hover:border-[#CFA760] transition-all duration-300 group shadow-lg relative"
            >
              {/* Image & Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12312B] via-transparent to-transparent opacity-90" />
                
                {/* Removed Coming Soon Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#CFA760] bg-[#061815]/80 px-2 py-0.5 rounded-sm border border-[#1F4B3F]">
                    {tour.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#8FAEA5]">
                    {tour.area}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-white group-hover:text-[#CFA760] transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-xs text-[#8FAEA5] mt-1">
                    Ubicación: {tour.location}
                  </p>

                </div>

                <div className="pt-4 border-t border-[#1F4B3F] flex items-center justify-end">
                  <a
                    href={tour.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#CFA760] hover:text-white font-medium underline underline-offset-4 flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Ver Demo</span>
                    <Eye className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Removed Demo Detail Spec Modal */}

    </section>
  );
};
