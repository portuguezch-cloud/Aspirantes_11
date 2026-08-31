import React, { useState, useEffect } from 'react';
import { Sparkles, Flame, Heart, BookOpen, Send, CheckCircle, Volume2, ShieldCheck, Cross } from 'lucide-react';
import { DEVOTIONAL_PRAYERS, INITIAL_INTENTIONS } from '../data/liturgicalData';
import { PrayerIntention, DevotionalPrayer } from '../types';
import { speakText, playCampanarioSound } from '../utils/sound';

export const DevocionarioView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedPrayer, setSelectedPrayer] = useState<DevotionalPrayer>(DEVOTIONAL_PRAYERS[0]);
  const [intentions, setIntentions] = useState<PrayerIntention[]>(() => {
    try {
      const saved = localStorage.getItem('c11_prayer_intentions');
      return saved ? JSON.parse(saved) : INITIAL_INTENTIONS;
    } catch {
      return INITIAL_INTENTIONS;
    }
  });

  const [litCandles, setLitCandles] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('c11_lit_candles');
      return saved ? JSON.parse(saved) : ['int-1', 'int-3'];
    } catch {
      return ['int-1', 'int-3'];
    }
  });

  // New Intention Form State
  const [nameInput, setNameInput] = useState('');
  const [sectorInput, setSectorInput] = useState('');
  const [intentionInput, setIntentionInput] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('c11_prayer_intentions', JSON.stringify(intentions));
    } catch {
      // ignore
    }
  }, [intentions]);

  useEffect(() => {
    try {
      localStorage.setItem('c11_lit_candles', JSON.stringify(litCandles));
    } catch {
      // ignore
    }
  }, [litCandles]);

  const handleToggleCandle = (intentionId: string) => {
    playCampanarioSound();
    setLitCandles(prev => {
      const isAlreadyLit = prev.includes(intentionId);
      const nextLit = isAlreadyLit ? prev.filter(id => id !== intentionId) : [...prev, intentionId];
      
      setIntentions(currIntentions =>
        currIntentions.map(item => {
          if (item.id === intentionId) {
            return {
              ...item,
              candlesCount: isAlreadyLit ? Math.max(1, item.candlesCount - 1) : item.candlesCount + 1
            };
          }
          return item;
        })
      );

      return nextLit;
    });
  };

  const handleAddIntention = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim() || !intentionInput.trim()) return;

    playCampanarioSound();

    const newInt: PrayerIntention = {
      id: `custom-int-${Date.now()}`,
      name: nameInput.trim(),
      sectorOrTitle: sectorInput.trim() || 'Hermano / Devoto Nazareno',
      intention: intentionInput.trim(),
      date: 'Hoy',
      candlesCount: 1,
      isCustom: true
    };

    setIntentions(prev => [newInt, ...prev]);
    setLitCandles(prev => [...prev, newInt.id]);

    setNameInput('');
    setSectorInput('');
    setIntentionInput('');
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 4000);
  };

  const filteredPrayers = activeCategory === 'todos'
    ? DEVOTIONAL_PRAYERS
    : DEVOTIONAL_PRAYERS.filter(p => p.category === activeCategory);

  const totalCandles = intentions.reduce((acc, curr) => acc + curr.candlesCount, 0);

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Banner / Header */}
      <section className="bg-gradient-to-br from-[#1a0a24] via-[#160b1d] to-[#0f0415] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6] relative overflow-hidden">
        {/* Foto de fondo devocional de Sahumadoras e Incienso */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img 
            src="https://www.infobae.com/resizer/v2/V2Q6CDDRBVBVTBJ4DADROKXV6M.jpg?auth=5d7f1442bc410371d3c5e5ef96fdbe9ddc851486b952fb0eac9179320f5c5331&smart=true&width=992&height=1494&quality=85"
            alt="Sahumadoras e Incienso"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a24] via-[#160b1d]/85 to-[#0f0415]/75" />
        </div>

        <div className="absolute top-0 right-0 w-80 h-80 bg-[#5d2a7a]/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a1336] border border-[#3d1a4a] text-[#9b72cf] text-[10px] uppercase tracking-[0.2em] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#d8b4fe]" />
            <span>Espiritualidad y Liturgia Nazarena</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif italic text-[#f3e8ff] tracking-wide">
            Devocionario Oficial y Plegarias de la Once
          </h2>

          <p className="text-sm text-[#a78bfa] leading-relaxed">
            El carguío de las Sagradas Andas es una consagración de vida. Conoce las oraciones tradicionales de la Hermandad, la plegaria del cargador antes del relevo y eleva tus intenciones encendiendo un cirio votivo ante el Señor de los Milagros.
          </p>

          {/* Cirios Counter Pill */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-2 bg-[#120816] px-4 py-2 rounded-xl border border-[#3d1a4a]">
              <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-[#d8b4fe]">
                <strong className="text-[#f3e8ff]">{totalCandles}</strong> Cirios encendidos por los hermanos
              </span>
            </div>

            <button
              onClick={playCampanarioSound}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#2a1336] hover:bg-[#3d1a4a] border border-[#3d1a4a] text-xs text-[#f3e8ff] transition-all"
            >
              <Volume2 className="w-3.5 h-3.5 text-[#9b72cf]" />
              <span>Toque de Campanario</span>
            </button>
          </div>
        </div>
      </section>

      {/* Devocionario Interactivo (Selector y Lectura de Oraciones) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Prayer list & Category filters */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-2xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#3d1a4a]">
              <h3 className="text-sm font-serif italic font-bold text-[#f3e8ff] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#9b72cf]" />
                <span>Plegarias del Devocionario</span>
              </h3>
              <span className="text-[10px] text-[#a78bfa] uppercase font-bold tracking-wider">
                {DEVOTIONAL_PRAYERS.length} Textos
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 pb-1">
              {[
                { id: 'todos', label: 'Todas' },
                { id: 'cargador', label: 'Cargador' },
                { id: 'oficial', label: 'Oficial' },
                { id: 'maria', label: 'Virgen de la Nube' },
                { id: 'novena', label: 'Triduo' },
                { id: 'rosario', label: 'Rosario' },
                { id: 'difuntos', label: 'Difuntos' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-[10px] px-2.5 py-1 rounded-lg uppercase tracking-wider font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf]'
                      : 'bg-[#120816] text-[#a78bfa] hover:text-[#f3e8ff] border border-[#3d1a4a]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Prayer Items */}
            <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1 custom-nav-scrollbar">
              {filteredPrayers.map((prayer) => {
                const isSelected = selectedPrayer.id === prayer.id;
                return (
                  <div
                    key={prayer.id}
                    id={`prayer-tab-${prayer.id}`}
                    onClick={() => setSelectedPrayer(prayer)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#2a1336] border-[#9b72cf] shadow-[0_0_12px_rgba(155,114,207,0.3)]'
                        : 'bg-[#120816] border-[#3d1a4a] hover:border-[#9b72cf]/60 hover:bg-[#1a0a24]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className={`text-xs font-serif italic font-bold leading-tight ${isSelected ? 'text-[#f3e8ff]' : 'text-[#d8b4fe]'}`}>
                        {prayer.title}
                      </h4>
                      <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#160b1d] text-[#9b72cf] border border-[#3d1a4a] flex-shrink-0">
                        {prayer.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#a78bfa] mt-1 line-clamp-1">
                      {prayer.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Col: Selected Prayer Content & Audio */}
        <div className="lg:col-span-7">
          <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 relative flex flex-col justify-between h-full">
            <div className="space-y-4">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#3d1a4a] pb-4">
                <div>
                  <span className="text-[10px] text-[#9b72cf] uppercase font-mono tracking-widest block">
                    {selectedPrayer.latinOrTradition}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif italic text-[#f3e8ff] mt-1">
                    {selectedPrayer.title}
                  </h3>
                  <p className="text-xs text-[#a78bfa] italic mt-0.5">
                    {selectedPrayer.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => speakText(selectedPrayer.text)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2a1336] hover:bg-[#5d2a7a] border border-[#9b72cf] text-xs text-[#f3e8ff] transition-all self-start sm:self-auto flex-shrink-0"
                  title="Escuchar locución devocional"
                >
                  <Volume2 className="w-3.5 h-3.5 text-[#d8b4fe]" />
                  <span>Escuchar</span>
                </button>
              </div>

              {/* Prayer Text */}
              <div className="bg-[#120816] p-5 sm:p-6 rounded-2xl border border-[#3d1a4a] text-[#e5e1e6] font-serif text-sm sm:text-base leading-relaxed whitespace-pre-line shadow-inner">
                {selectedPrayer.text}
              </div>

              {/* Context Footnote */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-[#1a0a24] rounded-xl border border-[#3d1a4a]">
                  <span className="text-[10px] uppercase font-bold text-[#9b72cf] block tracking-wider mb-1">
                    Momento Litúrgico:
                  </span>
                  <p className="text-[#a78bfa] text-[11px] leading-relaxed">
                    {selectedPrayer.momentoLiturgico}
                  </p>
                </div>

                <div className="p-3 bg-[#1a0a24] rounded-xl border border-[#3d1a4a]">
                  <span className="text-[10px] uppercase font-bold text-[#9b72cf] block tracking-wider mb-1">
                    Reflexión Fraterna:
                  </span>
                  <p className="text-[#a78bfa] text-[11px] leading-relaxed">
                    {selectedPrayer.reflection}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* Muro de Intenciones y Cirios Votivos */}
      <section className="bg-[#160b1d] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3d1a4a] pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#2a1336] text-[#d8b4fe] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 border border-[#3d1a4a]">
              <Flame className="w-3 h-3 text-amber-400" />
              <span>Oración Comunitaria</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif italic text-[#f3e8ff]">
              Muro de Intenciones y Cirios Votivos
            </h3>
          </div>
          <p className="text-xs text-[#a78bfa] max-w-md">
            Deja tu súplica, agradecimiento o intención al Señor de los Milagros. Haz clic en el cirio de cualquier hermano para acompañarlo en oración.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form to leave intention */}
          <div className="lg:col-span-5 bg-[#120816] p-6 rounded-2xl border border-[#3d1a4a] space-y-4">
            <h4 className="text-sm font-serif italic font-bold text-[#f3e8ff] flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-400" />
              <span>Registrar Petición de Oración</span>
            </h4>

            {formSuccess && (
              <div className="p-3 bg-[#2a1336] border border-[#9b72cf] rounded-xl text-xs text-[#d8b4fe] flex items-center gap-2 animate-fadeIn">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>¡Tu intención ha sido registrada y tu cirio encendido ante el Señor!</span>
              </div>
            )}

            <form onSubmit={handleAddIntention} className="space-y-3">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#a78bfa] mb-1">
                  Nombre del Hermano o Devoto *
                </label>
                <input
                  type="text"
                  required
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="Ej: Hno. Carlos Portocarrero"
                  className="w-full bg-[#1a0a24] border border-[#3d1a4a] rounded-lg px-3 py-2 text-xs text-[#f3e8ff] placeholder-[#9b72cf]/40 focus:outline-none focus:border-[#9b72cf]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#a78bfa] mb-1">
                  Sector, Cuadrilla o Familia
                </label>
                <input
                  type="text"
                  value={sectorInput}
                  onChange={(e) => setSectorInput(e.target.value)}
                  placeholder="Ej: Primer Sector / Familia Nazarena"
                  className="w-full bg-[#1a0a24] border border-[#3d1a4a] rounded-lg px-3 py-2 text-xs text-[#f3e8ff] placeholder-[#9b72cf]/40 focus:outline-none focus:border-[#9b72cf]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#a78bfa] mb-1">
                  Intención o Plegaria *
                </label>
                <textarea
                  required
                  rows={3}
                  value={intentionInput}
                  onChange={(e) => setIntentionInput(e.target.value)}
                  placeholder="Escribe tu intención por la salud, la familia o en acción de gracias..."
                  className="w-full bg-[#1a0a24] border border-[#3d1a4a] rounded-lg px-3 py-2 text-xs text-[#f3e8ff] placeholder-[#9b72cf]/40 focus:outline-none focus:border-[#9b72cf] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#5d2a7a] hover:bg-[#7b3a9e] text-[#f3e8ff] font-semibold text-xs uppercase tracking-wider border border-[#9b72cf] shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Encender Cirio y Publicar Intención</span>
              </button>
            </form>
          </div>

          {/* Interactive Intention Wall Cards */}
          <div className="lg:col-span-7 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[520px] overflow-y-auto pr-1 custom-nav-scrollbar">
              {intentions.map((item) => {
                const isLitByMe = litCandles.includes(item.id);

                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 relative ${
                      isLitByMe
                        ? 'bg-[#1a0a24] border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                        : 'bg-[#120816] border-[#3d1a4a] hover:border-[#9b72cf]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-bold text-[#f3e8ff] font-serif italic line-clamp-1">
                          {item.name}
                        </span>
                        <span className="text-[9px] text-[#9b72cf] font-mono flex-shrink-0">
                          {item.date}
                        </span>
                      </div>
                      
                      <span className="text-[10px] text-[#d8b4fe] bg-[#2a1336] px-2 py-0.5 rounded border border-[#3d1a4a] inline-block mb-2 font-mono">
                        {item.sectorOrTitle}
                      </span>

                      <p className="text-xs text-[#e5e1e6] leading-relaxed italic bg-[#160b1d] p-2.5 rounded-lg border border-[#3d1a4a]/50">
                        "{item.intention}"
                      </p>
                    </div>

                    {/* Interactive Candle Button */}
                    <div className="pt-2 border-t border-[#3d1a4a] flex items-center justify-between">
                      <button
                        onClick={() => handleToggleCandle(item.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                          isLitByMe
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-[0_0_8px_rgba(245,158,11,0.3)]'
                            : 'bg-[#2a1336] text-[#a78bfa] hover:text-[#f3e8ff] border border-[#3d1a4a]'
                        }`}
                        title="Haz clic para encender un cirio por esta intención"
                      >
                        <Flame className={`w-3.5 h-3.5 ${isLitByMe ? 'text-amber-400 fill-amber-400 animate-bounce' : 'text-[#9b72cf]'}`} />
                        <span>{item.candlesCount} {item.candlesCount === 1 ? 'Cirio' : 'Cirios'}</span>
                      </button>

                      <span className="text-[10px] text-[#9b72cf] italic">
                        {isLitByMe ? '¡Oración unida!' : 'Unirse en oración'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};
