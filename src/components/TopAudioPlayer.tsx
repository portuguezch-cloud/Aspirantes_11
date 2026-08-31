import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Volume, Volume1, Volume2, VolumeX, 
  ListMusic, Music2, Bell, Home, Sparkles
} from 'lucide-react';
import { WEB_BACKGROUND_PLAYLIST, BackgroundTrack } from '../data/webBackgroundPlaylist';
import { playMartillazoSound, playTrackSynthesizer, stopCurrentMelody } from '../utils/sound';

interface TopAudioPlayerProps {
  currentTrackId?: string;
  onTrackChange?: (track: BackgroundTrack) => void;
  onGoHome?: () => void;
  activeTab?: string;
}

export const TopAudioPlayer: React.FC<TopAudioPlayerProps> = ({
  currentTrackId: externalTrackId,
  onTrackChange,
  onGoHome,
  activeTab
}) => {
  // Selección inicial aleatoria de la playlist
  const [currentTrackIndex, setCurrentTrackIndex] = useState(() => 
    Math.floor(Math.random() * (WEB_BACKGROUND_PLAYLIST.length || 1))
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(() => {
    try {
      const saved = localStorage.getItem('c11_audio_volume');
      return saved !== null ? parseFloat(saved) : 0.45;
    } catch {
      return 0.45;
    }
  });
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [isAwaitingGesture, setIsAwaitingGesture] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrackIndexRef = useRef(currentTrackIndex);
  currentTrackIndexRef.current = currentTrackIndex;
  const volumeRef = useRef(volume);
  volumeRef.current = volume;
  const isMutedRef = useRef(isMuted);
  isMutedRef.current = isMuted;

  const currentTrack = WEB_BACKGROUND_PLAYLIST[currentTrackIndex] || WEB_BACKGROUND_PLAYLIST[0];

  // Resolve audio path safely encoding spaces and characters
  const resolveAudioSrc = (src?: string) => {
    if (!src || !src.trim()) return undefined;
    let clean = src.trim();
    if (clean.startsWith('public/')) {
      clean = '/' + clean.replace(/^public\//, '');
    } else if (clean.startsWith('public\\')) {
      clean = '/' + clean.replace(/^public\\/, '');
    } else if (clean.startsWith('src/public/')) {
      clean = '/' + clean.replace(/^src\/public\//, '');
    } else if (!clean.startsWith('http://') && !clean.startsWith('https://') && !clean.startsWith('/')) {
      clean = '/' + clean;
    }
    try {
      return encodeURI(decodeURI(clean));
    } catch {
      return clean;
    }
  };

  // Detener todos los audios y sintetizadores
  const stopAllCurrentAudio = () => {
    if (audioRef.current) {
      try {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } catch {}
    }
    stopCurrentMelody();
  };

  // Reproducir pista por índice
  const playTrack = useCallback((index: number) => {
    stopAllCurrentAudio();

    const track = WEB_BACKGROUND_PLAYLIST[index];
    if (!track) return;

    setCurrentTrackIndex(index);
    currentTrackIndexRef.current = index;
    if (onTrackChange) onTrackChange(track);

    const validSrc = resolveAudioSrc(track.audioSrc);

    if (validSrc) {
      const audio = audioRef.current;
      if (audio) {
        audio.src = validSrc;
        audio.volume = isMutedRef.current ? 0 : volumeRef.current;
        audio.loop = false; // Pasar a la siguiente canción al terminar

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setIsAwaitingGesture(false);
            })
            .catch((err) => {
              console.log('Autoplay en espera de interacción:', err.message);
              setIsPlaying(false);
              setIsAwaitingGesture(true);
            });
        }
      }
    } else if (!isMutedRef.current) {
      setIsPlaying(true);
      setIsAwaitingGesture(false);
      playTrackSynthesizer(
        track.id, 
        volumeRef.current, 
        undefined,
        () => {
          const nextIdx = (index + 1) % WEB_BACKGROUND_PLAYLIST.length;
          playTrack(nextIdx);
        }
      );
    }
  }, [onTrackChange]);

  // Siguiente canción
  const handleNext = useCallback(() => {
    const nextIdx = (currentTrackIndexRef.current + 1) % WEB_BACKGROUND_PLAYLIST.length;
    playTrack(nextIdx);
  }, [playTrack]);

  // Canción anterior
  const handlePrev = useCallback(() => {
    let prevIdx = currentTrackIndexRef.current - 1;
    if (prevIdx < 0) {
      prevIdx = WEB_BACKGROUND_PLAYLIST.length - 1;
    }
    playTrack(prevIdx);
  }, [playTrack]);

  // Sincronizar track externo si se solicita
  useEffect(() => {
    if (externalTrackId) {
      const idx = WEB_BACKGROUND_PLAYLIST.findIndex(t => t.id === externalTrackId);
      if (idx !== -1 && idx !== currentTrackIndex) {
        playTrack(idx);
      }
    }
  }, [externalTrackId, playTrack, currentTrackIndex]);

  // Autoplay aleatorio al cargar la página + desbloqueo global al primer gesto
  useEffect(() => {
    // 1. Seleccionar aleatoriamente una canción de la playlist
    const initialRandomIndex = Math.floor(Math.random() * WEB_BACKGROUND_PLAYLIST.length);
    setCurrentTrackIndex(initialRandomIndex);
    currentTrackIndexRef.current = initialRandomIndex;

    // 2. Intentar reproducir inmediatamente
    playTrack(initialRandomIndex);

    // 3. Listener global en fase CAPTURE para desbloquear el audio en el primer clic, toque o teclado
    const handleFirstGesture = () => {
      const audio = audioRef.current;
      if (audio && (audio.paused || !isPlaying)) {
        if (!audio.src || audio.src === '' || audio.src === window.location.href) {
          const track = WEB_BACKGROUND_PLAYLIST[currentTrackIndexRef.current];
          if (track) {
            audio.src = resolveAudioSrc(track.audioSrc) || '';
          }
        }
        audio.volume = isMutedRef.current ? 0 : volumeRef.current;
        const p = audio.play();
        if (p !== undefined) {
          p.then(() => {
            setIsPlaying(true);
            setIsAwaitingGesture(false);
          }).catch(() => {
            playTrack(currentTrackIndexRef.current);
          });
        }
      }
      removeGestureListeners();
    };

    const events = ['click', 'touchstart', 'touchend', 'pointerdown', 'mousedown', 'keydown', 'wheel'];

    const addGestureListeners = () => {
      events.forEach(evt => {
        window.addEventListener(evt, handleFirstGesture, { capture: true, passive: true });
        document.addEventListener(evt, handleFirstGesture, { capture: true, passive: true });
      });
    };

    const removeGestureListeners = () => {
      events.forEach(evt => {
        window.removeEventListener(evt, handleFirstGesture, { capture: true });
        document.removeEventListener(evt, handleFirstGesture, { capture: true });
      });
    };

    addGestureListeners();

    return () => {
      removeGestureListeners();
      stopAllCurrentAudio();
    };
  }, [playTrack]);

  // Al finalizar una canción, pasar automáticamente a la siguiente
  const handleAudioEnded = () => {
    const nextIdx = (currentTrackIndexRef.current + 1) % WEB_BACKGROUND_PLAYLIST.length;
    playTrack(nextIdx);
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopCurrentMelody();
      setIsPlaying(false);
      setIsAwaitingGesture(false);
    } else {
      setIsAwaitingGesture(false);
      const audio = audioRef.current;
      if (audio && audio.src && audio.src !== window.location.href) {
        audio.volume = isMuted ? 0 : volume;
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(() => playTrack(currentTrackIndex));
      } else {
        playTrack(currentTrackIndex);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    volumeRef.current = val;
    try {
      localStorage.setItem('c11_audio_volume', val.toString());
    } catch {}

    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    if (val === 0) {
      setIsMuted(true);
      isMutedRef.current = true;
    } else {
      setIsMuted(false);
      isMutedRef.current = false;
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      isMutedRef.current = false;
      if (audioRef.current) audioRef.current.volume = volume;
    } else {
      setIsMuted(true);
      isMutedRef.current = true;
      if (audioRef.current) audioRef.current.volume = 0;
    }
  };

  const handleTriggerMartillazo = () => {
    playMartillazoSound();
  };

  return (
    <div className="sticky top-0 z-50 bg-[#12061c]/95 backdrop-blur-md border-b border-[#3d1a4a]/80 shadow-[0_2px_15px_rgba(0,0,0,0.6)] text-[#e5e1e6]">
      {/* Elemento de audio nativo montado en el DOM */}
      <audio
        ref={audioRef}
        preload="auto"
        playsInline
        onPlay={() => {
          setIsPlaying(true);
          setIsAwaitingGesture(false);
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={handleAudioEnded}
      />

      {/* Top Gold Thin Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-purple-700 via-amber-400 to-purple-700" />

      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 py-1.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Botón Siempre a Portada Principal + Track Info */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {onGoHome && (
              <button
                id="top-nav-home-btn"
                onClick={onGoHome}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex-shrink-0 shadow-sm ${
                  activeTab === 'inicio'
                    ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-amber-400/60 shadow-[0_0_10px_rgba(245,158,11,0.3)]'
                    : 'bg-[#220d30] text-amber-300 border border-amber-500/40 hover:bg-amber-950/70 hover:border-amber-400'
                }`}
                title="Volver a la Portada Principal"
              >
                <Home className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Portada</span>
              </button>
            )}

            {/* Track Info */}
            <div className="flex items-center gap-2 min-w-0 max-w-[170px] sm:max-w-[280px] md:max-w-md">
              <div 
                onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
                className={`cursor-pointer flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all ${
                  isPlaying 
                    ? 'bg-amber-500 text-purple-950 shadow-[0_0_8px_rgba(245,158,11,0.5)]' 
                    : 'bg-[#220d30] text-[#d8b4fe] border border-[#3d1a4a]'
                }`}
                title="Ver lista de música de fondo"
              >
                <Music2 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-pulse text-purple-950' : 'text-amber-400'}`} />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-semibold text-[#f3e8ff] truncate leading-tight">
                    {currentTrack.title}
                  </p>
                  {isAwaitingGesture && !isPlaying && (
                    <span className="hidden lg:inline-flex items-center gap-0.5 text-[9px] font-bold text-amber-300 bg-amber-950/80 px-1.5 py-0.2 border border-amber-500/50 rounded-full animate-pulse">
                      <Sparkles className="w-2.5 h-2.5" />
                      Toca para escuchar
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-[#a78bfa] truncate">
                  {currentTrack.composer}
                </p>
              </div>
            </div>
          </div>

          {/* Central Controls: Prev, Play/Pause, Next & Martillazo */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {/* Prev Track */}
            <button
              id="player-prev-btn"
              onClick={handlePrev}
              className="p-1 sm:p-1.5 rounded-lg text-[#a78bfa] hover:text-[#f3e8ff] hover:bg-[#2a1336] transition-colors"
              title="Pista anterior"
            >
              <SkipBack className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Play / Pause Primary Button */}
            <button
              id="player-play-toggle-btn"
              onClick={togglePlay}
              className={`p-1.5 sm:p-2 rounded-full transition-all duration-200 flex items-center justify-center ${
                isPlaying 
                  ? 'bg-amber-400 text-purple-950 shadow-[0_0_12px_rgba(245,158,11,0.6)] scale-105' 
                  : isAwaitingGesture
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-purple-950 shadow-[0_0_15px_rgba(245,158,11,0.8)] animate-bounce font-bold'
                  : 'bg-[#5d2a7a] text-white hover:bg-[#723396] shadow-[0_0_8px_rgba(155,114,207,0.4)] border border-purple-400/40'
              }`}
              title={isPlaying ? "Pausar música" : "Reproducir música de fondo"}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
              )}
            </button>

            {/* Next Track */}
            <button
              id="player-next-btn"
              onClick={handleNext}
              className="p-1 sm:p-1.5 rounded-lg text-[#a78bfa] hover:text-[#f3e8ff] hover:bg-[#2a1336] transition-colors"
              title="Siguiente pista"
            >
              <SkipForward className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Quick Martillazo FX */}
            <button
              id="player-martillazo-btn"
              onClick={handleTriggerMartillazo}
              className="hidden md:inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-[#2a1336] hover:bg-amber-950/80 text-amber-300 border border-amber-500/40 text-[11px] font-semibold transition-all shadow-sm"
              title="Toque de martillo tradicional"
            >
              <Bell className="w-3 h-3 text-amber-400" />
              <span>Martillazo</span>
            </button>
          </div>

          {/* Right Side: Volume & Playlist Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            {/* Volume Control (Responsive for all screens) */}
            <div className="flex items-center gap-1 sm:gap-1.5 bg-[#1a0a24] px-1.5 sm:px-2.5 py-1 rounded-xl border border-[#3d1a4a] shadow-inner">
              <button 
                id="player-mute-btn"
                onClick={toggleMute}
                className="text-[#a78bfa] hover:text-[#f3e8ff] transition-colors p-0.5"
                title={isMuted ? "Activar sonido" : "Silenciar"}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                ) : volume < 0.35 ? (
                  <Volume className="w-3.5 h-3.5 text-amber-300" />
                ) : volume < 0.7 ? (
                  <Volume1 className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                )}
              </button>

              <input
                id="player-volume-slider"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-12 sm:w-16 md:w-20 h-1.5 bg-[#3d1a4a] rounded-lg appearance-none cursor-pointer accent-amber-400"
                title={`Volumen: ${Math.round((isMuted ? 0 : volume) * 100)}%`}
              />

              <span className="hidden sm:inline-block text-[10px] font-mono text-amber-300 min-w-[26px] text-right font-semibold">
                {Math.round((isMuted ? 0 : volume) * 100)}%
              </span>
            </div>

            {/* Playlist Button */}
            <button
              id="player-playlist-toggle-btn"
              onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                isPlaylistOpen 
                  ? 'bg-amber-400 text-purple-950 font-bold shadow-[0_0_8px_rgba(245,158,11,0.4)]' 
                  : 'bg-[#220d30] text-[#d8b4fe] border border-[#3d1a4a] hover:border-amber-400/50'
              }`}
            >
              <ListMusic className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Música ({WEB_BACKGROUND_PLAYLIST.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Playlist Dropdown Modal */}
      {isPlaylistOpen && (
        <div className="border-t border-[#3d1a4a] bg-[#160724] shadow-2xl p-3 animate-fadeIn">
          <div className="max-w-2xl mx-auto space-y-2.5">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#3d1a4a]">
              <span className="font-serif italic font-bold text-xs text-[#f3e8ff] flex items-center gap-1.5">
                <ListMusic className="w-3.5 h-3.5 text-amber-400" />
                <span>Playlist de Fondo de la Web</span>
              </span>
              <button 
                onClick={() => setIsPlaylistOpen(false)}
                className="text-[11px] text-[#a78bfa] hover:text-white px-2 py-0.5 rounded bg-[#2a1336]"
              >
                Cerrar ✕
              </button>
            </div>

            {/* In-playlist dedicated volume regulator */}
            <div className="flex items-center justify-between gap-3 p-2 rounded-xl bg-[#1f092b] border border-[#3d1a4a]">
              <span className="text-xs text-[#d8b4fe] font-medium flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-amber-400" />
                <span>Regulador de Volumen:</span>
              </span>
              <div className="flex items-center gap-2 flex-1 max-w-[220px]">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-2 bg-[#3d1a4a] rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <span className="text-xs font-mono font-bold text-amber-300 min-w-[34px] text-right">
                  {Math.round((isMuted ? 0 : volume) * 100)}%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pt-1">
              {WEB_BACKGROUND_PLAYLIST.map((track, idx) => {
                const isThisPlaying = isPlaying && currentTrackIndex === idx;
                return (
                  <button
                    key={track.id}
                    onClick={() => {
                      playTrack(idx);
                      setIsPlaylistOpen(false);
                    }}
                    className={`flex items-center justify-between p-2 rounded-xl border text-left transition-all ${
                      currentTrackIndex === idx
                        ? 'bg-[#2a1336] border-amber-400 text-[#f3e8ff] shadow-sm'
                        : 'bg-[#12051a] border-[#3d1a4a] text-[#c4b5fd] hover:border-purple-500 hover:text-white'
                    }`}
                  >
                    <div className="min-w-0 pr-1.5">
                      <p className="text-xs font-semibold truncate text-[#f3e8ff]">
                        {(idx + 1)}. {track.title}
                      </p>
                      <p className="text-[10px] text-[#a78bfa] truncate">
                        {track.composer}
                      </p>
                    </div>

                    <span className="p-1 rounded-md bg-[#220d30] text-amber-400">
                      {isThisPlaying ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

