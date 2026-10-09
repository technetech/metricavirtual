import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, Clock } from 'lucide-react';
import { COMPANY_INFO, SECTORS } from '../data/companyData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialSubject?: string;
  initialQuoteData?: {
    sector: string;
    areaSqMeters: number;
    addons: string[];
    estimatedPriceMXN: string;
    estimatedDays: number;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject, initialQuoteData }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: initialQuoteData ? initialQuoteData.sector : 'Inmobiliario Residencial',
    estimatedArea: initialQuoteData ? `${initialQuoteData.areaSqMeters} m²` : '200 - 500 m²',
    message: initialQuoteData
      ? `Solicitud de cotización para ${initialQuoteData.sector}. Superficie: ${initialQuoteData.areaSqMeters} m2. Presupuesto estimado: ${initialQuoteData.estimatedPriceMXN}. Adicionales: ${initialQuoteData.addons.join(', ')}.`
      : initialSubject || '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || honeypot) return;
    setError('');
    setLoading(true);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch('https://formspree.io/f/xgaokgqq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          Empresa: formData.company,
          Telefono: formData.phone,
          Sector: formData.industry,
          Superficie: formData.estimatedArea,
          message: formData.message,
          _subject: 'Nueva solicitud de cotización — Duplica Digital',
          pagina: window.location.href,
          _gotcha: honeypot,
        }),
      });
      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      setSubmitted(true);
    } catch {
      setError('No pudimos confirmar el envío. Intente nuevamente o escríbanos a jorge@duplicadigital.com.');
    } finally {
      window.clearTimeout(timeout);
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Duplica Digital, me gustaría solicitar información y cotización para un tour virtual 360°. Mi nombre es ${formData.name || 'Cliente'} (${formData.company || 'Empresa'}).`
  );

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#0B221E] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#12312B] text-[#CFA760] border border-[#1F4B3F] text-xs font-semibold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-[#CFA760]" />
            <span>Contacto Directo & Atención Personalizada</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            Comience a Digitalizar sus Espacios Hoy
          </h2>
          <p className="text-[#D8E6E2] text-sm sm:text-base leading-relaxed">
            Póngase en contacto con nuestro equipo de ingenieros y especialistas espaciales. Atendemos solicitudes en todo México y Latinoamérica.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Banner */}
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#12312B] hover:bg-[#1A423A] border border-[#1F4B3F] p-6 rounded-sm flex items-center gap-4 transition-colors block shadow-xs"
            >
              <div className="w-12 h-12 rounded-sm bg-[#061815] text-[#CFA760] flex items-center justify-center shrink-0 border border-[#1F4B3F]">
                <MessageSquare className="w-6 h-6 text-[#CFA760]" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#CFA760]">Atención Inmediata</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white">Chat en WhatsApp Directo</h3>
                <p className="text-xs text-[#D8E6E2]">Respuesta rápida sobre agendas y levantamientos.</p>
              </div>
            </a>

            {/* Direct Channel Items */}
            <div className="bg-[#12312B] p-6 rounded-sm border border-[#1F4B3F] space-y-6 shadow-xs">
              <h3 className="font-serif text-xl font-semibold text-white border-b border-[#1F4B3F] pb-3">
                Canales Corporativos
              </h3>

              <div className="space-y-4 text-xs">
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#061815] text-[#CFA760] flex items-center justify-center shrink-0 border border-[#1F4B3F]">
                    <Phone className="w-4 h-4 text-[#CFA760]" />
                  </div>
                  <div>
                    <span className="text-[#8FAEA5] block text-[11px] uppercase tracking-wider">Teléfono de Atención</span>
                    <a href={`tel:${COMPANY_INFO.phoneClean}`} className="text-white font-medium hover:text-[#CFA760] text-sm">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#061815] text-[#CFA760] flex items-center justify-center shrink-0 border border-[#1F4B3F]">
                    <Mail className="w-4 h-4 text-[#CFA760]" />
                  </div>
                  <div>
                    <span className="text-[#8FAEA5] block text-[11px] uppercase tracking-wider">Correo Electrónico</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-white font-medium hover:text-[#CFA760] text-sm">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#061815] text-[#CFA760] flex items-center justify-center shrink-0 border border-[#1F4B3F]">
                    <MapPin className="w-4 h-4 text-[#CFA760]" />
                  </div>
                  <div>
                    <span className="text-[#8FAEA5] block text-[11px] uppercase tracking-wider">Oficina Central</span>
                    <span className="text-slate-200 block">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#061815] text-[#CFA760] flex items-center justify-center shrink-0 border border-[#1F4B3F]">
                    <Clock className="w-4 h-4 text-[#CFA760]" />
                  </div>
                  <div>
                    <span className="text-[#8FAEA5] block text-[11px] uppercase tracking-wider">Horario de Operación</span>
                    <span className="text-slate-200 block">Lunes a Viernes: 09:00 - 18:00 hrs</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Coverage note */}
            <div className="p-4 bg-[#12312B] border border-[#1F4B3F] rounded-sm text-xs text-[#D8E6E2] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#CFA760] shrink-0" />
              <span>Contamos con equipos de captura desplegables en CDMX, Monterrey, Guadalajara, Riviera Maya y principales zonas industriales.</span>
            </div>

          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#12312B] p-8 rounded-sm border border-[#1F4B3F] shadow-2xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#061815] text-[#CFA760] border border-[#1F4B3F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white">
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p className="text-[#D8E6E2] text-sm max-w-md mx-auto">
                  Gracias por escribirnos. Su solicitud fue aceptada para envío. Nuestro equipo se pondrá en contacto con usted.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#CFA760] text-[#0B221E] font-semibold text-xs px-5 py-2.5 rounded-sm hover:bg-[#DCB672] transition-colors uppercase tracking-wider mt-4"
                >
                  Enviar Otro Mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="_gotcha"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: 'none' }}
                />
                <div className="border-b border-[#1F4B3F] pb-3">
                  <h3 className="font-serif text-xl font-semibold text-white">Formulario de Solicitud & Cotización</h3>
                  <p className="text-xs text-[#8FAEA5]">Complete los datos de su inmueble o proyecto.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-[#D8E6E2]">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Ing. Carlos Mendoza"
                      className="w-full bg-[#061815] border border-[#1F4B3F] rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#CFA760]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-[#D8E6E2]">Empresa / Inmobiliaria</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej. Grupo Inmobiliario S.A."
                      className="w-full bg-[#061815] border border-[#1F4B3F] rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#CFA760]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-[#D8E6E2]">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="carlos@empresa.com"
                      className="w-full bg-[#061815] border border-[#1F4B3F] rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#CFA760]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-[#D8E6E2]">Teléfono de Contacto *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej. 55 1234 5678"
                      className="w-full bg-[#061815] border border-[#1F4B3F] rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#CFA760]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-[#D8E6E2]">Sector de Interés</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-[#061815] border border-[#1F4B3F] rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#CFA760]"
                    >
                      {SECTORS.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-[#D8E6E2]">Superficie Estimada (m²)</label>
                    <input
                      type="text"
                      value={formData.estimatedArea}
                      onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })}
                      placeholder="Ej. 350 m2"
                      className="w-full bg-[#061815] border border-[#1F4B3F] rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#CFA760]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-[#D8E6E2]">Detalles del Inmueble o Mensaje *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escriba aquí los requerimientos del proyecto, ubicación del inmueble o dudas específicas..."
                    className="w-full bg-[#061815] border border-[#1F4B3F] rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#CFA760]"
                  />
                </div>

                {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#CFA760] hover:bg-[#DCB672] text-[#0B221E] font-semibold text-xs py-3.5 px-4 rounded-sm transition-all shadow-xs flex items-center justify-center gap-2 uppercase tracking-wider group disabled:opacity-50"
                >
                  {loading ? (
                    <span>Procesando envío...</span>
                  ) : (
                    <>
                      <span>Enviar Solicitud de Información</span>
                      <Send className="w-3.5 h-3.5 text-[#0B221E] group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
