import React, { useState } from 'react';
import { Building, Ruler, Bed, Users, Landmark, Check, ArrowRight } from 'lucide-react';
import { SECTORS } from '../data/companyData';

interface SectorsSectionProps {
  onOpenContact: (subject?: string) => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onOpenContact }) => {
  const [activeSectorId, setActiveSectorId] = useState<string>(SECTORS[0].id);

  const activeSector = SECTORS.find((s) => s.id === activeSectorId) || SECTORS[0];

  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building': return <Building className="w-4 h-4" />;
      case 'Ruler': return <Ruler className="w-4 h-4" />;
      case 'Bed': return <Bed className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Landmark': return <Landmark className="w-4 h-4" />;
      default: return <Building className="w-4 h-4" />;
    }
  };

  const sectorImages: Record<string, string> = {
    inmobiliario: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    arquitectura: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
    hoteleria: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    eventos: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80',
    cultura: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1000&q=80'
  };

  return (
    <section id="sectores" className="py-20 md:py-28 bg-[#F9F8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#4F635D]">
            Sectores Atendidos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B221E]">
            Soluciones Adaptadas a Cada Industria
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Entendemos las dinámicas comerciales y requerimientos técnicos de cada vertical para potenciar sus indicadores de negocio.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 border-b border-[#E2E0D5] pb-4">
          {SECTORS.map((sector) => {
            const isActive = sector.id === activeSectorId;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSectorId(sector.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-medium uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-[#0B221E] text-[#CFA760] shadow-xs'
                    : 'bg-[#F0EFE8] text-slate-700 border border-[#E2E0D5] hover:border-[#0B221E]'
                }`}
              >
                <span className={isActive ? 'text-[#CFA760]' : 'text-slate-500'}>
                  {getSectorIcon(sector.iconName)}
                </span>
                <span>{sector.name}</span>
              </button>
            );
          })}
        </div>

        {/* Industry Active Detail Display */}
        <div className="bg-[#F0EFE8] rounded-sm border border-[#E2E0D5] p-8 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#EFECE6] text-[#0B221E] border border-[#E2E0D5] text-[11px] font-medium uppercase tracking-wider">
              {getSectorIcon(activeSector.iconName)}
              <span>Especialidad Sectorial</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0B221E]">
              {activeSector.name}
            </h3>

            <p className="text-slate-700 text-sm leading-relaxed">
              {activeSector.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#0B221E]">Impacto Directo y Beneficios:</h4>
              <ul className="space-y-2">
                {activeSector.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                    <div className="w-4 h-4 rounded-full bg-[#0B221E] text-[#CFA760] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#CFA760]" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenContact(`Soluciones para Sector: ${activeSector.name}`)}
                className="bg-[#0B221E] hover:bg-[#12312B] text-white text-xs font-semibold px-5 py-3 rounded-sm transition-colors inline-flex items-center gap-2 uppercase tracking-wider"
              >
                <span>Solicitar Asesoría para {activeSector.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#CFA760]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-sm overflow-hidden border border-[#E2E0D5] shadow-xs">
            <img
              src={sectorImages[activeSector.id] || sectorImages['inmobiliario']}
              alt={activeSector.name}
              className="w-full h-[320px] object-cover filter brightness-[0.95]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B221E]/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs space-y-1">
              <p className="font-serif text-sm font-semibold text-[#CFA760]">Caso de Aplicación</p>
              <p className="text-slate-200">Levantamiento espacial y recorrido 360° optimizado.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
