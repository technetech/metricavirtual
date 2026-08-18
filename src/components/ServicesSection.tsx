import React, { useState } from 'react';
import { Compass, Box, LayoutGrid, Camera, MapPin, Cpu, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenContact: (subject?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-[#0B221E]" />;
      case 'Box': return <Box className="w-5 h-5 text-[#0B221E]" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5 text-[#0B221E]" />;
      case 'Camera': return <Camera className="w-5 h-5 text-[#0B221E]" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-[#0B221E]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#0B221E]" />;
      default: return <Compass className="w-5 h-5 text-[#0B221E]" />;
    }
  };

  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#F0EFE8] border-y border-[#E2E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#4F635D]">
            Servicios Especializados
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B221E]">
            Soluciones en Tours Virtuales & Captura Espacial
          </h2>
          <p className="text-slate-700 text-base leading-relaxed">
            Estructuramos cada proyecto de acuerdo con el propósito comercial, nivel de detalle técnico y canales de distribución requeridos por su empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#F9F8F4] rounded-sm border border-[#E2E0D5] p-8 flex flex-col justify-between hover:border-[#0B221E] transition-colors duration-300 shadow-xs group"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-sm bg-[#EFECE6] border border-[#E2E0D5] flex items-center justify-center group-hover:bg-[#0B221E] group-hover:border-[#0B221E] transition-colors">
                  <div className="group-hover:text-[#CFA760] transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#0B221E]">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2 pt-2 text-xs text-slate-700">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0B221E] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E0D5] flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-[#0B221E] hover:text-[#CFA760] hover:underline transition-colors uppercase tracking-wider"
                >
                  Ver Entregables
                </button>
                <button
                  onClick={() => onOpenContact(`Cotización: ${service.title}`)}
                  className="text-xs text-slate-600 hover:text-[#0B221E] font-semibold uppercase tracking-wider"
                >
                  Cotizar &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061815]/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#F9F8F4] rounded-sm border border-[#E2E0D5] max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#0B221E] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#EFECE6] border border-[#E2E0D5] flex items-center justify-center">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#4F635D]">Servicio Técnico</span>
                <h3 className="font-serif text-2xl font-semibold text-[#0B221E]">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3 bg-[#EFECE6] p-4 rounded-sm border border-[#E2E0D5]">
              <h4 className="font-serif text-sm font-semibold text-[#0B221E]">Características Incluidas:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0B221E] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-sm font-semibold text-[#0B221E]">Entregables Principales:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.deliverables.map((deliv, idx) => (
                  <span key={idx} className="bg-[#EFECE6] text-[#0B221E] text-xs px-3 py-1 rounded-sm border border-[#E2E0D5] font-medium">
                    {deliv}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E0D5] flex justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-[#0B221E] border border-[#E2E0D5] rounded-sm uppercase tracking-wider"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenContact(`Solicitud de Servicio: ${title}`);
                }}
                className="px-5 py-2 text-xs font-semibold text-[#0B221E] bg-[#CFA760] hover:bg-[#DCB672] rounded-sm shadow-xs flex items-center gap-1.5 uppercase tracking-wider"
              >
                <span>Solicitar Cotización</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0B221E]" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
