/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HistoricalChaptersView } from './components/HistoricalChaptersView';
import { CapatacesDirectivaView } from './components/CapatacesDirectivaView';
import { IdentityView } from './components/IdentityView';
import { FlashcardsView } from './components/FlashcardsView';
import { QuizSimulatorView } from './components/QuizSimulatorView';
import { PrintableSummaryView } from './components/PrintableSummaryView';
import { SearchGlossaryModal } from './components/SearchGlossaryModal';
import { FLASHCARDS, FOUNDATION_INFO } from './data/cuadrillaData';
import { playMartillazoSound } from './utils/sound';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('capitulos');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Local storage persisted study progress
  const [masteredCards, setMasteredCards] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('c11_mastered_flashcards');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [studiedChapters, setStudiedChapters] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('c11_studied_chapters');
      return saved ? JSON.parse(saved) : [1];
    } catch {
      return [1];
    }
  });

  // Save to local storage
  useEffect(() => {
    try {
      localStorage.setItem('c11_mastered_flashcards', JSON.stringify(masteredCards));
    } catch {
      // ignore
    }
  }, [masteredCards]);

  useEffect(() => {
    try {
      localStorage.setItem('c11_studied_chapters', JSON.stringify(studiedChapters));
    } catch {
      // ignore
    }
  }, [studiedChapters]);

  // Global keyboard shortcut for search (⌘K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleMastered = (cardId: string) => {
    setMasteredCards(prev => 
      prev.includes(cardId) ? prev.filter(id => id !== cardId) : [...prev, cardId]
    );
  };

  const handleToggleStudiedChapter = (chapterNum: number) => {
    setStudiedChapters(prev => 
      prev.includes(chapterNum) ? prev.filter(num => num !== chapterNum) : [...prev, chapterNum]
    );
  };

  const handleQuizCompleted = (score: number, total: number) => {
    try {
      const history = JSON.parse(localStorage.getItem('c11_quiz_history') || '[]');
      history.push({ date: new Date().toISOString(), score, total });
      localStorage.setItem('c11_quiz_history', JSON.stringify(history));
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#120816] text-[#e5e1e6] flex flex-col justify-between selection:bg-[#5d2a7a] selection:text-[#f3e8ff] font-sans">
      
      {/* Header with Navigation */}
      <div>
        <Header
          activeTab={activeTab}
          onTabChange={setActiveTab}
          masteredCount={masteredCards.length}
          totalFlashcards={FLASHCARDS.length}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {activeTab === 'capitulos' && (
            <HistoricalChaptersView
              studiedChapters={studiedChapters}
              onToggleStudied={handleToggleStudiedChapter}
            />
          )}

          {activeTab === 'capataces' && (
            <CapatacesDirectivaView />
          )}

          {activeTab === 'identidad' && (
            <IdentityView />
          )}

          {activeTab === 'flashcards' && (
            <FlashcardsView
              masteredCards={masteredCards}
              onToggleMastered={handleToggleMastered}
            />
          )}

          {activeTab === 'examen' && (
            <QuizSimulatorView
              onQuizCompleted={handleQuizCompleted}
            />
          )}

          {activeTab === 'resumen' && (
            <PrintableSummaryView />
          )}
        </main>
      </div>

      {/* Global Search & Glossary Modal */}
      <SearchGlossaryModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToTab={(tab) => setActiveTab(tab)}
      />

      {/* Bottom Global Footer (hidden in print) */}
      <footer className="no-print bg-[#1a0a24] border-t border-[#3d1a4a] text-[#9b72cf] py-10 mt-16 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div 
            onClick={playMartillazoSound}
            className="cursor-pointer inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a1336] border border-[#9b72cf]/50 text-[#f3e8ff] font-cinzel font-bold text-xs hover:border-[#9b72cf] hover:shadow-[0_0_12px_rgba(155,114,207,0.3)] transition-all"
            title="Tocar el martillo de la Once"
          >
            <span>CUADRILLA 11 "LOS ÍNTIMOS" • H S M N</span>
          </div>

          <p className="text-[#d8b4fe] font-serif italic text-sm max-w-xl mx-auto leading-relaxed">
            "¡Señor de los Milagros, Señor de los Peruanos! Protege a tus devotos hermanos cargadores en cada jornada de amor y penitencia."
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[#9b72cf]/80 text-[11px] pt-2">
            <span>Fundada el 11 de octubre de 1935</span>
            <span>•</span>
            <span>Calle de la Virreina / Jr. Manuel Pardo</span>
            <span>•</span>
            <span className="text-[#f3e8ff] font-semibold">90 Años (2025) → Centenario (2035)</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

