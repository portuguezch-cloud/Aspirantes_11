import React, { useState } from 'react';
import { Volume2, VolumeX, CheckCircle, Clock, MapPin, Users, Lightbulb, Check, Sparkles } from 'lucide-react';
import { HISTORICAL_CHAPTERS } from '../data/cuadrillaData';
import { speakText, stopSpeaking } from '../utils/sound';

interface HistoricalChaptersViewProps {
  studiedChapters: number[];
  onToggleStudied: (chapterNum: number) => void;
}

export const HistoricalChaptersView: React.FC<HistoricalChaptersViewProps> = ({
  studiedChapters,
  onToggleStudied
}) => {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [activeSpeechIndex, setActiveSpeechIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'infografia' | 'detallado'>('infografia');

  const handleSpeak = (text: string, index: number) => {
    if (activeSpeechIndex === index) {
      stopSpeaking();
      setActiveSpeechIndex(null);
    } else {
      stopSpeaking();
      speakText(text);
      setActiveSpeechIndex(index);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Header & Controls */}
      <div className="bg-[#1a0a24] border border-[#3d1a4a] rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1d0e26] border border-[#3d1a4a] text-[#9b72cf] text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
              <Sparkles className="w-3 h-3 text-[#9b72cf]" />
              <span>Historia de su Fundación en Nueve Capítulos (1930 – 1935)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif italic tracking-wide text-[#f3e8ff]">
              Génesis y Nacimiento de la Once
            </h2>
            <p className="text-[#a78bfa] text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
              Recorrido cronológico exacto desde los anhelos de devoción en los años 30 hasta el histórico grito de 
              <strong className="text-[#f3e8ff] font-serif italic"> "¡Once!"</strong> y el primer martillazo el 18 de octubre de 1935.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-[#120816] border border-[#3d1a4a] rounded-lg p-1 flex">
              <button
                id="viewmode-infografia-btn"
                onClick={() => setViewMode('infografia')}
                className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all ${
                  viewMode === 'infografia' 
                    ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_8px_rgba(155,114,207,0.3)]' 
                    : 'text-[#e5e1e6] opacity-70 hover:opacity-100 hover:text-white'
                }`}
              >
                Vista Infografía
              </button>
              <button
                id="viewmode-detallado-btn"
                onClick={() => setViewMode('detallado')}
                className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all ${
                  viewMode === 'detallado' 
                    ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_8px_rgba(155,114,207,0.3)]' 
                    : 'text-[#e5e1e6] opacity-70 hover:opacity-100 hover:text-white'
                }`}
              >
                Tarjetas de Estudio
              </button>
            </div>
          </div>
        </div>

        {/* Visual mini-banner with Señor de los Milagros and Las Andas */}
        <div className="mt-6 pt-5 border-t border-[#3d1a4a] grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-[#120816] rounded-xl border border-[#3d1a4a]">
            <img
              src="https://scontent.flim39-1.fna.fbcdn.net/v/t39.30808-6/540614430_1170798838415106_912958999716874447_n.jpg?stp=dst-jpg_tt6&cstp=mx879x1267&ctp=s879x1267&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OkIotg1A7tYQ7kNvwEp9sRf&_nc_oc=AdqoRe0wF8YuBINl5gJXg-4sYFFevZcB_uAGI73woQLNafSYjkMXEfu-AmsJK2YC0Mw&_nc_zt=23&_nc_ht=scontent.flim39-1.fna&_nc_gid=b-0fQRqIIf3OgsRqKuDgrA&_nc_ss=7b2a8&oh=00_AQF__g1BgBjJeOilOmbm4KYZ-jlqZs7IWGS1eHS-aZ4uqw&oe=6A962677"
              alt="Cristo de Pachacamilla"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-lg object-cover border border-[#9b72cf]/40 shadow-sm flex-shrink-0"
            />
            <div className="text-xs">
              <strong className="text-[#f3e8ff] block font-serif">El Sagrado Lienzo de Nazarenas</strong>
              <span className="text-[#a78bfa] text-[11px]">Protector jurado de Lima y de la Once</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-[#120816] rounded-xl border border-[#3d1a4a]">
            <img
              src="https://scontent.flim39-1.fna.fbcdn.net/v/t1.6435-9/107048579_3717406941609784_1005073314756856247_n.jpg?stp=dst-jpg_tt6&cstp=mx1475x2048&ctp=s1475x2048&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YSbptB7PyukQ7kNvwG52ggC&_nc_oc=AdpF4e8-5cNK16nMxGjcf7bdjHWzFviOJDwUvVyuibhxJOcv-5k9O7mLh80jzYgySpA&_nc_zt=23&_nc_ht=scontent.flim39-1.fna&_nc_gid=T5tRYiSlHgVnYVS8R7-wrQ&_nc_ss=7b2a8&oh=00_AQHwjRqfif2ILUUA6AkSpMuBA4VqoeUP4l1nne1gBhR7Mw&oe=6AB7DF2E"
              alt="Procesión del Señor de los Milagros"
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-lg object-cover border border-[#9b72cf]/40 shadow-sm flex-shrink-0"
            />
            <div className="text-xs">
              <strong className="text-[#f3e8ff] block font-serif">Las Sagradas Andas en Procesión</strong>
              <span className="text-[#a78bfa] text-[11px]">Carguío procesional de devoción y penitencia</span>
            </div>
          </div>
        </div>


        {/* Quick Chapter Numbers Selector */}
        <div className="mt-6 pt-5 border-t border-[#3d1a4a] flex flex-wrap items-center justify-between gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#9b72cf]">
            Capítulos:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {HISTORICAL_CHAPTERS.map((chap) => {
              const isStudied = studiedChapters.includes(chap.number);
              return (
                <button
                  key={chap.number}
                  id={`quick-chap-btn-${chap.number}`}
                  onClick={() => {
                    setSelectedChapter(chap.number);
                    const el = document.getElementById(`chapter-card-${chap.number}`);
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={`w-8 h-8 rounded-full text-xs font-serif italic transition-all flex items-center justify-center relative ${
                    isStudied
                      ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_8px_#9b72cf]'
                      : 'bg-[#160b1d] text-[#e5e1e6] hover:bg-[#2a1336] border border-[#3d1a4a]'
                  }`}
                  title={`Capítulo ${chap.number}: ${chap.title} (${chap.period})`}
                >
                  {chap.number}
                  {isStudied && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#9b72cf] rounded-full border border-[#120816] shadow-[0_0_5px_#9b72cf]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-[#d8b4fe]">
            <span className="text-[#f3e8ff] font-bold">{studiedChapters.length}</span> de 9 capítulos repasados
          </div>
        </div>
      </div>

      {/* Chapters Layout View */}
      {viewMode === 'infografia' ? (
        /* Sophisticated Dark Timeline Manuscript Layout */
        <div className="bg-[#160b1d] text-[#e5e1e6] rounded-2xl shadow-2xl border border-[#3d1a4a] p-6 sm:p-10 relative overflow-hidden">
          {/* Header Banner */}
          <div className="text-center pb-8 border-b border-[#3d1a4a]">
            <div className="inline-block p-1 text-[#9b72cf] text-[10px] font-bold tracking-[0.25em] uppercase">
              HERMANDAD DEL SEÑOR DE LOS MILAGROS DE NAZARENAS
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif italic tracking-wide text-[#f3e8ff] mt-1">
              Cuadrilla 11 "Los Íntimos"
            </h3>
            <p className="text-[#d8b4fe] font-serif italic text-sm sm:text-base mt-1">
              Historia de su fundación, en nueve capítulos (1930 – 1935)
            </p>
          </div>

          <div className="divide-y divide-[#3d1a4a] mt-6">
            {HISTORICAL_CHAPTERS.map((chap) => {
              const isStudied = studiedChapters.includes(chap.number);
              const isSpeaking = activeSpeechIndex === chap.number;

              return (
                <div
                  key={chap.number}
                  id={`chapter-card-${chap.number}`}
                  className={`py-8 transition-colors ${
                    selectedChapter === chap.number ? 'bg-[#2a1336]/60 -mx-6 px-6 rounded-xl border border-[#9b72cf]/40' : ''
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    
                    {/* Chapter Number Block */}
                    <div className="md:col-span-2 flex flex-row md:flex-col items-center md:items-start justify-between">
                      <div className="flex flex-col">
                        <span className="text-4xl sm:text-5xl font-serif italic text-[#9b72cf] leading-none">
                          {chap.numberStr}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a78bfa] mt-1">
                          CAPÍTULO {chap.number}
                        </span>
                      </div>

                      {/* Studied toggle */}
                      <button
                        id={`toggle-study-infog-${chap.number}`}
                        onClick={() => onToggleStudied(chap.number)}
                        className={`mt-2 inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded border transition-all ${
                          isStudied
                            ? 'bg-[#5d2a7a]/60 text-[#f3e8ff] border-[#9b72cf] shadow-[0_0_8px_rgba(155,114,207,0.3)] font-semibold'
                            : 'bg-[#1a0a24] text-[#e5e1e6] border-[#3d1a4a] hover:border-[#9b72cf]'
                        }`}
                      >
                        {isStudied ? (
                          <>
                            <Check className="w-3 h-3 text-[#9b72cf]" />
                            <span>Completado</span>
                          </>
                        ) : (
                          <span>Marcar leído</span>
                        )}
                      </button>
                    </div>

                    {/* Chapter Content Block */}
                    <div className="md:col-span-10 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#d8b4fe] bg-[#2a1336] border border-[#3d1a4a] px-2.5 py-0.5 rounded uppercase tracking-[0.15em]">
                          <Clock className="w-3 h-3 text-[#9b72cf]" />
                          <span>{chap.period}</span>
                        </div>

                        <button
                          id={`listen-chap-${chap.number}`}
                          onClick={() => handleSpeak(`${chap.title}. Periodo: ${chap.period}. ${chap.content}`, chap.number)}
                          className="inline-flex items-center gap-1 text-xs font-medium text-[#d8b4fe] hover:text-white bg-[#1a0a24] hover:bg-[#2a1336] px-2.5 py-1 rounded border border-[#3d1a4a] hover:border-[#9b72cf] transition-colors"
                        >
                          {isSpeaking ? <VolumeX className="w-3.5 h-3.5 text-[#9b72cf]" /> : <Volume2 className="w-3.5 h-3.5 text-[#9b72cf]" />}
                          <span>{isSpeaking ? 'Pausar audio' : 'Escuchar'}</span>
                        </button>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-serif italic text-[#f3e8ff] leading-snug">
                        {chap.title}
                      </h4>

                      <p className="text-[#e5e1e6] text-sm sm:text-base leading-relaxed">
                        {chap.content}
                      </p>

                      {/* Key figures and exam tips drawer */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 mt-3 border-t border-[#3d1a4a] text-xs">
                        <div className="bg-[#1a0a24] rounded-lg p-3 border border-[#3d1a4a] flex items-start gap-2.5">
                          <Users className="w-4 h-4 text-[#9b72cf] flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-[#d8b4fe] text-[10px] uppercase tracking-wider block">Personajes Clave:</span>
                            <span className="text-[#e5e1e6]">{chap.keyFigures.join(', ')}</span>
                          </div>
                        </div>

                        <div className="bg-[#1d0e26] rounded-lg p-3 border border-[#3d1a4a] flex items-start gap-2.5">
                          <Lightbulb className="w-4 h-4 text-[#9b72cf] flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-[#d8b4fe] text-[10px] uppercase tracking-wider block">Dato Clave de Examen:</span>
                            <span className="text-[#e5e1e6]">{chap.studyTips[0]}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Motto */}
          <div className="mt-10 pt-8 border-t border-[#3d1a4a] text-center bg-[#1a0a24] -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 text-white rounded-b-2xl">
            <div className="w-10 h-10 mx-auto mb-2 text-[#9b72cf] flex items-center justify-center">
              <span className="text-xl">☀️</span>
            </div>
            <p className="text-base sm:text-lg font-serif italic tracking-wider text-[#f3e8ff]">
              ¡SEÑOR DE LOS MILAGROS, SEÑOR DE LOS PERUANOS!
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9b72cf] mt-1 font-bold">
              Cuadrilla 11 · Los Íntimos · Fundada el 11 de octubre de 1935
            </p>
          </div>
        </div>
      ) : (
        /* Detailed Deep Study Cards Layout */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HISTORICAL_CHAPTERS.map((chap) => {
            const isStudied = studiedChapters.includes(chap.number);
            const isSpeaking = activeSpeechIndex === chap.number;

            return (
              <div
                key={chap.number}
                id={`card-detailed-${chap.number}`}
                className={`bg-[#160b1d] border rounded-xl p-5 shadow-lg flex flex-col justify-between transition-all hover:border-[#9b72cf] ${
                  isStudied ? 'border-[#9b72cf] bg-[#1d0e26] shadow-[0_0_12px_rgba(155,114,207,0.2)]' : 'border-[#3d1a4a]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-[#5d2a7a]/40 text-[#f3e8ff] border border-[#9b72cf]/40 flex items-center justify-center font-serif italic text-sm">
                        {chap.numberStr}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#d8b4fe] bg-[#2a1336] px-2 py-0.5 rounded border border-[#3d1a4a]">
                        {chap.period}
                      </span>
                    </div>

                    <button
                      id={`detailed-listen-${chap.number}`}
                      onClick={() => handleSpeak(`${chap.title}. ${chap.content}`, chap.number)}
                      className="text-[#9b72cf] hover:text-white p-1"
                      title="Escuchar narración"
                    >
                      {isSpeaking ? <VolumeX className="w-4 h-4 text-[#9b72cf]" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  <h4 className="text-lg font-serif italic text-[#f3e8ff] mb-2 leading-snug">
                    {chap.title}
                  </h4>

                  <p className="text-[#e5e1e6] text-xs sm:text-sm leading-relaxed mb-4">
                    {chap.content}
                  </p>

                  <div className="space-y-2 text-xs border-t border-[#3d1a4a] pt-3">
                    <div className="flex items-start gap-1.5 text-[#a78bfa]">
                      <Users className="w-3.5 h-3.5 text-[#9b72cf] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#d8b4fe]">Personajes:</strong> {chap.keyFigures.join(', ')}</span>
                    </div>

                    <div className="flex items-start gap-1.5 text-[#a78bfa]">
                      <MapPin className="w-3.5 h-3.5 text-[#9b72cf] flex-shrink-0 mt-0.5" />
                      <span><strong className="text-[#d8b4fe]">Lugares:</strong> {chap.keyPlaces.join(', ')}</span>
                    </div>

                    <div className="p-2.5 rounded bg-[#1a0a24] border border-[#3d1a4a] text-xs mt-2">
                      <strong className="text-[#9b72cf] text-[10px] uppercase tracking-wider block mb-0.5">Tip de Estudio:</strong>
                      <span className="text-[#e5e1e6]">{chap.studyTips[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#3d1a4a] flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#9b72cf]">Capítulo {chap.number} de 9</span>
                  <button
                    id={`toggle-card-btn-${chap.number}`}
                    onClick={() => onToggleStudied(chap.number)}
                    className={`text-xs px-3 py-1 rounded font-medium transition-colors flex items-center gap-1.5 ${
                      isStudied 
                        ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_8px_rgba(155,114,207,0.3)]' 
                        : 'bg-[#1a0a24] text-[#e5e1e6] border border-[#3d1a4a] hover:border-[#9b72cf]'
                    }`}
                  >
                    <CheckCircle className={`w-3.5 h-3.5 ${isStudied ? 'text-[#f3e8ff]' : 'text-[#9b72cf]'}`} />
                    <span>{isStudied ? 'Estudiado' : 'Marcar visto'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

