import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Compass, Sparkles, Flag, Award, ChevronRight, Bookmark } from 'lucide-react';
import { PROCESSION_DAYS, CUADRILLA_11_TRADITIONAL_TURNS } from '../data/processionData';
import { ProcessionDay } from '../types';

export const CronogramaRecorridosView: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<ProcessionDay>(PROCESSION_DAYS[0]);

  // Centenario (Oct 11, 2035) Countdown State
  const [timeLeftCentenario, setTimeLeftCentenario] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Next October (Oct 18, current or next year)
  const [timeLeftOctubre, setTimeLeftOctubre] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();

      // Centenario target: October 11, 2035
      const centenarioDate = new Date('2035-10-11T00:00:00');
      const diffCentenario = centenarioDate.getTime() - now.getTime();

      if (diffCentenario > 0) {
        const days = Math.floor(diffCentenario / (1000 * 60 * 60 * 24));
        const hoursRaw = Math.floor((diffCentenario / (1000 * 60 * 60)) % 24);
        const minutesRaw失 = Math.floor((diffCentenario / 1000 / 60) % 60);
        const secondsRaw = Math.floor((diffCentenario / 1000) % 60);

        setTimeLeftCentenario({
          days,
          hours: hoursRaw,
          minutes: minutesRaw失,
          seconds: secondsRaw
        });
      }

      // Next October 18
      let targetYear = now.getFullYear();
      if (now.getMonth() > 9 || (now.getMonth() === 9 && now.getDate() > 28)) {
        targetYear += 1;
      }
      const nextOct = new Date(`${targetYear}-10-18T06:00:00`);
      const diffOct = nextOct.getTime() - now.getTime();

      if (diffOct > 0) {
        setTimeLeftOctubre({
          days: Math.floor(diffOct / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diffOct / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diffOct / 1000 / 60) % 60)
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Header & Dual Countdowns */}
      <section className="bg-gradient-to-br from-[#1a0a24] via-[#160b1d] to-[#0f0415] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6] space-y-6 relative overflow-hidden">
        {/* Foto de fondo devocional del Mar Morado */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img 
            src="https://scontent.flim39-1.fna.fbcdn.net/v/t1.6435-9/107048579_3717406941609784_1005073314756856247_n.jpg?stp=dst-jpg_tt6&cstp=mx1475x2048&ctp=s1475x2048&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YSbptB7PyukQ7kNvwG52ggC&_nc_oc=AdpF4e8-5cNK16nMxGjcf7bdjHWzFviOJDwUvVyuibhxJOcv-5k9O7mLh80jzYgySpA&_nc_zt=23&_nc_ht=scontent.flim39-1.fna&_nc_gid=jbUs2cAPqhiAfHYb_BbYnA&_nc_ss=7b2a8&oh=00_AQHWM11uxg2wp2MrQA5iPaoNBHpum9Fs7NT8IH-VOZSxRw&oe=6AB7DF2E"
            alt="Mar Morado en Procesión"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a24] via-[#160b1d]/85 to-[#0f0415]/75" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a1336] border border-[#3d1a4a] text-[#9b72cf] text-[10px] uppercase tracking-[0.2em] font-bold">
              <Calendar className="w-3.5 h-3.5 text-[#d8b4fe]" />
              <span>Jornadas y Cultos Procesionales de Octubre</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif italic text-[#f3e8ff] tracking-wide">
              Cronograma Procesional y Recorridos
            </h2>

            <p className="text-sm text-[#a78bfa] leading-relaxed">
              Guía canónica de los 5 recorridos tradicionales del Mes Morado, rutas emblemáticas del Damero limeño, ubicación de turnos y la cuenta regresiva oficial rumbo al Centenario (1935 - 2035).
            </p>
          </div>

          {/* Centenario Countdown Box */}
          <div className="bg-[#120816] border-2 border-[#9b72cf]/50 p-4 sm:p-5 rounded-2xl shadow-[0_0_20px_rgba(155,114,207,0.2)] flex-shrink-0 text-center space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#d8b4fe] flex items-center justify-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Rumbo al Centenario (11 Oct 2035)</span>
            </span>

            <div className="grid grid-cols-4 gap-2 text-center pt-1">
              <div className="bg-[#1a0a24] px-2.5 py-1.5 rounded-lg border border-[#3d1a4a]">
                <span className="text-lg sm:text-xl font-serif italic font-bold text-[#f3e8ff] block">{timeLeftCentenario.days}</span>
                <span className="text-[9px] uppercase tracking-wider text-[#9b72cf]">Días</span>
              </div>
              <div className="bg-[#1a0a24] px-2.5 py-1.5 rounded-lg border border-[#3d1a4a]">
                <span className="text-lg sm:text-xl font-serif italic font-bold text-[#f3e8ff] block">{timeLeftCentenario.hours}</span>
                <span className="text-[9px] uppercase tracking-wider text-[#9b72cf]">Horas</span>
              </div>
              <div className="bg-[#1a0a24] px-2.5 py-1.5 rounded-lg border border-[#3d1a4a]">
                <span className="text-lg sm:text-xl font-serif italic font-bold text-[#f3e8ff] block">{timeLeftCentenario.minutes}</span>
                <span className="text-[9px] uppercase tracking-wider text-[#9b72cf]">Min</span>
              </div>
              <div className="bg-[#1a0a24] px-2.5 py-1.5 rounded-lg border border-[#3d1a4a]">
                <span className="text-lg sm:text-xl font-serif italic font-bold text-amber-300 block">{timeLeftCentenario.seconds}</span>
                <span className="text-[9px] uppercase tracking-wider text-[#9b72cf]">Seg</span>
              </div>
            </div>
            
            <span className="text-[10px] text-[#a78bfa] block italic">
              100 Años de "Los Íntimos" al servicio del Señor
            </span>
          </div>
        </div>

      </section>

      {/* Recorridos Explorer */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Days List */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-2xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#3d1a4a]">
              <h3 className="text-sm font-serif italic font-bold text-[#f3e8ff] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#9b72cf]" />
                <span>Las 5 Salidas Procesionales</span>
              </h3>
              <span className="text-[10px] text-[#a78bfa] font-mono">
                Mes Morado
              </span>
            </div>

            <div className="space-y-2.5">
              {PROCESSION_DAYS.map((day, idx) => {
                const isSelected恒 = selectedDay.id === day.id;

                return (
                  <div
                    key={day.id}
                    id={`procession-day-${day.id}`}
                    onClick={() => setSelectedDay(day)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected恒
                        ? 'bg-[#2a1336] border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)]'
                        : 'bg-[#120816] border-[#3d1a4a] hover:border-[#9b72cf]/60 hover:bg-[#1a0a24]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#160b1d] text-[#d8b4fe] border border-[#3d1a4a]">
                        {day.dateStr}
                      </span>
                      <span className="text-[10px] text-[#9b72cf] font-serif italic">
                        Salida #{idx + 1}
                      </span>
                    </div>

                    <h4 className={`text-xs font-serif italic font-bold ${isSelected恒 ? 'text-[#f3e8ff]' : 'text-[#d8b4fe]'}`}>
                      {day.title}
                    </h4>

                    <p className="text-[11px] text-[#a78bfa] italic mt-0.5">
                      {day.symbolicName}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Day Full Itinerary & Map Route */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Header */}
            <div className="border-b border-[#3d1a4a] pb-4 space-y-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] text-[#9b72cf] uppercase font-mono tracking-widest">
                  {selectedDay.dateStr}
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#2a1336] text-[#d8b4fe] border border-[#3d1a4a] uppercase font-bold">
                  {selectedDay.status === 'guardada' ? 'Guardada Especial' : 'Procesión Mayor'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif italic text-[#f3e8ff]">
                {selectedDay.title}
              </h3>
              <p className="text-xs text-[#a78bfa] italic">
                "{selectedDay.symbolicName}"
              </p>
            </div>

            {/* Time schedules */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#120816] rounded-xl border border-[#3d1a4a] flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#9b72cf] flex-shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#a78bfa] block">Horario de Salida:</span>
                  <span className="text-[#f3e8ff] font-medium">{selectedDay.departureTime}</span>
                </div>
              </div>

              <div className="p-3 bg-[#120816] rounded-xl border border-[#3d1a4a] flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#9b72cf] flex-shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#a78bfa] block">Llegada / Guardada:</span>
                  <span className="text-[#f3e8ff] font-medium">{selectedDay.arrivalTime}</span>
                </div>
              </div>
            </div>

            {/* Detailed Route */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold text-[#9b72cf] block tracking-wider">
                Recorrido y Jirones del Damero:
              </span>
              <div className="bg-[#120816] p-4 rounded-xl border border-[#3d1a4a] text-xs text-[#e5e1e6] leading-relaxed font-mono">
                {selectedDay.routeSummary}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold text-[#9b72cf] block tracking-wider">
                Hitos y Homenajes de la Jornada:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedDay.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="p-2.5 bg-[#1a0a24] rounded-lg border border-[#3d1a4a] text-[11px] text-[#e5e1e6] flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#9b72cf] flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cuadrilla 11 Role & Traditional Spots */}
            <div className="p-4 bg-[#1a0a24] rounded-xl border border-[#3d1a4a] space-y-2 text-xs">
              <span className="text-[10px] uppercase font-bold text-[#d8b4fe] block tracking-wider">
                Rol Histórico de la Cuadrilla 11 "Los Íntimos":
              </span>
              <p className="text-[#a78bfa] leading-relaxed">
                {selectedDay.cuadrilla11Role}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] text-[#9b72cf] font-bold">Puntos Clave:</span>
                {selectedDay.traditionalPoints.map((pt, pIdx) => (
                  <span key={pIdx} className="text-[10px] bg-[#2a1336] text-[#f3e8ff] px-2 py-0.5 rounded border border-[#3d1a4a]">
                    {pt}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Lugares y Turnos Emblemáticos de la Once */}
      <section className="bg-[#160b1d] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
        <div className="border-b border-[#3d1a4a] pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#2a1336] text-[#d8b4fe] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 border border-[#3d1a4a]">
            <Award className="w-3 h-3 text-[#9b72cf]" />
            <span>Lugares de Memoria y Devoción</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif italic text-[#f3e8ff]">
            Turnos y Puntos Históricos de la Cuadrilla 11
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUADRILLA_11_TRADITIONAL_TURNS.map((turn, tIdx) => (
            <div
              key={tIdx}
              className="bg-[#120816] p-6 rounded-2xl border border-[#3d1a4a] hover:border-[#9b72cf] transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#d8b4fe] bg-[#2a1336] px-2.5 py-1 rounded-full border border-[#3d1a4a] inline-block">
                  {turn.badge}
                </span>
                <h4 className="text-base font-serif italic font-bold text-[#f3e8ff]">
                  {turn.title}
                </h4>
                <p className="text-xs text-[#9b72cf] font-mono flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{turn.location}</span>
                </p>
                <p className="text-xs text-[#e5e1e6] leading-relaxed pt-1">
                  {turn.significance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
