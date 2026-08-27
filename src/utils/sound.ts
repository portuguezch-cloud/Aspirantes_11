// Web Audio API sound generator for authentic immersion without external assets
export function playMartillazoSound() {
  try {
    const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    
    // Create dual metallic resonance (mimicking silver hammer striking silver ancla)
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 metallic
    osc1.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.35);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1760, audioCtx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.25);

    gainNode.gain.setValueAtTime(0.4, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(audioCtx.currentTime + 0.6);
    osc2.stop(audioCtx.currentTime + 0.6);
  } catch {
    // Graceful fallback if audio context blocked
  }
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
