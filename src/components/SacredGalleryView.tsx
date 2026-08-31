import React, { useState } from 'react';
import { 
  Sparkles, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Info, 
  BookOpen, 
  Eye, 
  Volume2, 
  VolumeX,
  Flame,
  Award
} from 'lucide-react';
import { SACRED_IMAGES, ICONOGRAPHY_GUIDE } from '../data/galleryData';
import { SacredImage } from '../types';
import { playMartillazoSound, speakText, stopSpeaking } from '../utils/sound';

export const SacredGalleryView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeModalImage, setActiveModalImage] = useState<SacredImage | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const filteredImages = selectedCategory === 'todos'
    ? SACRED_IMAGES
    : SACRED_IMAGES.filter(img => img.category === selectedCategory);

  const handleOpenModal = (img: SacredImage) => {
    setActiveModalImage(img);
    stopSpeaking();
    setIsSpeaking(false);
  };

  const handleCloseModal = () => {
    setActiveModalImage(null);
    stopSpeaking();
    setIsSpeaking(false);
  };

  const handlePrevImage = () => {
    if (!activeModalImage) return;
    const currentIndex = SACRED_IMAGES.findIndex(img => img.id === activeModalImage.id);
    const prevIndex = (currentIndex - 1 + SACRED_IMAGES.length) % SACRED_IMAGES.length;
    setActiveModalImage(SACRED_IMAGES[prevIndex]);
    stopSpeaking();
    setIsSpeaking(false);
  };

  const handleNextImage = () => {
    if (!activeModalImage) return;
    const currentIndex = SACRED_IMAGES.findIndex(img => img.id === activeModalImage.id);
    const nextIndex = (currentIndex + 1) % SACRED_IMAGES.length;
    setActiveModalImage(SACRED_IMAGES[nextIndex]);
    stopSpeaking();
    setIsSpeaking(false);
  };

  const toggleNarrator = (text: string) => {
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      speakText(text);
      setIsSpeaking(true);
    }
  };

  const handleImageError = (id: string) => {
    setImageErrorMap(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="space-y-10">
      
      {/* Devotional Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1f0b2a] via-[#15071e] to-[#0d0413] border border-[#3d1a4a] p-6 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9b72cf]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3d1a4a]/80 border border-[#9b72cf]/40 text-[#d8b4fe] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#d8b4fe]" />
              <span>Galería Sagrada e Iconografía Nazarena</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif italic text-[#f3e8ff] tracking-wide leading-tight">
              El Señor de los Milagros <br className="hidden sm:inline" />
              <span className="not-italic font-sans font-extrabold text-[#d8b4fe]">
                Patrón Jurado y Protector de la Once
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#e5e1e6]/90 leading-relaxed font-normal max-w-2xl">
              Explora las imágenes sagradas del Cristo de Pachacamilla, las monumentales andas de plata, el Insigne Santuario de Las Nazarenas y el fervor de las cuadrillas de cargadores de la HSMN.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={playMartillazoSound}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5d2a7a] hover:bg-[#7b3a9e] text-[#f3e8ff] text-xs font-bold uppercase tracking-wider border border-[#9b72cf] shadow-[0_0_15px_rgba(155,114,207,0.3)] transition-all active:scale-95"
              >
                <Volume2 className="w-4 h-4" />
                <span>Toque de Honor</span>
              </button>

              <div className="text-xs text-[#a78bfa] flex items-center gap-2 font-medium">
                <Flame className="w-4 h-4 text-[#d8b4fe]" />
                <span>{SACRED_IMAGES.length} Estampas y Fotografías Históricas</span>
              </div>
            </div>
          </div>

          {/* Quick Highlight Miniature */}
          <div className="lg:col-span-4 flex justify-center">
            <div 
              onClick={() => handleOpenModal(SACRED_IMAGES[0])}
              className="group cursor-pointer relative rounded-2xl overflow-hidden border-2 border-[#9b72cf]/60 shadow-[0_0_25px_rgba(155,114,207,0.3)] hover:shadow-[0_0_35px_rgba(155,114,207,0.5)] transition-all duration-300 transform hover:-translate-y-1 w-full max-w-xs"
            >
              <div className="aspect-[4/3] bg-[#120816] relative overflow-hidden">
                {!imageErrorMap['img-lienzo-sagrado'] ? (
                  <img
                    src={SACRED_IMAGES[0].thumbnailUrl || SACRED_IMAGES[0].imageUrl}
                    alt={SACRED_IMAGES[0].title}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError('img-lienzo-sagrado')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#250d33]">
                    <Sparkles className="w-8 h-8 text-[#d8b4fe] mb-2" />
                    <span className="text-xs font-serif text-[#f3e8ff]">Señor de los Milagros</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120816] via-transparent to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-[#f3e8ff] font-medium">
                  <span className="truncate">El Sagrado Lienzo</span>
                  <span className="flex items-center gap-1 text-[#d8b4fe] bg-[#120816]/80 px-2 py-0.5 rounded text-[10px]">
                    <Eye className="w-3 h-3" /> Ver Detalle
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#3d1a4a]">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'todos', label: 'Todas las Obras' },
            { id: 'lienzo', label: 'Sagrado Lienzo & Muro' },
            { id: 'sahumadoras', label: 'Hermanas Sahumadoras' },
            { id: 'cantoras', label: 'Hermanas Cantoras' },
            { id: 'cargadores', label: 'Hermanos Cargadores' },
            { id: 'procesion', label: 'Procesión & Mar Morado' },
            { id: 'santuario', label: 'Santuario de Nazarenas' },
            { id: 'simbolos', label: 'Alfombras & Símbolos' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#5d2a7a] text-[#f3e8ff] border border-[#9b72cf] shadow-[0_0_10px_rgba(155,114,207,0.3)]'
                  : 'bg-[#1a0a24] text-[#a78bfa] hover:text-[#f3e8ff] hover:bg-[#2a1336] border border-[#3d1a4a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="text-xs text-[#9b72cf] font-serif italic">
          Mostrando {filteredImages.length} de {SACRED_IMAGES.length} obras
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img) => {
          const hasError = imageErrorMap[img.id];

          return (
            <div
              key={img.id}
              className="group bg-[#1a0a24] rounded-2xl border border-[#3d1a4a] hover:border-[#9b72cf] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(155,114,207,0.2)]"
            >
              {/* Image Container */}
              <div 
                onClick={() => handleOpenModal(img)}
                className="cursor-pointer relative aspect-[16/10] bg-[#120816] overflow-hidden border-b border-[#3d1a4a]"
              >
                {!hasError ? (
                  <img
                    src={img.thumbnailUrl || img.imageUrl}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(img.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#250d33]">
                    <Sparkles className="w-10 h-10 text-[#d8b4fe] mb-2" />
                    <span className="text-sm font-serif italic text-[#f3e8ff]">{img.title}</span>
                    <span className="text-[10px] text-[#a78bfa] mt-1">{img.yearOrEra}</span>
                  </div>
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a24] via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#120816]/90 border border-[#9b72cf]/40 text-[#d8b4fe] text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm truncate">
                    {img.yearOrEra}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(img);
                    }}
                    className="w-8 h-8 rounded-lg bg-[#120816]/90 border border-[#9b72cf]/40 text-[#f3e8ff] flex-shrink-0 flex items-center justify-center hover:bg-[#5d2a7a] transition-colors shadow"
                    title="Ampliar imagen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block px-2 py-0.5 rounded bg-black/75 text-[10px] text-[#f3e8ff] font-mono mb-1 truncate max-w-full border border-white/10">
                    {img.fileName}
                  </span>
                  <p className="text-[11px] font-medium text-[#d8b4fe] truncate">
                    {img.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-serif italic text-[#f3e8ff] group-hover:text-[#d8b4fe] transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-[#e5e1e6]/80 leading-relaxed line-clamp-3">
                    {img.historicalDescription}
                  </p>
                </div>

                {/* Iconographic preview tags */}
                <div className="space-y-3 pt-2 border-t border-[#3d1a4a]/70">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-[#9b72cf] flex items-center gap-1.5">
                    <Info className="w-3 h-3" />
                    <span>Detalles y Simbología</span>
                  </div>

                  <ul className="space-y-1 text-[11px] text-[#a78bfa]">
                    {img.iconographicDetails.slice(0, 2).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#d8b4fe] font-bold">•</span>
                        <span className="line-clamp-1">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {img.devotionalQuote && (
                    <p className="text-[11px] font-serif italic text-[#d8b4fe]/90 bg-[#120816] p-2.5 rounded-lg border border-[#3d1a4a]">
                      {img.devotionalQuote}
                    </p>
                  )}
                </div>

                {/* Card Footer Button */}
                <button
                  onClick={() => handleOpenModal(img)}
                  className="w-full py-2 rounded-xl bg-[#250d33] hover:bg-[#5d2a7a] text-[#f3e8ff] border border-[#3d1a4a] hover:border-[#9b72cf] text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5 text-[#9b72cf]" />
                  <span>Ver en Alta Resolución</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Iconography Detailed Theological Guide */}
      <div className="bg-[#1a0a24] rounded-3xl p-6 sm:p-8 border border-[#3d1a4a] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#3d1a4a]">
          <div>
            <div className="inline-flex items-center gap-2 text-[#9b72cf] text-xs font-bold uppercase tracking-widest mb-1">
              <Award className="w-4 h-4" />
              <span>Catequesis e Iconografía</span>
            </div>
            <h3 className="text-2xl font-serif italic text-[#f3e8ff]">
              Guía de los 7 Elementos Sagrados del Lienzo de Pachacamilla
            </h3>
          </div>
          <p className="text-xs text-[#a78bfa] max-w-sm">
            Fundamentos esenciales para los aspirantes y cargadores de la Cuadrilla 11.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ICONOGRAPHY_GUIDE.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#120816] p-4 rounded-2xl border border-[#3d1a4a] hover:border-[#9b72cf] transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-serif font-bold text-[#f3e8ff]">
                  {item.element}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#5d2a7a]/40 border border-[#9b72cf]/40 text-[#d8b4fe] text-[9px] font-bold uppercase">
                  {item.badge}
                </span>
              </div>
              <p className="text-xs text-[#e5e1e6]/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen High-Resolution Lightbox Modal */}
      {activeModalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div 
            className="relative w-full max-w-5xl bg-[#160b1d] rounded-3xl border border-[#9b72cf]/50 shadow-[0_0_50px_rgba(155,114,207,0.3)] overflow-hidden max-h-[90vh] flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#120816]/90 hover:bg-[#5d2a7a] border border-[#9b72cf] text-[#f3e8ff] flex items-center justify-center transition-colors shadow-lg"
              title="Cerrar visor"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Main: Image Display with Nav Buttons */}
            <div className="relative lg:w-3/5 bg-[#0a050d] flex items-center justify-center p-4 min-h-[320px] lg:min-h-[500px]">
              <img
                src={activeModalImage.imageUrl}
                alt={activeModalImage.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#120816]/80 hover:bg-[#5d2a7a] border border-[#9b72cf]/50 text-[#f3e8ff] flex items-center justify-center transition-all"
                title="Imagen anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#120816]/80 hover:bg-[#5d2a7a] border border-[#9b72cf]/50 text-[#f3e8ff] flex items-center justify-center transition-all"
                title="Imagen siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Right: Detailed Context and Iconography */}
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-[85vh] space-y-6">
              
              <div className="space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#5d2a7a]/50 border border-[#9b72cf]/40 text-[#d8b4fe] text-[10px] font-bold uppercase tracking-wider inline-block">
                      {activeModalImage.yearOrEra}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#120816] border border-[#3d1a4a] text-[#f3e8ff] font-mono text-[10px] inline-block">
                      {activeModalImage.fileName}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif italic text-[#f3e8ff]">
                    {activeModalImage.title}
                  </h3>
                  <p className="text-xs text-[#a78bfa] mt-1 font-medium">
                    {activeModalImage.subtitle}
                  </p>
                  <p className="text-[11px] text-[#9b72cf] mt-0.5">
                    Fuente / Autoría: {activeModalImage.authorOrSource}
                  </p>
                </div>

                <div className="p-4 bg-[#120816] rounded-2xl border border-[#3d1a4a] text-xs text-[#e5e1e6] leading-relaxed">
                  {activeModalImage.historicalDescription}
                </div>

                {/* Iconographic Points */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#d8b4fe] block">
                    Detalles Sagrados del Elemento:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#a78bfa]">
                    {activeModalImage.iconographicDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#9b72cf] font-bold mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {activeModalImage.devotionalQuote && (
                  <div className="p-3 bg-[#250d33] rounded-xl border border-[#9b72cf]/40 text-xs font-serif italic text-[#f3e8ff]">
                    {activeModalImage.devotionalQuote}
                  </div>
                )}
              </div>

              {/* Action Buttons in Modal */}
              <div className="pt-4 border-t border-[#3d1a4a] flex items-center gap-3">
                <button
                  onClick={() => toggleNarrator(`${activeModalImage.title}. ${activeModalImage.historicalDescription}`)}
                  className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isSpeaking 
                      ? 'bg-amber-600 border-amber-400 text-white' 
                      : 'bg-[#5d2a7a] hover:bg-[#7b3a9e] border-[#9b72cf] text-[#f3e8ff]'
                  }`}
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span>{isSpeaking ? 'Detener Voz' : 'Escuchar Reseña'}</span>
                </button>

                <button
                  onClick={playMartillazoSound}
                  className="py-2.5 px-4 rounded-xl bg-[#120816] hover:bg-[#2a1336] border border-[#3d1a4a] hover:border-[#9b72cf] text-[#d8b4fe] text-xs font-bold transition-all"
                  title="Toque de martillo"
                >
                  Martillo
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
