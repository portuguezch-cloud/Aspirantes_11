import React, { useState } from 'react';
import {
  Music,
  Play,
  RotateCcw,
  Volume2,
  ListMusic,
  Youtube,
  Clock,
  BookOpen,
  Info,
  Disc,
  ExternalLink
} from 'lucide-react';
import { VIDEOTECA_MARCHAS, MarchaVideoItem } from '../data/videotecaMarchasData';
import {
  playMartillazoSound,
  playDobleMartillazo,
  playTripleMartillazo,
  speakText
} from '../utils/sound';

export const MarchasAudioView: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<MarchaVideoItem>(VIDEOTECA_MARCHAS[0]);
  const [showLyrics, setShowLyrics] = useState<boolean>(true);

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#1a0a24] via-[#160b1d] to-[#0f0415] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6] relative overflow-hidden">
        {/* Foto de fondo devocional de las Cantoras y Procesión */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img 
            src="https://andina.pe/agencia/foto-senor-los-milagros-sahumadoras-y-cantoras-alistan-para-procesion-181512.jpg"
            alt="Cantoras y Procesión"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a24] via-[#160b1d]/85 to-[#0f0415]/75" />
        </div>

        <div className="absolute top-0 right-0 w-80 h-80 bg-[#5d2a7a]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a1336] border border-[#3d1a4a] text-[#9b72cf] text-[10px] uppercase tracking-[0.2em] font-bold">
            <Youtube className="w-3.5 h-3.5 text-rose-400" />
            <span>Videoteca Oficial de Marchas e Himnos</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif italic text-[#f3e8ff] tracking-wide">
            Videos Oficiales, Marchas y Letras Sagradas
          </h2>

          <p className="text-sm text-[#a78bfa] leading-relaxed">
            Explora las interpretaciones oficiales en video de las marchas procesionales, el Himno Sagrado de la HSMN y los toques ceremoniales de martillo de plata utilizados durante los turnos de la Cuadrilla 11.
          </p>

          {/* Consola de Toques de Martillazo */}
          <div className="pt-3 flex flex-wrap items-center gap-2.5">
            <span className="text-[10px] text-[#9b72cf] uppercase font-bold tracking-wider mr-1">
              Consola de Toques:
            </span>

            <button
              id="btn-martillo-1"
              onClick={playMartillazoSound}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#120816] hover:bg-[#2a1336] border border-[#3d1a4a] hover:border-[#9b72cf] text-xs text-[#d8b4fe] transition-all active:scale-95 shadow-sm"
              title="1 Toque: Atención / Preparar madero"
            >
              <Volume2 className="w-3.5 h-3.5 text-[#9b72cf]" />
              <span>1 Golpe (Atención)</span>
            </button>

            <button
              id="btn-martillo-2"
              onClick={playDobleMartillazo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#120816] hover:bg-[#2a1336] border border-[#3d1a4a] hover:border-[#9b72cf] text-xs text-[#d8b4fe] transition-all active:scale-95 shadow-sm"
              title="2 Toques: ¡Alzar las Sagradas Andas!"
            >
              <Volume2 className="w-3.5 h-3.5 text-[#9b72cf]" />
              <span>2 Golpes (¡Alzar!)</span>
            </button>

            <button
              id="btn-martillo-3"
              onClick={playTripleMartillazo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#120816] hover:bg-[#2a1336] border border-[#3d1a4a] hover:border-[#9b72cf] text-xs text-[#d8b4fe] transition-all active:scale-95 shadow-sm"
              title="3 Toques: Descanso en los horcones"
            >
              <Volume2 className="w-3.5 h-3.5 text-[#9b72cf]" />
              <span>3 Golpes (Descanso)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Video Explorer & Video Player */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Lista de Videos */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-2xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#3d1a4a]">
              <h3 className="text-sm font-serif italic font-bold text-[#f3e8ff] flex items-center gap-2">
                <ListMusic className="w-4 h-4 text-[#9b72cf]" />
                <span>Repertorio en Video ({VIDEOTECA_MARCHAS.length})</span>
              </h3>
              <span className="text-[10px] text-[#a78bfa] font-mono">
                YouTube HD
              </span>
            </div>

            <div className="space-y-2.5">
              {VIDEOTECA_MARCHAS.map((item) => {
                const isSelected = selectedVideo.id === item.id;

                return (
                  <div
                    key={item.id}
                    id={`video-item-${item.id}`}
                    onClick={() => setSelectedVideo(item)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-[#2a1336] border-amber-400/80 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                        : 'bg-[#120816] border-[#3d1a4a] hover:border-[#9b72cf]/60 hover:bg-[#1a0a24]'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                        isSelected ? 'bg-rose-600 text-white shadow-md' : 'bg-[#1a0a24] text-rose-400'
                      }`}
                    >
                      <Youtube className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4
                          className={`text-xs font-serif italic font-bold truncate ${
                            isSelected ? 'text-[#f3e8ff]' : 'text-[#d8b4fe]'
                          }`}
                        >
                          {item.title}
                        </h4>
                        {item.year && (
                          <span className="text-[9px] text-[#9b72cf] font-mono flex-shrink-0">
                            {item.year}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#a78bfa] truncate mt-0.5">
                        {item.composer}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[9px] uppercase px-2 py-0.5 rounded bg-[#160b1d] text-[#9b72cf] border border-[#3d1a4a]">
                          {item.type.replace('_', ' ')}
                        </span>
                        {item.lyrics && (
                          <span className="text-[9px] text-amber-400/90 font-mono flex items-center gap-1">
                            <BookOpen className="w-3 h-3 text-amber-400" /> Letra Oficial
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Video Player & Letras */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-2xl p-5 sm:p-7 shadow-xl space-y-5">
            {/* Header del Video Seleccionado */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#3d1a4a] pb-4">
              <div>
                <span className="text-[10px] text-[#9b72cf] uppercase font-mono tracking-widest block">
                  {selectedVideo.type.replace('_', ' ')} • {selectedVideo.year || 'Tradicional'}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif italic text-[#f3e8ff] mt-0.5">
                  {selectedVideo.title}
                </h3>
                <p className="text-xs text-[#a78bfa] mt-1">
                  {selectedVideo.composer}
                </p>
              </div>

              {/* Locución Explicativa */}
              <button
                onClick={() => speakText(`${selectedVideo.title}. ${selectedVideo.description}`)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2a1336] hover:bg-[#3d1a4a] border border-[#3d1a4a] text-xs text-[#d8b4fe] transition-all self-start sm:self-auto"
                title="Escuchar locución histórica"
              >
                <Volume2 className="w-3.5 h-3.5 text-[#9b72cf]" />
                <span>Locución</span>
              </button>
            </div>

            {/* Reproductor de Video de YouTube Embebido */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#3d1a4a] bg-black shadow-2xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeVideoId}?rel=0&modestbranding=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Reseña y Letras */}
            <div className="space-y-4 pt-2">
              <div className="bg-[#120816] p-4 rounded-xl border border-[#3d1a4a] space-y-2">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  <span>Significado y Trascendencia</span>
                </h5>
                <p className="text-xs text-[#c4b5fd] leading-relaxed">
                  {selectedVideo.description}
                </p>
                {selectedVideo.executionNotes && (
                  <p className="text-[11px] text-[#9b72cf] italic border-t border-[#3d1a4a]/60 pt-2 mt-2">
                    <span className="font-semibold text-purple-300">Ejecución en el Anda: </span>
                    {selectedVideo.executionNotes}
                  </p>
                )}
              </div>

              {/* Letra Oficial (si está disponible) */}
              {selectedVideo.lyrics && (
                <div className="bg-[#1a0a24] p-5 rounded-xl border border-amber-500/30 space-y-3 shadow-md">
                  <div className="flex items-center justify-between border-b border-[#3d1a4a] pb-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#f3e8ff] flex items-center gap-1.5 font-serif italic">
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      <span>Letra Sagrada Oficial</span>
                    </h5>
                    <button
                      onClick={() => setShowLyrics(!showLyrics)}
                      className="text-[10px] text-amber-300 hover:text-amber-200 underline"
                    >
                      {showLyrics ? 'Ocultar' : 'Ver Letra Completa'}
                    </button>
                  </div>

                  {showLyrics && (
                    <div className="max-h-60 overflow-y-auto pr-2 space-y-1.5 text-center font-serif text-xs text-[#e5e1e6] bg-[#12051a]/60 p-4 rounded-lg border border-[#3d1a4a]">
                      {selectedVideo.lyrics.map((line, lIdx) => (
                        <p
                          key={lIdx}
                          className={`${
                            line.startsWith('CORO') || line.startsWith('ESTROFA')
                              ? 'font-bold text-amber-400 pt-2 text-[11px] tracking-wider'
                              : 'text-[#d8b4fe] italic'
                          }`}
                        >
                          {line || <br />}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
