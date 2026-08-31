import React, { useState, useMemo, useEffect } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, HelpCircle, ShieldAlert, Sparkles, Flame, Shuffle, BookOpen, Layers, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS_BANK, TOTAL_QUESTIONS_COUNT } from '../data/quizQuestionsBank';
import { playMartillazoSound } from '../utils/sound';
import { QuizQuestion } from '../types';

interface QuizSimulatorViewProps {
  onQuizCompleted: (score: number, total: number) => void;
}

type CategoryFilter = 'todas' | 'catequesis' | 'fundacion' | 'capitulos' | 'capataces' | 'identidad';
type DifficultyFilter = 'todas' | 'facil' | 'intermedio' | 'dificil' | 'ultradificil';
type ExamSize = '10' | '20' | '30' | 'todas';

// Helper function to shuffle and sample an array
function sampleQuestions(array: QuizQuestion[], count: number): QuizQuestion[] {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return count >= shuffled.length ? shuffled : shuffled.slice(0, count);
}

export const QuizSimulatorView: React.FC<QuizSimulatorViewProps> = ({
  onQuizCompleted
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('todas');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilter>('todas');
  const [examSize, setExamSize] = useState<ExamSize>('20');
  const [seed, setSeed] = useState<number>(0);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: number }>({});
  const [quizFinished, setQuizFinished] = useState(false);

  // 1. Filter the entire master bank of 200+ questions
  const filteredPool = useMemo(() => {
    return QUIZ_QUESTIONS_BANK.filter(q => {
      const matchCategory =
        selectedCategory === 'todas' ||
        (selectedCategory === 'catequesis' && q.category === 'catequesis') ||
        (selectedCategory === 'fundacion' && q.category === 'fundacion') ||
        (selectedCategory === 'capitulos' && (q.category === 'capitulos' || q.category === 'general')) ||
        (selectedCategory === 'capataces' && (q.category === 'capataces' || q.category === 'directiva')) ||
        (selectedCategory === 'identidad' && q.category === 'identidad');

      const matchDifficulty = selectedDifficulty === 'todas' || q.difficulty === selectedDifficulty;
      return matchCategory && matchDifficulty;
    });
  }, [selectedCategory, selectedDifficulty]);

  // 2. Select a randomized subset for the active test
  const activeQuestions = useMemo(() => {
    if (filteredPool.length === 0) return [];
    if (examSize === 'todas') {
      return [...filteredPool].sort(() => Math.random() - 0.5);
    }
    const count = parseInt(examSize, 10) || 20;
    return sampleQuestions(filteredPool, count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredPool, examSize, seed]);

  const currentQ = activeQuestions[currentQuestionIndex] || activeQuestions[0];

  // Reset current question flow whenever active questions or seed change
  const handleShuffleNewQuestions = () => {
    setSeed(prev => prev + 1);
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswerSubmitted(false);
    setUserAnswers({});
    setQuizFinished(false);
  };

  const handleCategoryChange = (cat: CategoryFilter) => {
    setSelectedCategory(cat);
    setSeed(prev => prev + 1);
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswerSubmitted(false);
    setUserAnswers({});
    setQuizFinished(false);
  };

  const handleDifficultyChange = (diff: DifficultyFilter) => {
    setSelectedDifficulty(diff);
    setSeed(prev => prev + 1);
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswerSubmitted(false);
    setUserAnswers({});
    setQuizFinished(false);
  };

  const handleExamSizeChange = (size: ExamSize) => {
    setExamSize(size);
    setSeed(prev => prev + 1);
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswerSubmitted(false);
    setUserAnswers({});
    setQuizFinished(false);
  };

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswerIndex(index);
  };

  const handleConfirmAnswer = () => {
    if (selectedAnswerIndex === null || !currentQ) return;
    setIsAnswerSubmitted(true);
    setUserAnswers(prev => ({ ...prev, [currentQ.id]: selectedAnswerIndex }));

    if (selectedAnswerIndex === currentQ.correctAnswerIndex) {
      playMartillazoSound();
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswerIndex(null);
    setIsAnswerSubmitted(false);

    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setQuizFinished(true);
    let correctCount = 0;
    activeQuestions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswerIndex) {
        correctCount++;
      }
    });

    onQuizCompleted(correctCount, activeQuestions.length);

    if (activeQuestions.length > 0 && correctCount / activeQuestions.length >= 0.8) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const restartSameQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setIsAnswerSubmitted(false);
    setUserAnswers({});
    setQuizFinished(false);
  };

  // Calculate final score
  const correctCount = activeQuestions.filter(q => userAnswers[q.id] === q.correctAnswerIndex).length;
  const scorePercent = activeQuestions.length > 0 ? Math.round((correctCount / activeQuestions.length) * 100) : 0;

  const getRankBadge = (pct: number) => {
    if (pct === 100) return { title: "Maestro de Tradición Nazarena - Cuadrilla 11", desc: "¡Conocimiento impecable de la historia, directiva, época fundacional, andas y catequesis de 'Los Íntimos'!", color: "from-purple-900 to-[#1a0a24]" };
    if (pct >= 80) return { title: "Cargador Distinguido de Los Íntimos", desc: "¡Excelente nivel de preparación para honrar la memoria y estatutos de la Once!", color: "from-purple-950 to-[#2a1336]" };
    if (pct >= 60) return { title: "Hermano Aspirante con Buen Conocimiento", desc: "Buen progreso en el estudio. Repasa los 9 capítulos y la doctrina para alcanzar la excelencia.", color: "from-[#1d0e26] to-[#120816]" };
    return { title: "Hermano en Formación", desc: "Te sugerimos repasar las flashcards y los capítulos históricos para afianzar los conceptos clave.", color: "from-[#160b1d] to-[#120816]" };
  };

  const rank = getRankBadge(scorePercent);

  const getDifficultyBadge = (diff?: string) => {
    switch (diff) {
      case 'facil':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-300 border border-emerald-600/50">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            Fácil
          </span>
        );
      case 'intermedio':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-600/50">
            <Flame className="w-3 h-3 text-amber-400" />
            Intermedio
          </span>
        );
      case 'dificil':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-950/90 text-purple-300 border border-purple-500/70 shadow-[0_0_8px_rgba(155,114,207,0.3)]">
            <ShieldAlert className="w-3 h-3 text-[#d8b4fe]" />
            Difícil
          </span>
        );
      case 'ultradificil':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-red-950 via-purple-950 to-amber-950 text-amber-300 border border-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.4)]">
            <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
            Ultra Difícil
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
      
      {/* Top Banner & Question Bank Controls */}
      <div className="bg-[#1a0a24] border border-[#3d1a4a] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a1336] text-[#d8b4fe] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 border border-[#3d1a4a]">
              <Award className="w-3.5 h-3.5 text-[#9b72cf]" />
              <span>Banco Dinámico de {TOTAL_QUESTIONS_COUNT}+ Preguntas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif italic tracking-wide text-[#f3e8ff]">
              Evaluación y Simulador Nazareno
            </h2>
            <p className="text-[#a78bfa] text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
              Exámenes aleatorios y variados extraídos del banco de <strong>{TOTAL_QUESTIONS_COUNT} preguntas</strong> sobre los 9 capítulos, fundadores de 1935, capataces, directiva, Sagradas Andas y doctrina católica.
            </p>
          </div>

          {/* Quick Action Button: Shuffle / New Questions */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2">
            <button
              id="shuffle-quiz-btn"
              onClick={handleShuffleNewQuestions}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#5d2a7a] to-[#78369e] hover:from-[#78369e] hover:to-[#9b72cf] text-[#f3e8ff] border border-[#d8b4fe]/40 font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(155,114,207,0.3)] transition-all active:scale-95"
              title="Cargar nuevas preguntas aleatorias del banco de 200"
            >
              <Shuffle className="w-4 h-4 text-amber-300 animate-spin-slow" />
              <span>🎲 Nuevas Preguntas Aleatorias</span>
            </button>
            <div className="text-[11px] text-center text-[#d8b4fe]/80 font-mono">
              Disponibles en filtro: <span className="font-bold text-amber-300">{filteredPool.length}</span>
            </div>
          </div>
        </div>

        {/* Filters and Size Selector */}
        {!quizFinished && (
          <div className="mt-6 pt-6 border-t border-[#3d1a4a] space-y-4">
            
            {/* Category Filter */}
            <div>
              <div className="text-[11px] font-semibold text-[#a78bfa] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#9b72cf]" />
                <span>1. Filtrar por Tema:</span>
              </div>
              <div className="bg-[#120816] border border-[#3d1a4a] rounded-2xl p-1.5 flex flex-wrap gap-1">
                <button
                  id="cat-todas-btn"
                  onClick={() => handleCategoryChange('todas')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === 'todas'
                      ? 'bg-[#5d2a7a] text-[#f3e8ff] shadow-[0_0_10px_rgba(155,114,207,0.4)] border border-[#9b72cf]'
                      : 'text-[#a78bfa] hover:text-[#f3e8ff]'
                  }`}
                >
                  Todas las Áreas ({QUIZ_QUESTIONS_BANK.length})
                </button>
                <button
                  id="cat-catequesis-btn"
                  onClick={() => handleCategoryChange('catequesis')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    selectedCategory === 'catequesis'
                      ? 'bg-amber-900/90 text-amber-200 border border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)]'
                      : 'text-amber-400 hover:text-amber-200'
                  }`}
                >
                  <span className="text-amber-400 font-serif">✝</span>
                  Catequesis & Doctrina ({QUIZ_QUESTIONS_BANK.filter(q => q.category === 'catequesis').length})
                </button>
                <button
                  id="cat-fundacion-btn"
                  onClick={() => handleCategoryChange('fundacion')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === 'fundacion'
                      ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf]'
                      : 'text-[#a78bfa] hover:text-[#f3e8ff]'
                  }`}
                >
                  Fundación (1930–1935) ({QUIZ_QUESTIONS_BANK.filter(q => q.category === 'fundacion').length})
                </button>
                <button
                  id="cat-capataces-btn"
                  onClick={() => handleCategoryChange('capataces')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === 'capataces'
                      ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf]'
                      : 'text-[#a78bfa] hover:text-[#f3e8ff]'
                  }`}
                >
                  Capataces & Directiva ({QUIZ_QUESTIONS_BANK.filter(q => q.category === 'capataces' || q.category === 'directiva').length})
                </button>
                <button
                  id="cat-identidad-btn"
                  onClick={() => handleCategoryChange('identidad')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === 'identidad'
                      ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf]'
                      : 'text-[#a78bfa] hover:text-[#f3e8ff]'
                  }`}
                >
                  🟣 Andas & Hábito ({QUIZ_QUESTIONS_BANK.filter(q => q.category === 'identidad').length})
                </button>
              </div>
            </div>

            {/* Difficulty and Exam Size Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Difficulty */}
              <div>
                <div className="text-[11px] font-semibold text-[#a78bfa] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>2. Nivel de Dificultad:</span>
                </div>
                <div className="bg-[#120816] border border-[#3d1a4a] rounded-2xl p-1.5 flex flex-wrap gap-1">
                  <button
                    id="diff-todas-btn"
                    onClick={() => handleDifficultyChange('todas')}
                    className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all ${
                      selectedDifficulty === 'todas'
                        ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf]'
                        : 'text-[#a78bfa] hover:text-[#f3e8ff]'
                    }`}
                  >
                    Todos
                  </button>
                  <button
                    id="diff-facil-btn"
                    onClick={() => handleDifficultyChange('facil')}
                    className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
                      selectedDifficulty === 'facil'
                        ? 'bg-emerald-900/80 text-emerald-200 border border-emerald-500'
                        : 'text-[#a78bfa] hover:text-emerald-300'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Fácil
                  </button>
                  <button
                    id="diff-intermedio-btn"
                    onClick={() => handleDifficultyChange('intermedio')}
                    className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
                      selectedDifficulty === 'intermedio'
                        ? 'bg-amber-900/80 text-amber-200 border border-amber-500'
                        : 'text-[#a78bfa] hover:text-amber-300'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Medio
                  </button>
                  <button
                    id="diff-dificil-btn"
                    onClick={() => handleDifficultyChange('dificil')}
                    className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
                      selectedDifficulty === 'dificil'
                        ? 'bg-purple-900/90 text-purple-200 border border-purple-400'
                        : 'text-[#a78bfa] hover:text-purple-300'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Difícil
                  </button>
                  <button
                    id="diff-ultradificil-btn"
                    onClick={() => handleDifficultyChange('ultradificil')}
                    className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                      selectedDifficulty === 'ultradificil'
                        ? 'bg-gradient-to-r from-red-900 to-amber-900 text-amber-200 border border-amber-400'
                        : 'text-amber-400 hover:text-amber-200'
                    }`}
                  >
                    <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
                    Ultra
                  </button>
                </div>
              </div>

              {/* Exam Size */}
              <div>
                <div className="text-[11px] font-semibold text-[#a78bfa] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#9b72cf]" />
                  <span>3. Tamaño de la Evaluación:</span>
                </div>
                <div className="bg-[#120816] border border-[#3d1a4a] rounded-2xl p-1.5 flex flex-wrap gap-1">
                  <button
                    id="size-10-btn"
                    onClick={() => handleExamSizeChange('10')}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                      examSize === '10'
                        ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf]'
                        : 'text-[#a78bfa] hover:text-[#f3e8ff]'
                    }`}
                  >
                    ⚡ Exprés (10)
                  </button>
                  <button
                    id="size-20-btn"
                    onClick={() => handleExamSizeChange('20')}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                      examSize === '20'
                        ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf]'
                        : 'text-[#a78bfa] hover:text-[#f3e8ff]'
                    }`}
                  >
                    📝 Estándar (20)
                  </button>
                  <button
                    id="size-30-btn"
                    onClick={() => handleExamSizeChange('30')}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                      examSize === '30'
                        ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf]'
                        : 'text-[#a78bfa] hover:text-[#f3e8ff]'
                    }`}
                  >
                    🏆 Completo (30)
                  </button>
                  <button
                    id="size-todas-btn"
                    onClick={() => handleExamSizeChange('todas')}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                      examSize === 'todas'
                        ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf]'
                        : 'text-[#a78bfa] hover:text-[#f3e8ff]'
                    }`}
                  >
                    📚 Todas ({filteredPool.length})
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Main Quiz Flow */}
      {!quizFinished && currentQ ? (
        <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6] space-y-6">
          
          {/* Progress Bar & Header */}
          <div className="flex items-center justify-between text-xs text-[#a78bfa] border-b border-[#3d1a4a] pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[#f3e8ff] font-semibold">
                Pregunta {currentQuestionIndex + 1} de {activeQuestions.length}
              </span>
              {getDifficultyBadge(currentQ.difficulty)}
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-[11px] text-[#9b72cf]">
                Lote Aleatorio #{seed + 1}
              </span>
              <div className="w-24 sm:w-44 h-2.5 bg-[#120816] rounded-full overflow-hidden border border-[#3d1a4a]">
                <div 
                  className="h-full bg-gradient-to-r from-[#9b72cf] via-[#d8b4fe] to-amber-300 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Question Text */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b72cf]">
                Área: {currentQ.category}
              </span>
              <span className="text-[10px] text-[#a78bfa]/60">• ID: {currentQ.id}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif italic text-[#f3e8ff] leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Options Grid */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswerIndex === idx;
              const isCorrect = idx === currentQ.correctAnswerIndex;
              
              let buttonStyles = "bg-[#120816] border-[#3d1a4a] text-[#e5e1e6] hover:border-[#9b72cf]/60 hover:bg-[#1a0a24]";

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  buttonStyles = "bg-[#153e28] border-[#22c55e] text-[#86efac] shadow-[0_0_12px_rgba(34,197,94,0.2)]";
                } else if (isSelected && !isCorrect) {
                  buttonStyles = "bg-[#3f1520] border-[#ef4444] text-[#fca5a5]";
                } else {
                  buttonStyles = "bg-[#120816]/40 border-[#3d1a4a]/40 text-[#a78bfa]/50 opacity-50";
                }
              } else if (isSelected) {
                buttonStyles = "bg-[#2a1336] border-[#9b72cf] text-[#f3e8ff] shadow-[0_0_12px_rgba(155,114,207,0.25)]";
              }

              return (
                <button
                  key={idx}
                  id={`quiz-option-${idx}`}
                  disabled={isAnswerSubmitted}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 text-xs sm:text-sm font-medium ${buttonStyles}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#1a0a24] border border-[#3d1a4a] flex items-center justify-center text-xs font-bold font-mono text-[#d8b4fe]">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{option}</span>
                  </div>

                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-[#86efac] flex-shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-[#fca5a5] flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner when answered */}
          {isAnswerSubmitted && (
            <div className="p-4 rounded-2xl bg-[#1a0a24] border border-[#9b72cf]/50 text-xs sm:text-sm text-[#e5e1e6] animate-fadeIn space-y-2">
              <div className="flex items-center gap-2 text-[#d8b4fe] font-serif italic font-bold">
                <HelpCircle className="w-4 h-4 text-[#9b72cf]" />
                <span>Explicación Doctrinal e Histórica:</span>
              </div>
              <p className="leading-relaxed">{currentQ.explanation}</p>
              {currentQ.historicalReference && (
                <div className="text-[11px] text-amber-300/90 italic pt-1 border-t border-[#3d1a4a]">
                  Fuente: {currentQ.historicalReference}
                </div>
              )}
            </div>
          )}

          {/* Bottom Action Buttons */}
          <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#3d1a4a]">
            <button
              onClick={handleShuffleNewQuestions}
              className="text-xs text-[#a78bfa] hover:text-[#f3e8ff] flex items-center gap-1.5 py-2 px-3 rounded-xl hover:bg-[#1a0a24] transition-all"
              title="Cambiar a otras preguntas aleatorias"
            >
              <Shuffle className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Traer otras preguntas</span>
            </button>

            <div className="flex items-center gap-3">
              {!isAnswerSubmitted ? (
                <button
                  id="submit-answer-btn"
                  disabled={selectedAnswerIndex === null}
                  onClick={handleConfirmAnswer}
                  className="px-6 py-3 rounded-xl bg-[#5d2a7a] hover:bg-[#78369e] disabled:opacity-40 disabled:hover:bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] font-bold text-sm transition-all shadow-[0_0_12px_rgba(155,114,207,0.3)] active:scale-95"
                >
                  Confirmar Respuesta
                </button>
              ) : (
                <button
                  id="next-question-btn"
                  onClick={handleNextQuestion}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#5d2a7a] to-[#78369e] hover:from-[#78369e] hover:to-[#9b72cf] text-[#f3e8ff] border border-[#d8b4fe] font-bold text-sm flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(155,114,207,0.4)] active:scale-95"
                >
                  <span>{currentQuestionIndex < activeQuestions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

        </div>
      ) : quizFinished ? (
        /* Results Screen */
        <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-3xl p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.6)] text-[#e5e1e6] text-center space-y-6">
          
          <div className="w-20 h-20 mx-auto rounded-full bg-[#2a1336] border border-[#9b72cf] p-1 shadow-[0_0_20px_rgba(155,114,207,0.3)]">
            <div className="w-full h-full rounded-full bg-[#160b1d] flex items-center justify-center">
              <Award className="w-10 h-10 text-amber-400" />
            </div>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b72cf]">
              Resultados de la Evaluación
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif italic text-[#f3e8ff] mt-1">
              {rank.title}
            </h3>
            <p className="text-[#a78bfa] text-sm max-w-lg mx-auto mt-2">
              {rank.desc}
            </p>
          </div>

          {/* Score metric block */}
          <div className="p-6 rounded-2xl bg-[#120816] border border-[#3d1a4a] max-w-sm mx-auto flex items-center justify-around">
            <div>
              <span className="text-xs text-[#9b72cf] block font-bold uppercase tracking-wider">Puntaje</span>
              <strong className="text-3xl font-serif italic text-[#f3e8ff]">{scorePercent}%</strong>
            </div>
            <div className="h-10 w-px bg-[#3d1a4a]" />
            <div>
              <span className="text-xs text-[#9b72cf] block font-bold uppercase tracking-wider">Aciertos</span>
              <strong className="text-3xl font-mono text-[#d8b4fe]">{correctCount} / {activeQuestions.length}</strong>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              id="new-shuffle-quiz-btn"
              onClick={handleShuffleNewQuestions}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#5d2a7a] to-[#78369e] hover:from-[#78369e] hover:to-[#9b72cf] text-[#f3e8ff] border border-[#d8b4fe] font-bold text-sm flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(155,114,207,0.4)] active:scale-95"
            >
              <Shuffle className="w-4 h-4 text-amber-300" />
              <span>🎲 Nueva Evaluación (Otras Preguntas)</span>
            </button>
            <button
              id="retry-quiz-btn"
              onClick={restartSameQuiz}
              className="px-5 py-3 rounded-xl bg-[#120816] hover:bg-[#1a0a24] text-[#a78bfa] hover:text-[#f3e8ff] border border-[#3d1a4a] font-semibold text-sm flex items-center gap-2 transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Repetir Este Mismo Examen</span>
            </button>
          </div>

        </div>
      ) : null}

    </div>
  );
};
