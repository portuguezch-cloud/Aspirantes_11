// Procedural Sound Generator for Nazarene Audio Effects using Web Audio API

const MARTILLAZO_AUDIO_URL = 'https://github.com/portuguezch-cloud/Aspirantes_11/raw/refs/heads/main/martillazo.mp3';
let martillazoAudio: HTMLAudioElement | null = null;

function getAudioContext(): AudioContext | null {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    return new AudioCtx();
  } catch {
    return null;
  }
}

// Single silver hammer strike
export function playSynthesizedMartillazo() {
  const audioCtx = getAudioContext();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;

  // Dual metallic resonance (silver hammer hitting silver plate anchor)
  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const osc3 = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc1.type = 'triangle';
  osc1.frequency.setValueAtTime(880, now);
  osc1.frequency.exponentialRampToValueAtTime(440, now + 0.35);

  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(1760, now);
  osc2.frequency.exponentialRampToValueAtTime(880, now + 0.25);

  osc3.type = 'sine';
  osc3.frequency.setValueAtTime(3520, now);
  osc3.frequency.exponentialRampToValueAtTime(1200, now + 0.15);

  gain.gain.setValueAtTime(0.5, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

  osc1.connect(gain);
  osc2.connect(gain);
  osc3.connect(gain);
  gain.connect(audioCtx.destination);

  osc1.start(now);
  osc2.start(now);
  osc3.start(now);
  osc1.stop(now + 0.7);
  osc2.stop(now + 0.7);
  osc3.stop(now + 0.7);
}

export function playMartillazoSound() {
  try {
    if (!martillazoAudio) {
      martillazoAudio = new Audio(MARTILLAZO_AUDIO_URL);
    }
    martillazoAudio.currentTime = 0;
    const playPromise = martillazoAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        playSynthesizedMartillazo();
      });
    }
  } catch {
    playSynthesizedMartillazo();
  }
}

// 2 Strikes: "¡Alzar las Andas!"
export function playDobleMartillazo() {
  playMartillazoSound();
  setTimeout(() => {
    playMartillazoSound();
  }, 420);
}

// 3 Strikes: "¡Descanso!"
export function playTripleMartillazo() {
  playMartillazoSound();
  setTimeout(() => {
    playMartillazoSound();
    setTimeout(() => {
      playMartillazoSound();
    }, 400);
  }, 400);
}

// Church Bell Chime (Campanario de Nazarenas)
export function playCampanarioSound() {
  const audioCtx = getAudioContext();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;
  const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C Major chord harmonics

  frequencies.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + idx * 0.15);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.98, now + idx * 0.15 + 1.8);

    gain.gain.setValueAtTime(0, now + idx * 0.15);
    gain.gain.linearRampToValueAtTime(0.35, now + idx * 0.15 + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.15 + 2.5);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(now + idx * 0.15);
    osc.stop(now + idx * 0.15 + 2.6);
  });
}

// Processional Band Melody Synthesizer (Himno HSMN / Marchas de Bandas)
let activeMelodyTimeouts: number[] = [];
let activeGainNodes: GainNode[] = [];
let globalBandAudioCtx: AudioContext | null = null;

export function stopCurrentMelody() {
  activeMelodyTimeouts.forEach(t => clearTimeout(t));
  activeMelodyTimeouts = [];
  try {
    activeGainNodes.forEach(g => {
      try {
        g.gain.setValueAtTime(0, g.context.currentTime);
      } catch {}
    });
  } catch {}
  activeGainNodes = [];
  if (globalBandAudioCtx && globalBandAudioCtx.state !== 'closed') {
    try {
      globalBandAudioCtx.close();
    } catch {}
    globalBandAudioCtx = null;
  }
}

// Track melodies with frequencies, durations and harmonic depth
const TRACK_MELODIES: Record<string, { freq: number; dur: number; harm?: number }[]> = {
  "himno-hsmn": [
    { freq: 349.23, dur: 500, harm: 261.63 }, // F4 - Se
    { freq: 440.00, dur: 500, harm: 349.23 }, // A4 - ñor
    { freq: 523.25, dur: 700, harm: 392.00 }, // C5 - de
    { freq: 523.25, dur: 400, harm: 349.23 }, // C5 - los
    { freq: 587.33, dur: 500, harm: 440.00 }, // D5 - Mi
    { freq: 523.25, dur: 600, harm: 392.00 }, // C5 - la
    { freq: 466.16, dur: 450, harm: 349.23 }, // Bb4 - gros
    { freq: 440.00, dur: 600, harm: 349.23 }, // A4 - a
    { freq: 392.00, dur: 500, harm: 293.66 }, // G4 - Ti
    { freq: 349.23, dur: 600, harm: 261.63 }, // F4 - ve
    { freq: 392.00, dur: 500, harm: 293.66 }, // G4 - ni
    { freq: 440.00, dur: 700, harm: 349.23 }, // A4 - mos
    { freq: 349.23, dur: 1100, harm: 261.63 } // F4 - en procesión
  ],
  "marcha-senor-milagros-libornio": [
    // Marcha regular de Libornio - Compás triunfal
    { freq: 392.00, dur: 350, harm: 261.63 }, // G4
    { freq: 523.25, dur: 350, harm: 329.63 }, // C5
    { freq: 659.25, dur: 500, harm: 392.00 }, // E5
    { freq: 587.33, dur: 350, harm: 349.23 }, // D5
    { freq: 523.25, dur: 350, harm: 329.63 }, // C5
    { freq: 493.88, dur: 400, harm: 293.66 }, // B4
    { freq: 523.25, dur: 600, harm: 329.63 }, // C5
    { freq: 587.33, dur: 400, harm: 392.00 }, // D5
    { freq: 659.25, dur: 700, harm: 523.25 }, // E5
    { freq: 523.25, dur: 900, harm: 261.63 }  // C5
  ],
  "marcha-senor-de-los-milagros": [
    { freq: 392.00, dur: 350, harm: 261.63 },
    { freq: 523.25, dur: 350, harm: 329.63 },
    { freq: 659.25, dur: 500, harm: 392.00 },
    { freq: 587.33, dur: 350, harm: 349.23 },
    { freq: 523.25, dur: 350, harm: 329.63 },
    { freq: 493.88, dur: 400, harm: 293.66 },
    { freq: 523.25, dur: 600, harm: 329.63 },
    { freq: 587.33, dur: 400, harm: 392.00 },
    { freq: 659.25, dur: 700, harm: 523.25 },
    { freq: 523.25, dur: 900, harm: 261.63 }
  ],
  "marcha-padre-mio": [
    // Marcha Padre Mío - Manuel León Alva (Compás solemne pausado)
    { freq: 261.63, dur: 600, harm: 196.00 }, // C4
    { freq: 311.13, dur: 600, harm: 261.63 }, // Eb4
    { freq: 392.00, dur: 800, harm: 311.13 }, // G4
    { freq: 349.23, dur: 500, harm: 261.63 }, // F4
    { freq: 311.13, dur: 600, harm: 261.63 }, // Eb4
    { freq: 293.66, dur: 700, harm: 220.00 }, // D4
    { freq: 261.63, dur: 1200, harm: 196.00 } // C4 (Paso solemne de bombo)
  ],
  "Padre-mio": [
    { freq: 261.63, dur: 600, harm: 196.00 },
    { freq: 311.13, dur: 600, harm: 261.63 },
    { freq: 392.00, dur: 800, harm: 311.13 },
    { freq: 349.23, dur: 500, harm: 261.63 },
    { freq: 311.13, dur: 600, harm: 261.63 },
    { freq: 293.66, dur: 700, harm: 220.00 },
    { freq: 261.63, dur: 1200, harm: 196.00 }
  ],
  "marcha-senor-de-luren": [
    // Marcha Fúnebre al Señor de Luren
    { freq: 293.66, dur: 700, harm: 220.00 }, // D4
    { freq: 349.23, dur: 600, harm: 261.63 }, // F4
    { freq: 440.00, dur: 800, harm: 349.23 }, // A4
    { freq: 415.30, dur: 600, harm: 329.63 }, // G#4
    { freq: 440.00, dur: 700, harm: 349.23 }, // A4
    { freq: 349.23, dur: 600, harm: 261.63 }, // F4
    { freq: 293.66, dur: 1200, harm: 220.00 } // D4
  ],
  "marcha-la-guardada": [
    // La Guardada - Beltrán
    { freq: 233.08, dur: 800, harm: 174.61 }, // Bb3
    { freq: 277.18, dur: 700, harm: 233.08 }, // Db4
    { freq: 349.23, dur: 900, harm: 277.18 }, // F4
    { freq: 329.63, dur: 600, harm: 261.63 }, // E4
    { freq: 349.23, dur: 800, harm: 277.18 }, // F4
    { freq: 277.18, dur: 700, harm: 233.08 }, // Db4
    { freq: 233.08, dur: 1400, harm: 174.61 } // Bb3
  ],
  "marcha-patron-nazarenas": [
    // Patrón de las Nazarenas
    { freq: 349.23, dur: 400, harm: 261.63 }, // F4
    { freq: 440.00, dur: 400, harm: 349.23 }, // A4
    { freq: 523.25, dur: 500, harm: 440.00 }, // C5
    { freq: 587.33, dur: 400, harm: 466.16 }, // D5
    { freq: 523.25, dur: 600, harm: 440.00 }, // C5
    { freq: 440.00, dur: 400, harm: 349.23 }, // A4
    { freq: 349.23, dur: 800, harm: 261.63 }  // F4
  ],
  "canto-cantoras-sahumadoras": [
    // Cantos Litúrgicos
    { freq: 440.00, dur: 600, harm: 329.63 }, // A4
    { freq: 493.88, dur: 600, harm: 370.00 }, // B4
    { freq: 523.25, dur: 800, harm: 392.00 }, // C5
    { freq: 493.88, dur: 500, harm: 370.00 }, // B4
    { freq: 440.00, dur: 700, harm: 329.63 }, // A4
    { freq: 392.00, dur: 600, harm: 293.66 }, // G4
    { freq: 440.00, dur: 1100, harm: 329.63 } // A4
  ]
};

export function playTrackSynthesizer(
  trackId: string,
  volume: number = 0.8,
  onNoteChange?: (noteIndex: number, totalNotes: number) => void,
  onComplete?: () => void
) {
  stopCurrentMelody();
  const audioCtx = getAudioContext();
  if (!audioCtx) return;
  globalBandAudioCtx = audioCtx;

  const notes = TRACK_MELODIES[trackId] || TRACK_MELODIES['himno-hsmn'];
  let cumulativeTime = 0;

  // Master Gain for volume
  const masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(volume * 0.25, audioCtx.currentTime);
  masterGain.connect(audioCtx.destination);
  activeGainNodes.push(masterGain);

  notes.forEach((note, index) => {
    const timeout = window.setTimeout(() => {
      if (onNoteChange) onNoteChange(index, notes.length);

      const now = audioCtx.currentTime;

      // 1. Lead Brass / Trumpet Oscillator
      const oscLead = audioCtx.createOscillator();
      const gainLead = audioCtx.createGain();
      oscLead.type = 'sawtooth';
      oscLead.frequency.setValueAtTime(note.freq, now);

      gainLead.gain.setValueAtTime(0.01, now);
      gainLead.gain.linearRampToValueAtTime(0.3, now + 0.04);
      gainLead.gain.exponentialRampToValueAtTime(0.001, now + (note.dur / 1000) * 0.95);

      oscLead.connect(gainLead);
      gainLead.connect(masterGain);

      // 2. Harmony Brass (French Horn / Euphonium)
      if (note.harm) {
        const oscHarm = audioCtx.createOscillator();
        const gainHarm = audioCtx.createGain();
        oscHarm.type = 'triangle';
        oscHarm.frequency.setValueAtTime(note.harm, now);

        gainHarm.gain.setValueAtTime(0.01, now);
        gainHarm.gain.linearRampToValueAtTime(0.18, now + 0.05);
        gainHarm.gain.exponentialRampToValueAtTime(0.001, now + (note.dur / 1000) * 0.92);

        oscHarm.connect(gainHarm);
        gainHarm.connect(masterGain);

        oscHarm.start(now);
        oscHarm.stop(now + note.dur / 1000);
      }

      // 3. Processional Bass Drum / Bombo on quarter beats
      const oscBass = audioCtx.createOscillator();
      const gainBass = audioCtx.createGain();
      oscBass.type = 'sine';
      oscBass.frequency.setValueAtTime(80, now);
      oscBass.frequency.exponentialRampToValueAtTime(35, now + 0.2);

      gainBass.gain.setValueAtTime(0.2, now);
      gainBass.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      oscBass.connect(gainBass);
      gainBass.connect(masterGain);

      oscBass.start(now);
      oscBass.stop(now + 0.3);

      oscLead.start(now);
      oscLead.stop(now + note.dur / 1000);

      // Final note complete callback
      if (index === notes.length - 1 && onComplete) {
        const endTimeout = window.setTimeout(onComplete, note.dur + 200);
        activeMelodyTimeouts.push(endTimeout);
      }
    }, cumulativeTime);

    activeMelodyTimeouts.push(timeout);
    cumulativeTime += note.dur;
  });
}

export function playAnthemMelody(onNoteChange?: (noteIndex: number) => void) {
  playTrackSynthesizer('himno-hsmn', 0.8, onNoteChange);
}

export function speakText(text: string) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }
}

export function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

