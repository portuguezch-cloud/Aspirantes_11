import { ProcessionDay } from '../types';

export const PROCESSION_DAYS: ProcessionDay[] = [
  {
    id: "dia-primer-recorrido",
    dateStr: "Primer Sábado de Octubre",
    title: "Primer Recorrido Tradicional",
    shortTitle: "Traslado a la Catedral",
    symbolicName: "Apertura del Mes Morado",
    departureTime: "12:00 PM (Santuario de Nazarenas)",
    arrivalTime: "08:00 PM (Catedral de Lima)",
    highlights: [
      "Salida del Santuario de las Nazarenas tras la misa matutina.",
      "Paso multitudinario por la Av. Tacna, Jr. Conde de Superunda y Plaza Mayor.",
      "Homenaje del Palacio Municipal de Lima y Palacio de Gobierno.",
      "Entronización en la Basílica Catedral de Lima para la vigilia general."
    ],
    routeSummary: "Santuario de Nazarenas -> Av. Tacna -> Jr. Emancipación -> Jr. Chancay -> Jr. Callao -> Jr. Carabaya -> Plaza de Armas -> Basílica Catedral de Lima.",
    cuadrilla11Role: "Acompañamiento institucional y relevos en los jirones céntricos del damero limeño.",
    traditionalPoints: ["Esquina Jr. Chancay con Conde de Superunda", "Atrio de la Catedral de Lima"],
    status: "procesion"
  },
  {
    id: "dia-18-octubre",
    dateStr: "18 de Octubre",
    title: "Segundo Recorrido: Día Central del Señor",
    shortTitle: "Procesión Central",
    symbolicName: "La Gran Jornada Nazarena",
    departureTime: "06:00 AM (Catedral de Lima)",
    arrivalTime: "02:00 AM del día 19 (Iglesia del Carmen)",
    highlights: [
      "Solemne Misa en la Plaza Mayor presidida por el Arzobispo de Lima.",
      "Homenaje de los Tres Poderes del Estado en la Plaza de Armas y Congreso de la República.",
      "Visita al Santuario de la Virgen del Carmen en Barrios Altos.",
      "El paso por el jirón Junín y Huanta con alfombras florales monumentales."
    ],
    routeSummary: "Catedral de Lima -> Jr. Junín -> Congreso de la República -> Jr. Huanta -> Iglesia del Carmen de Lima.",
    cuadrilla11Role: "Turnos de alta exigencia técnica en calles estrechas de Barrios Altos con gran fervor popular.",
    traditionalPoints: ["Plaza Bolívar (Congreso)", "Entrada al Templo de la Virgen del Carmen"],
    status: "procesion"
  },
  {
    id: "dia-19-octubre",
    dateStr: "19 de Octubre",
    title: "Tercer Recorrido: Visita a los Hospitales",
    shortTitle: "Ruta de la Salud y Consuelo",
    symbolicName: "Jesús Sana a los Enfermos",
    departureTime: "06:00 AM (Iglesia del Carmen)",
    arrivalTime: "03:00 AM del día 20 (Santuario de Nazarenas)",
    highlights: [
      "Visita pastoral al Hospital Dos de Mayo y al Hospital Guillermo Almenara.",
      "Bendición a miles de enfermos, médicos y enfermeras con llovizna de flores.",
      "Paso por el Palacio de Justicia y Plaza San Martín.",
      "Retorno de madrugada al Santuario de Nazarenas."
    ],
    routeSummary: "Iglesia del Carmen -> Jr. Huánuco -> Hospital Dos de Mayo -> Av. Grau -> Hospital Almenara -> Av. Nicolás de Piérola -> Jr. de la Unión -> Av. Tacna.",
    cuadrilla11Role: "Homenaje de 'Los Íntimos' en las inmediaciones del Paseo Colón y Plaza San Martín.",
    traditionalPoints: ["Frontis Hospital Dos de Mayo", "Plaza San Martín frente al Gran Hotel Bolívar"],
    status: "procesion"
  },
  {
    id: "dia-28-octubre",
    dateStr: "28 de Octubre",
    title: "Cuarto Recorrido: Día de la Fiesta Patronal",
    shortTitle: "Día del Señor de los Milagros",
    symbolicName: "La Solemne Guardada de Octubre",
    departureTime: "06:00 AM (Santuario de Nazarenas)",
    arrivalTime: "04:00 AM del día 29 (Santuario de Nazarenas)",
    highlights: [
      "Misa Solemne y bendición especial en el Santuario.",
      "Paso por la Iglesia de San Pedro y el Hospital San Bartolomé.",
      "El célebre turno de Guardada nocturna en el atrio de Nazarenas.",
      "Momento de máxima emoción con marchas fúnebres de despedida."
    ],
    routeSummary: "Santuario de Nazarenas -> Av. Tacna -> Jr. Huancavelica -> Jr. Camaná -> Hospital Loayza -> Av. Alfonso Ugarte -> Av. Venezuela -> Jr. Varela -> Av. Tacna.",
    cuadrilla11Role: "Histórica guardada de la Once: protagonistas de legendarias guardadas como la de 1970 y el Jubileo 2000.",
    traditionalPoints: ["Hospital Arzobispo Loayza", "Atrio de Nazarenas (Guardada Solemne)"],
    status: "guardada"
  },
  {
    id: "dia-1-noviembre",
    dateStr: "1 de Noviembre",
    title: "Quinto Recorrido: Día de Todos los Santos",
    shortTitle: "Clausura y Última Guardada",
    symbolicName: "Despedida del Mes Morado",
    departureTime: "11:30 AM (Santuario de Nazarenas)",
    arrivalTime: "08:00 PM (Ingreso al Monasterio)",
    highlights: [
      "Último recorrido del año alrededor de la manzana del Santuario.",
      "Misa campal en la Av. Tacna.",
      "Despedida del lienzo sagrado que ingresa al Monasterio de Clausura hasta el siguiente año."
    ],
    routeSummary: "Av. Tacna -> Jr. Callao -> Jr. Chancay -> Jr. Huancavelica -> Ingreso al Monasterio de Nazarenas.",
    cuadrilla11Role: "Cierre de filas con todos los sectores de la cuadrilla y homenaje a los hermanos que partieron a la eternidad.",
    traditionalPoints: ["Esquina Jr. Huancavelica con Tacna", "Puerta Mayor de Clausura"],
    status: "guardada"
  }
];

export const CUADRILLA_11_TRADITIONAL_TURNS = [
  {
    title: "El Célebre Turno del Gran Hotel Bolívar",
    location: "Plaza San Martín - Jr. de la Unión",
    significance: "Lugar de la inmortal maniobra de 'El Caballito' en 1972, donde la Once marchó de costado para los diplomáticos mundiales.",
    badge: "Hito Histórico 1972"
  },
  {
    title: "La Guardada en el Atrio de las Nazarenas",
    location: "Av. Tacna / Jr. Huancavelica",
    significance: "Paso de entrada al Santuario donde 'Los Íntimos' demuestran su compás, resistencia y devoción con el Primer Sector y la directiva en pleno.",
    badge: "Tradición y Pasión"
  },
  {
    title: "El Solar Histórico del Jirón Huancavelica",
    location: "Jr. Huancavelica (Antigua Calle de la Virreina / El Refugio)",
    significance: "Cuna de los ensayos y reuniones preparatorias entre 1932 y 1935 con Don José Leonarte y los primeros 50 fundadores.",
    badge: "Cuna Fundacional"
  }
];
