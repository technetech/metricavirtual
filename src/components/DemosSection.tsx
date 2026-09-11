import React, { useState } from 'react';
import { Clock, Eye, Layers, Move, Ruler, Lock, Bell } from 'lucide-react';
import { DEMO_TOURS } from '../data/companyData';
import { DemoTour } from '../types';

interface DemosSectionProps {
  onOpenContact: (subject?: string) => void;
}

export const DemosSection: React.FC<DemosSectionProps> = ({ onOpenContact }) => {
  // Interactive Simulator state for client preview
  
  // Interactive Simulator state for client preview
  const [activeFloor, setActiveFloor] = useState<number>(1);
  const [activeViewMode, setActiveViewMode] = useState<'walk' | 'dollhouse' | 'floorplan'>('walk');
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [measurementMode, setMeasurementMode] = useState<boolean>(false);

  const hotspots = [
    { id: 'h1', name: 'Cocina de Granito Italia', x: '35%', y: '45%', detail: 'Acabados en Mármol Carrara & Grifería Monomando' },
    { id: 'h2', name: 'Ventana Termo-Acústica', x: '68%', y: '30%', detail: 'Cristal Doble Low-E con Aislamiento UV' },
    { id: 'h3', name: 'Muro Métrico de Referencia', x: '50%', y: '65%', detail: 'Dimensiones: 4.80m largo x 2.90m altura' },
  ];

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

          <button
            onClick={() => onOpenContact('Solicitud de Demo Privado 360°')}
            className="bg-[#CFA760] hover:bg-[#DCB672] text-[#0B221E] font-semibold text-xs px-5 py-3 rounded-sm transition-all flex items-center gap-2 uppercase tracking-wider whitespace-nowrap self-start md:self-auto shadow-xs"
          >
            <Bell className="w-4 h-4 text-[#0B221E]" />
            <span>Solicitar Acceso o Demo Privada</span>
          </button>
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

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {tour.highlights.map((h, idx) => (
                      <span key={idx} className="bg-[#061815] text-[#D8E6E2] text-[10px] px-2 py-0.5 rounded-sm border border-[#1F4B3F]">
                        {h}
                      </span>
                    ))}
                  </div>
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

        {/* Interactive Tour Simulator Preview */}
        <div id="simulador" className="pt-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#CFA760]">
              EXPERIENCIA INTERACTIVA EN VIVO
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
              Simulador de Interfaz de Tour Virtual 360°
            </h3>
            <p className="text-[#D8E6E2] text-xs sm:text-sm">
              Explore los controles interactivos y la experiencia de navegación de un recorrido espacial real.
            </p>
          </div>

          {/* Interactive Viewer Mockup Box */}
          <div className="bg-[#061815] rounded-sm border border-[#1F4B3F] overflow-hidden shadow-2xl relative">
            
            {/* Top Viewer Control Bar */}
            <div className="bg-[#0B221E] px-4 py-3 border-b border-[#163931] flex flex-wrap justify-between items-center gap-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-serif font-semibold text-white tracking-wide">DUPLICA 360° VIEWER</span>
                <span className="text-[#1E4A3E]">|</span>
                <span className="text-[#CFA760] font-mono text-[11px]">DEMO RESIDENCIAL - PLANTA {activeFloor}</span>
              </div>

              {/* View Mode Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveViewMode('walk')}
                  className={`px-3 py-1.5 rounded-sm text-[11px] font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                    activeViewMode === 'walk'
                      ? 'bg-[#CFA760] text-[#0B221E]'
                      : 'bg-[#12312B] text-[#D8E6E2] hover:text-white'
                  }`}
                >
                  <Move className="w-3 h-3" />
                  <span>Modo Recorrido</span>
                </button>

                <button
                  onClick={() => setActiveViewMode('dollhouse')}
                  className={`px-3 py-1.5 rounded-sm text-[11px] font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                    activeViewMode === 'dollhouse'
                      ? 'bg-[#CFA760] text-[#0B221E]'
                      : 'bg-[#12312B] text-[#D8E6E2] hover:text-white'
                  }`}
                >
                  <Layers className="w-3 h-3" />
                  <span>Dollhouse 3D</span>
                </button>

                <button
                  onClick={() => setMeasurementMode(!measurementMode)}
                  className={`px-3 py-1.5 rounded-sm text-[11px] font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                    measurementMode
                      ? 'bg-[#CFA760] text-[#0B221E]'
                      : 'bg-[#12312B] text-[#D8E6E2] hover:text-white'
                  }`}
                >
                  <Ruler className="w-3 h-3" />
                  <span>Regla Duplica</span>
                </button>
              </div>
            </div>

            {/* Viewer Screen Canvas */}
            <div className="relative h-[380px] sm:h-[480px] bg-[#061815] overflow-hidden flex items-center justify-center">
              
              {/* Image changing based on mode */}
              <img
                src="/src/assets/images/hero_virtual_tour_1785266687993.jpg"
                alt="Vista de Tour Virtual"
                className={`w-full h-full object-cover transition-all duration-500 ${
                  activeViewMode === 'dollhouse' ? 'scale-90 rotate-1 brightness-75 blur-[1px]' : 'scale-100'
                }`}
                referrerPolicy="no-referrer"
              />

              {/* Watermark Logo Overlay */}
              <div className="absolute top-4 right-4 bg-[#061815]/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-[#1F4B3F] text-[10px] text-[#CFA760] font-mono">
                PRÓXIMAMENTE • DEMO INTERACTIVO
              </div>

              {/* Measurement Ruler Overlay if Active */}
              {measurementMode && (
                <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-[#CFA760] flex justify-between items-center px-4 py-1 bg-[#061815]/90 backdrop-blur-xs rounded-sm text-xs font-mono text-white">
                  <span>Punto A (Pared Oeste)</span>
                  <span className="bg-[#CFA760] text-[#0B221E] px-2 py-0.5 rounded-xs font-bold">5.42 METROS</span>
                  <span>Punto B (Pared Este)</span>
                </div>
              )}

              {/* Hotspots clickable in Walk mode */}
              {activeViewMode === 'walk' && hotspots.map((spot) => (
                <div
                  key={spot.id}
                  style={{ left: spot.x, top: spot.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                  onClick={() => setActiveHotspot(spot.id)}
                >
                  <div className="w-7 h-7 rounded-full bg-[#CFA760] border-2 border-[#0B221E] flex items-center justify-center text-[#0B221E] shadow-lg animate-bounce">
                    <div className="w-2 h-2 rounded-full bg-[#0B221E]" />
                  </div>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-8 hidden group-hover:block bg-[#0B221E] text-white text-[11px] p-2.5 rounded-sm border border-[#1F4B3F] shadow-2xl whitespace-nowrap z-30">
                    <p className="font-semibold text-[#CFA760]">{spot.name}</p>
                    <p className="text-[10px] text-[#D8E6E2]">{spot.detail}</p>
                  </div>
                </div>
              ))}

              {/* Active Hotspot Modal Overlay */}
              {activeHotspot && (
                <div className="absolute inset-0 bg-[#061815]/80 backdrop-blur-xs flex items-center justify-center p-4 z-40">
                  <div className="bg-[#0B221E] border border-[#1F4B3F] p-6 rounded-sm max-w-sm w-full space-y-3 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase font-mono text-[#CFA760]">Ficha Técnica del Hotspot</span>
                      <button
                        onClick={() => setActiveHotspot(null)}
                        className="text-slate-400 hover:text-white text-xs font-bold px-2"
                      >
                        ✕
                      </button>
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-white">
                      {hotspots.find((h) => h.id === activeHotspot)?.name}
                    </h4>
                    <p className="text-xs text-[#D8E6E2] leading-relaxed">
                      {hotspots.find((h) => h.id === activeHotspot)?.detail}
                    </p>
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => setActiveHotspot(null)}
                        className="bg-[#CFA760] text-[#0B221E] font-semibold text-xs px-3.5 py-1.5 rounded-sm uppercase tracking-wider"
                      >
                        Continuar Recorrido
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Viewer Toolbar */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0B221E]/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#1F4B3F] flex items-center gap-4 text-xs text-[#D8E6E2] shadow-2xl">
                <span className="text-[11px] text-[#CFA760] font-medium uppercase tracking-wider">Controles:</span>
                <button
                  onClick={() => setActiveFloor(1)}
                  className={`px-2 py-0.5 rounded text-[11px] ${activeFloor === 1 ? 'bg-[#CFA760] text-[#0B221E] font-bold' : 'hover:text-white'}`}
                >
                  Planta 1
                </button>
                <button
                  onClick={() => setActiveFloor(2)}
                  className={`px-2 py-0.5 rounded text-[11px] ${activeFloor === 2 ? 'bg-[#CFA760] text-[#0B221E] font-bold' : 'hover:text-white'}`}
                >
                  Planta 2
                </button>
                <span className="text-[#1E4A3E]">|</span>
                <span className="text-[10px] text-[#8FAEA5]">Haga clic en los puntos dorados para probar la ficha</span>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Removed Demo Detail Spec Modal */}

    </section>
  );
};
