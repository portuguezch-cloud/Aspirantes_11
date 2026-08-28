export interface HistoricalChapter {
  number: number;
  numberStr: string;
  period: string;
  title: string;
  subtitle?: string;
  content: string;
  keyFigures: string[];
  keyPlaces: string[];
  studyTips: string[];
  importance: string;
}

export interface Capataz {
  id: number;
  period: string;
  startYear: number;
  endYear: number | null; // null if active
  name: string;
  fullName?: string;
  orderNumber: number;
  isCurrent?: boolean;
  yearsOfService: number | string;
  highlights: string[];
  context: string;
}

export interface DirectiveMember {
  position: string;
  name: string;
  isDeceased?: boolean;
  roleDescription: string;
  iconName: string;
}

export interface HistoricalFigure {
  name: string;
  title: string;
  roleInCuadrilla: string;
  bio: string;
  quoteOrLegacy: string;
}

export interface Flashcard {
  id: string;
  category: 'fundacion' | 'capitulos' | 'capataces' | 'directiva' | 'identidad' | 'fechas';
  question: string;
  answer: string;
  hint?: string;
  explanation: string;
  difficulty: 'facil' | 'medio' | 'dificil';
}

export interface QuizQuestion {
  id: string;
  category: 'fundacion' | 'capitulos' | 'capataces' | 'directiva' | 'identidad' | 'general';
  difficulty: 'facil' | 'intermedio' | 'dificil';
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  historicalReference: string;
}

export interface StudyProgress {
  flashcardsMastered: string[]; // ids
  flashcardsReview: string[];
  quizzesCompleted: number;
  highScore: number;
  lastScore: number;
  studyStreakDays: number;
  chaptersRead: number[];
}

export interface SacredImage {
  id: string;
  title: string;
  subtitle: string;
  category: 'lienzo' | 'andas' | 'santuario' | 'procesion' | 'simbolos';
  fileName: string;
  imageUrl: string;
  thumbnailUrl?: string;
  authorOrSource: string;
  yearOrEra: string;
  historicalDescription: string;
  iconographicDetails: string[];
  devotionalQuote?: string;
}


