import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-[#F9F8F4] border-b border-[#E2E0D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#EFECE6] text-[#0B221E] border border-[#E2E0D5] text-xs font-semibold uppercase tracking-widest shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#0B221E]" />
            <span>Resolución de Dudas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0B221E]">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-700 text-sm max-w-xl mx-auto">
            Información clara sobre el proceso de escaneo, entrega técnica y compatibilidad de nuestros tours virtuales 360°.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#F0EFE8] rounded-sm border border-[#E2E0D5] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-[#EFECE6] transition-colors"
                >
                  <span className="font-serif text-base font-semibold text-[#0B221E]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#0B221E]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-700 border-t border-[#E2E0D5] bg-[#EFECE6] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
