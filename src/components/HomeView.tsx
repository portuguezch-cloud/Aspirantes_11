import React, { useState, useEffect } from 'react';
import {
  Clock,
  Sparkles,
  BookOpen,
  Users,
  Award,
  Crown,
  Calendar,
  Flame,
  Cross,
  Music,
  Shield,
  Image as ImageIcon,
  GraduationCap,
  FileText,
  ChevronRight,
  Volume2,
  HeartHandshake,
  Compass,
  ArrowRight,
  Bell,
  Share2,
  CalendarPlus,
  Check,
  Eye,
  Layers
} from 'lucide-react';
import { SACRED_IMAGES } from '../data/galleryData';
import { playMartillazoSound, playDobleMartillazo } from '../utils/sound';

interface HomeViewProps {
  onNavigateToTab: (tab: string) => void;
  masteredCount: number;
  totalFlashcards: number;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
}

const COUNTDOWN_BACKGROUNDS = [
  {
    id: 'senor',
    title: 'Señor de los Milagros',
    shortName: '✝️ Cristo Moreno',
    url: '/images/senor_de_los_milagros_bg.jpg'
  },
  {
    id: 'sahumadoras',
    title: 'Hermanas Sahumadoras',
    shortName: '🪔 Sahumadoras',
    url: 'https://www.infobae.com/resizer/v2/V2Q6CDDRBVBVTBJ4DADROKXV6M.jpg?auth=5d7f1442bc410371d3c5e5ef96fdbe9ddc851486b952fb0eac9179320f5c5331&smart=true&width=992&height=1494&quality=85'
  },
  {
    id: 'cantoras',
    title: 'Hermanas Cantoras',
    shortName: '🎶 Cantoras',
    url: 'https://andina.pe/agencia/foto-senor-los-milagros-sahumadoras-y-cantoras-alistan-para-procesion-181512.jpg'
  },
  {
    id: 'cargadores',
    title: 'Hermanos Cargadores',
    shortName: '🛡️ Cargadores',
    url: 'https://scontent.flim39-1.fna.fbcdn.net/v/t39.30808-6/482013928_1041410128025439_4911475526598823960_n.jpg?stp=dst-jpg_tt6&cstp=mx1298x930&ctp=s1298x930&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mgVf3ZC57eUQ7kNvwES1p1v&_nc_oc=AdpwTVw84w0hwgIqsifulUXtyX7Oxbc_ZATvOgDzBPOxh2nD_l1096hfoCI68ECD0Mk&_nc_zt=23&_nc_ht=scontent.flim39-1.fna&_nc_gid=FbgtaHP4cCIA1hMtevQY1Q&_nc_ss=7b2a8&oh=00_AQG-IMvc-tYzdWD7Dqtdjp1XyE0-9bBaCfCR4Smy7aHBWA&oe=6A961A3C'
  },
  {
    id: 'procesion',
    title: 'Mar Morado en Procesión',
    shortName: '🕯️ Procesión',
    url: 'https://scontent.flim39-1.fna.fbcdn.net/v/t1.6435-9/107048579_3717406941609784_1005073314756856247_n.jpg?stp=dst-jpg_tt6&cstp=mx1475x2048&ctp=s1475x2048&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YSbptB7PyukQ7kNvwG52ggC&_nc_oc=AdpF4e8-5cNK16nMxGjcf7bdjHWzFviOJDwUvVyuibhxJOcv-5k9O7mLh80jzYgySpA&_nc_zt=23&_nc_ht=scontent.flim39-1.fna&_nc_gid=jbUs2cAPqhiAfHYb_BbYnA&_nc_ss=7b2a8&oh=00_AQHWM11uxg2wp2MrQA5iPaoNBHpum9Fs7NT8IH-VOZSxRw&oe=6AB7DF2E'
  },
  {
    id: 'virgen',
    title: 'Nuestra Señora de la Nube',
    shortName: '👑 Virgen de la Nube',
    url: 'https://scontent.flim39-1.fna.fbcdn.net/v/t39.30808-6/538451288_1170799855081671_6168058434955589314_n.jpg?stp=dst-jpg_tt6&cstp=mx879x1199&ctp=s879x1199&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Vs6JD3aD8dkQ7kNvwG_Pu6L&_nc_oc=AdqMQ6ynTbLwYQgE1kk15YSFcq-Ap8uTVGNpqv4KS1SVGlhqKtOjll2iA35Y53aS66M&_nc_zt=23&_nc_ht=scontent.flim39-1.fna&_nc_gid=i_P3IhFvOW-tr3BUPsDAoQ&_nc_ss=7b2a8&oh=00_AQGh1MECkEVAfkWimAQxqK9BUZ8SHuNTg2O42FK9w5EHNg&oe=6A964166'
  }
];

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigateToTab,
  masteredCount,
  totalFlashcards
}) => {
  // Target date: 1 de Octubre de 2026 a las 00:00:00 (Hora Perú UTC-5 o Local)
  const targetDate = new Date('2026-10-01T00:00:00');
  const startDate = new Date('2026-01-01T00:00:00'); // Baseline for year progress

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, totalMs: difference };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [copied, setCopied] = useState(false);
  const [activeBgIndex, setActiveBgIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const totalDuration = targetDate.getTime() - startDate.getTime();
  const elapsed = Math.max(0, new Date().getTime() - startDate.getTime());
  const percentCompleted = Math.min(100, Math.max(0, Math.round((elapsed / totalDuration) * 100))) || 65;

  const handleCopyShare = () => {
    const text = `⏳ ¡Faltan ${timeLeft.days} días, ${timeLeft.hours}h ${timeLeft.minutes}m para el Año Nuevo Nazareno (1 de Octubre 2026)! 💜 Cuadrilla 11 'Los Íntimos' HSMN`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddToCalendar = () => {
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Año Nuevo Nazareno 2026 - Salida Inaugural HSMN")}&dates=20261001T050000Z/20261001T230000Z&details=${encodeURIComponent("Inicio del Mes Morado y Salida Procesional del Señor de los Milagros de Nazarenas. Cuadrilla 11 Los Íntimos.")}&location=${encodeURIComponent("Santuario y Monasterio de las Nazarenas, Lima, Perú")}`;
    window.open(gCalUrl, '_blank');
  };

  const handleMartillazoDiana = () => {
    playDobleMartillazo();
  };

  const masteryPercentage = Math.round((masteredCount / totalFlashcards) * 100) || 0;

  const currentBg = COUNTDOWN_BACKGROUNDS[activeBgIndex] || COUNTDOWN_BACKGROUNDS[0];

  const modules = [
    {
      tab: 'capitulos',
      title: '9 Capítulos Históricos',
      category: 'Historia y Memoria',
      badge: '1930 - 1935',
      desc: 'El proceso fundacional desde el Jr. Manuel Pardo, actas notariales de 1935 y el reconocimiento oficial.',
      icon: BookOpen,
      color: 'from-amber-600/20 to-purple-900/40',
      borderColor: 'border-amber-500/30 hover:border-amber-400'
    },
    {
      tab: 'capataces',
      title: 'Capataces y Directiva',
      category: 'Autoridades y Linaje',
      badge: 'Cronología 1935-2026',
      desc: 'Desde los fundadores y primeros capataces hasta la actual dirigencia de la Undécima Cuadrilla.',
      icon: Crown,
      color: 'from-purple-900/40 to-indigo-900/40',
      borderColor: 'border-purple-500/30 hover:border-purple-400'
    },
    {
      tab: 'identidad',
      title: 'Identidad "Los Íntimos"',
      category: 'Patrimonio y Mística',
      badge: 'Sello de Tradición',
      desc: 'El origen del apelativo histórico, anécdotas de guardada, personajes emblemáticos y lemas.',
      icon: Award,
      color: 'from-fuchsia-900/40 to-purple-900/40',
      borderColor: 'border-fuchsia-500/30 hover:border-fuchsia-400'
    },
    {
      tab: 'timeline',
      title: 'Línea de Tiempo Centenario',
      category: 'Hitos Históricos',
      badge: '1930 → 2035',
      desc: 'Cronología interactiva con más de 100 años de historia, anécdotas y camino al Centenario.',
      icon: Clock,
      color: 'from-violet-900/40 to-purple-900/40',
      borderColor: 'border-violet-500/30 hover:border-violet-400'
    },
    {
      tab: 'cronograma',
      title: 'Recorridos de Octubre',
      category: 'Liturgia y Procesión',
      badge: '5 Salidas Procesionales',
      desc: 'Detalle de las 5 fechas procesionales (05, 18, 19, 28 de octubre y 01 de noviembre) y turnos de la 11.',
      icon: Calendar,
      color: 'from-purple-900/40 to-rose-900/40',
      borderColor: 'border-rose-500/30 hover:border-rose-400'
    },
    {
      tab: 'devocionario',
      title: 'Devocionario y Oraciones',
      category: 'Espiritualidad',
      badge: 'Plegarias Tradicionales',
      desc: 'Oración del Cargador, Salve a la Virgen de la Nube, Ofrecimiento del Madero y Jaculatorias.',
      icon: Flame,
      color: 'from-amber-900/40 to-purple-900/40',
      borderColor: 'border-amber-500/30 hover:border-amber-400'
    },
    {
      tab: 'catequesis',
      title: 'Catequesis y Doctrina',
      category: 'Formación de Fe',
      badge: '7 Sacramentos & Rosario',
      desc: 'Los 7 Sacramentos, guía del Santo Rosario, Decálogo, Obras de Misericordia y combate a los Pecados Capitales.',
      icon: Cross,
      color: 'from-indigo-900/40 to-purple-900/40',
      borderColor: 'border-indigo-500/30 hover:border-indigo-400'
    },
    {
      tab: 'marchas',
      title: 'Marchas e Himno Oficial',
      category: 'Fonoteca Nazarena',
      badge: 'Audio & Videos',
      desc: 'Himno oficial de la HSMN con reproductor, marchas clásicas ("Al Señor de los Milagros", "Padre Mío", "Al Señor de Luren") y toques de martillo.',
      icon: Music,
      color: 'from-purple-900/40 to-teal-900/40',
      borderColor: 'border-teal-500/30 hover:border-teal-400'
    },
    {
      tab: 'guia-cargador',
      title: 'Guía del Cargador',
      category: 'Técnica y Disciplina',
      badge: 'Madero & Habito',
      desc: 'Posiciones en el anda (Cabeceras, Traseras, Templadores), protocolo del hábito, cordón y pañoleta blanca.',
      icon: Shield,
      color: 'from-blue-900/40 to-purple-900/40',
      borderColor: 'border-blue-500/30 hover:border-blue-400'
    },
    {
      tab: 'galeria',
      title: 'Galería Sagrada',
      category: 'Iconografía & Fotos',
      badge: 'Fototeca Nazarena',
      desc: 'Sahumadoras, cantoras, cargadores, andas de plata, lienzo de Pachacamilla y multitud del mar morado.',
      icon: ImageIcon,
      color: 'from-rose-900/40 to-purple-900/40',
      borderColor: 'border-rose-500/30 hover:border-rose-400'
    },
    {
      tab: 'flashcards',
      title: 'Tarjetas de Memorización',
      category: 'Estudio Interactivo',
      badge: 'Memoria Activa',
      desc: 'Flashcards organizadas por categorías temáticas para dominar fechas, nombres y conceptos clave.',
      icon: GraduationCap,
      color: 'from-purple-900/40 to-fuchsia-900/40',
      borderColor: 'border-fuchsia-500/30 hover:border-fuchsia-400'
    },
    {
      tab: 'examen',
      title: 'Simulador de Examen',
      category: 'Evaluación',
      badge: '200+ Preguntas',
      desc: 'Exámenes de opción múltiple aleatorios con retroalimentación histórica inmediata y cálculo de puntaje.',
      icon: FileText,
      color: 'from-emerald-900/40 to-purple-900/40',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400'
    }
  ];

  return (
    <div className="space-y-14 animate-fadeIn">
      
      {/* 1. HERO BANNER PRINCIPAL & CUENTA REGRESIVA EN VIVO */}
      <section className="relative bg-gradient-to-br from-[#1d0a28] via-[#160b1d] to-[#0d0413] border-2 border-[#5d2a7a] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.6)] text-[#e5e1e6] overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#9b72cf]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#5d2a7a]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-8 max-w-5xl mx-auto">
          
          {/* Header pill & Title */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a1336] border border-[#9b72cf]/50 text-[#d8b4fe] text-[11px] uppercase tracking-[0.25em] font-bold shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Plataforma Oficial de Formación e Historia Nazarena</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif italic tracking-wide text-[#f3e8ff] leading-tight">
              Cuadrilla 11 <span className="text-[#d8b4fe] not-italic font-sans font-black">"Los Íntimos"</span>
            </h1>

            <p className="text-sm sm:text-base text-[#a78bfa] max-w-2xl mx-auto font-sans font-medium">
              Hermandad del Señor de los Milagros de Nazarenas (HSMN) • Fundada el 11 de octubre de 1935 en la Calle de la Virreina (Jr. Manuel Pardo).
            </p>
          </div>

          {/* CRONÓMETRO CON CUENTA REGRESIVA EN VIVO & SELECTOR DE FONDOS DEVOCIONALES */}
          <div className="relative bg-[#12051c] border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_0_35px_rgba(217,119,6,0.25)] backdrop-blur-md overflow-hidden transition-all duration-700">
            
            {/* Foto de fondo dinámica seleccionada */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img 
                key={currentBg.url}
                src={currentBg.url}
                alt={currentBg.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center sm:object-top opacity-75 brightness-[0.90] contrast-110 saturate-120 filter transition-opacity duration-1000 scale-105"
              />
              {/* Degradado morado más equilibrado para dar protagonismo a la sagrada imagen manteniendo legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#160520]/60 via-[#100318]/50 to-[#0a0210]/85" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#12041a]/65 via-transparent to-[#12041a]/65" />
            </div>

            {/* Top golden ambient light streak */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent z-10" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Event Description & Actions */}
              <div className="text-center lg:text-left space-y-3 max-w-lg">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-900/40 border border-amber-400/50 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                    <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
                    <span>Año Nuevo Nazareno 2026</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#160b1d]/80 text-[#d8b4fe] text-[10px] border border-[#9b72cf]/40 font-mono">
                    Fondo: {currentBg.title}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-serif italic font-bold text-[#f3e8ff] tracking-wide">
                  Cuenta Regresiva al Mes Morado
                </h3>
                
                <p className="text-xs sm:text-sm text-[#d8b4fe]/90 leading-relaxed">
                  Cuenta regresiva para el <strong className="text-amber-300 font-bold">1 de octubre de 2026</strong>, inicio oficial del mes morado.
                </p>

                {/* Progress Bar of Year 2026 */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px] text-[#a78bfa] font-mono">
                    <span>Avance del Año Litúrgico hacia Octubre</span>
                    <span className="text-amber-400 font-bold">{percentCompleted}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#2a1336] rounded-full overflow-hidden border border-[#3d1a4a]">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 via-amber-500 to-amber-300 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                      style={{ width: `${percentCompleted}%` }}
                    />
                  </div>
                </div>

                {/* Action Buttons: Calendar, Share, Diana */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
                  <button
                    id="countdown-add-cal-btn"
                    onClick={handleAddToCalendar}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2a1336] hover:bg-amber-950/80 text-amber-300 border border-amber-500/40 hover:border-amber-400 text-xs font-semibold transition-all shadow-sm active:scale-95"
                    title="Añadir a Google Calendar"
                  >
                    <CalendarPlus className="w-3.5 h-3.5 text-amber-400" />
                    <span>Añadir al Calendario</span>
                  </button>

                  <button
                    id="countdown-share-btn"
                    onClick={handleCopyShare}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2a1336] hover:bg-[#3d1a4a] text-[#d8b4fe] border border-[#3d1a4a] text-xs font-semibold transition-all shadow-sm active:scale-95"
                    title="Copiar tiempo restante"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-[#9b72cf]" />}
                    <span>{copied ? '¡Copiado!' : 'Compartir'}</span>
                  </button>

                  <button
                    id="countdown-diana-btn"
                    onClick={handleMartillazoDiana}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2a1336] hover:bg-purple-900 text-purple-200 border border-purple-500/40 text-xs font-semibold transition-all shadow-sm active:scale-95"
                    title="Tocar doble golpe ceremonial de martillo"
                  >
                    <Bell className="w-3.5 h-3.5 text-amber-400" />
                    <span>Doble Golpe de Martillo</span>
                  </button>
                </div>

                {/* Devotional Background Switcher Selector */}
                <div className="pt-3 border-t border-white/10">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-amber-300 mb-1.5 flex items-center justify-center lg:justify-start gap-1">
                    <Layers className="w-3 h-3 text-amber-400" />
                    <span>Cambiar Fondo Devocional de la Cuenta Regresiva:</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5">
                    {COUNTDOWN_BACKGROUNDS.map((bg, idx) => (
                      <button
                        key={bg.id}
                        onClick={() => setActiveBgIndex(idx)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                          activeBgIndex === idx
                            ? 'bg-amber-500 text-black shadow-[0_0_10px_rgba(245,158,11,0.5)] scale-105'
                            : 'bg-[#1a0a24]/90 hover:bg-[#2a1336] text-[#d8b4fe] border border-[#3d1a4a]'
                        }`}
                      >
                        {bg.shortName}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Countdown High-Traffic Style Visual Cards Grid */}
              <div className="flex flex-col items-center gap-3 w-full lg:w-auto">
                <div className="grid grid-cols-4 gap-2.5 sm:gap-4 w-full sm:w-auto">
                  
                  {/* DÍAS */}
                  <div className="group relative flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-[#250d32] to-[#14061c] border-2 border-amber-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)] min-w-[70px] sm:min-w-[95px] transition-all hover:border-amber-400 hover:scale-105">
                    <span className="text-3xl sm:text-5xl font-serif font-black text-amber-300 tracking-tight drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]">
                      {timeLeft.days}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase font-extrabold text-[#d8b4fe] tracking-widest mt-1">
                      Días
                    </span>
                    <span className="absolute -bottom-1 w-6 h-1 bg-amber-400/80 rounded-full" />
                  </div>

                  {/* HORAS */}
                  <div className="group relative flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-[#250d32] to-[#14061c] border border-[#9b72cf]/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)] min-w-[70px] sm:min-w-[95px] transition-all hover:border-[#d8b4fe] hover:scale-105">
                    <span className="text-3xl sm:text-5xl font-serif font-black text-[#f3e8ff] tracking-tight">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase font-bold text-[#a78bfa] tracking-widest mt-1">
                      Horas
                    </span>
                  </div>

                  {/* MINUTOS */}
                  <div className="group relative flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-[#250d32] to-[#14061c] border border-[#9b72cf]/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)] min-w-[70px] sm:min-w-[95px] transition-all hover:border-[#d8b4fe] hover:scale-105">
                    <span className="text-3xl sm:text-5xl font-serif font-black text-[#f3e8ff] tracking-tight">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase font-bold text-[#a78bfa] tracking-widest mt-1">
                      Min
                    </span>
                  </div>

                  {/* SEGUNDOS (Pulsing live indicator) */}
                  <div className="group relative flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-gradient-to-b from-[#5d2a7a] to-[#250d32] border-2 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] min-w-[70px] sm:min-w-[95px] transition-all scale-105">
                    <span className="text-3xl sm:text-5xl font-serif font-black text-amber-300 tracking-tight animate-pulse drop-shadow-[0_2px_10px_rgba(245,158,11,0.6)]">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase font-black text-amber-200 tracking-widest mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping inline-block" />
                      Seg
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              id="cta-start-study"
              onClick={() => onNavigateToTab('capitulos')}
              className="px-6 py-3.5 rounded-xl bg-[#5d2a7a] hover:bg-[#7b3a9e] text-[#f3e8ff] border-2 border-[#9b72cf] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(155,114,207,0.4)] active:scale-95 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Comenzar con los 9 Capítulos</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="cta-open-quiz"
              onClick={() => onNavigateToTab('examen')}
              className="px-6 py-3.5 rounded-xl bg-[#160b1d] hover:bg-[#2a1336] text-[#d8b4fe] border border-[#3d1a4a] hover:border-[#9b72cf] font-bold text-xs uppercase tracking-wider transition-all active:scale-95 flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Simulador de Evaluación</span>
            </button>

            <button
              id="cta-open-gallery"
              onClick={() => onNavigateToTab('galeria')}
              className="px-6 py-3.5 rounded-xl bg-[#160b1d] hover:bg-[#2a1336] text-[#d8b4fe] border border-[#3d1a4a] hover:border-[#9b72cf] font-bold text-xs uppercase tracking-wider transition-all active:scale-95 flex items-center gap-2"
            >
              <ImageIcon className="w-4 h-4 text-[#9b72cf]" />
              <span>Galería y Fototeca</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. ESTAMPAS VIVAS DE LA TRADICIÓN: ACTORES Y MÍSTICA DE LA PROCESIÓN */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#3d1a4a] pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-[10px] uppercase tracking-[0.2em] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Iconografía y Devoción Viva</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif italic text-[#f3e8ff] mt-0.5">
              Protagonistas y Mística del Mes Morado
            </h2>
          </div>
          <button
            onClick={() => onNavigateToTab('galeria')}
            className="inline-flex items-center gap-2 text-xs text-[#d8b4fe] hover:text-[#f3e8ff] font-semibold transition-colors"
          >
            <span>Ver Fototeca Completa</span>
            <ChevronRight className="w-4 h-4 text-[#9b72cf]" />
          </button>
        </div>

        {/* Dynamic Devotional Grid with Real Pictures and Overlay info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. HERMANAS SAHUMADORAS */}
          <div 
            onClick={() => onNavigateToTab('galeria')}
            className="group cursor-pointer relative rounded-3xl overflow-hidden border border-[#3d1a4a] hover:border-amber-400 shadow-xl transition-all duration-300 hover:scale-[1.02] bg-[#160b1d] flex flex-col justify-end min-h-[300px]"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://www.infobae.com/resizer/v2/V2Q6CDDRBVBVTBJ4DADROKXV6M.jpg?auth=5d7f1442bc410371d3c5e5ef96fdbe9ddc851486b952fb0eac9179320f5c5331&smart=true&width=992&height=1494&quality=85"
                alt="Hermanas Sahumadoras de Las Nazarenas"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0413] via-[#160b1d]/70 to-transparent" />
            </div>

            <div className="relative z-10 p-6 space-y-2">
              <span className="px-2.5 py-1 rounded-full bg-amber-500/90 text-black text-[10px] font-black uppercase tracking-wider inline-block">
                🪔 Hermanas Sahumadoras
              </span>
              <h3 className="text-xl font-serif italic font-bold text-[#f3e8ff] group-hover:text-amber-300 transition-colors">
                El Incienso y la Oración Pura
              </h3>
              <p className="text-xs text-[#e5e1e6]/90 line-clamp-2 leading-relaxed">
                Pebeteros de plata repujada, carbón ardiente y mantillas de encaje que perfuman el camino sagrado de Cristo.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-amber-300 font-semibold">
                <span>Explorar estampa</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* 2. HERMANAS CANTORAS */}
          <div 
            onClick={() => onNavigateToTab('marchas')}
            className="group cursor-pointer relative rounded-3xl overflow-hidden border border-[#3d1a4a] hover:border-[#9b72cf] shadow-xl transition-all duration-300 hover:scale-[1.02] bg-[#160b1d] flex flex-col justify-end min-h-[300px]"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://andina.pe/agencia/foto-senor-los-milagros-sahumadoras-y-cantoras-alistan-para-procesion-181512.jpg"
                alt="Hermanas Cantoras de Las Nazarenas"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0413] via-[#160b1d]/70 to-transparent" />
            </div>

            <div className="relative z-10 p-6 space-y-2">
              <span className="px-2.5 py-1 rounded-full bg-[#5d2a7a] text-[#f3e8ff] border border-[#d8b4fe]/40 text-[10px] font-bold uppercase tracking-wider inline-block">
                🎶 Hermanas Cantoras
              </span>
              <h3 className="text-xl font-serif italic font-bold text-[#f3e8ff] group-hover:text-[#d8b4fe] transition-colors">
                Himnos y Salves Tradicionales
              </h3>
              <p className="text-xs text-[#e5e1e6]/90 line-clamp-2 leading-relaxed">
                Voces sublimes que elevan el cántico procesional y marcan el compás rítmico para los hermanos cargadores.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-[#d8b4fe] font-semibold">
                <span>Escuchar himnos</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* 3. HERMANOS CARGADORES */}
          <div 
            onClick={() => onNavigateToTab('guia-cargador')}
            className="group cursor-pointer relative rounded-3xl overflow-hidden border border-[#3d1a4a] hover:border-purple-400 shadow-xl transition-all duration-300 hover:scale-[1.02] bg-[#160b1d] flex flex-col justify-end min-h-[300px]"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://scontent.flim39-1.fna.fbcdn.net/v/t39.30808-6/482013928_1041410128025439_4911475526598823960_n.jpg?stp=dst-jpg_tt6&cstp=mx1298x930&ctp=s1298x930&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mgVf3ZC57eUQ7kNvwES1p1v&_nc_oc=AdpwTVw84w0hwgIqsifulUXtyX7Oxbc_ZATvOgDzBPOxh2nD_l1096hfoCI68ECD0Mk&_nc_zt=23&_nc_ht=scontent.flim39-1.fna&_nc_gid=FbgtaHP4cCIA1hMtevQY1Q&_nc_ss=7b2a8&oh=00_AQG-IMvc-tYzdWD7Dqtdjp1XyE0-9bBaCfCR4Smy7aHBWA&oe=6A961A3C"
                alt="Hermanos Cargadores de la Cuadrilla 11"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0413] via-[#160b1d]/70 to-transparent" />
            </div>

            <div className="relative z-10 p-6 space-y-2">
              <span className="px-2.5 py-1 rounded-full bg-indigo-900/90 text-indigo-200 border border-indigo-500/50 text-[10px] font-bold uppercase tracking-wider inline-block">
                🛡️ Hermanos Cargadores
              </span>
              <h3 className="text-xl font-serif italic font-bold text-[#f3e8ff] group-hover:text-indigo-300 transition-colors">
                Fuerza, Hombro y Penitencia
              </h3>
              <p className="text-xs text-[#e5e1e6]/90 line-clamp-2 leading-relaxed">
                36 hermanos sincronizados bajo los cuartones de roble forrados en terciopelo rojo, llevando 2 toneladas de fe.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-indigo-300 font-semibold">
                <span>Ver guía técnica</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* 4. EL MAR MORADO Y PROCESIÓN */}
          <div 
            onClick={() => onNavigateToTab('cronograma')}
            className="group cursor-pointer relative rounded-3xl overflow-hidden border border-[#3d1a4a] hover:border-rose-400 shadow-xl transition-all duration-300 hover:scale-[1.02] bg-[#160b1d] flex flex-col justify-end min-h-[300px]"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://scontent.flim39-1.fna.fbcdn.net/v/t1.6435-9/107048579_3717406941609784_1005073314756856247_n.jpg?stp=dst-jpg_tt6&cstp=mx1475x2048&ctp=s1475x2048&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YSbptB7PyukQ7kNvwG52ggC&_nc_oc=AdpF4e8-5cNK16nMxGjcf7bdjHWzFviOJDwUvVyuibhxJOcv-5k9O7mLh80jzYgySpA&_nc_zt=23&_nc_ht=scontent.flim39-1.fna&_nc_gid=jbUs2cAPqhiAfHYb_BbYnA&_nc_ss=7b2a8&oh=00_AQHWM11uxg2wp2MrQA5iPaoNBHpum9Fs7NT8IH-VOZSxRw&oe=6AB7DF2E"
                alt="El Mar Morado en la Procesión de Lima"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0413] via-[#160b1d]/70 to-transparent" />
            </div>

            <div className="relative z-10 p-6 space-y-2">
              <span className="px-2.5 py-1 rounded-full bg-rose-900/90 text-rose-200 border border-rose-500/50 text-[10px] font-bold uppercase tracking-wider inline-block">
                🕯️ El Mar Morado
              </span>
              <h3 className="text-xl font-serif italic font-bold text-[#f3e8ff] group-hover:text-rose-300 transition-colors">
                Multitud y Cirios Encendidos
              </h3>
              <p className="text-xs text-[#e5e1e6]/90 line-clamp-2 leading-relaxed">
                Millones de fieles recorren las calles virreinales de Lima acompañando el paso solemne de las Sagradas Andas.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-rose-300 font-semibold">
                <span>Ver recorridos</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* 5. VIRGEN DE LA NUBE */}
          <div 
            onClick={() => onNavigateToTab('galeria')}
            className="group cursor-pointer relative rounded-3xl overflow-hidden border border-[#3d1a4a] hover:border-[#9b72cf] shadow-xl transition-all duration-300 hover:scale-[1.02] bg-[#160b1d] flex flex-col justify-end min-h-[300px]"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://scontent.flim39-1.fna.fbcdn.net/v/t39.30808-6/538451288_1170799855081671_6168058434955589314_n.jpg?stp=dst-jpg_tt6&cstp=mx879x1199&ctp=s879x1199&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Vs6JD3aD8dkQ7kNvwG_Pu6L&_nc_oc=AdqMQ6ynTbLwYQgE1kk15YSFcq-Ap8uTVGNpqv4KS1SVGlhqKtOjll2iA35Y53aS66M&_nc_zt=23&_nc_ht=scontent.flim39-1.fna&_nc_gid=i_P3IhFvOW-tr3BUPsDAoQ&_nc_ss=7b2a8&oh=00_AQGh1MECkEVAfkWimAQxqK9BUZ8SHuNTg2O42FK9w5EHNg&oe=6A964166"
                alt="Nuestra Señora de la Nube"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0413] via-[#160b1d]/70 to-transparent" />
            </div>

            <div className="relative z-10 p-6 space-y-2">
              <span className="px-2.5 py-1 rounded-full bg-[#3d1a4a] text-[#d8b4fe] border border-[#9b72cf]/50 text-[10px] font-bold uppercase tracking-wider inline-block">
                👑 Virgen de la Nube
              </span>
              <h3 className="text-xl font-serif italic font-bold text-[#f3e8ff] group-hover:text-amber-300 transition-colors">
                Protectora del Reverso del Anda
              </h3>
              <p className="text-xs text-[#e5e1e6]/90 line-clamp-2 leading-relaxed">
                Manto celestial y mirada de Madre que custodia la retaguardia de los cargadores e intercede por el pueblo.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-[#d8b4fe] font-semibold">
                <span>Ver iconografía</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* 6. ALFOMBRAS FLORALES Y HOMENAJES */}
          <div 
            onClick={() => onNavigateToTab('galeria')}
            className="group cursor-pointer relative rounded-3xl overflow-hidden border border-[#3d1a4a] hover:border-emerald-400 shadow-xl transition-all duration-300 hover:scale-[1.02] bg-[#160b1d] flex flex-col justify-end min-h-[300px]"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://portal.andina.pe/EDPfotografia3/Thumbnail/2023/10/18/000994998W.jpg"
                alt="Alfombras de flores en Lima"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0413] via-[#160b1d]/70 to-transparent" />
            </div>

            <div className="relative z-10 p-6 space-y-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-500/50 text-[10px] font-bold uppercase tracking-wider inline-block">
                🌸 Alfombras Florales
              </span>
              <h3 className="text-xl font-serif italic font-bold text-[#f3e8ff] group-hover:text-emerald-300 transition-colors">
                Arte Efímero y Ofrenda de Amor
              </h3>
              <p className="text-xs text-[#e5e1e6]/90 line-clamp-2 leading-relaxed">
                Pétalos de flores frescas y aserrín teñido sobre el asfalto limeño para rendir pleitesía al Amo y Señor.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-emerald-300 font-semibold">
                <span>Ver detalles</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. STATS & RESUMEN INSTITUCIONAL */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div 
          onClick={playMartillazoSound}
          className="cursor-pointer bg-[#160b1d] border border-[#3d1a4a] hover:border-[#9b72cf] rounded-2xl p-5 shadow-lg transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between text-xs text-[#9b72cf] mb-2 font-mono">
            <span>Fundación Histórica</span>
            <Crown className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-serif italic font-bold text-[#f3e8ff]">11 Oct 1935</p>
          <p className="text-[11px] text-[#a78bfa] mt-1">Jr. Manuel Pardo / Virreina</p>
        </div>

        <div 
          onClick={() => onNavigateToTab('timeline')}
          className="cursor-pointer bg-[#160b1d] border border-[#3d1a4a] hover:border-[#9b72cf] rounded-2xl p-5 shadow-lg transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between text-xs text-[#9b72cf] mb-2 font-mono">
            <span>Trayectoria y Hitos</span>
            <Clock className="w-4 h-4 text-[#9b72cf]" />
          </div>
          <p className="text-2xl sm:text-3xl font-serif italic font-bold text-amber-300">90 Años</p>
          <p className="text-[11px] text-[#a78bfa] mt-1">Rumbo al Centenario 2035</p>
        </div>

        <div 
          onClick={() => onNavigateToTab('flashcards')}
          className="cursor-pointer bg-[#160b1d] border border-[#3d1a4a] hover:border-[#9b72cf] rounded-2xl p-5 shadow-lg transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between text-xs text-[#9b72cf] mb-2 font-mono">
            <span>Banco de Flashcards</span>
            <Flame className="w-4 h-4 text-rose-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-serif italic font-bold text-[#f3e8ff]">{totalFlashcards}</p>
          <p className="text-[11px] text-[#a78bfa] mt-1">{masteredCount} dominadas ({masteryPercentage}%)</p>
        </div>

        <div 
          onClick={() => onNavigateToTab('catequesis')}
          className="cursor-pointer bg-[#160b1d] border border-[#3d1a4a] hover:border-[#9b72cf] rounded-2xl p-5 shadow-lg transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between text-xs text-[#9b72cf] mb-2 font-mono">
            <span>Doctrina Eclesiástica</span>
            <Cross className="w-4 h-4 text-indigo-400" />
          </div>
          <p className="text-2xl sm:text-3xl font-serif italic font-bold text-[#f3e8ff]">7 Sacramentos</p>
          <p className="text-[11px] text-[#a78bfa] mt-1">Rosario, Virtudes y Preceptos</p>
        </div>

      </section>

      {/* 4. CATÁLOGO DE MÓDULOS DE FORMACIÓN */}
      <section className="space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#3d1a4a] pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#9b72cf] text-[10px] uppercase tracking-[0.2em] font-bold">
              <Compass className="w-3.5 h-3.5 text-[#d8b4fe]" />
              <span>Mapa Temático Integral</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif italic text-[#f3e8ff] mt-0.5">
              Módulos de Formación y Estudio
            </h2>
          </div>
          <span className="text-xs text-[#a78bfa] font-mono">
            12 Módulos Especializados
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod) => {
            const IconComponent = mod.icon;

            return (
              <div
                key={mod.tab}
                id={`home-mod-${mod.tab}`}
                onClick={() => onNavigateToTab(mod.tab)}
                className={`group cursor-pointer p-6 rounded-2xl bg-gradient-to-br ${mod.color} border ${mod.borderColor} shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(155,114,207,0.3)] flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#120816] border border-[#3d1a4a] flex items-center justify-center text-[#d8b4fe] group-hover:text-amber-300 group-hover:border-[#9b72cf] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase px-2.5 py-1 rounded-full bg-[#120816]/80 text-[#d8b4fe] border border-[#3d1a4a] font-mono">
                      {mod.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#9b72cf] block">
                      {mod.category}
                    </span>
                    <h3 className="text-base font-serif italic font-bold text-[#f3e8ff] group-hover:text-amber-300 transition-colors mt-0.5">
                      {mod.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#e5e1e6]/80 leading-relaxed line-clamp-2">
                    {mod.desc}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#d8b4fe] group-hover:text-[#f3e8ff] font-semibold">
                  <span>Explorar módulo</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#9b72cf]" />
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 5. FRASE HISTÓRICA Y ESPIRITUALIDAD CON FONDO DEVOCIONAL */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2a1336] via-[#1a0a24] to-[#120816] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 text-center space-y-4 shadow-xl">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img 
            src="/images/senor_de_los_milagros_bg.jpg"
            alt="Señor de los Milagros"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 space-y-3">
          <HeartHandshake className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-xl sm:text-2xl font-serif italic text-[#f3e8ff] max-w-2xl mx-auto">
            "Un solo corazón, un solo paso bajo el madero sagrado"
          </h3>
          <p className="text-xs sm:text-sm text-[#d8b4fe] max-w-xl mx-auto leading-relaxed">
            Desde aquel 11 de octubre de 1935 en el solar de la Calle de la Virreina, la Cuadrilla 11 ha custodiado con amor inquebrantable el culto al Cristo Moreno de Pachacamilla y a Nuestra Señora de la Nube.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigateToTab('identidad')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#120816] hover:bg-[#2a1336] border border-[#9b72cf] text-xs text-[#f3e8ff] font-bold uppercase tracking-wider transition-all"
            >
              <span>Conocer la Historia de "Los Íntimos"</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#9b72cf]" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
