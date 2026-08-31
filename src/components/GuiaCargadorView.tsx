import React, { useState } from 'react';
import { Shield, Sparkles, BookOpen, Layers, CheckCircle2, AlertCircle, Heart, Award, ArrowRight } from 'lucide-react';
import { VESTIMENTA_HABITO_ITEMS, ANDAS_POSITIONS, CODIGO_ETICA_CARGADOR } from '../data/guiaCargadorData';
import { VestimentaItem, AndasPosition } from '../types';

export const GuiaCargadorView: React.FC = () => {
  const [selectedVestimenta, setSelectedVestimenta] = useState<VestimentaItem>(VESTIMENTA_HABITO_ITEMS[0]);
  const [selectedPosition, setSelectedPosition] = useState<AndasPosition>(ANDAS_POSITIONS[0]);
  const [activeSubSection, setActiveSubSection] = useState<'habito' | 'andas' | 'etica'>('habito');

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#1a0a24] via-[#160b1d] to-[#0f0415] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#5d2a7a]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a1336] border border-[#3d1a4a] text-[#9b72cf] text-[10px] uppercase tracking-[0.2em] font-bold">
            <Shield className="w-3.5 h-3.5 text-[#d8b4fe]" />
            <span>Formación y Protocolo del Hermano</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif italic text-[#f3e8ff] tracking-wide">
            Guía Técnica del Cargador y Protocolo de Andas
          </h2>

          <p className="text-sm text-[#a78bfa] leading-relaxed">
            El verdadero cargador íntimo conjuga destreza física, sobriedad litúrgica y respeto absoluto a las Sagradas Andas. Explora las especificaciones canónicas del hábito, los roles y puestos de carguío y el código de disciplina y fraternidad.
          </p>

          {/* Sub-navigation pills */}
          <div className="pt-2 flex flex-wrap gap-2">
            {[
              { id: 'habito', label: '1. El Santo Hábito Nazareno' },
              { id: 'andas', label: '2. Puestos en las Andas' },
              { id: 'etica', label: '3. Código de Ética y Fraternidad' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSubSection(tab.id as 'habito' | 'andas' | 'etica')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeSubSection === tab.id
                    ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)]'
                    : 'bg-[#120816] text-[#a78bfa] hover:text-[#f3e8ff] border border-[#3d1a4a]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Section 1: Hábito Nazareno */}
      {activeSubSection === 'habito' && (
        <section className="space-y-8 animate-fadeIn">
          <div className="border-b border-[#3d1a4a] pb-4">
            <h3 className="text-2xl font-serif italic text-[#f3e8ff]">
              Indumentaria y Hábito Oficial
            </h3>
            <p className="text-xs text-[#a78bfa] mt-1">
              Cada prenda del hábito encierra un profundo significado sacramental y debe portarse con estricta pulcritud.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Items List */}
            <div className="lg:col-span-5 space-y-3">
              {VESTIMENTA_HABITO_ITEMS.map((item) => {
                const isSelected = selectedVestimenta.id === item.id;

                return (
                  <div
                    key={item.id}
                    id={`habito-item-${item.id}`}
                    onClick={() => setSelectedVestimenta(item)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#2a1336] border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)]'
                        : 'bg-[#160b1d] border-[#3d1a4a] hover:border-[#9b72cf]/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className={`text-xs font-serif italic font-bold ${isSelected ? 'text-[#f3e8ff]' : 'text-[#d8b4fe]'}`}>
                        {item.name}
                      </h4>
                      <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#9b72cf]' : 'text-transparent'}`} />
                    </div>
                    <p className="text-[11px] text-[#a78bfa] mt-1 line-clamp-1">
                      {item.significance}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Item Details */}
            <div className="lg:col-span-7 bg-[#160b1d] border border-[#3d1a4a] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <div className="border-b border-[#3d1a4a] pb-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#9b72cf]">
                  Prenda Reglamentaria HSMN
                </span>
                <h3 className="text-xl font-serif italic text-[#f3e8ff] mt-1">
                  {selectedVestimenta.name}
                </h3>
                <p className="text-xs text-[#d8b4fe] italic mt-0.5">
                  "{selectedVestimenta.significance}"
                </p>
              </div>

              {/* Meaning */}
              <div className="bg-[#120816] p-4 rounded-xl border border-[#3d1a4a] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#9b72cf] tracking-wider block">
                  Significado Teológico y Espiritual:
                </span>
                <p className="text-xs text-[#e5e1e6] leading-relaxed">
                  {selectedVestimenta.theologicalMeaning}
                </p>
              </div>

              {/* Specs */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#9b72cf] tracking-wider block flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Especificaciones de Confección y Uso:</span>
                </span>
                <div className="space-y-1.5">
                  {selectedVestimenta.specifications.map((spec, sIdx) => (
                    <div key={sIdx} className="p-2.5 bg-[#1a0a24] rounded-lg border border-[#3d1a4a] text-xs text-[#e5e1e6]">
                      • {spec}
                    </div>
                  ))}
                </div>
              </div>

              {/* Common mistakes */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider block flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                  <span>Errores Frecuentes a Evitar:</span>
                </span>
                <div className="space-y-1.5">
                  {selectedVestimenta.commonMistakes.map((mistake, mIdx) => (
                    <div key={mIdx} className="p-2 bg-rose-950/20 rounded-lg border border-rose-900/40 text-[11px] text-rose-200">
                      ⚠ {mistake}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Sub-Section 2: Puestos en las Andas */}
      {activeSubSection === 'andas' && (
        <section className="space-y-8 animate-fadeIn">
          <div className="border-b border-[#3d1a4a] pb-4">
            <h3 className="text-2xl font-serif italic text-[#f3e8ff]">
              Anatomía de las Andas y Roles de Carguío
            </h3>
            <p className="text-xs text-[#a78bfa] mt-1">
              Las Andas del Señor pesan más de 2 toneladas. Cada puesto exige una estatura, temple físico y coordinación específica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Position List */}
            <div className="lg:col-span-5 space-y-3">
              {ANDAS_POSITIONS.map((pos) => {
                const isSelected = selectedPosition.id === pos.id;

                return (
                  <div
                    key={pos.id}
                    id={`pos-item-${pos.id}`}
                    onClick={() => setSelectedPosition(pos)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#2a1336] border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)]'
                        : 'bg-[#160b1d] border-[#3d1a4a] hover:border-[#9b72cf]/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className={`text-xs font-serif italic font-bold ${isSelected ? 'text-[#f3e8ff]' : 'text-[#d8b4fe]'}`}>
                        {pos.name}
                      </h4>
                      <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#120816] text-[#9b72cf] border border-[#3d1a4a]">
                        {pos.location.split(' ')[0]}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#a78bfa] mt-1 line-clamp-1">
                      {pos.functionDescription}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Position Details */}
            <div className="lg:col-span-7 bg-[#160b1d] border border-[#3d1a4a] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <div className="border-b border-[#3d1a4a] pb-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#9b72cf]">
                  Ubicación: {selectedPosition.location}
                </span>
                <h3 className="text-xl font-serif italic text-[#f3e8ff] mt-1">
                  {selectedPosition.name}
                </h3>
                <p className="text-xs text-[#d8b4fe] italic mt-0.5">
                  Requisito Físico: {selectedPosition.heightRequirement}
                </p>
              </div>

              {/* Function */}
              <div className="bg-[#120816] p-4 rounded-xl border border-[#3d1a4a] space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#9b72cf] tracking-wider block">
                  Responsabilidad en el Turno:
                </span>
                <p className="text-xs text-[#e5e1e6] leading-relaxed">
                  {selectedPosition.functionDescription}
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#9b72cf] tracking-wider block">
                  Destrezas Técnicas Requeridas:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedPosition.keySkills.map((skill, skIdx) => (
                    <div key={skIdx} className="p-2.5 bg-[#1a0a24] rounded-lg border border-[#3d1a4a] text-xs text-[#e5e1e6]">
                      ✓ {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Coordination Note */}
              <div className="p-4 bg-[#2a1336] rounded-xl border border-[#3d1a4a] text-xs text-[#d8b4fe] space-y-1">
                <strong className="text-[#f3e8ff] block font-serif italic">Clave de Coordinación Procesional:</strong>
                <p className="text-[11px] leading-relaxed">{selectedPosition.coordinationNotes}</p>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Sub-Section 3: Código de Ética y Fraternidad */}
      {activeSubSection === 'etica' && (
        <section className="bg-[#160b1d] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fadeIn">
          <div className="border-b border-[#3d1a4a] pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#2a1336] text-[#d8b4fe] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 border border-[#3d1a4a]">
              <Heart className="w-3 h-3 text-rose-400" />
              <span>Compromiso de Vida</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif italic text-[#f3e8ff]">
              Código de Ética y Disciplina de la Once
            </h3>
            <p className="text-xs text-[#a78bfa] mt-1">
              Los estatutos morales que han forjado el prestigio de la Cuadrilla 11 "Los Íntimos" desde 1935.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CODIGO_ETICA_CARGADOR.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#120816] p-6 rounded-2xl border border-[#3d1a4a] hover:border-[#9b72cf] transition-all space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#5d2a7a]/40 border border-[#9b72cf]/40 flex items-center justify-center text-[#f3e8ff] font-serif italic font-bold text-xs">
                  {idx + 1}
                </div>
                <h4 className="text-base font-serif italic font-bold text-[#f3e8ff]">
                  {item.principle}
                </h4>
                <p className="text-xs text-[#e5e1e6] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
