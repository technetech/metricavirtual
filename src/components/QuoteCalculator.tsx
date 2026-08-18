import React, { useState } from 'react';
import { Calculator, ArrowRight, Check } from 'lucide-react';
import { SECTORS } from '../data/companyData';

interface QuoteCalculatorProps {
  onApplyQuote: (quoteData: {
    sector: string;
    areaSqMeters: number;
    addons: string[];
    estimatedPriceMXN: string;
    estimatedDays: number;
  }) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onApplyQuote }) => {
  const [selectedSector, setSelectedSector] = useState<string>(SECTORS[0].name);
  const [areaSqMeters, setAreaSqMeters] = useState<number>(250);
  const [addons, setAddons] = useState<{ id: string; name: string; price: number }[]>([
    { id: 'floorplans', name: 'Planos 2D / 3D Esquemáticos', price: 1500 },
    { id: 'drone', name: 'Fotografía Aérea Dron 360°', price: 3200 },
    { id: 'streetview', name: 'Publicación Google Street View', price: 1200 },
    { id: 'staging', name: 'Staging Virtual (Amueblado 3D)', price: 2800 },
  ]);
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['floorplans']);

  // Price Calculation Logic
  const baseRatePerM2 = areaSqMeters < 300 ? 18 : areaSqMeters < 1000 ? 14 : 10;
  const basePrice = Math.max(3500, areaSqMeters * baseRatePerM2);
  const addonsTotal = selectedAddonIds.reduce((sum, id) => {
    const item = addons.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalEstimate = Math.round(basePrice + addonsTotal);
  const estimatedDays = areaSqMeters < 500 ? 2 : areaSqMeters < 1500 ? 3 : 5;

  const toggleAddon = (id: string) => {
    if (selectedAddonIds.includes(id)) {
      setSelectedAddonIds(selectedAddonIds.filter((item) => item !== id));
    } else {
      setSelectedAddonIds([...selectedAddonIds, id]);
    }
  };

  const handleApply = () => {
    const addonNames = selectedAddonIds.map((id) => addons.find((a) => a.id === id)?.name || id);
    onApplyQuote({
      sector: selectedSector,
      areaSqMeters,
      addons: addonNames,
      estimatedPriceMXN: `$${totalEstimate.toLocaleString('es-MX')} MXN`,
      estimatedDays,
    });
  };

  return (
    <section id="cotizador" className="py-20 md:py-28 bg-[#F0EFE8] border-b border-[#E2E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#EFECE6] text-[#0B221E] border border-[#E2E0D5] text-xs font-semibold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-[#0B221E]" />
            <span>Estimador de Proyectos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B221E]">
            Calculadora de Presupuesto Inmediata
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Obtenga un estimado transparente del costo de captura y tiempo de entrega según la superficie de su espacio y los servicios requeridos.
          </p>
        </div>

        {/* Main Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-[#F9F8F4] p-6 sm:p-8 rounded-sm border border-[#E2E0D5] space-y-8 shadow-xs">
            
            {/* Sector Dropdown */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B221E]">
                1. Tipo de Inmueble / Sector
              </label>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full bg-[#EFECE6] border border-[#E2E0D5] rounded-sm px-4 py-3 text-sm text-[#0B221E] font-medium focus:outline-none focus:border-[#0B221E]"
              >
                {SECTORS.map((sec) => (
                  <option key={sec.id} value={sec.name}>
                    {sec.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Area Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B221E]">
                  2. Superficie Aproximada del Espacio
                </label>
                <span className="font-mono text-base font-bold text-[#0B221E] bg-[#EFECE6] px-3 py-1 rounded-sm border border-[#E2E0D5]">
                  {areaSqMeters} m²
                </span>
              </div>
              
              <input
                type="range"
                min={50}
                max={3000}
                step={25}
                value={areaSqMeters}
                onChange={(e) => setAreaSqMeters(Number(e.target.value))}
                className="w-full h-2 bg-[#E2E0D5] rounded-lg appearance-none cursor-pointer accent-[#0B221E]"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>50 m² (Oficina Chica / Depa)</span>
                <span>1,500 m²</span>
                <span>3,000+ m² (Nave / Hotel)</span>
              </div>
            </div>

            {/* Addons Checklist */}
            <div className="space-y-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B221E]">
                3. Servicios Adicionales Requeridos
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addons.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-sm border text-xs cursor-pointer transition-colors flex items-center justify-between ${
                        isChecked
                          ? 'bg-[#EFECE6] border-[#0B221E] text-[#0B221E]'
                          : 'bg-[#F9F8F4] border-[#E2E0D5] text-slate-600 hover:border-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded-xs flex items-center justify-center text-[#0B221E] text-[10px] ${
                            isChecked ? 'bg-[#CFA760]' : 'border border-[#E2E0D5]'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 text-[#0B221E]" />}
                        </div>
                        <span className="font-medium">{addon.name}</span>
                      </div>
                      <span className="text-slate-500 font-mono text-[11px]">
                        +${addon.price.toLocaleString('es-MX')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-[#0B221E] text-white p-8 rounded-sm border border-[#163931] space-y-6 shadow-xl relative overflow-hidden">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#CFA760] uppercase tracking-widest">
                Presupuesto Estimado
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#CFA760]">
                ${totalEstimate.toLocaleString('es-MX')}{' '}
                <span className="text-xs text-[#D8E6E2] font-sans font-normal">MXN + IVA</span>
              </h3>
              <p className="text-xs text-[#D8E6E2]">
                Tiempo estimado de procesamiento y entrega: <span className="text-white font-bold">{estimatedDays} días hábiles</span>.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#163931] text-xs text-[#D8E6E2]">
              <div className="flex justify-between">
                <span>Sector:</span>
                <span className="text-white font-medium">{selectedSector}</span>
              </div>
              <div className="flex justify-between">
                <span>Área Total:</span>
                <span className="text-white font-medium">{areaSqMeters} m²</span>
              </div>
              <div className="flex justify-between">
                <span>Complementos:</span>
                <span className="text-white font-medium">{selectedAddonIds.length} seleccionados</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleApply}
                className="w-full bg-[#CFA760] hover:bg-[#DCB672] text-[#0B221E] font-semibold text-xs py-3.5 px-4 rounded-sm shadow-xs transition-all flex items-center justify-center gap-2 uppercase tracking-wider group"
              >
                <span>Enviar Cotización a Formulario</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#0B221E]" />
              </button>
            </div>

            <p className="text-[11px] text-[#8FAEA5] leading-relaxed text-center">
              * Nota: Este monto es un estimado previo. El costo definitivo se confirma tras revisar el número de niveles y condiciones de luz del inmueble.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
