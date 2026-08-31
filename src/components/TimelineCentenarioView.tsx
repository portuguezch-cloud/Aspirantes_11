import React, { useState } from 'react';
import { Clock, Calendar, Sparkles, Award, Bookmark, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/timelineData';
import { TimelineMilestone } from '../types';

export const TimelineCentenarioView: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState<string>('todas');
  const [activeMilestone, setActiveMilestone] = useState<TimelineMilestone>(TIMELINE_MILESTONES[2]); // 1935 Fundacion

  const filteredMilestones = selectedEra === 'todas'
    ? TIMELINE_MILESTONES
    : TIMELINE_MILESTONES.filter(m => m.era === selectedEra);

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#1a0a24] via-[#160b1d] to-[#0f0415] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#5d2a7a]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a1336] border border-[#3d1a4a] text-[#9b72cf] text-[10px] uppercase tracking-[0.2em] font-bold">
            <Clock className="w-3.5 h-3.5 text-[#d8b4fe]" />
            <span>Un Siglo de Tradición y Fe Nazarena</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif italic text-[#f3e8ff] tracking-wide">
            Línea de Tiempo del Centenario (1935 - 2035)
          </h2>

          <p className="text-sm text-[#a78bfa] leading-relaxed">
            Desde las primeras tertulias de 1930 en el Callejón del Buque hasta la solemne marcha hacia el Gran Centenario en 2035. Navega de manera interactiva por las épocas y gestas que han forjado el temple de la Cuadrilla 11 "Los Íntimos".
          </p>

          {/* Era Filter Bar */}
          <div className="pt-3 flex flex-wrap gap-1.5">
            {[
              { id: 'todas', label: 'Todos los Hitos' },
              { id: 'previa', label: '1930-34 (Ensayos)' },
              { id: 'fundacion', label: '1935 (Fundación)' },
              { id: 'expansion', label: '1968-84 (Expansión)' },
              { id: 'madurez', label: '1985-97 (Bodas de Oro)' },
              { id: 'milenio', label: '1998-2025 (Milenio y 90 Años)' },
              { id: 'centenario', label: '2035 (Centenario)' }
            ].map(era => (
              <button
                key={era.id}
                onClick={() => setSelectedEra(era.id)}
                className={`text-xs px-3 py-1.5 rounded-lg uppercase tracking-wider font-semibold transition-all ${
                  selectedEra === era.id
                    ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)]'
                    : 'bg-[#120816] text-[#a78bfa] hover:text-[#f3e8ff] border border-[#3d1a4a]'
                }`}
              >
                {era.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline & Detail Showcase */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Timeline milestones scroll */}
        <div className="lg:col-span-6 space-y-3">
          <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-2xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#3d1a4a]">
              <h3 className="text-sm font-serif italic font-bold text-[#f3e8ff] flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#9b72cf]" />
                <span>Cronología de Hitos</span>
              </h3>
              <span className="text-[10px] text-[#a78bfa] font-mono">
                {filteredMilestones.length} Momentos Históricos
              </span>
            </div>

            {/* Milestone items list */}
            <div className="space-y-3 max-h-[580px] overflow-y-auto pr-1.5 custom-nav-scrollbar relative">
              
              {/* Center vertical indicator line */}
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-[#3d1a4a] pointer-events-none hidden sm:block" />

              {filteredMilestones.map((m) => {
                const isSelected = activeMilestone.id === m.id;
                const isFuture = m.year === 2035;

                return (
                  <div
                    key={m.id}
                    id={`milestone-${m.id}`}
                    onClick={() => setActiveMilestone(m)}
                    className={`relative sm:pl-12 p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#2a1336] border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)]'
                        : isFuture
                        ? 'bg-[#1a0a24] border-amber-500/50 hover:border-amber-400'
                        : 'bg-[#120816] border-[#3d1a4a] hover:border-[#9b72cf]/60 hover:bg-[#1a0a24]'
                    }`}
                  >
                    {/* Node Dot on line */}
                    <div className={`hidden sm:flex absolute left-4 top-5 w-4 h-4 rounded-full border-2 items-center justify-center -translate-x-1/2 ${
                      isSelected
                        ? 'bg-[#9b72cf] border-[#f3e8ff] shadow-[0_0_8px_#9b72cf]'
                        : isFuture
                        ? 'bg-amber-400 border-amber-200'
                        : 'bg-[#160b1d] border-[#5d2a7a]'
                    }`} />

                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`text-xs font-serif italic font-bold ${
                        isSelected ? 'text-[#f3e8ff]' : isFuture ? 'text-amber-300' : 'text-[#9b72cf]'
                      }`}>
                        {m.year} • {m.exactDate}
                      </span>
                      
                      <span className="text-[9px] uppercase px-2 py-0.5 rounded bg-[#160b1d] text-[#d8b4fe] border border-[#3d1a4a]">
                        {m.era}
                      </span>
                    </div>

                    <h4 className={`text-xs sm:text-sm font-serif italic font-bold leading-snug ${
                      isSelected ? 'text-[#f3e8ff]' : 'text-[#d8b4fe]'
                    }`}>
                      {m.title}
                    </h4>

                    <p className="text-[11px] text-[#a78bfa] mt-1 line-clamp-2 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Col: Selected Milestone Spotlight */}
        <div className="lg:col-span-6">
          <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 sticky top-24">
            
            {/* Header */}
            <div className="border-b border-[#3d1a4a] pb-4 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-2xl font-serif italic font-bold text-[#9b72cf]">
                  {activeMilestone.year}
                </span>
                <span className="text-[10px] px-3 py-1 rounded-full bg-[#2a1336] text-[#d8b4fe] border border-[#3d1a4a] uppercase font-bold tracking-wider">
                  {activeMilestone.exactDate}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif italic text-[#f3e8ff] leading-tight">
                {activeMilestone.title}
              </h3>
            </div>

            {/* Description */}
            <div className="bg-[#120816] p-5 rounded-2xl border border-[#3d1a4a] space-y-2 text-xs sm:text-sm text-[#e5e1e6] leading-relaxed shadow-inner">
              <span className="text-[10px] uppercase font-bold text-[#9b72cf] tracking-wider block">
                Relato Histórico del Acontecimiento:
              </span>
              <p>{activeMilestone.description}</p>
            </div>

            {/* Protagonists */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold text-[#9b72cf] tracking-wider block">
                Protagonistas y Hermanos de la Jornada:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeMilestone.protagonists.map((protag, pIdx) => (
                  <span
                    key={pIdx}
                    className="text-xs bg-[#1a0a24] text-[#d8b4fe] px-3 py-1 rounded-lg border border-[#3d1a4a]"
                  >
                    {protag}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact / Legacy */}
            <div className="p-4 bg-[#2a1336] rounded-xl border border-[#3d1a4a] space-y-1 text-xs">
              <span className="text-[10px] uppercase font-bold text-[#f3e8ff] tracking-wider block font-serif italic">
                Trascendencia en la Historia de la Once:
              </span>
              <p className="text-[#d8b4fe] leading-relaxed">
                {activeMilestone.impact}
              </p>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
};
