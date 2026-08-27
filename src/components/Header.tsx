import React from 'react';
import { Volume2, Sparkles, BookOpen, GraduationCap, Flame, Search } from 'lucide-react';
import { playMartillazoSound } from '../utils/sound';
import { FOUNDATION_INFO } from '../data/cuadrillaData';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  masteredCount: number;
  totalFlashcards: number;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  masteredCount,
  totalFlashcards,
  onOpenSearch
}) => {
  const masteryPercentage = Math.round((masteredCount / totalFlashcards) * 100) || 0;

  return (
    <header className="relative bg-[#1a0a24] text-[#e5e1e6] border-b border-[#3d1a4a] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      {/* Subtle top ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5d2a7a]/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Emblem & Main Title */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            {/* Medallón Cuadrilla 11 */}
            <div 
              id="cuadrilla-medallion"
              onClick={playMartillazoSound}
              title="Haz clic para escuchar el toque de martillo procesional"
              className="group relative cursor-pointer flex-shrink-0 w-20 h-20 rounded-full bg-[#5d2a7a] flex items-center justify-center border border-[#9b72cf] shadow-[0_0_20px_rgba(155,114,207,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(155,114,207,0.5)]"
            >
              <div className="w-[70px] h-[70px] rounded-full bg-[#1a0a24] border border-[#3d1a4a] flex flex-col items-center justify-center text-center relative overflow-hidden">
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#9b72cf] font-bold">CUADRILLA</span>
                <span className="text-2xl font-serif italic tracking-wide text-[#f3e8ff]">
                  11
                </span>
                <span className="text-[7px] uppercase tracking-widest text-[#d8b4fe]/80">H S M N</span>
                
                {/* Subtle glow ring on hover */}
                <div className="absolute inset-0 rounded-full border border-[#9b72cf]/0 group-hover:border-[#9b72cf]/60 transition-colors pointer-events-none" />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#1d0e26] border border-[#3d1a4a] text-[#9b72cf] text-[10px] uppercase tracking-[0.2em] font-bold mb-1.5">
                <Sparkles className="w-3 h-3 text-[#9b72cf]" />
                <span>Hermandad del Señor de los Milagros de Nazarenas</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic tracking-wide text-[#f3e8ff]">
                Cuadrilla 11 <span className="text-[#d8b4fe] not-italic font-sans font-bold">"Los Íntimos"</span>
              </h1>
              <p className="text-[#a78bfa] text-xs sm:text-sm mt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2 font-medium">
                <span className="text-[#f3e8ff]">{FOUNDATION_INFO.milestones.yearsOfHistory} Años de Tradición y Fe</span>
                <span className="text-[#3d1a4a]">•</span>
                <span className="text-[#e5e1e6]">Fundada el 11 de octubre de 1935</span>
                <span className="text-[#3d1a4a]">•</span>
                <span className="text-[#9b72cf] font-bold">Rumbo al Centenario 2035</span>
              </p>
            </div>
          </div>

          {/* Quick Actions & Study Progress Pill */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              id="sound-martillazo-btn"
              onClick={playMartillazoSound}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#160b1d] hover:bg-[#2a1336] border border-[#3d1a4a] hover:border-[#9b72cf] text-[#d8b4fe] text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-95"
              title="Escuchar sonido ceremonial del martillo"
            >
              <Volume2 className="w-4 h-4 text-[#9b72cf] animate-pulse" />
              <span>Toque de Martillo</span>
            </button>

            {/* Study Progress Card */}
            <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-lg px-4 py-2.5 flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-[#5d2a7a]/40 border border-[#9b72cf]/40 flex items-center justify-center text-[#9b72cf]">
                <Flame className="w-4 h-4 text-[#d8b4fe]" />
              </div>
              <div>
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span className="text-[#a78bfa] text-[10px] uppercase tracking-wider font-bold">Dominio de Estudio</span>
                  <span className="text-[#f3e8ff] font-serif italic font-bold">{masteryPercentage}%</span>
                </div>
                <div className="w-28 sm:w-32 h-1.5 bg-[#0a050d] rounded-full mt-1.5 overflow-hidden border border-[#3d1a4a]">
                  <div 
                    className="h-full bg-gradient-to-r from-[#5d2a7a] to-[#9b72cf] rounded-full transition-all duration-500 shadow-[0_0_8px_#9b72cf]"
                    style={{ width: `${masteryPercentage}%` }}
                  />
                </div>
                <span className="text-[10px] text-[#9b72cf]/70 mt-0.5 block font-medium">
                  {masteredCount} de {totalFlashcards} conceptos dominados
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Navigation Tabs Bar */}
        <nav className="mt-8 pt-4 border-t border-[#3d1a4a] flex items-center justify-between overflow-x-auto pb-1 scrollbar-none gap-2">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              id="nav-capitulos"
              onClick={() => onTabChange('capitulos')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'capitulos'
                  ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)] font-bold'
                  : 'text-[#e5e1e6] opacity-70 hover:opacity-100 hover:bg-[#2a1336] border border-transparent'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[#9b72cf]" />
              <span>9 Capítulos (1930-1935)</span>
            </button>

            <button
              id="nav-capataces"
              onClick={() => onTabChange('capataces')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'capataces'
                  ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)] font-bold'
                  : 'text-[#e5e1e6] opacity-70 hover:opacity-100 hover:bg-[#2a1336] border border-transparent'
              }`}
            >
              <span>Capataces y Directiva</span>
            </button>

            <button
              id="nav-identidad"
              onClick={() => onTabChange('identidad')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'identidad'
                  ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)] font-bold'
                  : 'text-[#e5e1e6] opacity-70 hover:opacity-100 hover:bg-[#2a1336] border border-transparent'
              }`}
            >
              <span>Identidad "Los Íntimos"</span>
            </button>

            <button
              id="nav-flashcards"
              onClick={() => onTabChange('flashcards')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'flashcards'
                  ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)] font-bold'
                  : 'text-[#e5e1e6] opacity-70 hover:opacity-100 hover:bg-[#2a1336] border border-transparent'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#9b72cf]" />
              <span>Tarjetas de Estudio</span>
            </button>

            <button
              id="nav-examen"
              onClick={() => onTabChange('examen')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'examen'
                  ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)] font-bold'
                  : 'text-[#e5e1e6] opacity-70 hover:opacity-100 hover:bg-[#2a1336] border border-transparent'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#9b72cf]" />
              <span>Simulador de Examen</span>
            </button>

            <button
              id="nav-resumen"
              onClick={() => onTabChange('resumen')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'resumen'
                  ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)] font-bold'
                  : 'text-[#e5e1e6] opacity-70 hover:opacity-100 hover:bg-[#2a1336] border border-transparent'
              }`}
            >
              <span>Ficha Imprimible</span>
            </button>
          </div>

          <button
            id="global-search-btn"
            onClick={onOpenSearch}
            className="px-3 py-1.5 rounded-lg bg-[#160b1d] hover:bg-[#2a1336] text-[#d8b4fe] hover:text-white border border-[#3d1a4a] hover:border-[#9b72cf] text-xs font-medium flex items-center gap-1.5 transition-colors flex-shrink-0"
          >
            <Search className="w-3.5 h-3.5 text-[#9b72cf]" />
            <span className="text-[11px] uppercase tracking-wider">Buscar</span>
            <kbd className="px-1.5 py-0.5 bg-[#0a050d] border border-[#3d1a4a] text-[9px] rounded text-[#9b72cf] font-mono">⌘K</kbd>
          </button>
        </nav>
      </div>
    </header>
  );
};

