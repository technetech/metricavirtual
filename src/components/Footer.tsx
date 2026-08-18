import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061815] text-[#D8E6E2] text-xs border-t border-[#12312B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-normal text-white tracking-widest uppercase">
                MÉTRICA <span className="font-light text-[#CFA760]">VIRTUAL</span>
              </span>
            </div>

            <p className="text-[#D8E6E2] text-xs leading-relaxed max-w-sm">
              Especialistas en digitalización de espacios 3D, tours virtuales 360° e integración de datos métricos para desarrollos inmobiliarios, industriales y comerciales.
            </p>

            <p className="text-[#8FAEA5] text-[11px]">
              {COMPANY_INFO.coverage}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-semibold text-[#CFA760] tracking-widest uppercase">
              Navegación
            </h4>
            <ul className="space-y-2 text-[#D8E6E2]">
              <li><a href="#servicios" className="hover:text-[#CFA760] transition-colors">Servicios Técnicos</a></li>
              <li><a href="#sectores" className="hover:text-[#CFA760] transition-colors">Sectores Atendidos</a></li>
              <li><a href="#demos" className="hover:text-[#CFA760] transition-colors">Showroom 360° (Próximamente)</a></li>
              <li><a href="#metodologia" className="hover:text-[#CFA760] transition-colors">Metodología de Trabajo</a></li>
              <li><a href="#contacto" className="hover:text-[#CFA760] transition-colors">Contacto Directo</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-semibold text-[#CFA760] tracking-widest uppercase">
              Especialidades
            </h4>
            <ul className="space-y-2 text-[#D8E6E2]">
              <li>Tours Virtuales 360° HDR</li>
              <li>Escaneo Láser 3D & BIM</li>
              <li>Staging Virtual 3D</li>
              <li>Fotografía Aérea Dron 360°</li>
              <li>Google Street View Trusted</li>
              <li>Gemelos Digitales Industriales</li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-semibold text-[#CFA760] tracking-widest uppercase">
              Contacto
            </h4>
            <ul className="space-y-2 text-[#D8E6E2]">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#CFA760]" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#CFA760]" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#CFA760] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#12312B] flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#8FAEA5]">
          <p>© {new Date().getFullYear()} Métrica Virtual. Todos los derechos reservados. Captura Espacial & Tours Virtuales 360°.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#CFA760] cursor-pointer">Aviso de Privacidad</span>
            <span className="hover:text-[#CFA760] cursor-pointer">Términos del Servicio</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm bg-[#12312B] text-[#CFA760] hover:text-white transition-colors border border-[#1F4B3F]"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
