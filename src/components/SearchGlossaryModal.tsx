import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Crown, Users, Award, BookMarked, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { HISTORICAL_CHAPTERS, CAPATACES_CHRONOLOGY, CURRENT_DIRECTIVE, GLOSSARY_TERMS, HISTORICAL_FIGURES_IDENTITY } from '../data/cuadrillaData';
import { SACRED_IMAGES } from '../data/galleryData';

interface SearchGlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTab: (tab: string) => void;
}

export const SearchGlossaryModal: React.FC<SearchGlossaryModalProps> = ({
  isOpen,
  onClose,
  onNavigateToTab
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  // Search through all entities
  const matchingChapters = cleanQuery ? HISTORICAL_CHAPTERS.filter(c => 
    c.title.toLowerCase().includes(cleanQuery) ||
    c.content.toLowerCase().includes(cleanQuery) ||
    c.period.toLowerCase().includes(cleanQuery) ||
    c.keyFigures.some(f => f.toLowerCase().includes(cleanQuery))
  ) : [];

  const matchingCapataces = cleanQuery ? CAPATACES_CHRONOLOGY.filter(c => 
    c.name.toLowerCase().includes(cleanQuery) ||
    c.period.includes(cleanQuery) ||
    c.highlights.some(h => h.toLowerCase().includes(cleanQuery))
  ) : [];

  const matchingDirective = cleanQuery ? CURRENT_DIRECTIVE.filter(d => 
    d.name.toLowerCase().includes(cleanQuery) ||
    d.position.toLowerCase().includes(cleanQuery) ||
    d.roleDescription.toLowerCase().includes(cleanQuery)
  ) : [];

  const matchingGlossary = cleanQuery ? GLOSSARY_TERMS.filter(g => 
    g.term.toLowerCase().includes(cleanQuery) ||
    g.definition.toLowerCase().includes(cleanQuery)
  ) : GLOSSARY_TERMS; // show glossary terms if no query

  const matchingFigures = cleanQuery ? HISTORICAL_FIGURES_IDENTITY.filter(f => 
    f.name.toLowerCase().includes(cleanQuery) ||
    f.bio.toLowerCase().includes(cleanQuery) ||
    f.roleInCuadrilla.toLowerCase().includes(cleanQuery)
  ) : [];

  const matchingImages = cleanQuery ? SACRED_IMAGES.filter(img =>
    img.title.toLowerCase().includes(cleanQuery) ||
    img.subtitle.toLowerCase().includes(cleanQuery) ||
    img.historicalDescription.toLowerCase().includes(cleanQuery) ||
    img.iconographicDetails.some(d => d.toLowerCase().includes(cleanQuery))
  ) : [];

  const totalMatches = matchingChapters.length + matchingCapataces.length + matchingDirective.length + (cleanQuery ? matchingGlossary.length : 0) + matchingFigures.length + matchingImages.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      
      <div className="bg-[#160b1d] border border-[#9b72cf]/50 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-[0_4px_30px_rgba(0,0,0,0.8)] overflow-hidden text-[#e5e1e6]">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#3d1a4a] flex items-center gap-3 bg-[#120816]">
          <Search className="w-5 h-5 text-[#9b72cf] flex-shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Buscar por hermano, capataz, fecha, martillazo, 50 tallados, etc..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-[#f3e8ff] placeholder-[#a78bfa]/50 focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-[#a78bfa] hover:text-[#f3e8ff] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 rounded-xl bg-[#2a1336] text-[#a78bfa] hover:text-[#f3e8ff] text-xs font-semibold border border-[#3d1a4a]"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {cleanQuery && totalMatches === 0 && (
            <div className="text-center py-8 text-[#a78bfa]">
              No se encontraron coincidencias para "{query}". Prueba buscando "Pedro Mina", "1935", "martillazo" o "Virreina".
            </div>
          )}

          {/* Chapters match */}
          {matchingChapters.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b72cf] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> Capítulos Históricos ({matchingChapters.length})
              </span>
              <div className="space-y-2">
                {matchingChapters.map(chap => (
                  <div
                    key={chap.number}
                    onClick={() => { onNavigateToTab('capitulos'); onClose(); }}
                    className="cursor-pointer p-3 rounded-xl bg-[#120816] border border-[#3d1a4a] hover:border-[#9b72cf] transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-[#f3e8ff] font-serif italic">Capítulo {chap.numberStr}: {chap.title}</span>
                      <span className="text-[#d8b4fe] font-mono">{chap.period}</span>
                    </div>
                    <p className="text-[#a78bfa] text-xs line-clamp-2">{chap.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Capataces match */}
          {matchingCapataces.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b72cf] flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5" /> Cronología de Capataces ({matchingCapataces.length})
              </span>
              <div className="space-y-2">
                {matchingCapataces.map(cap => (
                  <div
                    key={cap.id}
                    onClick={() => { onNavigateToTab('capataces'); onClose(); }}
                    className="cursor-pointer p-3 rounded-xl bg-[#120816] border border-[#3d1a4a] hover:border-[#9b72cf] transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#f3e8ff] font-serif italic">{cap.orderNumber}° Capataz: {cap.name}</span>
                        {cap.isCurrent && <span className="text-[9px] bg-[#153e28] text-[#86efac] px-1.5 py-0.5 rounded font-bold border border-[#22c55e]/40">ACTUAL</span>}
                      </div>
                      <span className="text-[11px] text-[#d8b4fe] font-mono">{cap.period} ({cap.yearsOfService})</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#a78bfa]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Directiva match */}
          {matchingDirective.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b72cf] flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> Directiva Actual ({matchingDirective.length})
              </span>
              <div className="space-y-2">
                {matchingDirective.map((dir, i) => (
                  <div
                    key={i}
                    onClick={() => { onNavigateToTab('capataces'); onClose(); }}
                    className="cursor-pointer p-3 rounded-xl bg-[#120816] border border-[#3d1a4a] hover:border-[#9b72cf] transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#9b72cf]">{dir.position}</span>
                      <span className="text-[#f3e8ff] font-serif italic font-semibold">{dir.name}</span>
                    </div>
                    <p className="text-[11px] text-[#a78bfa] mt-1">{dir.roleDescription}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Historical figures match */}
          {matchingFigures.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b72cf] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" /> Figuras y Personajes de Honor ({matchingFigures.length})
              </span>
              <div className="space-y-2">
                {matchingFigures.map((fig, i) => (
                  <div
                    key={i}
                    onClick={() => { onNavigateToTab('identidad'); onClose(); }}
                    className="cursor-pointer p-3 rounded-xl bg-[#120816] border border-[#3d1a4a] hover:border-[#9b72cf] transition-colors"
                  >
                    <div className="text-xs font-bold text-[#f3e8ff] font-serif italic">{fig.name} <span className="text-[#d8b4fe] font-normal not-italic">({fig.roleInCuadrilla})</span></div>
                    <p className="text-[11px] text-[#a78bfa] mt-1">{fig.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sacred Images match */}
          {matchingImages.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d8b4fe] flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5" /> Galería Sagrada ({matchingImages.length})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchingImages.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => { onNavigateToTab('galeria'); onClose(); }}
                    className="cursor-pointer p-3 rounded-xl bg-[#120816] border border-[#3d1a4a] hover:border-[#9b72cf] transition-colors flex items-center gap-3"
                  >
                    <img
                      src={img.thumbnailUrl || img.imageUrl}
                      alt={img.title}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-lg object-cover border border-[#3d1a4a] flex-shrink-0"
                    />
                    <div className="overflow-hidden">
                      <h5 className="text-xs font-serif italic text-[#f3e8ff] truncate">{img.title}</h5>
                      <span className="text-[10px] text-[#a78bfa] block truncate">{img.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* Glossary */}
          <div className="space-y-2 pt-2 border-t border-[#3d1a4a]">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d8b4fe] flex items-center gap-1.5">
              <BookMarked className="w-3.5 h-3.5" /> Glosario Nazareno de la Cuadrilla
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {matchingGlossary.map((g, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-[#120816] border border-[#3d1a4a] text-xs">
                  <strong className="text-[#f3e8ff] font-serif italic block mb-0.5">{g.term}</strong>
                  <span className="text-[#a78bfa] text-[11px] leading-snug">{g.definition}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

