import React from 'react';
import { Heart, Sparkles, Award, Users } from 'lucide-react';
import { HISTORICAL_FIGURES_IDENTITY } from '../data/cuadrillaData';

export const IdentityView: React.FC = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Top Banner: Rumbo al Centenario */}
      <div className="bg-[#1a0a24] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6] relative overflow-hidden">
        <div className="max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a1336] text-[#d8b4fe] text-[10px] font-bold uppercase tracking-[0.2em] mb-3 border border-[#3d1a4a]">
            <Sparkles className="w-3.5 h-3.5 text-[#9b72cf]" />
            <span>Hito Histórico Institucional</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif italic tracking-wide text-[#f3e8ff]">
            Rumbo al Centenario
          </h2>
          <p className="text-[#d8b4fe] text-base sm:text-xl font-serif italic mt-3 leading-relaxed">
            "En 2025 cumplimos 90 años de fe, unión y hermandad. Con el mismo amor de nuestros fundadores, seguimos firmes en el camino hacia nuestro centenario: 2035."
          </p>

          {/* Centenary Progress Timeline */}
          <div className="mt-8 pt-6 border-t border-[#3d1a4a] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
            <div className="bg-[#120816] rounded-2xl p-4 border border-[#3d1a4a]">
              <span className="text-[10px] text-[#9b72cf] uppercase tracking-[0.2em] font-bold block">Fundación Histórica</span>
              <strong className="text-2xl font-serif italic text-[#f3e8ff]">11 Oct 1935</strong>
              <span className="text-xs text-[#a78bfa] block mt-0.5">Debut: 18 de octubre de 1935</span>
            </div>
            <div className="bg-[#160b1d] rounded-2xl p-4 border border-[#3d1a4a]">
              <span className="text-[10px] text-[#d8b4fe] uppercase tracking-[0.2em] font-bold block">90 Años de Fe</span>
              <strong className="text-2xl font-serif italic text-[#d8b4fe]">2025</strong>
              <span className="text-xs text-[#a78bfa] block mt-0.5">Nueve décadas de unión</span>
            </div>
            <div className="bg-[#2a1336] rounded-2xl p-4 border border-[#9b72cf] shadow-[0_0_15px_rgba(155,114,207,0.3)]">
              <span className="text-[10px] text-[#f3e8ff] uppercase tracking-[0.2em] font-bold block">El Gran Centenario</span>
              <strong className="text-2xl font-serif italic text-[#f3e8ff]">
                2035
              </strong>
              <span className="text-xs text-[#d8b4fe] block mt-0.5 font-medium">100 años de gloria</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Pillars (Orígenes, 18 de Octubre de 1935, Identidad ¿Por qué Los Íntimos?) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1: Orígenes - Nuestra fundación */}
        <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-3xl p-6 sm:p-7 shadow-xl text-[#e5e1e6] flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b72cf] mb-1">
              ORÍGENES
            </div>
            <h3 className="text-2xl font-serif italic text-[#f3e8ff] mb-4">
              Nuestra fundación
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#e5e1e6] leading-relaxed">
              <p>
                Entre <strong className="text-[#f3e8ff]">1933 y 1934</strong>, un grupo de aspirantes a cargadores de la <strong className="text-[#f3e8ff]">Primera Cuadrilla</strong> —considerados excedentes— soñaba con portar las Sagradas Andas del Señor de los Milagros.
              </p>
              <p>
                Liderados por <strong className="text-[#f3e8ff]">Pedro Mina Parreño</strong>, y con el respaldo de <strong className="text-[#f3e8ff]">Enrique Cuenca Correa</strong> y <strong className="text-[#f3e8ff]">Enrique Degregori Méndez</strong>, iniciaron las gestiones para fundar una nueva cuadrilla.
              </p>
              <p>
                Tras conversar con <strong className="text-[#f3e8ff]">Andrés Carrasco León</strong> (Capataz de la 5.ª Cuadrilla) y con <strong className="text-[#f3e8ff]">José Leonarte</strong> (Patrón de Andas), el grupo expuso su pedido ante el Mayordomo General, <strong className="text-[#f3e8ff]">don Fernando Rodríguez Soto</strong>, quien aceptó la formación de la Décima Primera Cuadrilla.
              </p>
              <p className="bg-[#120816] p-2.5 rounded-xl border border-[#3d1a4a] text-[#d8b4fe]">
                Se conformó la primera Junta Directiva y se presentó una lista de <strong className="text-[#f3e8ff]">50 hermanos debidamente tallados</strong>, requisito indispensable para el carguío.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[#3d1a4a] flex items-center gap-2 text-xs text-[#9b72cf]">
            <Users className="w-4 h-4 text-[#9b72cf]" />
            <span>50 fundadores tallados</span>
          </div>
        </div>

        {/* Pillar 2: 18 de Octubre de 1935 - El nacimiento de la Once */}
        <div className="bg-[#2a1336] border border-[#9b72cf] rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(155,114,207,0.25)] text-[#e5e1e6] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Award className="w-32 h-32 text-[#9b72cf]" />
          </div>
          <div className="relative z-10">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d8b4fe] mb-1">
              FUNDACIÓN: 11 DE OCTUBRE DE 1935
            </div>
            <h3 className="text-2xl font-serif italic text-[#f3e8ff] mb-4">
              El nacimiento de la Once
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#e5e1e6] leading-relaxed">
              <p>
                Tras su formalización institucional el <strong className="text-[#f3e8ff]">11 de octubre de 1935</strong>, la primera jornada procesional se preparó en el <strong className="text-[#f3e8ff]">Jr. Manuel Pardo, Barrios Altos</strong>. Por las dificultades del lugar, <strong className="text-[#f3e8ff]">Don Andrés Carrasco León</strong> cedió parte de la jornada de la 5.ª Cuadrilla para que, en pleno día, la nueva cuadrilla debutara en la <strong className="text-[#f3e8ff]">calle de la Virreina el 18 de octubre de 1935</strong> y demostrara su destreza llevando las andas del Señor.
              </p>
              <p>
                Con la venia del Mayordomo, Carrasco León entregó las Andas al Hno. <strong className="text-[#f3e8ff]">Pedro Mina Parreño</strong>; los padrinos de cuadrilla fueron el <strong className="text-[#f3e8ff]">Ing. Luis Solís García</strong> y la <strong className="text-[#f3e8ff]">Hna. Enriqueta Cavero Revollar</strong>.
              </p>
              <p className="bg-[#1a0a24] p-2.5 rounded-xl border border-[#9b72cf]/40 text-[#f3e8ff]">
                <strong className="text-[#d8b4fe]">Don Pedro Beltrán Espantoso</strong> dio el histórico martillazo de honor.
              </p>
              <p className="italic text-[#a78bfa]">
                Así nació la Décima Primera Cuadrilla de Cargadores de la HSMN: fundada el 11 de octubre de 1935 y consagrada en las andas el 18 de octubre de 1935.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[#3d1a4a] flex items-center gap-2 text-xs text-[#d8b4fe] relative z-10">
            <Sparkles className="w-4 h-4 text-[#9b72cf]" />
            <span>Debut triunfal en la Calle de la Virreina</span>
          </div>
        </div>

        {/* Pillar 3: Identidad - ¿Por qué "Los Íntimos"? */}
        <div className="bg-[#160b1d] border border-[#3d1a4a] rounded-3xl p-6 sm:p-7 shadow-xl text-[#e5e1e6] flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b72cf] mb-1">
              IDENTIDAD
            </div>
            <h3 className="text-2xl font-serif italic text-[#f3e8ff] mb-4">
              ¿Por qué "Los Íntimos"?
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#e5e1e6] leading-relaxed">
              <p>
                Desde sus inicios, la Once acogió a <strong className="text-[#f3e8ff]">hermanos humildes y amigos sinceros</strong>, cuya comprensión y afecto mutuo dio origen al apelativo de <em>"Los Íntimos"</em>.
              </p>
              <p>
                Nuestros fundadores fueron, en su mayoría, <strong className="text-[#f3e8ff]">gente de color</strong>. Dos grandes figuras de nuestro folklore acompañaron el nacimiento de la Once:
              </p>
              <ul className="space-y-2 bg-[#120816] p-3 rounded-xl border border-[#3d1a4a] text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-[#9b72cf] font-bold">▫</span>
                  <span><strong className="text-[#f3e8ff]">Alejandro Villanueva Martínez:</strong> El maestro del balompié, ídolo eterno de Alianza Lima.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b72cf] font-bold">▫</span>
                  <span><strong className="text-[#f3e8ff]">Felipe Pinglo Alva:</strong> El más grande compositor y poeta de su tiempo (autor de 'El Plebeyo').</span>
                </li>
              </ul>
              <p className="text-[#a78bfa] italic">
                Un espíritu sentimental y bohemio que siempre caminó de la mano de la unión y la amistad sincera.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[#3d1a4a] flex items-center gap-2 text-xs text-[#9b72cf]">
            <Heart className="w-4 h-4 text-[#9b72cf]" />
            <span>Fe, amistad sincera y folklore criollo</span>
          </div>
        </div>
      </div>

      {/* Spotlights: Figuras Ilustres & Padrinos */}
      <section className="bg-[#160b1d] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6]">
        <div className="border-b border-[#3d1a4a] pb-4 mb-6">
          <span className="text-[#9b72cf] text-[10px] font-bold uppercase tracking-[0.2em]">
            Figuras Fundacionales y Padrinos
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif italic tracking-wide text-[#f3e8ff] mt-1">
            Personajes que Forjaron la Mística de la Once
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {HISTORICAL_FIGURES_IDENTITY.map((fig, idx) => (
            <div
              key={idx}
              className="bg-[#120816] border border-[#3d1a4a] rounded-2xl p-5 hover:border-[#9b72cf]/60 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b72cf] block">
                  {fig.roleInCuadrilla}
                </span>
                <h4 className="text-lg font-serif italic text-[#f3e8ff] mt-1">
                  {fig.name}
                </h4>
                <span className="text-xs text-[#a78bfa] italic block mb-3">
                  {fig.title}
                </span>
                <p className="text-xs text-[#e5e1e6] leading-relaxed mb-4">
                  {fig.bio}
                </p>
              </div>
              <div className="p-3 bg-[#1a0a24] rounded-xl border border-[#3d1a4a] text-[11px] text-[#d8b4fe] italic">
                "{fig.quoteOrLegacy}"
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sacred Imagery and Devotion Showcase */}
      <section className="bg-gradient-to-br from-[#1a0a24] via-[#15071e] to-[#0f0415] border border-[#3d1a4a] rounded-3xl p-6 sm:p-10 shadow-2xl text-[#e5e1e6] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3d1a4a] pb-4">
          <div>
            <span className="text-[#9b72cf] text-[10px] font-bold uppercase tracking-[0.2em] block">
              Iconografía y Devoción Sagrada
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif italic tracking-wide text-[#f3e8ff] mt-1">
              El Señor de los Milagros de Nazarenas
            </h3>
          </div>
          <p className="text-xs text-[#a78bfa] max-w-sm">
            El Cristo de Pachacamilla, venerado por los hermanos cargadores de la Cuadrilla 11 en cada jornada procesional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: El Sagrado Lienzo */}
          <div className="bg-[#120816] rounded-2xl border border-[#3d1a4a] overflow-hidden group hover:border-[#9b72cf] transition-all">
            <div className="aspect-[4/3] bg-[#0a050d] relative overflow-hidden">
              <img
                src="/images/El%20Sagrado%20Lienzo%20del%20Senor%20de%20los%20Milagros.jpg"
                alt="El Sagrado Lienzo del Señor de los Milagros"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120816] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 left-3 right-3 text-xs font-serif italic text-[#f3e8ff]">
                El Sagrado Lienzo
              </div>
            </div>
            <div className="p-4 space-y-1.5">
              <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-[#d8b4fe]">El Sagrado Lienzo del Señor de los Milagros.jpg</span>
              <h4 className="text-sm font-serif font-bold text-[#f3e8ff]">El Sagrado Mural de Adobe</h4>
              <p className="text-xs text-[#e5e1e6]/80 leading-relaxed">
                Pintado en 1651 por un esclavo angoleño; resistió milagrosamente intacto los terremotos de 1655 y 1687.
              </p>
            </div>
          </div>

          {/* Card 2: Las Andas de Plata */}
          <div className="bg-[#120816] rounded-2xl border border-[#3d1a4a] overflow-hidden group hover:border-[#9b72cf] transition-all">
            <div className="aspect-[4/3] bg-[#0a050d] relative overflow-hidden">
              <img
                src="/images/Las%20Sagradas%20Andas%20de%20Plata%20en%20Procesion.png"
                alt="Las Sagradas Andas de Plata en Procesión"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120816] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 left-3 right-3 text-xs font-serif italic text-[#f3e8ff]">
                Andas de Plata y Ángeles
              </div>
            </div>
            <div className="p-4 space-y-1.5">
              <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-[#d8b4fe]">Las Sagradas Andas de Plata en Procesión.png</span>
              <h4 className="text-sm font-serif font-bold text-[#f3e8ff]">Carguío Procesional</h4>
              <p className="text-xs text-[#e5e1e6]/80 leading-relaxed">
                Casi dos toneladas de plata repujada, flores y cirios que los hermanos de la Once portan con devoción.
              </p>
            </div>
          </div>

          {/* Card 3: Santuario de Nazarenas */}
          <div className="bg-[#120816] rounded-2xl border border-[#3d1a4a] overflow-hidden group hover:border-[#9b72cf] transition-all">
            <div className="aspect-[4/3] bg-[#0a050d] relative overflow-hidden">
              <img
                src="/images/Insigne%20Santuario%20y%20Monasterio%20de%20Las%20Nazarenas.jpg"
                alt="Insigne Santuario y Monasterio de Las Nazarenas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120816] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 left-3 right-3 text-xs font-serif italic text-[#f3e8ff]">
                Santuario de Las Nazarenas
              </div>
            </div>
            <div className="p-4 space-y-1.5">
              <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-[#d8b4fe]">Insigne Santuario y Monasterio de Las Nazarenas.jpg</span>
              <h4 className="text-sm font-serif font-bold text-[#f3e8ff]">Templo del Señor</h4>
              <p className="text-xs text-[#e5e1e6]/80 leading-relaxed">
                Edificado por el Virrey Amat e inaugurado en 1771, custodia espiritual de las Madres Carmelitas Descalzas.
              </p>
            </div>
          </div>

          {/* Card 4: Virgen de la Nube */}
          <div className="bg-[#120816] rounded-2xl border border-[#3d1a4a] overflow-hidden group hover:border-[#9b72cf] transition-all">
            <div className="aspect-[4/3] bg-[#0a050d] relative overflow-hidden">
              <img
                src="/images/Nuestra%20Senora%20de%20la%20Nube.jpg"
                alt="Nuestra Señora de la Nube (Reverso de las Andas)"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120816] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 left-3 right-3 text-xs font-serif italic text-[#f3e8ff]">
                Nuestra Señora de la Nube
              </div>
            </div>
            <div className="p-4 space-y-1.5">
              <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-[#d8b4fe]">Nuestra Señora de la Nube.jpg</span>
              <h4 className="text-sm font-serif font-bold text-[#f3e8ff]">Reverso de las Andas</h4>
              <p className="text-xs text-[#e5e1e6]/80 leading-relaxed">
                Advocación mariana que resguarda a los hermanos cargadores desde la retaguardia del madero sagrado.
              </p>
            </div>
          </div>

          {/* Card 5: Cuadrilla en las Andas */}
          <div className="bg-[#120816] rounded-2xl border border-[#3d1a4a] overflow-hidden group hover:border-[#9b72cf] transition-all">
            <div className="aspect-[4/3] bg-[#0a050d] relative overflow-hidden">
              <img
                src="/images/La%20Cuadrilla%20en%20las%20Andas%20Hermandad%20y%20Penitencia.jpg"
                alt="La Cuadrilla en las Andas Hermandad y Penitencia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120816] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 left-3 right-3 text-xs font-serif italic text-[#f3e8ff]">
                Hábito y Cordón Nazareno
              </div>
            </div>
            <div className="p-4 space-y-1.5">
              <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-[#d8b4fe]">La Cuadrilla en las Andas Hermandad y Penitencia.jpg</span>
              <h4 className="text-sm font-serif font-bold text-[#f3e8ff]">Hermandad y Penitencia</h4>
              <p className="text-xs text-[#e5e1e6]/80 leading-relaxed">
                Los hermanos de la Once vistiendo la túnica, esclavina y el cordón franciscano con devoción viva.
              </p>
            </div>
          </div>

          {/* Card 6: Sahumerio y Devoción */}
          <div className="bg-[#120816] rounded-2xl border border-[#3d1a4a] overflow-hidden group hover:border-[#9b72cf] transition-all">
            <div className="aspect-[4/3] bg-[#0a050d] relative overflow-hidden">
              <img
                src="/images/El%20Incienso%20y%20la%20Devocion%20del%20Mes%20Morado.jpg"
                alt="El Incienso y la Devoción del Mes Morado"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120816] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 left-3 right-3 text-xs font-serif italic text-[#f3e8ff]">
                Sahumerio de Plata
              </div>
            </div>
            <div className="p-4 space-y-1.5">
              <span className="text-[9px] uppercase tracking-wider font-mono font-bold text-[#d8b4fe]">El Incienso y la Devocion del Mes Morado.jpg</span>
              <h4 className="text-sm font-serif font-bold text-[#f3e8ff]">Tradición de Incienso y Fe</h4>
              <p className="text-xs text-[#e5e1e6]/80 leading-relaxed">
                Hermanas sahumadoras con mantillas blancas elevando el incienso sagrado ante el paso del Nazareno.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
