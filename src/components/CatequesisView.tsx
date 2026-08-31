import React, { useState } from 'react';
import {
  Cross,
  BookOpen,
  Heart,
  Shield,
  Sparkles,
  Award,
  ChevronRight,
  Flame,
  CheckCircle2,
  Volume2,
  Bookmark,
  Layers,
  HelpCircle
} from 'lucide-react';
import { CATEQUESIS_DATA, CatequesisItem } from '../data/catequesisData';
import { speakText, stopSpeaking } from '../utils/sound';

export const CatequesisView: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<CatequesisItem>(CATEQUESIS_DATA[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [activeElementIndex, setActiveElementIndex] = useState<number | null>(null);

  const categories = [
    { id: 'todas', label: 'Todos los Temas' },
    { id: 'rosario', label: 'El Santo Rosario' },
    { id: 'sacramentos', label: 'Los 7 Sacramentos' },
    { id: 'pecados_virtudes', label: 'Pecados y Virtudes' },
    { id: 'mandamientos', label: 'Los 10 Mandamientos' },
    { id: 'obras_misericordia', label: 'Obras de Misericordia' },
    { id: 'doctrina_fe', label: 'Doctrina y Virtudes' }
  ];

  const filteredTopics = selectedCategory === 'todas'
    ? CATEQUESIS_DATA
    : CATEQUESIS_DATA.filter(t => t.category === selectedCategory);

  const handleReadAloud = (topic: CatequesisItem) => {
    const summary = `${topic.title}. ${topic.description}. ${topic.practicalApplicationForNazareno}`;
    speakText(summary);
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#1a0a24] via-[#160b1d] to-[#0f0415] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#5d2a7a]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a1336] border border-[#3d1a4a] text-[#9b72cf] text-[10px] uppercase tracking-[0.2em] font-bold">
            <Cross className="w-3.5 h-3.5 text-[#d8b4fe]" />
            <span>Formación Espiritual y Doctrinal del Hermano</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif italic text-[#f3e8ff] tracking-wide">
            Catequesis y Doctrina Fundamental Nazarena
          </h2>

          <p className="text-sm text-[#a78bfa] leading-relaxed">
            El verdadero cargador nazareno no solo sostiene el madero con fuerza física, sino que sostiene su vida con la doctrina de Cristo y de la Santa Iglesia. Conoce la guía completa del Santo Rosario, los 7 Sacramentos, el combate a los Pecados Capitales y los Mandamientos.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-3 flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs px-3 py-1.5 rounded-lg uppercase tracking-wider font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)]'
                    : 'bg-[#120816] text-[#a78bfa] hover:text-[#f3e8ff] border border-[#3d1a4a]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid: Topic Selector & Detailed Interactive Study Card */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Topics List */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-2xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#3d1a4a]">
              <h3 className="text-sm font-serif italic font-bold text-[#f3e8ff] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#9b72cf]" />
                <span>Temario de Formación</span>
              </h3>
              <span className="text-[10px] text-[#a78bfa] font-mono">
                {filteredTopics.length} Módulos
              </span>
            </div>

            <div className="space-y-3 max-h-[620px] overflow-y-auto pr-1 custom-nav-scrollbar">
              {filteredTopics.map((topic) => {
                const isSelected = selectedTopic.id === topic.id;

                return (
                  <div
                    key={topic.id}
                    id={`catequesis-item-${topic.id}`}
                    onClick={() => {
                      setSelectedTopic(topic);
                      setActiveElementIndex(null);
                    }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#2a1336] border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)]'
                        : 'bg-[#120816] border-[#3d1a4a] hover:border-[#9b72cf]/60 hover:bg-[#1a0a24]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      {topic.countBadge && (
                        <span className="text-[9px] uppercase px-2 py-0.5 rounded bg-[#160b1d] text-[#d8b4fe] border border-[#3d1a4a]">
                          {topic.countBadge}
                        </span>
                      )}
                      <span className="text-[10px] text-[#9b72cf] uppercase font-mono">
                        {topic.category.replace('_', ' ')}
                      </span>
                    </div>

                    <h4
                      className={`text-xs sm:text-sm font-serif italic font-bold ${
                        isSelected ? 'text-[#f3e8ff]' : 'text-[#d8b4fe]'
                      }`}
                    >
                      {topic.title}
                    </h4>

                    <p className="text-[11px] text-[#a78bfa] mt-1 line-clamp-2 leading-relaxed">
                      {topic.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Selected Topic In-Depth Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3d1a4a] pb-4">
              <div>
                <span className="text-[10px] text-[#9b72cf] uppercase font-mono tracking-widest block">
                  Doctrina Eclesiástica y Tradición Católica
                </span>
                <h3 className="text-xl sm:text-2xl font-serif italic text-[#f3e8ff] mt-1">
                  {selectedTopic.title}
                </h3>
                <p className="text-xs text-[#d8b4fe] italic mt-0.5">
                  {selectedTopic.subtitle}
                </p>
              </div>

              <button
                onClick={() => handleReadAloud(selectedTopic)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2a1336] hover:bg-[#3d1a4a] border border-[#3d1a4a] text-xs text-[#d8b4fe] transition-all self-start sm:self-auto"
                title="Escuchar locución de catequesis"
              >
                <Volume2 className="w-3.5 h-3.5 text-[#9b72cf]" />
                <span>Locución de Fe</span>
              </button>
            </div>

            {/* Description */}
            <div className="bg-[#120816] p-5 rounded-2xl border border-[#3d1a4a] space-y-2 text-xs sm:text-sm text-[#e5e1e6] leading-relaxed shadow-inner">
              <span className="text-[10px] uppercase font-bold text-[#9b72cf] tracking-wider block">
                Fundamento y Sentido Teológico:
              </span>
              <p>{selectedTopic.description}</p>
            </div>

            {/* Elements / Points Detailed Breakdown */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase font-bold text-[#d8b4fe] tracking-wider block flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#9b72cf]" />
                  <span>Contenido Detallado y Clasificación:</span>
                </span>
                <span className="text-[10px] text-[#a78bfa] italic">
                  {selectedTopic.elements.length} partes
                </span>
              </div>

              <div className="space-y-2.5">
                {selectedTopic.elements.map((el, elIdx) => (
                  <div
                    key={elIdx}
                    onClick={() =>
                      setActiveElementIndex(activeElementIndex === elIdx ? null : elIdx)
                    }
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      activeElementIndex === elIdx
                        ? 'bg-[#2a1336] border-[#9b72cf]'
                        : 'bg-[#1a0a24] border-[#3d1a4a] hover:border-[#9b72cf]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-serif italic font-bold text-[#f3e8ff]">
                        {el.name}
                      </h5>
                      <ChevronRight
                        className={`w-3.5 h-3.5 text-[#9b72cf] transition-transform ${
                          activeElementIndex === elIdx ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                    <p className="text-xs text-[#e5e1e6] mt-1.5 leading-relaxed">
                      {el.description}
                    </p>
                    {el.biblicalOrTheologicalNote && (
                      <p className="text-[11px] text-[#a78bfa] mt-1 italic border-t border-[#3d1a4a]/50 pt-1">
                        • {el.biblicalOrTheologicalNote}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Application for Nazareno */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-[#2a1336] to-[#1a0a24] rounded-2xl border border-[#3d1a4a] space-y-1.5 text-xs shadow-md">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <span className="text-[11px] uppercase font-bold text-[#f3e8ff] tracking-wider font-serif italic">
                  Aplicación Práctica en la Vida del Nazareno (Cuadrilla 11):
                </span>
              </div>
              <p className="text-[#d8b4fe] leading-relaxed text-xs">
                {selectedTopic.practicalApplicationForNazareno}
              </p>
            </div>

            {/* Biblical Quote Footer */}
            {selectedTopic.biblicalQuote && (
              <div className="text-center p-3 rounded-xl bg-[#120816] border border-[#3d1a4a]/60">
                <p className="text-xs text-[#a78bfa] font-serif italic">
                  {selectedTopic.biblicalQuote}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
