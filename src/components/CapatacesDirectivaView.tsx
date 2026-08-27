import React, { useState } from 'react';
import { Crown, ShieldCheck, FileText, Wallet, ClipboardList, Coins, Cross, User, Award, Calendar, Search, ArrowRight, Star } from 'lucide-react';
import { CAPATACES_CHRONOLOGY, CURRENT_DIRECTIVE } from '../data/cuadrillaData';
import { Capataz } from '../types';

export const CapatacesDirectivaView: React.FC = () => {
  const [selectedCapataz, setSelectedCapataz] = useState<Capataz>(CAPATACES_CHRONOLOGY[0]);
  const [filterQuery, setFilterQuery] = useState('');

  const filteredCapataces = CAPATACES_CHRONOLOGY.filter(c => 
    c.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    c.period.includes(filterQuery) ||
    c.context.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const getDirectiveIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-5 h-5 text-[#f3e8ff]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#d8b4fe]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#a78bfa]" />;
      case 'Wallet': return <Wallet className="w-5 h-5 text-[#9b72cf]" />;
      case 'ClipboardList': return <ClipboardList className="w-5 h-5 text-[#c084fc]" />;
      case 'Coins': return <Coins className="w-5 h-5 text-[#d8b4fe]" />;
      case 'Cross': return <Cross className="w-5 h-5 text-[#9b72cf]/60" />;
      default: return <User className="w-5 h-5 text-[#9b72cf]" />;
    }
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* SECTION 1: Gobierno Interno - Directiva Actual */}
      <section className="bg-[#1a0a24] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6] relative overflow-hidden">
        
        {/* Decorative corner seal */}
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <Crown className="w-48 h-48 text-[#9b72cf]" />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#3d1a4a] pb-6 mb-8">
            <div>
              <span className="text-[#9b72cf] text-[10px] font-bold uppercase tracking-[0.2em]">
                Hermandad de Nazarenas • Gobierno Interno
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif italic tracking-wide text-[#f3e8ff] mt-1">
                Directiva Actual
              </h2>
              <p className="text-[#a78bfa] text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                Cuerpo directivo responsable de la conducción pastoral, técnica, disciplinaria y administrativa de la Cuadrilla 11 "Los Íntimos".
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2a1336] border border-[#9b72cf]/50 text-[#f3e8ff] text-xs font-semibold shadow-[0_0_12px_rgba(155,114,207,0.25)]">
              <Star className="w-4 h-4 text-[#9b72cf] fill-[#9b72cf]" />
              <span>Capataz Actual: Hno. Wilbert Bazo Castillo (2026+)</span>
            </div>
          </div>

          {/* Directive Member Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CURRENT_DIRECTIVE.map((member, idx) => (
              <div
                key={member.position}
                id={`directive-card-${idx}`}
                className={`rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                  member.position === 'Capataz'
                    ? 'bg-[#2a1336] border-[#9b72cf] shadow-[0_0_15px_rgba(155,114,207,0.3)] lg:col-span-2'
                    : member.isDeceased
                    ? 'bg-[#160b1d]/60 border-[#3d1a4a]/60 text-[#a78bfa]'
                    : 'bg-[#160b1d] border-[#3d1a4a] hover:border-[#9b72cf]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#1d0e26] border border-[#3d1a4a] flex items-center justify-center">
                        {getDirectiveIcon(member.iconName)}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b72cf]">
                          {member.position}
                        </span>
                        {member.isDeceased && (
                          <span className="ml-2 text-[10px] text-[#9b72cf]/70 italic bg-[#120816] px-1.5 py-0.5 rounded border border-[#3d1a4a]">
                            En la paz del Señor (†)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif italic text-[#f3e8ff]">
                    {member.name}
                  </h3>

                  <p className="text-[#e5e1e6] text-xs sm:text-sm mt-2 leading-relaxed">
                    {member.roleDescription}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#3d1a4a] flex items-center justify-between text-[11px] text-[#9b72cf]">
                  <span>Cuadrilla 11 HSMN</span>
                  <span className="text-[#f3e8ff] font-medium">Oficial</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Cronología Histórica de Capataces (1935 - 2026+) */}
      <section className="bg-[#160b1d] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6]">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#3d1a4a] pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a1336] text-[#d8b4fe] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 border border-[#3d1a4a]">
              <Calendar className="w-3.5 h-3.5 text-[#9b72cf]" />
              <span>Línea de Sucesión Procesional (1935 – 2026+)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif italic tracking-wide text-[#f3e8ff]">
              Cronología de Capataces
            </h2>
            <p className="text-[#a78bfa] text-xs sm:text-sm mt-1">
              Los 9 hermanos que han tenido el honor y la sagrada responsabilidad de mandar las Andas de la Cuadrilla 11.
            </p>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-[#9b72cf] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filtrar por nombre o año..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="bg-[#120816] border border-[#3d1a4a] rounded-xl pl-9 pr-4 py-2 text-xs text-[#f3e8ff] placeholder-[#9b72cf]/50 focus:outline-none focus:border-[#9b72cf] w-full sm:w-64"
            />
          </div>
        </div>

        {/* Interactive Capataces List & Detail Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* List / Timeline on Left (lg: 7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-[10px] font-bold text-[#9b72cf] uppercase tracking-[0.2em] mb-2">
              Selecciona un Capataz para ver su legado:
            </div>

            <div className="space-y-2.5">
              {filteredCapataces.map((capataz) => {
                const isSelected = selectedCapataz.id === capataz.id;

                return (
                  <button
                    key={capataz.id}
                    id={`capataz-btn-${capataz.id}`}
                    onClick={() => setSelectedCapataz(capataz)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 group ${
                      isSelected
                        ? 'bg-[#2a1336] border-[#9b72cf] shadow-[0_0_15px_rgba(155,114,207,0.3)]'
                        : 'bg-[#120816] border-[#3d1a4a] hover:border-[#9b72cf]/50 hover:bg-[#1a0a24]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Order badge */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-serif italic text-sm flex-shrink-0 transition-colors ${
                        isSelected 
                          ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_8px_#9b72cf]' 
                          : capataz.isCurrent
                          ? 'bg-[#2a1336] text-[#d8b4fe] border border-[#9b72cf]/40'
                          : 'bg-[#1a0a24] text-[#a78bfa] border border-[#3d1a4a]'
                      }`}>
                        #{capataz.orderNumber}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif italic font-bold text-base sm:text-lg text-[#f3e8ff] group-hover:text-[#d8b4fe] transition-colors">
                            {capataz.name}
                          </h4>
                          {capataz.isCurrent && (
                            <span className="text-[9px] bg-[#5d2a7a]/60 text-[#f3e8ff] border border-[#9b72cf] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                              Actual
                            </span>
                          )}
                          {capataz.id === 1 && (
                            <span className="text-[9px] bg-[#1d0e26] text-[#d8b4fe] border border-[#3d1a4a] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                              Fundador
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-[#9b72cf] font-mono font-medium">
                          {capataz.period} • {capataz.yearsOfService}
                        </span>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform flex-shrink-0 ${
                      isSelected ? 'text-[#9b72cf] translate-x-1' : 'text-[#3d1a4a]'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Capataz Spotlight Detail Card on Right (lg: 5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-6 bg-[#1a0a24] border border-[#9b72cf]/50 rounded-3xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
              
              <div className="flex items-center justify-between border-b border-[#3d1a4a] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#9b72cf]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d8b4fe]">
                    {selectedCapataz.orderNumber}° Capataz de la Historia
                  </span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#2a1336] text-[#f3e8ff] border border-[#9b72cf]/40 font-mono font-bold">
                  {selectedCapataz.period}
                </span>
              </div>

              <h3 className="text-2xl font-serif italic text-[#f3e8ff]">
                {selectedCapataz.fullName}
              </h3>

              <div className="mt-2 text-xs text-[#e5e1e6] bg-[#120816] p-3.5 rounded-xl border border-[#3d1a4a] leading-relaxed">
                <strong className="text-[#9b72cf] block mb-1 text-[10px] uppercase tracking-wider">Contexto y Etapa:</strong>
                {selectedCapataz.context}
              </div>

              <div className="mt-4 space-y-3">
                <span className="text-[10px] font-bold text-[#9b72cf] uppercase tracking-[0.2em] block">
                  Logros y Hechos Destacados:
                </span>
                <ul className="space-y-2">
                  {selectedCapataz.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#e5e1e6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9b72cf] mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#3d1a4a] flex items-center justify-between text-xs text-[#a78bfa]">
                <span>Permanencia en el mando:</span>
                <strong className="text-[#f3e8ff] font-mono font-bold text-sm">
                  {selectedCapataz.yearsOfService}
                </strong>
              </div>

            </div>
          </div>

        </div>

      </section>

    </div>
  );
};

