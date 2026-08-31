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
  category: 'fundacion' | 'capitulos' | 'capataces' | 'directiva' | 'identidad' | 'fechas' | 'catequesis';
  question: string;
  answer: string;
  hint?: string;
  explanation: string;
  difficulty: 'facil' | 'medio' | 'dificil';
}

export interface QuizQuestion {
  id: string;
  category: 'fundacion' | 'capitulos' | 'capataces' | 'directiva' | 'identidad' | 'general' | 'catequesis';
  difficulty: 'facil' | 'intermedio' | 'dificil' | 'ultradificil';
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  historicalReference: string;
}

export interface CatequesisItem {
  id: string;
  category: 'sacramentos' | 'rosario' | 'mandamientos' | 'pecados_virtudes' | 'obras_misericordia' | 'oraciones_basicas' | 'doctrina_fe';
  title: string;
  subtitle: string;
  countBadge?: string;
  description: string;
  elements: {
    name: string;
    description: string;
    biblicalOrTheologicalNote?: string;
    order?: number;
  }[];
  practicalApplicationForNazareno: string;
  biblicalQuote?: string;
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
  category: 'lienzo' | 'andas' | 'santuario' | 'procesion' | 'simbolos' | 'cantoras' | 'sahumadoras' | 'cargadores';
  fileName: string;
  imageUrl: string;
  thumbnailUrl?: string;
  authorOrSource: string;
  yearOrEra: string;
  historicalDescription: string;
  iconographicDetails: string[];
  devotionalQuote?: string;
}

export interface HistoricalAnecdote {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  historicalContext: string;
  keyProtagonists: string[];
  impactOrLegacy: string;
  category: 'guardada' | 'carguio_especial' | 'disciplina';
  badge: string;
}

export interface DevotionalPrayer {
  id: string;
  title: string;
  subtitle: string;
  category: 'cargador' | 'oficial' | 'maria' | 'novena' | 'rosario' | 'difuntos';
  text: string;
  latinOrTradition?: string;
  momentoLiturgico: string;
  reflection: string;
}

export interface PrayerIntention {
  id: string;
  name: string;
  sectorOrTitle: string;
  intention: string;
  date: string;
  candlesCount: number;
  isCustom?: boolean;
}

export interface MarchaTrack {
  id: string;
  title: string;
  composer: string;
  year?: string;
  type: 'marcha_regular' | 'marcha_funebre' | 'himno' | 'canto_liturgico';
  description: string;
  historicalSignificance: string;
  lyrics?: string[];
  audioNotes?: string;
  synthBpm: number;
  melodyNotes?: { note: string; dur: number }[];
  youtubeVideoId?: string;
  audioSrc?: string;
}

export interface ProcessionDay {
  id: string;
  dateStr: string;
  title: string;
  shortTitle: string;
  symbolicName: string;
  departureTime: string;
  arrivalTime: string;
  highlights: string[];
  routeSummary: string;
  cuadrilla11Role: string;
  traditionalPoints: string[];
  status: 'espera' | 'procesion' | 'guardada';
}

export interface VestimentaItem {
  id: string;
  name: string;
  significance: string;
  theologicalMeaning: string;
  specifications: string[];
  commonMistakes: string[];
  icon: string;
}

export interface AndasPosition {
  id: string;
  name: string;
  location: string;
  heightRequirement: string;
  functionDescription: string;
  keySkills: string[];
  coordinationNotes: string;
}

export interface TimelineMilestone {
  id: string;
  year: number;
  exactDate?: string;
  era: 'previa' | 'fundacion' | 'expansion' | 'madurez' | 'milenio' | 'centenario';
  title: string;
  description: string;
  protagonists: string[];
  impact: string;
  iconType: 'foundation' | 'capataz' | 'guardada' | 'aniversario' | 'future';
}



