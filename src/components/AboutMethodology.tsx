import React from 'react';

interface AboutMethodologyProps {
  // onOpenContact removed as it's no longer used
}

export const AboutMethodology: React.FC<AboutMethodologyProps> = () => {
  return (
    <section id="metodologia" className="py-20 md:py-28 bg-[#F9F8F4] text-[#0B221E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#E2E0D5] pb-10">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#4F635D]">
              Inspiración & Propuesta de Valor
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B221E]">
              Precisión Técnica y Pasión por la Experiencia Inmersiva
            </h2>
          </div>
          <div className="lg:col-span-4 text-slate-700 text-sm leading-relaxed font-normal">
            Fusionamos la rigurosidad métrica de la fotogrametría y escaneo láser con el diseño de navegación enfocado en convertir visitantes en compradores.
          </div>
        </div>

        {/* 3 Pillars / Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#F0EFE8] p-8 rounded-sm border border-[#E2E0D5] shadow-xs hover:border-[#0B221E] transition-colors space-y-4">
            <div className="w-12 h-12 rounded-sm bg-[#0B221E] text-[#CFA760] flex items-center justify-center font-serif text-xl font-bold">
              01
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#0B221E]">
              Calidad y Fotorrealismo Absoluto
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Sin distorsiones ópticas ni tonos artificiales. Capturamos la iluminación real, texturas e hilos arquitectónicos de su propiedad para una inmersión auténtica.
            </p>
          </div>

          <div className="bg-[#F0EFE8] p-8 rounded-sm border border-[#E2E0D5] shadow-xs hover:border-[#0B221E] transition-colors space-y-4">
            <div className="w-12 h-12 rounded-sm bg-[#0B221E] text-[#CFA760] flex items-center justify-center font-serif text-xl font-bold">
              02
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#0B221E]">
              Precisión Métrica & Escala Real
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Cada escaneo integra datos métricos que permiten a compradores, arquitectos e ingenieros realizar mediciones confiables directamente desde la pantalla.
            </p>
          </div>

          <div className="bg-[#F0EFE8] p-8 rounded-sm border border-[#E2E0D5] shadow-xs hover:border-[#0B221E] transition-colors space-y-4">
            <div className="w-12 h-12 rounded-sm bg-[#0B221E] text-[#CFA760] flex items-center justify-center font-serif text-xl font-bold">
              03
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#0B221E]">
              Soluciones Llave en Mano
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Nos encargamos de todo el proceso: desde la captura en sitio hasta la publicación, alojamiento en la nube e integración en sus canales de venta.
            </p>
          </div>

        </div>

        {/* Methodology Block Removed as requested */}

      </div>
    </section>
  );
};
