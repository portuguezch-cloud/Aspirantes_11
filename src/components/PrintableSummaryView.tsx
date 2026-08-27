import React from 'react';
import { Printer, BookOpen } from 'lucide-react';
import { HISTORICAL_CHAPTERS, CAPATACES_CHRONOLOGY, CURRENT_DIRECTIVE } from '../data/cuadrillaData';

export const PrintableSummaryView: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      
      {/* Top Banner with Print Button (hidden during print) */}
      <div className="no-print bg-[#1a0a24] border border-[#3d1a4a] rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-[#e5e1e6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a1336] text-[#d8b4fe] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 border border-[#3d1a4a]">
            <BookOpen className="w-3.5 h-3.5 text-[#9b72cf]" />
            <span>Material de Estudio y Formación Nazarena</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif italic tracking-wide text-[#f3e8ff]">
            Ficha de Resumen para Examen
          </h2>
          <p className="text-[#a78bfa] text-xs sm:text-sm mt-1">
            Guía de repaso condensada con tablas comparativas, fechas exactas y cargos para aspirantes y hermanos.
          </p>
        </div>

        <button
          id="print-summary-btn"
          onClick={handlePrint}
          className="px-5 py-3 rounded-xl bg-[#5d2a7a] hover:bg-[#78369e] text-[#f3e8ff] border border-[#9b72cf] font-bold text-sm flex items-center gap-2 transition-all shadow-[0_0_12px_rgba(155,114,207,0.3)] active:scale-95 flex-shrink-0"
        >
          <Printer className="w-4 h-4" />
          <span>Imprimir / Guardar PDF</span>
        </button>
      </div>

      {/* Printable Sheet (Stylized for both screen & paper) */}
      <div className="bg-[#160b1d] text-[#e5e1e6] rounded-3xl p-6 sm:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.6)] border border-[#3d1a4a] space-y-8 print:bg-white print:text-black print:border-none print:shadow-none print:p-0">
        
        {/* Header Document */}
        <div className="text-center pb-6 border-b-2 border-[#3d1a4a] print:border-black space-y-2">
          <div className="flex justify-center items-center gap-3">
            <img
              src="https://scontent.flim39-1.fna.fbcdn.net/v/t39.30808-6/540614430_1170798838415106_912958999716874447_n.jpg?stp=dst-jpg_tt6&cstp=mx879x1267&ctp=s879x1267&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OkIotg1A7tYQ7kNvwEp9sRf&_nc_oc=AdqoRe0wF8YuBINl5gJXg-4sYFFevZcB_uAGI73woQLNafSYjkMXEfu-AmsJK2YC0Mw&_nc_zt=23&_nc_ht=scontent.flim39-1.fna&_nc_gid=b-0fQRqIIf3OgsRqKuDgrA&_nc_ss=7b2a8&oh=00_AQF__g1BgBjJeOilOmbm4KYZ-jlqZs7IWGS1eHS-aZ4uqw&oe=6A962677"
              alt="Señor de los Milagros"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border border-[#9b72cf] shadow"
            />
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#9b72cf] uppercase print:text-purple-900">
              HERMANDAD DEL SEÑOR DE LOS MILAGROS DE NAZARENAS
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif italic font-bold text-[#f3e8ff] mt-1 print:text-purple-950">
            CUADRILLA 11 "LOS ÍNTIMOS"
          </h1>
          <p className="text-[#a78bfa] font-serif italic text-sm sm:text-base mt-1 print:text-stone-600">
            Guía Oficial de Estudio Histórico, Cronología y Gobierno Interno
          </p>
          <div className="text-xs font-semibold text-[#d8b4fe] mt-2 print:text-amber-800">
            Fundada el 11 de Octubre de 1935 • 90 Años (2025) • Rumbo al Centenario (2035)
          </div>
        </div>

        {/* 1. Datos Fundacionales Clave */}
        <section className="space-y-3">
          <h3 className="text-base font-serif italic font-bold text-[#f3e8ff] border-b border-[#3d1a4a] pb-1 flex items-center gap-2 print:text-purple-950 print:border-purple-200">
            <span>1. DATOS FUNDACIONALES CLAVE (MEMORIZACIÓN OBLIGATORIA)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-[#120816] rounded-xl border border-[#3d1a4a] print:bg-purple-50 print:border-purple-100">
              <span className="font-bold text-[#9b72cf] block print:text-purple-900">Fecha de Fundación Oficial:</span>
              <span className="text-[#e5e1e6] print:text-stone-800">11 de octubre de 1935 (Debut en andas: 18 de octubre de 1935)</span>
            </div>

            <div className="p-3 bg-[#120816] rounded-xl border border-[#3d1a4a] print:bg-purple-50 print:border-purple-100">
              <span className="font-bold text-[#9b72cf] block print:text-purple-900">Fundador y 1er Capataz:</span>
              <span className="text-[#e5e1e6] print:text-stone-800">Pedro Mina Parreño (32 años: 1935-1967)</span>
            </div>

            <div className="p-3 bg-[#120816] rounded-xl border border-[#3d1a4a] print:bg-purple-50 print:border-purple-100">
              <span className="font-bold text-[#9b72cf] block print:text-purple-900">1er Subcapataz:</span>
              <span className="text-[#e5e1e6] print:text-stone-800">José Mina Parreño</span>
            </div>

            <div className="p-3 bg-[#1a0a24] rounded-xl border border-[#3d1a4a] print:bg-amber-50 print:border-amber-100">
              <span className="font-bold text-[#d8b4fe] block print:text-amber-900">Origen de los Fundadores:</span>
              <span className="text-[#e5e1e6] print:text-stone-800">Aspirantes excedentes de la Primera Cuadrilla (1933-1934)</span>
            </div>

            <div className="p-3 bg-[#1a0a24] rounded-xl border border-[#3d1a4a] print:bg-amber-50 print:border-amber-100">
              <span className="font-bold text-[#d8b4fe] block print:text-amber-900">Mayordomo Aprobador:</span>
              <span className="text-[#e5e1e6] print:text-stone-800">Don Fernando Rodríguez Soto (Principios de 1935)</span>
            </div>

            <div className="p-3 bg-[#1a0a24] rounded-xl border border-[#3d1a4a] print:bg-amber-50 print:border-amber-100">
              <span className="font-bold text-[#d8b4fe] block print:text-amber-900">Capataz de la 5ª Cuadrilla:</span>
              <span className="text-[#e5e1e6] print:text-stone-800">Andrés Carrasco León (Cedió parte de su jornada)</span>
            </div>

            <div className="p-3 bg-[#2a1336] rounded-xl border border-[#9b72cf]/40 print:bg-stone-100 print:border-stone-200">
              <span className="font-bold text-[#f3e8ff] block print:text-stone-900">Padrinos de Cuadrilla:</span>
              <span className="text-[#e5e1e6] print:text-stone-800">Ing. Luis Solís García y Hna. Enriqueta Cavero Revollar</span>
            </div>

            <div className="p-3 bg-[#2a1336] rounded-xl border border-[#9b72cf]/40 print:bg-stone-100 print:border-stone-200">
              <span className="font-bold text-[#f3e8ff] block print:text-stone-900">Primer Martillazo:</span>
              <span className="text-[#e5e1e6] print:text-stone-800">Don Pedro Beltrán Espantoso (Entregado por José Leonarte)</span>
            </div>

            <div className="p-3 bg-[#2a1336] rounded-xl border border-[#9b72cf]/40 print:bg-stone-100 print:border-stone-200">
              <span className="font-bold text-[#f3e8ff] block print:text-stone-900">Primera Lista de Cargadores:</span>
              <span className="text-[#e5e1e6] print:text-stone-800">50 hermanos debidamente tallados (2 primeros sectores)</span>
            </div>
          </div>
        </section>

        {/* 2. Tabla Síntesis de los 9 Capítulos */}
        <section className="space-y-3">
          <h3 className="text-base font-serif italic font-bold text-[#f3e8ff] border-b border-[#3d1a4a] pb-1 print:text-purple-950 print:border-purple-200">
            2. HISTORIA EN NUEVE CAPÍTULOS (1930 – 1935)
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-[#1a0a24] text-[#f3e8ff] font-serif italic border-b border-[#3d1a4a] print:bg-purple-950 print:text-white">
                  <th className="p-2.5 rounded-tl-lg">N°</th>
                  <th className="p-2.5">Periodo</th>
                  <th className="p-2.5">Título del Capítulo</th>
                  <th className="p-2.5">Acontecimiento Principal</th>
                  <th className="p-2.5 rounded-tr-lg">Personajes Clave</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3d1a4a] print:divide-stone-200">
                {HISTORICAL_CHAPTERS.map((chap, idx) => (
                  <tr key={chap.number} className={idx % 2 === 0 ? 'bg-[#120816] print:bg-stone-50' : 'bg-[#160b1d] print:bg-white'}>
                    <td className="p-2.5 font-bold font-serif italic text-[#9b72cf] print:text-purple-900">{chap.numberStr}</td>
                    <td className="p-2.5 font-semibold text-[#d8b4fe] print:text-amber-800">{chap.period}</td>
                    <td className="p-2.5 font-bold text-[#f3e8ff] print:text-stone-900">{chap.title}</td>
                    <td className="p-2.5 text-[#e5e1e6] leading-relaxed print:text-stone-700">{chap.content}</td>
                    <td className="p-2.5 text-[#a78bfa] font-medium print:text-purple-950">{chap.keyFigures.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Cronología de los 9 Capataces */}
        <section className="space-y-3">
          <h3 className="text-base font-serif italic font-bold text-[#f3e8ff] border-b border-[#3d1a4a] pb-1 print:text-purple-950 print:border-purple-200">
            3. CRONOLOGÍA DE CAPATACES DE LA CUADRILLA 11 (1935 – 2026+)
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-[#1a0a24] text-[#d8b4fe] font-serif italic border-b border-[#3d1a4a] print:bg-stone-900 print:text-amber-300">
                  <th className="p-2.5 rounded-tl-lg">Orden</th>
                  <th className="p-2.5">Periodo</th>
                  <th className="p-2.5">Nombre del Capataz</th>
                  <th className="p-2.5">Permanencia</th>
                  <th className="p-2.5 rounded-tr-lg">Hecho Histórico Destacado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3d1a4a] print:divide-stone-200">
                {CAPATACES_CHRONOLOGY.map((c, idx) => (
                  <tr key={c.id} className={c.isCurrent ? 'bg-[#2a1336] font-semibold print:bg-emerald-50' : idx % 2 === 0 ? 'bg-[#120816] print:bg-stone-50' : 'bg-[#160b1d] print:bg-white'}>
                    <td className="p-2.5 font-bold text-[#9b72cf] print:text-black">{c.orderNumber}°</td>
                    <td className="p-2.5 font-mono text-[#d8b4fe] font-bold print:text-purple-900">{c.period}</td>
                    <td className="p-2.5 font-bold text-[#f3e8ff] print:text-stone-900">
                      {c.name} {c.isCurrent && '(Actual)'}
                    </td>
                    <td className="p-2.5 text-[#e5e1e6] print:text-stone-700">{c.yearsOfService}</td>
                    <td className="p-2.5 text-[#a78bfa] print:text-stone-600">{c.highlights[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Directiva Actual & Identidad */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Directiva */}
          <section className="space-y-2">
            <h3 className="text-sm font-serif italic font-bold text-[#f3e8ff] border-b border-[#3d1a4a] pb-1 print:text-purple-950 print:border-purple-200">
              4. DIRECTIVA ACTUAL (GOBIERNO INTERNO)
            </h3>
            <ul className="divide-y divide-[#3d1a4a] text-xs print:divide-stone-200">
              {CURRENT_DIRECTIVE.map((d, i) => (
                <li key={i} className="py-1.5 flex items-center justify-between">
                  <span className="font-bold text-[#9b72cf] print:text-purple-900">{d.position}:</span>
                  <span className="text-[#e5e1e6] print:text-stone-800">{d.name} {d.isDeceased && '(†)'}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Identidad */}
          <section className="space-y-2">
            <h3 className="text-sm font-serif italic font-bold text-[#f3e8ff] border-b border-[#3d1a4a] pb-1 print:text-purple-950 print:border-purple-200">
              5. IDENTIDAD Y FIGURAS TUTELARES
            </h3>
            <div className="text-xs text-[#e5e1e6] space-y-2 print:text-stone-700">
              <p>
                <strong className="text-[#f3e8ff] print:text-black">¿Por qué "Los Íntimos"?:</strong> Por su espíritu humilde y sincero afecto mutuo entre hermanos fundadores de color.
              </p>
              <p>
                <strong className="text-[#f3e8ff] print:text-black">Alejandro Villanueva Martínez ("Manguera"):</strong> Ídolo histórico del Club Alianza Lima y del fútbol peruano.
              </p>
              <p>
                <strong className="text-[#f3e8ff] print:text-black">Felipe Pinglo Alva:</strong> El bardo inmortal de la música criolla y autor de "El Plebeyo".
              </p>
              <p className="font-bold text-[#d8b4fe] print:text-purple-900">
                Lema Oficial: "¡SEÑOR DE LOS MILAGROS, SEÑOR DE LOS PERUANOS!"
              </p>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="pt-6 border-t-2 border-[#3d1a4a] text-center text-xs text-[#a78bfa] flex items-center justify-between print:border-black print:text-stone-500">
          <span>Hermandad del Señor de los Milagros de Nazarenas</span>
          <span className="font-bold text-[#f3e8ff] print:text-purple-950">Cuadrilla 11 "Los Íntimos" • 1935 - 2035</span>
        </div>

      </div>

    </div>
  );
};

