import React, { useState, useEffect } from 'react';
import { Sparkles, RotateCcw, Shuffle, Volume2, VolumeX, CheckCircle, HelpCircle, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { FLASHCARDS } from '../data/cuadrillaData';
import { Flashcard } from '../types';
import { speakText, stopSpeaking } from '../utils/sound';

interface FlashcardsViewProps {
  masteredCards: string[];
  onToggleMastered: (id: string) => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  masteredCards,
  onToggleMastered
}) => {
  const [cards, setCards] = useState<Flashcard[]>(FLASHCARDS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [showHint, setShowHint] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Filter cards based on selected category
  const filteredCards = selectedCategory === 'todas'
    ? cards
    : cards.filter(c => c.category === selectedCategory);

  const currentCard = filteredCards[currentIndex] || filteredCards[0];
  const isMastered = currentCard ? masteredCards.includes(currentCard.id) : false;

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowHint(false);
    stopSpeaking();
    setIsSpeaking(false);
  }, [selectedCategory]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setShowHint(false);
    stopSpeaking();
    setIsSpeaking(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // loop back
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setShowHint(false);
    stopSpeaking();
    setIsSpeaking(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(filteredCards.length - 1);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowHint(false);
  };

  const handleListen = () => {
    if (!currentCard) return;
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      const textToSpeak = isFlipped ? `Respuesta: ${currentCard.answer}` : `Pregunta: ${currentCard.question}`;
      speakText(textToSpeak);
      setIsSpeaking(true);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'ArrowRight') {
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const categories = [
    { id: 'todas', label: 'Todas las tarjetas' },
    { id: 'catequesis', label: 'Catequesis & Doctrina' },
    { id: 'fechas', label: 'Fechas y Centenario' },
    { id: 'fundacion', label: 'Fundación y Gestores' },
    { id: 'capitulos', label: '9 Capítulos' },
    { id: 'capataces', label: 'Capataces' },
    { id: 'directiva', label: 'Directiva Actual' },
    { id: 'identidad', label: 'Los Íntimos & Folklore' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      
      {/* Top Header */}
      <div className="bg-[#1a0a24] border border-[#3d1a4a] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a1336] text-[#d8b4fe] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 border border-[#3d1a4a]">
              <Sparkles className="w-3.5 h-3.5 text-[#9b72cf]" />
              <span>Método de Repaso Activo y Memorización</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif italic tracking-wide text-[#f3e8ff]">
              Tarjetas de Estudio (Flashcards)
            </h2>
            <p className="text-[#a78bfa] text-xs sm:text-sm mt-1">
              Pon a prueba tu retención sobre la historia, fundadores, fechas, 9 capítulos y gobierno interno.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="shuffle-flashcards-btn"
              onClick={handleShuffle}
              className="px-3.5 py-2 rounded-xl bg-[#120816] border border-[#3d1a4a] hover:border-[#9b72cf] text-xs text-[#a78bfa] hover:text-[#f3e8ff] flex items-center gap-1.5 transition-colors"
              title="Barajar tarjetas aleatoriamente"
            >
              <Shuffle className="w-4 h-4 text-[#9b72cf]" />
              <span>Barajar</span>
            </button>

            <button
              id="reset-flashcards-btn"
              onClick={() => { setCurrentIndex(0); setIsFlipped(false); }}
              className="px-3.5 py-2 rounded-xl bg-[#120816] border border-[#3d1a4a] hover:border-[#9b72cf] text-xs text-[#a78bfa] hover:text-[#f3e8ff] flex items-center gap-1.5 transition-colors"
              title="Volver a la primera tarjeta"
            >
              <RotateCcw className="w-4 h-4 text-[#d8b4fe]" />
              <span>Reiniciar</span>
            </button>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="mt-6 pt-4 border-t border-[#3d1a4a] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <Filter className="w-4 h-4 text-[#9b72cf] flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] font-bold shadow-[0_0_10px_rgba(155,114,207,0.3)]'
                  : 'bg-[#120816] text-[#a78bfa] hover:bg-[#2a1336] border border-[#3d1a4a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Flashcard Stage */}
      {currentCard ? (
        <div className="space-y-6">
          
          {/* Card Counter & Mastery Pill */}
          <div className="flex items-center justify-between px-2 text-xs text-[#a78bfa]">
            <span className="font-semibold text-[#e5e1e6] font-mono">
              Tarjeta {currentIndex + 1} de {filteredCards.length}
            </span>

            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                currentCard.difficulty === 'facil' ? 'bg-[#153e28] text-[#86efac] border border-[#22c55e]/40' :
                currentCard.difficulty === 'medio' ? 'bg-[#3b2311] text-[#fde047] border border-[#eab308]/40' :
                'bg-[#3f1520] text-[#fca5a5] border border-[#ef4444]/40'
              }`}>
                Nivel {currentCard.difficulty}
              </span>

              {isMastered && (
                <span className="inline-flex items-center gap-1 text-[#86efac] font-semibold text-xs">
                  <CheckCircle className="w-3.5 h-3.5" /> Dominada
                </span>
              )}
            </div>
          </div>

          {/* Flip Card Container */}
          <div 
            id="interactive-flashcard"
            onClick={handleFlip}
            className="cursor-pointer min-h-[300px] sm:min-h-[340px] rounded-3xl p-6 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.6)] transition-all duration-300 transform select-none relative flex flex-col justify-between overflow-hidden border border-[#9b72cf]/50 bg-[#160b1d] hover:border-[#9b72cf]"
          >
            {/* Top Card Bar */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#9b72cf] uppercase">
                {isFlipped ? '✦ RESPUESTA Y EXPLICACIÓN' : '✦ PREGUNTA DE ESTUDIO'}
              </span>

              <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                <button
                  id="flashcard-audio-btn"
                  onClick={handleListen}
                  className="p-2 rounded-xl bg-[#120816] hover:bg-[#2a1336] text-[#a78bfa] hover:text-[#f3e8ff] border border-[#3d1a4a] transition-colors"
                  title="Escuchar texto"
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4 text-[#9b72cf]" /> : <Volume2 className="w-4 h-4" />}
                </button>

                {currentCard.hint && !isFlipped && (
                  <button
                    id="flashcard-hint-btn"
                    onClick={() => setShowHint(!showHint)}
                    className={`p-2 rounded-xl border text-xs flex items-center gap-1 transition-colors ${
                      showHint 
                        ? 'bg-[#2a1336] text-[#d8b4fe] border-[#9b72cf]' 
                        : 'bg-[#120816] text-[#a78bfa] border-[#3d1a4a] hover:text-[#f3e8ff]'
                    }`}
                    title="Ver pista"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>Pista</span>
                  </button>
                )}
              </div>
            </div>

            {/* Central Content */}
            <div className="my-6 text-center">
              {!isFlipped ? (
                /* Question side */
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#f3e8ff] leading-relaxed">
                    {currentCard.question}
                  </h3>

                  {showHint && currentCard.hint && (
                    <div className="mt-4 inline-block p-3 rounded-xl bg-[#1a0a24] border border-[#9b72cf]/40 text-[#d8b4fe] text-xs sm:text-sm animate-fadeIn">
                      <strong className="text-[#9b72cf]">💡 Pista:</strong> {currentCard.hint}
                    </div>
                  )}
                </div>
              ) : (
                /* Answer side */
                <div className="animate-fadeIn">
                  <div className="text-xl sm:text-2xl md:text-3xl font-serif italic font-bold text-[#f3e8ff] leading-snug">
                    {currentCard.answer}
                  </div>

                  <p className="text-[#e5e1e6] text-xs sm:text-sm mt-4 max-w-xl mx-auto leading-relaxed bg-[#120816] p-3.5 rounded-2xl border border-[#3d1a4a]">
                    {currentCard.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Card Footer */}
            <div className="flex items-center justify-between text-[#a78bfa] text-xs pt-4 border-t border-[#3d1a4a]">
              <span className="italic text-[11px] text-[#9b72cf]">
                Toca la tarjeta o presiona [Espacio] para {isFlipped ? 'ver la pregunta' : 'voltear'}
              </span>

              <span className="text-[#d8b4fe] font-serif italic font-semibold text-[11px]">
                Cuadrilla 11 "Los Íntimos"
              </span>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3">
              <button
                id="prev-flashcard-btn"
                onClick={handlePrev}
                className="px-4 py-2.5 rounded-xl bg-[#160b1d] hover:bg-[#1a0a24] border border-[#3d1a4a] text-[#e5e1e6] text-sm font-semibold flex items-center gap-2 transition-colors active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 text-[#9b72cf]" />
                <span>Anterior</span>
              </button>

              <button
                id="next-flashcard-btn"
                onClick={handleNext}
                className="px-4 py-2.5 rounded-xl bg-[#5d2a7a] hover:bg-[#78369e] text-[#f3e8ff] border border-[#9b72cf] text-sm font-bold flex items-center gap-2 transition-colors shadow-[0_0_12px_rgba(155,114,207,0.3)] active:scale-95"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mastery Toggle Button */}
            <button
              id="toggle-mastery-btn"
              onClick={() => onToggleMastered(currentCard.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all active:scale-95 ${
                isMastered
                  ? 'bg-[#153e28] hover:bg-[#1b4d32] text-[#86efac] border border-[#22c55e]/50 shadow-[0_0_12px_rgba(34,197,94,0.2)]'
                  : 'bg-[#160b1d] hover:bg-[#1a0a24] text-[#a78bfa] border border-[#3d1a4a] hover:border-[#9b72cf]'
              }`}
            >
              <CheckCircle className={`w-4 h-4 ${isMastered ? 'text-[#86efac]' : 'text-[#9b72cf]'}`} />
              <span>{isMastered ? '¡Concepto Dominado!' : 'Marcar como Dominada'}</span>
            </button>
          </div>

        </div>
      ) : (
        <div className="text-center py-12 text-[#a78bfa]">
          No se encontraron tarjetas en esta categoría.
        </div>
      )}

    </div>
  );
};

