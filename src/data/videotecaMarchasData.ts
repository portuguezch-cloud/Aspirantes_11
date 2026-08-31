/**
 * =======================================================================
 * VIDEOTECA Y REPERTORIO DE MARCHAS E HIMNOS (Módulo MarchasAudioView)
 * =======================================================================
 * Este archivo contiene EXCLUSIVAMENTE los videos de YouTube, letras oficiales,
 * reseñas históricas y material audiovisual del módulo "Marchas e Himnos".
 */

export interface MarchaVideoItem {
  id: string;
  title: string;
  composer: string;
  year?: string;
  type: 'himno' | 'marcha_regular' | 'marcha_funebre' | 'canto_liturgico';
  youtubeVideoId: string;
  description: string;
  historicalSignificance: string;
  lyrics?: string[];
  executionNotes?: string;
}

export const VIDEOTECA_MARCHAS: MarchaVideoItem[] = [
  {
    id: "himno-hsmn-video",
    title: "Himno Oficial al Señor de los Milagros",
    composer: "Letra e Inspiración: Isabel Rodríguez Larraín | Música: HSMN",
    year: "1954",
    type: "himno",
    youtubeVideoId: "bSI8MARvgAs", // Video oficial YouTube
    description: "Canto sagrado oficial entonado con la mano en el pecho al salir y guardar las Sagradas Andas en el Santuario de las Nazarenas.",
    historicalSignificance: "Oficializado por la Mayordomía General como el himno supremo de la fe nazarena en el Perú y el mundo entero. Desde octubre de 1954 une a millones de fieles.",
    executionNotes: "Se entona de pie, en posición de firmes con la mano derecha sobre el corazón al inicio de cada jornada procesional y en las guardadas.",
    lyrics: [
      "CORO:",
      "Señor de los Milagros, a Ti venimos en procesión",
      "tus fieles devotos, a implorar tu bendición. (Bis)",
      "",
      "ESTROFA I:",
      "Faro esplendente que alumbra nuestro camino,",
      "guía a tu pueblo por la senda de la fe,",
      "en Ti confiamos, bondadoso Jesús mío,",
      "que en la cruz diste tu vida por amor.",
      "",
      "ESTROFA II:",
      "Con paso firme de buen cristiano,",
      "hagamos grande nuestro Perú,",
      "y unidos todos como una fuerza,",
      "te suplicamos nos des tu luz.",
      "",
      "ESTROFA III:",
      "Madre de los Dolores, Virgen bendita,",
      "que al pie de la Cruz acompañas a tu Hijo,",
      "acoge nuestras plegarias y súplicas,",
      "y cúbrenos con tu manto maternal.",
      "",
      "ESTROFA IV:",
      "Hermanos de la Once 'Los Íntimos',",
      "con devoción llevemos al Señor en hombros,",
      "con el madero santo y el corazón ardiente,",
      "sirviendo con humildad, fe y lealtad."
    ]
  },
  {
    id: "marcha-libornio-video",
    title: "Marcha Regular: 'Al Señor de los Milagros'",
    composer: "José Sabas Libornio",
    year: "Finales del S. XIX",
    type: "marcha_regular",
    youtubeVideoId: "jvYt1qAqIEQ",
    description: "La marcha clásica por excelencia que acompaña el paso rítmico y cadencioso de las Andas del Señor por las calles del Centro de Lima.",
    historicalSignificance: "Compuesta por el insigne músico ítalo-peruano José Sabas Libornio. Marca el compás distintivo con que los cargadores mecen las andas con paso acompasado y elegante.",
    executionNotes: "Ejecutada en tramos abiertos y avenidas principales como Tacna, Emancipación, Abancay y Nicolás de Piérola."
  },
  {
    id: "marcha-padre-mio-video",
    title: "Marcha Fúnebre: 'Padre Mío'",
    composer: "Manuel León Alva",
    year: "1961",
    type: "marcha_funebre",
    youtubeVideoId: "7MWygl8EmG0",
    description: "Destaca por un compás lento, marcado por el imponente golpe del bombo y el tarol, sincronizado con el andar pausado de los cargadores.",
    historicalSignificance: "Forma parte del patrimonio sonoro que define el mes de octubre limeño, evocando devoción, penitencia y solemnidad.",
    executionNotes: "Interpretada en virajes difíciles, encuentros con hospitales, conventos de clausura y momentos de recogimiento espiritual."
  },
  {
    id: "canto-cantoras-video",
    title: "Cantos Litúrgicos de Sahumadoras y Cantoras",
    composer: "Tradición Oral Afroperuana y Nazarena",
    year: "Siglos XVIII - XXI",
    type: "canto_liturgico",
    youtubeVideoId: "wsrJivRkQyE",
    description: "Plegarias y responsorios tradicionales entonados mientras se eleva el sahumerio de incienso y mirra ante el paso del Cristo Moreno.",
    historicalSignificance: "El sahumerio y el canto femenino representan la alabanza ininterrumpida que abre camino a las Andas a través de los siglos.",
    executionNotes: "Entonados al unísono durante las paradas y descansos del anda para mantener el recogimiento de la multitud."
  }
];
