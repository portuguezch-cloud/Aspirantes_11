import { HistoricalChapter, Capataz, DirectiveMember, HistoricalFigure, Flashcard, QuizQuestion, HistoricalAnecdote } from '../types';
import { QUIZ_QUESTIONS_BANK } from './quizQuestionsBank';

export const FOUNDATION_INFO = {
  name: 'Cuadrilla 11 "Los Íntimos"',
  officialTitle: 'Décima Primera Cuadrilla de Cargadores',
  institution: 'Hermandad del Señor de los Milagros de Nazarenas (HSMN)',
  foundationDate: '11 de octubre de 1935',
  motto: '¡Señor de los Milagros, Señor de los Peruanos!',
  slogan: 'Fe, Unión y Hermandad',
  badgeDescription: 'Medallón circular plateado con el número 11 en alto relieve sobre fondo morado nazareno y la leyenda CUADRILLA 11 HSMN',
  milestones: {
    centenaryYear: 2035,
    anniversary90Year: 2025,
    yearsOfHistory: 91,
  },
  godparents: [
    { name: 'Ing. Luis Solís García', role: 'Padrino de Cuadrilla' },
    { name: 'Hna. Enriqueta Cavero Revollar', role: 'Madrina de Cuadrilla' },
    { name: 'Don Pedro Beltrán Espantoso', role: 'Padrino de Honor / Primer Martillazo' }
  ],
  keyLeadersOrigin: [
    { name: 'Pedro Mina Parreño', role: 'Fundador y 1er Capataz' },
    { name: 'José Mina Parreño', role: 'Primer Subcapataz' },
    { name: 'Enrique Cuenca Correa', role: 'Gestor y Facilitador' },
    { name: 'Enrique Degregori Méndez', role: 'Gestor y Facilitador' },
    { name: 'Andrés Carrasco León', role: 'Capataz 5ª Cuadrilla (Cedió jornada y brindó respaldo)' },
    { name: 'Don Fernando Rodríguez Soto', role: 'Mayordomo General de la Hermandad' },
    { name: 'José Leonarte', role: 'Patrón de Andas' }
  ]
};

export const HISTORICAL_CHAPTERS: HistoricalChapter[] = [
  {
    number: 1,
    numberStr: "01",
    period: "Años 30",
    title: "Una devoción compartida",
    subtitle: "El fervor popular por el Cristo Morado",
    content: "El Señor de los Milagros forma parte de la vida de muchos hermanos, que crecen amándolo por herencia familiar o por gracia recibida. Es esta devoción la que hace que varios quieran pertenecer a la Hermandad para poder llevar en hombros la sagrada imagen del Cristo Morado.",
    keyFigures: ["Aspirantes devotos", "Familias nazarenas tradicionales"],
    keyPlaces: ["Centro de Lima", "Santuario de las Nazarenas"],
    studyTips: [
      "Concepto clave: La herencia familiar y la gratitud por milagros fueron el motor de los aspirantes.",
      "En los años 30 solo existían 10 cuadrillas oficiales."
    ],
    importance: "Fundamento espiritual y devocional que motivó el anhelo de cargar las Andas."
  },
  {
    number: 2,
    numberStr: "02",
    period: "1933 – 1934",
    title: "Nace la idea de una nueva cuadrilla",
    subtitle: "El excedente de la Primera Cuadrilla",
    content: "El exceso de aspirantes en la Cuadrilla 1 lleva a un joven Pedro Mina Parreño, junto con otros hermanos (considerados excedentes), a plantear la formación de una nueva cuadrilla, aparte de las 10 que ya existían.",
    keyFigures: ["Pedro Mina Parreño", "Aspirantes excedentes de la 1ª Cuadrilla"],
    keyPlaces: ["Local de la 1ª Cuadrilla", "Barrios Altos"],
    studyTips: [
      "¿De dónde salieron los fundadores?: De los aspirantes excedentes de la Primera Cuadrilla.",
      "Líder principal: El joven Pedro Mina Parreño."
    ],
    importance: "Punto de partida formal de la iniciativa de fundar la Cuadrilla 11."
  },
  {
    number: 3,
    numberStr: "03",
    period: "Octubre 1934",
    title: "Primeras gestiones",
    subtitle: "Reuniones clandestinas y fraternas de organización",
    content: "Se inician las gestiones para lograrlo, con el apoyo de los hermanos Enrique Cuenca Correa y Enrique Degregori Méndez, quienes facilitan algunas reuniones iniciales.",
    keyFigures: ["Enrique Cuenca Correa", "Enrique Degregori Méndez", "Pedro Mina Parreño"],
    keyPlaces: ["Casas fraternas en Lima"],
    studyTips: [
      "Pregunta frecuente de examen: ¿Quiénes facilitaron las primeras reuniones? -> Enrique Cuenca Correa y Enrique Degregori Méndez."
    ],
    importance: "Estructuración del proyecto y articulación del grupo de aspirantes."
  },
  {
    number: 4,
    numberStr: "04",
    period: "1934",
    title: "Consultas con los dirigentes",
    subtitle: "Buscando el consejo y respaldo de los mayores",
    content: "Pedro Mina Parreño realiza las consultas respectivas con Andrés Carrasco León (Capataz de la 5.ª Cuadrilla) y otros dirigentes sobre la propuesta de crear una nueva cuadrilla.",
    keyFigures: ["Pedro Mina Parreño", "Andrés Carrasco León (Capataz 5ª Cuadrilla)"],
    keyPlaces: ["Locales de la Hermandad", "Lima Tradicional"],
    studyTips: [
      "Alianza crucial: La 5ª Cuadrilla y su capataz Andrés Carrasco León fueron el gran apoyo institucional para la 11."
    ],
    importance: "Obtención de legitimidad gremial y apoyo de una cuadrilla consolidada."
  },
  {
    number: 5,
    numberStr: "05",
    period: "Principios de 1935",
    title: "La Mayordomía da su aprobación",
    subtitle: "Aceptación bajo condiciones estrictas",
    content: "La Mayordomía de la Hermandad, encabezada por Don Fernando Rodríguez Soto, acepta la formación de esta nueva cuadrilla, aunque con algunos requisitos estrictos (entre ellos el tallado riguroso y disciplina comprobada).",
    keyFigures: ["Don Fernando Rodríguez Soto (Mayordomo General)", "Junta Directiva General"],
    keyPlaces: ["Sede de la Mayordomía HSMN"],
    studyTips: [
      "Mayordomo General histórico que aprobó la cuadrilla: Don Fernando Rodríguez Soto.",
      "Requisitos: Presentar lista depurada y debidamente tallada de cargadores."
    ],
    importance: "Autorización canónica y formal dentro de la Hermandad del Señor de los Milagros."
  },
  {
    number: 6,
    numberStr: "06",
    period: "1935",
    title: "Se forma la Junta Directiva",
    subtitle: "Los hermanos Mina Parreño al frente del timón",
    content: "Se establece una Junta Directiva, con el joven y ahora hermano Pedro Mina Parreño como capataz de la nueva cuadrilla, y a José Mina Parreño como subcapataz de la misma.",
    keyFigures: ["Pedro Mina Parreño (Capataz)", "José Mina Parreño (Subcapataz)"],
    keyPlaces: ["Lima"],
    studyTips: [
      "1er Capataz: Pedro Mina Parreño.",
      "1er Subcapataz: José Mina Parreño (su hermano)."
    ],
    importance: "Consolidación del primer cuadro de mando orgánico de la Once."
  },
  {
    number: 7,
    numberStr: "07",
    period: "18 de Octubre 1935",
    title: "Primer carguío",
    subtitle: "50 hombres tallados en la Calle El Refugio",
    content: "Una lista de 50 hombres es presentada para formar los dos primeros sectores. Se aprueba la nueva cuadrilla y se realiza el primer carguío en la Calle El Refugio / Jr. Manuel Pardo. Andrés Carrasco León ayuda cediendo parte de la jornada de la 5ª cuadrilla, para demostrar la capacidad de estos nuevos miembros.",
    keyFigures: ["50 primeros hermanos tallados", "Andrés Carrasco León", "Pedro Mina Parreño"],
    keyPlaces: ["Calle El Refugio", "Jr. Manuel Pardo (Barrios Altos)", "Calle de la Virreina"],
    studyTips: [
      "Número inicial de cargadores: 50 hombres (2 primeros sectores).",
      "Gesto fraterno: La 5ª Cuadrilla cedió parte de su turno a plena luz del día para su debut."
    ],
    importance: "Bautizo de hombros y primera prueba de temple cargando las Andas."
  },
  {
    number: 8,
    numberStr: "08",
    period: "18 de Octubre 1935",
    title: "El grito \"¡Once!\"",
    subtitle: "El momento cumbre de la historia",
    content: "Al llegar el momento, cuando la 5ª cuadrilla se encontraba a mitad de su jornada, se hizo sonar el martillo y, por primera vez, se anunció el grito: ¡Once! Este momento fue sumamente crucial: en silencio, con la tensión del momento, se llamó al primer sector, quienes recibieron las instrucciones necesarias para iniciar la jornada.",
    keyFigures: ["Martillero General", "Sector 1 de la Cuadrilla 11", "Pedro Mina Parreño"],
    keyPlaces: ["Calle de la Virreina"],
    studyTips: [
      "Momento solemne: Por primera vez en la historia procesional limeña resuena el grito '¡Once!'.",
      "El silencio y temple de los hermanos demostró la madurez del nuevo grupo."
    ],
    importance: "Nacimiento de la voz de mando oficial de la 11 en el cortejo procesional."
  },
  {
    number: 9,
    numberStr: "09",
    period: "18 de Octubre 1935",
    title: "El primer martillazo",
    subtitle: "El honor a Don Pedro Beltrán Espantoso",
    content: "El hermano José Leonarte (Patrón de Andas) solicitó al martillero general que le cediera el martillo, y en un gesto loable se lo entregó a Don Pedro Beltrán Espantoso, quien, al ser padrino de la nueva cuadrilla, recibió el honor de realizar el martillazo para iniciar la jornada.",
    keyFigures: ["José Leonarte (Patrón de Andas)", "Don Pedro Beltrán Espantoso (Padrino de Honor)"],
    keyPlaces: ["Andas del Señor de los Milagros"],
    studyTips: [
      "¿Quién dio el 1er martillazo?: Don Pedro Beltrán Espantoso.",
      "¿Quién facilitó el martillo?: José Leonarte (Patrón de Andas)."
    ],
    importance: "Consagración procesional definitiva con el golpe de martillo de honor."
  }
];

export const CAPATACES_CHRONOLOGY: Capataz[] = [
  {
    id: 1,
    orderNumber: 1,
    period: "1935 – 1967",
    startYear: 1935,
    endYear: 1967,
    name: "Pedro Mina Parreño",
    fullName: "Hno. Pedro Mina Parreño",
    yearsOfService: "32 años",
    isCurrent: false,
    highlights: [
      "Fundador principal y primer Capataz de la Cuadrilla 11.",
      "Lideró la cuadrilla durante más de tres décadas formativas y de consolidación.",
      "Estableció la disciplina, mística y hermandad que caracteriza a 'Los Íntimos'."
    ],
    context: "Guió a la cuadrilla desde su debut el 18 de octubre de 1935 hasta su madurez institucional."
  },
  {
    id: 2,
    orderNumber: 2,
    period: "1968 – 1970",
    startYear: 1968,
    endYear: 1970,
    name: "Isaías Villanueva Soriano",
    fullName: "Hno. Isaías Villanueva Soriano",
    yearsOfService: "2 años",
    isCurrent: false,
    highlights: [
      "Segundo Capataz en la historia de la Cuadrilla 11.",
      "Condujo la transición tras la histórica y prolongada gestión de Pedro Mina Parreño.",
      "Protagonizó la histórica Guardada del 28 de octubre de 1970 con el festivo paso del Primer Sector.",
      "Mantuvo la unidad y el rigor técnico en las jornadas procesionales."
    ],
    context: "Periodo de continuidad y preservación de las tradiciones fundacionales; recordado por la memorable Guardada de 1970."
  },
  {
    id: 3,
    orderNumber: 3,
    period: "1971 – 1986",
    startYear: 1971,
    endYear: 1986,
    name: "Ernesto Aburto Lozano",
    fullName: "Hno. Ernesto Aburto Lozano",
    yearsOfService: "15 años",
    isCurrent: false,
    highlights: [
      "Tercer Capataz; segundo con mayor tiempo ininterrumpido en el cargo (15 años).",
      "Dirigió el célebre carguío de costado 'El Caballito' (1972) frente al Gran Hotel Bolívar transmitido por TV a nivel mundial.",
      "Modernizó la administración interna e impulsó la formación de nuevos sectores.",
      "Consolidó el prestigio de la cuadrilla en guardadas y homenajes especiales."
    ],
    context: "Etapa de notable expansión, maestría técnica y fortalecimiento de la hermandad íntima."
  },
  {
    id: 4,
    orderNumber: 4,
    period: "1987 – 1995",
    startYear: 1987,
    endYear: 1995,
    name: "Alejandro Marrou Valle",
    fullName: "Hno. Alejandro Marrou Valle",
    yearsOfService: "8 años",
    isCurrent: false,
    highlights: [
      "Cuarto Capataz de la Cuadrilla 11.",
      "Lideró los festejos de las Bodas de Oro (50 aniversario) y el fortalecimiento pastoral.",
      "Destacado por su devoción y cercanía humana con los hermanos cargadores."
    ],
    context: "Años de reafirmación identitaria y crecimiento de aspirantes."
  },
  {
    id: 5,
    orderNumber: 5,
    period: "1996 – 1998",
    startYear: 1996,
    endYear: 1998,
    name: "Víctor Olguín Rosas",
    fullName: "Hno. Víctor Olguín Rosas",
    yearsOfService: "2 años",
    isCurrent: false,
    highlights: [
      "Quinto Capataz de la Cuadrilla 11.",
      "Enfocado en la disciplina procesional y el orden en el cortejo.",
      "Promovió actividades de caridad y asistencia mutua entre hermanos."
    ],
    context: "Gestión caracterizada por el apego a los estatutos y la devoción sincera."
  },
  {
    id: 6,
    orderNumber: 6,
    period: "1998 – 2007",
    startYear: 1998,
    endYear: 2007,
    name: "César Zanatta Vasconsuelos",
    fullName: "Hno. César Zanatta Vasconsuelos",
    yearsOfService: "9 años",
    isCurrent: false,
    highlights: [
      "Sexto Capataz de la Cuadrilla 11.",
      "Casi una década al mando; lideró el paso hacia el nuevo milenio (año 2000).",
      "Comandó las Andas en la solemne Guardada del 2000 (presidida por José Soto Parra y con Mons. Salvador Piñeiro de padrino).",
      "Impulsó la renovación generacional de cargadores y mejoras en el local social."
    ],
    context: "Transición de milenio con gran afluencia de jóvenes hermanos nazarenos y enriquecimiento litúrgico."
  },
  {
    id: 7,
    orderNumber: 7,
    period: "2008 – 2016",
    startYear: 2008,
    endYear: 2016,
    name: "Moisés Goyoneche Ciudad",
    fullName: "Hno. Moisés Goyoneche Ciudad",
    yearsOfService: "8 años",
    isCurrent: false,
    highlights: [
      "Séptimo Capataz de la Cuadrilla 11.",
      "Celebró los 75 y 80 años de fundación de 'Los Íntimos'.",
      "Promovió un fuerte espíritu de fraternidad y preservación del patrimonio histórico."
    ],
    context: "Periodo de conmemoraciones institucionales y consolidación de la mística."
  },
  {
    id: 8,
    orderNumber: 8,
    period: "2017 – 2025",
    startYear: 2017,
    endYear: 2025,
    name: "Andrés Espinoza Benítez",
    fullName: "Hno. Andrés Espinoza Benítez",
    yearsOfService: "8 años",
    isCurrent: false,
    highlights: [
      "Octavo Capataz de la Cuadrilla 11.",
      "Lideró a la cuadrilla durante los desafíos de la pandemia y el retorno a las calles.",
      "Guió el camino hacia los 90 años (2025) de fe y devoción inquebrantable."
    ],
    context: "Gestión histórica que mantuvo encendida la fe en tiempos difíciles."
  },
  {
    id: 9,
    orderNumber: 9,
    period: "2026 – Actualidad",
    startYear: 2026,
    endYear: null,
    name: "Wilbert Enrique Bazo Castillo",
    fullName: "Hno. Wilbert Enrique Bazo Castillo",
    yearsOfService: "Capataz actual",
    isCurrent: true,
    highlights: [
      "Noveno Capataz de la Cuadrilla 11 'Los Íntimos'.",
      "Actual máxima autoridad técnica y pastoral en las Andas del Cristo Morado.",
      "Lidera a la cuadrilla en la ruta rumbo al Centenario (2035)."
    ],
    context: "Capataz en funciones para el presente y futuro institucional."
  }
];

export const CURRENT_DIRECTIVE: DirectiveMember[] = [
  {
    position: "Capataz",
    name: "Hno. Wilbert Enrique Bazo Castillo",
    roleDescription: "Máxima autoridad de la cuadrilla. Dirige las jornadas procesionales sobre las andas, coordina con la Mayordomía General y vela por la disciplina, espiritualidad y orden de todos los hermanos.",
    iconName: "Crown"
  },
  {
    position: "Sub Capataz",
    name: "Hno. Jorge Luis Ariza Tordoya",
    roleDescription: "Segunda autoridad ejecutiva. Asiste directamente al Capataz en la conducción procesional, supervisa la rotación de sectores y reemplaza al Capataz en caso de ausencia.",
    iconName: "ShieldCheck"
  },
  {
    position: "Secretario",
    name: "Hno. Benjamín Jara Tasaico",
    roleDescription: "Custodio de las actas oficiales, correspondencia, registro de asistencia, padrón de hermanos activos y memorias institucionales de la cuadrilla.",
    iconName: "FileText"
  },
  {
    position: "Tesorero",
    name: "Hno. Manuel Antonio Infantes Vásquez",
    roleDescription: "Administrador responsable de las finanzas, cuotas sociales, presupuestos de jornadas y festividades, y rendición de cuentas ante la asamblea.",
    iconName: "Wallet"
  },
  {
    position: "Pro Secretario",
    name: "Hno. Richard Elías Farfán Sequeiros",
    roleDescription: "Apoyo directo a la secretaría general, gestión de comunicados, credenciales y soporte en el control administrativo de los hermanos.",
    iconName: "ClipboardList"
  },
  {
    position: "Pro Tesorero",
    name: "Hno. Eduardo Loro Almeyda",
    roleDescription: "Asiste al tesorero en el control de ingresos, recaudación de aportes fraternos y logística financiera en actividades oficiales.",
    iconName: "Coins"
  },
  {
    position: "Secretario Pastoral",
    name: "Hno. Marco Antonio Giraldo Quispe †",
    isDeceased: true,
    roleDescription: "Guía espiritual y litúrgico. Encargado de la formación en la fe, misas comunitarias, retiros espirituales y obras de caridad fraterna.",
    iconName: "Cross"
  }
];

export const HISTORICAL_FIGURES_IDENTITY: HistoricalFigure[] = [
  {
    name: "Alejandro Villanueva Martínez",
    title: "El maestro del balompié / 'Manguera'",
    roleInCuadrilla: "Fundador y figura emblemática tutelar",
    bio: "Ídolo máximo del fútbol peruano y del Club Alianza Lima. De origen afroperuano y vecino de La Victoria/Lima, acompañó el nacimiento de la Cuadrilla 11 impregnándola de picardía criolla, sencillez, lealtad y espíritu fraterno.",
    quoteOrLegacy: "Símbolo de la hermandad sincera y la unión del pueblo criollo bajo el manto morado."
  },
  {
    name: "Felipe Pinglo Alva",
    title: "El bardo inmortal / Poeta de la música criolla",
    roleInCuadrilla: "Acompañante ilustre y alma sentimental fundacional",
    bio: "El más grande compositor del cancionero popular peruano (autor de 'El Plebeyo', 'La Flor de la Canela', 'De Vuelta al Barrio'). Su espíritu bohemio, justiciero y profundamente humano acompañó el nacimiento de la Once.",
    quoteOrLegacy: "Aportó la sensibilidad poética y la devoción que sellaron la identidad de 'Los Íntimos'."
  },
  {
    name: "Pedro Mina Parreño",
    title: "Fundador y 1er Capataz (1935-1967)",
    roleInCuadrilla: "Padre y forjador de la Cuadrilla 11",
    bio: "Joven líder que transformó el excedente de aspirantes de la Primera Cuadrilla en una de las cuadrillas más unidas y respetadas de las Nazarenas. Mandó las andas durante 32 años ininterrumpidos.",
    quoteOrLegacy: "'La unión y el afecto mutuo son nuestra fuerza más sagrada ante el Señor.'"
  },
  {
    name: "Andrés Carrasco León",
    title: "Capataz de la 5ª Cuadrilla",
    roleInCuadrilla: "Benefactor y hermano mayor fraterno",
    bio: "Capataz ejemplar que brindó su respaldo incondicional a la creación de la Once y tuvo el desprendimiento de ceder parte de su propia jornada procesional en la calle de la Virreina para que la 11 pudiera debutar ante Lima.",
    quoteOrLegacy: "Ejemplo eterno de hermandad y generosidad procesional nazarena."
  },
  {
    name: "Don Pedro Beltrán Espantoso",
    title: "Padrino de Honor de la Cuadrilla 11",
    roleInCuadrilla: "Primer Martillazo Procesional",
    bio: "Personalidad destacada que tuvo el altísimo honor de dar el primer golpe de martillo el 18 de octubre de 1935, entregado por el patrón de andas José Leonarte.",
    quoteOrLegacy: "Dio inicio a la primera levantada histórica al grito de '¡Once!'."
  }
];

export const HISTORICAL_ANECDOTES: HistoricalAnecdote[] = [
  {
    id: "anecdote-2000",
    year: "2000",
    title: "La Guardada del año 2000",
    subtitle: "Programa especial del Milenio, fotos por sectores y Monseñor Salvador Piñeiro",
    description: "Para la guardada del 2000, presidida por José Soto Parra, se organizó un programa especial: fotografías por sectores frente al mural del Altar Mayor en el templo de las Nazarenas, la designación de Monseñor Salvador Piñeiro como padrino, y charlas espirituales para los hermanos antes del carguío.",
    historicalContext: "La llegada del Gran Jubileo del año 2000 motivó a la directiva y hermanos de la Once a preparar una conmemoración espiritual y solemne sin precedentes en el Santuario.",
    keyProtagonists: ["José Soto Parra (Presidente)", "Monseñor Salvador Piñeiro (Padrino)", "Hno. César Zanatta Vasconsuelos (Capataz)"],
    impactOrLegacy: "Sentó un precedente de formación espiritual y fraternidad documental, uniendo la devoción de los sectores ante el Altar Mayor.",
    category: "guardada",
    badge: "Jubileo 2000"
  },
  {
    id: "anecdote-1972",
    year: "1972",
    title: "\"El Caballito\" (1972)",
    subtitle: "Carguío especial de costado frente al Gran Hotel Bolívar transmitido al mundo",
    description: "En octubre de 1972, durante un Congreso internacional de diplomáticos alojados en el Gran Hotel Bolívar, la cuadrilla realizó un carguío especial marchando de costado frente al hotel, para que las autoridades extranjeras pudieran apreciar de frente la imagen del Señor de los Milagros; esta jornada se transmitió por televisión a nivel mundial.",
    historicalContext: "La Plaza San Martín y el histórico Gran Hotel Bolívar fueron escenario de esta genial maniobra técnica y coreográfica de la Once, demostrando la destreza y devoción de sus cargadores ante los ojos del mundo.",
    keyProtagonists: ["Hno. Ernesto Aburto Lozano (Capataz)", "Cargadores de la Cuadrilla 11", "Cuerpo Diplomático Internacional"],
    impactOrLegacy: "Consolidó la fama internacional de la Cuadrilla 11 por su sincronización, elegancia y maestría bajo las andas de plata.",
    category: "carguio_especial",
    badge: "Hito Mundial 1972"
  },
  {
    id: "anecdote-1970",
    year: "1970",
    title: "La \"Guardada\" de 1970 y una sanción memorable",
    subtitle: "El paso festivo del Primer Sector y la suspensión del 1 de noviembre",
    description: "En la guardada del 28 de octubre de 1970, el Primer Sector —liderado por el capataz Isaías Villanueva Soriano— realizó un paso tan festivo que entusiasmó a la multitud, pero el Directorio General de la Hermandad lo consideró incorrecto por \"haber bailado las Sagradas Andas\" y sancionó a la cuadrilla con la suspensión del carguío del 1 de noviembre.",
    historicalContext: "La guardada del 28 de octubre es uno de los momentos de mayor efervescencia popular en el Santuario de las Nazarenas. La alegría y cadencia criolla de los hermanos generó un momento inolvidable en la historia nazarena.",
    keyProtagonists: ["Isaías Villanueva Soriano (Capataz)", "Primer Sector de la Cuadrilla 11", "Directorio General de la HSMN"],
    impactOrLegacy: "Quedó grabada en la memoria colectiva de la Hermandad como testimonio de la alegría, el compás inconfundible y la pasión del cargador íntimo.",
    category: "disciplina",
    badge: "Guardada 1970"
  }
];

export const FLASHCARDS: Flashcard[] = [
  {
    id: "fc-1",
    category: "fechas",
    question: "¿En qué fecha exacta fue fundada la Cuadrilla 11 'Los Íntimos'?",
    answer: "El 11 de octubre de 1935.",
    hint: "El día 11 del mes de octubre de 1935.",
    explanation: "La Cuadrilla 11 'Los Íntimos' fue fundada formalmente el 11 de octubre de 1935, y realizó su debut procesional sobre las andas el 18 de octubre de 1935 en la Calle de la Virreina.",
    difficulty: "facil"
  },
  {
    id: "fc-2",
    category: "fundacion",
    question: "¿Quién fue el fundador y primer Capataz de la Cuadrilla 11 y cuántos años estuvo en el cargo?",
    answer: "Hno. Pedro Mina Parreño, durante 32 años (1935 – 1967).",
    hint: "Lideró a los aspirantes excedentes de la 1ª Cuadrilla.",
    explanation: "Pedro Mina Parreño fue el forjador de la cuadrilla y su capataz por 32 años ininterrumpidos.",
    difficulty: "facil"
  },
  {
    id: "fc-3",
    category: "fundacion",
    question: "¿De dónde provenían inicialmente los miembros que fundaron la Once?",
    answer: "Eran aspirantes a cargadores considerados 'excedentes' de la Primera Cuadrilla (1933-1934).",
    hint: "Había un exceso de postulantes en la cuadrilla número 1.",
    explanation: "Debido a la gran cantidad de aspirantes que no encontraban cupo en la Primera Cuadrilla, se plantearon crear una cuadrilla nueva.",
    difficulty: "medio"
  },
  {
    id: "fc-4",
    category: "fundacion",
    question: "¿Qué Mayordomo General aprobó formalmente la creación de la Décima Primera Cuadrilla?",
    answer: "Don Fernando Rodríguez Soto (a principios de 1935).",
    hint: "Apellido Rodríguez Soto.",
    explanation: "La Mayordomía encabezada por Fernando Rodríguez Soto dio la aprobación tras evaluar el pedido y exigir requisitos estrictos.",
    difficulty: "medio"
  },
  {
    id: "fc-5",
    category: "fundacion",
    question: "¿Qué Capataz y qué cuadrilla cedió parte de su jornada para el debut de la 11?",
    answer: "Don Andrés Carrasco León, Capataz de la 5.ª Cuadrilla.",
    hint: "La Quinta Cuadrilla.",
    explanation: "Andrés Carrasco León cedió parte de la jornada de la 5ª cuadrilla en pleno día en la calle de la Virreina.",
    difficulty: "medio"
  },
  {
    id: "fc-6",
    category: "capitulos",
    question: "¿Quiénes facilitaron las reuniones iniciales para las gestiones en octubre de 1934 (Capítulo 3)?",
    answer: "Los hermanos Enrique Cuenca Correa y Enrique Degregori Méndez.",
    hint: "Ambos se llamaban Enrique.",
    explanation: "Facilitaron las primeras asambleas para organizar formalmente a los postulantes.",
    difficulty: "dificil"
  },
  {
    id: "fc-7",
    category: "capitulos",
    question: "¿Quién fue designado como primer Subcapataz de la Cuadrilla 11 en 1935 (Capítulo 6)?",
    answer: "Hno. José Mina Parreño (hermano del Capataz Pedro Mina Parreño).",
    hint: "Mismo apellido que el primer capataz.",
    explanation: "La primera junta directiva tuvo a Pedro Mina Parreño de Capataz y a su hermano José Mina Parreño de Subcapataz.",
    difficulty: "medio"
  },
  {
    id: "fc-8",
    category: "capitulos",
    question: "¿Cuántos hombres debidamente tallados conformaron la primera lista presentada para los dos primeros sectores (Capítulo 7)?",
    answer: "50 hombres debidamente tallados.",
    hint: "Medio centenar.",
    explanation: "Se presentó una lista estricta de 50 hermanos para cubrir los dos primeros sectores de carga.",
    difficulty: "medio"
  },
  {
    id: "fc-9",
    category: "capitulos",
    question: "¿Quién fue el Patrón de Andas y a quién le entregó el martillo para dar el primer martillazo (Capítulo 9)?",
    answer: "José Leonarte (Patrón de Andas) le cedió el martillo a Don Pedro Beltrán Espantoso.",
    hint: "Leonarte se lo entregó a Beltrán Espantoso.",
    explanation: "José Leonarte solicitó al martillero general ceder el martillo a Don Pedro Beltrán Espantoso, padrino de honor de la cuadrilla.",
    difficulty: "dificil"
  },
  {
    id: "fc-10",
    category: "identidad",
    question: "¿Por qué se le conoce a la Cuadrilla 11 con el apelativo de 'Los Íntimos'?",
    answer: "Desde sus inicios, la Once acogió a hermanos humildes y amigos de trato fraterno, cuya comprensión, respeto y afecto mutuo dio origen al apelativo de “Los Íntimos”.",
    hint: "Hermanos humildes, trato fraterno, respeto y afecto mutuo.",
    explanation: "Desde sus inicios, la Once acogió a hermanos humildes y amigos de trato fraterno, cuya comprensión, respeto y afecto mutuo dio origen al apelativo de “Los Íntimos”.",
    difficulty: "facil"
  },
  {
    id: "fc-11",
    category: "identidad",
    question: "¿Qué dos grandes figuras del deporte y la cultura criolla acompañaron el nacimiento de la Once?",
    answer: "Alejandro Villanueva Martínez ('Manguera', ídolo de Alianza Lima) y Felipe Pinglo Alva (compositor de 'El Plebeyo').",
    hint: "El astro del fútbol blanquiazul y el bardo inmortal de la música criolla.",
    explanation: "Ambos aportaron el espíritu criollo, sentimental, bohemio y fraterno que inmortalizó a la cuadrilla.",
    difficulty: "facil"
  },
  {
    id: "fc-12",
    category: "directiva",
    question: "¿Quién es el actual Capataz de la Cuadrilla 11 (2026+)?",
    answer: "Hno. Wilbert Enrique Bazo Castillo.",
    hint: "Asume a partir del 2026.",
    explanation: "Wilbert Enrique Bazo Castillo es el 9° Capataz en la cronología histórica de la Cuadrilla 11.",
    difficulty: "facil"
  },
  {
    id: "fc-13",
    category: "directiva",
    question: "¿Quiénes son los actuales Sub Capataz y Secretario de la directiva de la Cuadrilla 11?",
    answer: "Sub Capataz: Hno. Jorge Luis Ariza Tordoya | Secretario: Hno. Benjamín Jara Tasaico.",
    hint: "Ariza Tordoya y Jara Tasaico.",
    explanation: "Forman parte de la plana directiva actual junto al Capataz Wilbert Bazo.",
    difficulty: "medio"
  },
  {
    id: "fc-14",
    category: "directiva",
    question: "¿Quiénes desempeñan los cargos de Tesorero, Pro Secretario y Pro Tesorero?",
    answer: "Tesorero: Manuel Infantes Vásquez | Pro Secretario: Richard Farfán Sequeiros | Pro Tesorero: Eduardo Loro Almeyda.",
    hint: "Infantes, Farfán y Loro.",
    explanation: "Responsables del manejo financiero y administrativo de la cuadrilla.",
    difficulty: "dificil"
  },
  {
    id: "fc-15",
    category: "directiva",
    question: "¿Quién fue el Secretario Pastoral de la directiva actual que figura con la cruz (†)?",
    answer: "Hno. Marco Antonio Giraldo Quispe †.",
    hint: "Giraldo Quispe.",
    explanation: "Hermano recordado con reverencia y oración por su servicio pastoral a la cuadrilla.",
    difficulty: "medio"
  },
  {
    id: "fc-16",
    category: "capataces",
    question: "¿Quién fue el segundo capataz con mayor permanencia en el cargo después de Pedro Mina Parreño?",
    answer: "Hno. Ernesto Aburto Lozano, con 15 años de servicio (1971 – 1986).",
    hint: "Mandó entre 1971 y 1986.",
    explanation: "Ernesto Aburto Lozano dirigió la Once durante 15 años consecutivos.",
    difficulty: "medio"
  },
  {
    id: "fc-17",
    category: "capataces",
    question: "¿Cuál es el orden cronológico de los 9 Capataces de la Cuadrilla 11?",
    answer: "1. Pedro Mina (1935-67) -> 2. Isaías Villanueva (1968-70) -> 3. Ernesto Aburto (1971-86) -> 4. Alejandro Marrou (1987-95) -> 5. Víctor Olguín (1996-98) -> 6. César Zanatta (1998-2007) -> 7. Moisés Goyoneche (2008-16) -> 8. Andrés Espinoza (2017-25) -> 9. Wilbert Bazo (2026+).",
    hint: "Mina, Villanueva, Aburto, Marrou, Olguín, Zanatta, Goyoneche, Espinoza, Bazo.",
    explanation: "Secuencia histórica completa de los 9 capataces.",
    difficulty: "dificil"
  },
  {
    id: "fc-18",
    category: "fechas",
    question: "¿Cuándo cumplió la Cuadrilla 11 sus 90 años y en qué año celebrará su Centenario?",
    answer: "Cumplió 90 años en el 2025 y celebrará su Centenario en el 2035.",
    hint: "1935 + 90 = 2025; 1935 + 100 = 2035.",
    explanation: "Bajo el lema 'Rumbo al Centenario', la Once avanza firme hacia el 2035.",
    difficulty: "facil"
  },
  {
    id: "fc-19",
    category: "fundacion",
    question: "¿Quiénes fueron los Padrinos oficiales de la Cuadrilla 11 en su fundación?",
    answer: "El Ing. Luis Solís García y la Hna. Enriqueta Cavero Revollar.",
    hint: "Solís García y Cavero Revollar.",
    explanation: "Fueron los padrinos de bendición e investidura procesional.",
    difficulty: "medio"
  },
  {
    id: "fc-20",
    category: "capitulos",
    question: "¿En qué calle debutó a plena luz del día la Cuadrilla 11 gracias a la 5ª cuadrilla?",
    answer: "En la Calle de la Virreina (preparada inicialmente en Jr. Manuel Pardo / Calle El Refugio).",
    hint: "Nombre de virreina virreinal.",
    explanation: "Para asegurar una jornada visible y concurrida, se realizó en la Calle de la Virreina.",
    difficulty: "medio"
  },
  {
    id: "fc-21",
    category: "identidad",
    question: "¿Qué programa especial se organizó para la histórica Guardada del año 2000 presidida por José Soto Parra?",
    answer: "Fotografías por sectores frente al mural del Altar Mayor en el templo de las Nazarenas, la designación de Monseñor Salvador Piñeiro como padrino, y charlas espirituales para los hermanos antes del carguío.",
    hint: "Fotos en Altar Mayor, Monseñor Salvador Piñeiro de padrino y formación espiritual.",
    explanation: "Para la guardada del 2000, presidida por José Soto Parra, se organizó un programa especial: fotografías por sectores frente al mural del Altar Mayor en el templo de las Nazarenas, la designación de Monseñor Salvador Piñeiro como padrino, y charlas espirituales para los hermanos antes del carguío.",
    difficulty: "facil"
  },
  {
    id: "fc-22",
    category: "identidad",
    question: "¿En qué consistió la maniobra procesional de 'El Caballito' en octubre de 1972?",
    answer: "Durante un Congreso internacional de diplomáticos en el Gran Hotel Bolívar, la cuadrilla marchó de costado para que apreciaran de frente al Señor de los Milagros, transmitido por TV a nivel mundial.",
    hint: "Marcha de costado frente al Gran Hotel Bolívar para diplomáticos extranjeros, transmitido a nivel mundial.",
    explanation: "En octubre de 1972, durante un Congreso internacional de diplomáticos alojados en el Gran Hotel Bolívar, la cuadrilla realizó un carguío especial marchando de costado frente al hotel, para que las autoridades extranjeras pudieran apreciar de frente la imagen del Señor de los Milagros; esta jornada se transmitió por televisión a nivel mundial.",
    difficulty: "medio"
  },
  {
    id: "fc-23",
    category: "capataces",
    question: "¿Qué hecho memorable y qué sanción ocurrieron en la 'Guardada' del 28 de octubre de 1970?",
    answer: "El Primer Sector (Capataz Isaías Villanueva) realizó un paso tan festivo que entusiasmó a la multitud, pero el Directorio General lo sancionó con suspensión del carguío del 1 de noviembre por 'haber bailado las Sagradas Andas'.",
    hint: "Paso festivo del Primer Sector de Isaías Villanueva y sanción de suspensión del 1 de noviembre.",
    explanation: "En la guardada del 28 de octubre de 1970, el Primer Sector —liderado por el capataz Isaías Villanueva Soriano— realizó un paso tan festivo que entusiasmó a la multitud, pero el Directorio General de la Hermandad lo consideró incorrecto por 'haber bailado las Sagradas Andas' y sancionó a la cuadrilla con la suspensión del carguío del 1 de noviembre.",
    difficulty: "dificil"
  },
  {
    id: "fc-24",
    category: "catequesis",
    question: "¿Cuántos y cuáles son los 7 Sacramentos de la Iglesia Católica?",
    answer: "Son 7: 1. Bautismo, 2. Confirmación, 3. Eucaristía, 4. Reconciliación (Confesión), 5. Unción de los Enfermos, 6. Orden Sacerdotal, 7. Matrimonio.",
    hint: "3 de Iniciación, 2 de Curación y 2 de Servicio.",
    explanation: "Los 7 sacramentos son signos eficaces de la gracia instituidos por Cristo y confiados a la Iglesia para dispensarnos la vida divina.",
    difficulty: "facil"
  },
  {
    id: "fc-25",
    category: "catequesis",
    question: "¿Cuáles son los 4 grupos de misterios del Santo Rosario y qué días se rezan?",
    answer: "1. Gozosos (Lunes y Sábados), 2. Dolorosos (Martes y Viernes), 3. Gloriosos (Miércoles y Domingos), 4. Luminosos (Jueves).",
    hint: "Gozosos, Dolorosos, Gloriosos y Luminosos (20 misterios en total).",
    explanation: "El rezo diario del Santo Rosario contempla los misterios de la vida, pasión y gloria de Cristo y la Virgen María.",
    difficulty: "medio"
  },
  {
    id: "fc-26",
    category: "catequesis",
    question: "¿Cuáles son los 7 Pecados Capitales y sus virtudes contrarias?",
    answer: "1. Soberbia vs Humildad, 2. Avaricia vs Generosidad, 3. Lujuria vs Castidad, 4. Ira vs Paciencia, 5. Gula vs Templanza, 6. Envidia vs Caridad fraterna, 7. Pereza vs Diligencia.",
    hint: "Soberbia, Avaricia, Lujuria, Ira, Gula, Envidia y Pereza.",
    explanation: "Son la raíz de los vicios y se combaten cultivando activamente las 7 virtudes opuestas en la vida diaria.",
    difficulty: "medio"
  },
  {
    id: "fc-27",
    category: "catequesis",
    question: "¿Cuáles son las 3 Virtudes Teologales y las 4 Virtudes Cardinales?",
    answer: "Teologales: Fe, Esperanza y Caridad. Cardinales: Prudencia, Justicia, Fortaleza y Templanza.",
    hint: "3 infusas por Dios y 4 pilares morales humanos.",
    explanation: "Las virtudes teologales nos unen directamente a Dios y las cardinales dirigen nuestros actos hacia el bien moral.",
    difficulty: "facil"
  },
  {
    id: "fc-28",
    category: "catequesis",
    question: "¿Cuántas son las Obras de Misericordia y cómo se dividen?",
    answer: "Son 14 en total: 7 Corporales (dar de comer, dar de beber, vestir, dar posada, visitar enfermos, visitar presos, enterrar difuntos) y 7 Espirituales (enseñar, aconsejar, corregir, consolar, perdonar, sufrir con paciencia, rogar por vivos y difuntos).",
    hint: "7 corporales y 7 espirituales.",
    explanation: "Son las acciones caritativas por las cuales seremos examinados en el amor cristiano ante el Señor.",
    difficulty: "medio"
  },
  {
    id: "fc-29",
    category: "catequesis",
    question: "¿Cuáles son los 5 Mandamientos de la Santa Madre Iglesia?",
    answer: "1. Oír Misa entera domingos y fiestas de guardar. 2. Confesar los pecados mortales al menos una vez al año. 3. Comulgar al menos por Pascua. 4. Ayunar y abstenerse cuando la Iglesia lo manda. 5. Ayudar a la Iglesia en sus necesidades materiales.",
    hint: "Misa, Confesión, Comunión pascual, Ayuno/Abstinencia y Ayuda material.",
    explanation: "Son los deberes mínimos que aseguran el crecimiento espiritual del fiel cristiano en comunidad.",
    difficulty: "dificil"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // --- DIFICULTAD FÁCIL (Fundamentos e Identidad) ---
  {
    id: "q1",
    category: "fundacion",
    difficulty: "facil",
    question: "¿Cuál es la fecha exacta de fundación de la Cuadrilla 11 'Los Íntimos'?",
    options: [
      "11 de octubre de 1935",
      "18 de octubre de 1935",
      "11 de octubre de 1930",
      "28 de octubre de 1935"
    ],
    correctAnswerIndex: 0,
    explanation: "La Cuadrilla 11 'Los Íntimos' fue fundada formalmente el 11 de octubre de 1935 (realizando posteriormente su histórico debut procesional el 18 de octubre de 1935 en la calle de la Virreina).",
    historicalReference: "Acta de Fundación de la Cuadrilla 11 HSMN (11 de octubre de 1935)."
  },
  {
    id: "q2",
    category: "fundacion",
    difficulty: "facil",
    question: "¿Quién fue el fundador principal y primer Capataz de la Cuadrilla 11 en 1935?",
    options: [
      "Andrés Carrasco León",
      "José Leonarte",
      "Pedro Mina Parreño",
      "Fernando Rodríguez Soto"
    ],
    correctAnswerIndex: 2,
    explanation: "Pedro Mina Parreño fue el joven aspirante que organizó al grupo y ejerció como primer Capataz durante 32 años ininterrumpidos (1935-1967).",
    historicalReference: "Capítulo 2: Nace la idea de una nueva cuadrilla y Capítulo 6: Nombramiento de Capataz."
  },
  {
    id: "q3",
    category: "identidad",
    difficulty: "facil",
    question: "¿Por qué recibió la Cuadrilla 11 el apelativo tradicional de 'Los Íntimos'?",
    options: [
      "Por haber sido fundada a puertas cerradas en un convento",
      "Porque desde sus inicios acogió a hermanos humildes y amigos de trato fraterno, cuya comprensión, respeto y afecto mutuo dio origen a este apelativo",
      "Por ser la cuadrilla con menor cantidad de cargadores de la Hermandad",
      "Por haber sido bautizada exclusivamente por los sacerdotes del Santuario"
    ],
    correctAnswerIndex: 1,
    explanation: "Desde sus inicios, la Once acogió a hermanos humildes y amigos de trato fraterno, cuya comprensión, respeto y afecto mutuo dio origen al apelativo de “Los Íntimos”.",
    historicalReference: "Identidad Tradicional de la Cuadrilla 11 HSMN."
  },
  {
    id: "q4",
    category: "identidad",
    difficulty: "facil",
    question: "¿Qué dos grandes personalidades del deporte y de la música criolla acompañaron el nacimiento de la Once?",
    options: [
      "Teófilo Cubillas y Chabuca Granda",
      "Alejandro Villanueva Martínez ('Manguera') y Felipe Pinglo Alva",
      "Lolo Fernández y Augusto Polo Campos",
      "José María Arguedas y Arturo 'Zambo' Cavero"
    ],
    correctAnswerIndex: 1,
    explanation: "El maestro del balompié Alejandro Villanueva Martínez ('Manguera', ídolo de Alianza Lima) y el gran bardo criollo Felipe Pinglo Alva acompañaron espiritualmente el nacimiento de la Once.",
    historicalReference: "Identidad y figuras tutelares de la Cuadrilla 11."
  },
  {
    id: "q5",
    category: "capitulos",
    difficulty: "facil",
    question: "¿En qué fecha y lugar realizó la Cuadrilla 11 su histórico debut procesional sobre las andas?",
    options: [
      "18 de octubre de 1935 en la Calle de la Virreina",
      "11 de octubre de 1935 en la Plaza Mayor",
      "28 de octubre de 1935 en el Jr. Huancavelica",
      "1 de noviembre de 1935 en la Iglesia de las Nazarenas"
    ],
    correctAnswerIndex: 0,
    explanation: "El histórico debut procesional ocurrió el 18 de octubre de 1935 en la emblemática Calle de la Virreina a plena luz del día.",
    historicalReference: "Capítulo 7: Primer carguío y Capítulo 8: En la Calle de la Virreina."
  },
  {
    id: "q6",
    category: "capataces",
    difficulty: "facil",
    question: "¿Quién es el actual Capataz de la Cuadrilla 11 (periodo 2026+)?",
    options: [
      "Hno. Andrés Espinoza Benítez",
      "Hno. Moisés Goyoneche Ciudad",
      "Hno. Wilbert Enrique Bazo Castillo",
      "Hno. Jorge Luis Ariza Tordoya"
    ],
    correctAnswerIndex: 2,
    explanation: "El Hno. Wilbert Enrique Bazo Castillo encabeza la cuadrilla como su 9° Capataz histórico para el periodo 2026 en adelante.",
    historicalReference: "Directiva Actual y Cronología de Capataces."
  },
  {
    id: "q7",
    category: "general",
    difficulty: "facil",
    question: "¿En qué año celebrará la Cuadrilla 11 'Los Íntimos' su Centenario de fundación?",
    options: [
      "2030",
      "2035",
      "2040",
      "2050"
    ],
    correctAnswerIndex: 1,
    explanation: "Fundada el 11 de octubre de 1935, la Cuadrilla 11 cumplirá sus 100 años de gloriosa trayectoria nazarena en el año 2035.",
    historicalReference: "Rumbo al Centenario 1935 - 2035."
  },

  // --- DIFICULTAD INTERMEDIO (Hechos, Personajes y Aprobación 1930–1935) ---
  {
    id: "q8",
    category: "fundacion",
    difficulty: "intermedio",
    question: "¿De qué cuadrilla procedía el grupo de aspirantes que en 1933-1934 originó la Cuadrilla 11 por exceso de cupos?",
    options: [
      "Primera Cuadrilla",
      "Quinta Cuadrilla",
      "Décima Cuadrilla",
      "Tercera Cuadrilla"
    ],
    correctAnswerIndex: 0,
    explanation: "Eran aspirantes considerados excedentes en la Primera Cuadrilla entre 1933 y 1934, lo que motivó a Pedro Mina y sus compañeros a forjar una nueva cuadrilla.",
    historicalReference: "Capítulo 2: Nace la idea de una nueva cuadrilla."
  },
  {
    id: "q9",
    category: "fundacion",
    difficulty: "intermedio",
    question: "¿Qué Mayordomo General de la HSMN autorizó formalmente la creación de la Décima Primera Cuadrilla en 1935?",
    options: [
      "Don Pedro Beltrán Espantoso",
      "Don Fernando Rodríguez Soto",
      "Don Andrés Carrasco León",
      "Don Luis Solís García"
    ],
    correctAnswerIndex: 1,
    explanation: "Don Fernando Rodríguez Soto encabezaba la Mayordomía de la Hermandad y otorgó la aprobación oficial tras verificar el cumplimiento de los requisitos estatutarios.",
    historicalReference: "Capítulo 5: La Mayordomía da su aprobación."
  },
  {
    id: "q10",
    category: "capitulos",
    difficulty: "intermedio",
    question: "¿Qué Capataz y qué cuadrilla cedió generosamente parte de su turno procesional para que la Once debutara en 1935?",
    options: [
      "Don José Leonarte (Patrón de Andas)",
      "Don Andrés Carrasco León (5.ª Cuadrilla)",
      "Don Isaías Villanueva (2.ª Cuadrilla)",
      "Don Ernesto Aburto (10.ª Cuadrilla)"
    ],
    correctAnswerIndex: 1,
    explanation: "Don Andrés Carrasco León, prestigioso Capataz de la 5ª Cuadrilla, cedió parte de su jornada de carga para demostrar la destreza y gallardía de los noveles cargadores de la 11.",
    historicalReference: "Capítulo 7: Primer carguío."
  },
  {
    id: "q11",
    category: "capitulos",
    difficulty: "intermedio",
    question: "¿Quiénes fueron los Padrinos oficiales de cuadrilla en la ceremonia inaugural y bendición de 1935?",
    options: [
      "Ing. Luis Solís García y Hna. Enriqueta Cavero Revollar",
      "Don Pedro Beltrán Espantoso y Hna. Rosa de Lima",
      "Don Fernando Rodríguez Soto y Hna. María Nazarena",
      "Don Andrés Carrasco León y Hna. Teresa de Jesús"
    ],
    correctAnswerIndex: 0,
    explanation: "Los padrinos oficiales de bendición e investidura procesional fueron el Ing. Luis Solís García y la respetada Hna. Enriqueta Cavero Revollar.",
    historicalReference: "Capítulo 7: Primer carguío y Acta inaugural de 1935."
  },
  {
    id: "q12",
    category: "capitulos",
    difficulty: "intermedio",
    question: "¿Quién tuvo el honor de dar el célebre 'Primer Martillazo' en el debut del 18 de octubre de 1935?",
    options: [
      "Don Pedro Beltrán Espantoso",
      "Felipe Pinglo Alva",
      "Alejandro Villanueva",
      "Pedro Mina Parreño"
    ],
    correctAnswerIndex: 0,
    explanation: "Don Pedro Beltrán Espantoso, en su calidad de distinguido padrino de honor, dio el primer golpe de martillo entregado por el patrón de andas José Leonarte.",
    historicalReference: "Capítulo 9: El primer martillazo."
  },
  {
    id: "q13",
    category: "capitulos",
    difficulty: "intermedio",
    question: "¿Cuántos hermanos conformaron la lista oficial presentada para los dos primeros sectores en el debut de 1935?",
    options: [
      "100 hombres",
      "50 hombres debidamente tallados",
      "24 hombres",
      "36 hombres"
    ],
    correctAnswerIndex: 1,
    explanation: "Fueron 50 hermanos debidamente tallados y preparados con rigor físico y técnico para asumir los dos sectores de relevo.",
    historicalReference: "Capítulo 7: Primer carguío."
  },
  {
    id: "q14",
    category: "capataces",
    difficulty: "intermedio",
    question: "¿Qué Capataz dirigió la Cuadrilla 11 durante 15 años ininterrumpidos entre 1971 y 1986?",
    options: [
      "Hno. Isaías Villanueva Soriano",
      "Hno. Ernesto Aburto Lozano",
      "Hno. Alejandro Marrou Valle",
      "Hno. César Zanatta Vasconsuelos"
    ],
    correctAnswerIndex: 1,
    explanation: "El Hno. Ernesto Aburto Lozano ejerció la jefatura de la Once durante 15 años (1971-1986), siendo el 2° con mayor permanencia tras Pedro Mina.",
    historicalReference: "Cronología de Capataces - 3er Capataz."
  },
  {
    id: "q15",
    category: "capataces",
    difficulty: "intermedio",
    question: "¿Quién fue el 4° Capataz de la Cuadrilla 11 que encabezó las Bodas de Oro (50 aniversario) en 1987–1995?",
    options: [
      "Hno. Víctor Olguín Rosas",
      "Hno. Alejandro Marrou Valle",
      "Hno. Moisés Goyoneche Ciudad",
      "Hno. Andrés Espinoza Benítez"
    ],
    correctAnswerIndex: 1,
    explanation: "El Hno. Alejandro Marrou Valle fue el cuarto Capataz de la Cuadrilla 11 (1987-1995), recordado por su devoción y por conmemorar las Bodas de Oro.",
    historicalReference: "Cronología de Capataces - 4to Capataz."
  },

  // --- DIFICULTAD DIFÍCIL (Detalles minuciosos de 1930–1935 y disciplina histórica) ---
  {
    id: "q16",
    category: "fundacion",
    difficulty: "dificil",
    question: "¿En qué lugares emblemáticos de Lima se realizaban las reuniones preliminares y ensayos de aspirantes entre 1933 y 1935?",
    options: [
      "El Callejón del Buque en La Victoria y el solar del Jr. Huancavelica",
      "El Convento de San Francisco y la Plaza de Acho",
      "El Parque Universitario y la Alameda de los Descalzos",
      "La Quinta Heeren y el Cerro San Cristóbal"
    ],
    correctAnswerIndex: 0,
    explanation: "Las reuniones secretas y ensayos iniciales de paso y tallado se llevaron a cabo en el Callejón del Buque (La Victoria) y en un tradicional solar de la cuadra 3 del Jr. Huancavelica.",
    historicalReference: "Capítulo 3: Primeras reuniones y ensayos de la naciente cuadrilla."
  },
  {
    id: "q17",
    category: "capitulos",
    difficulty: "dificil",
    question: "¿Quién era el Patrón de Andas de la Hermandad en 1935 que coordinó la entrega del martillo a Don Pedro Beltrán?",
    options: [
      "Don José Leonarte",
      "Don Pedro Mina Parreño",
      "Don Andrés Carrasco León",
      "Don Fernando Rodríguez Soto"
    ],
    correctAnswerIndex: 0,
    explanation: "Don José Leonarte, en su investidura de Patrón de Andas, recibió la solicitud y cedió el martillo procesional a Don Pedro Beltrán Espantoso.",
    historicalReference: "Capítulo 9: El primer martillazo."
  },
  {
    id: "q18",
    category: "capitulos",
    difficulty: "dificil",
    question: "¿En qué calle se había previsto inicialmente realizar el debut antes de que Don Andrés Carrasco propusiera la Calle de la Virreina?",
    options: [
      "Jr. Manuel Pardo / Calle El Refugio",
      "Jr. Huancavelica / Calle de las Nazarenas",
      "Jr. Lampa / Calle San Pedro",
      "Jr. Junín / Calle de la Inquisición"
    ],
    correctAnswerIndex: 0,
    explanation: "Inicialmente se planeó en Jr. Manuel Pardo (Calle El Refugio) durante la noche, pero para garantizar mayor visibilidad y multitudinaria asistencia se trasladó a la Calle de la Virreina a plena luz del día.",
    historicalReference: "Capítulo 7: Primer carguío y Capítulo 8: En la Calle de la Virreina."
  },
  {
    id: "q19",
    category: "capataces",
    difficulty: "dificil",
    question: "¿Cuál es la secuencia cronológica exacta de los primeros cinco Capataces de la Cuadrilla 11?",
    options: [
      "Pedro Mina -> Isaías Villanueva -> Ernesto Aburto -> Alejandro Marrou -> Víctor Olguín",
      "Pedro Mina -> Ernesto Aburto -> Isaías Villanueva -> Alejandro Marrou -> César Zanatta",
      "Pedro Mina -> Alejandro Marrou -> Isaías Villanueva -> Ernesto Aburto -> Víctor Olguín",
      "Pedro Mina -> Isaías Villanueva -> Víctor Olguín -> Ernesto Aburto -> Alejandro Marrou"
    ],
    correctAnswerIndex: 0,
    explanation: "La secuencia oficial es: 1. Pedro Mina (1935-67), 2. Isaías Villanueva (1968-70), 3. Ernesto Aburto (1971-86), 4. Alejandro Marrou (1987-95) y 5. Víctor Olguín (1996-98).",
    historicalReference: "Cronología Oficial de Capataces de la Cuadrilla 11 HSMN."
  },
  {
    id: "q20",
    category: "fundacion",
    difficulty: "dificil",
    question: "¿Qué exigencias fundamentales fijó la Mayordomía de Don Fernando Rodríguez Soto para autorizar formalmente la creación de la 11ª Cuadrilla en 1935?",
    options: [
      "Presentar nómina completa con tallado riguroso, estatutos aprobados, cuotas al día y disciplina estricta",
      "Comprar un nuevo juego de andas de madera tallada",
      "Exclusividad de cargadores universitarios",
      "Aportar 100 cirios de cera de abejas para el altar mayor"
    ],
    correctAnswerIndex: 0,
    explanation: "La Mayordomía exigió una lista con tallado exacto de 50 cargadores disciplinados, compromiso de estatutos, pago de cuotas formales y conducta intachable.",
    historicalReference: "Capítulo 5: La Mayordomía da su aprobación."
  },
  {
    id: "q21",
    category: "directiva",
    difficulty: "dificil",
    question: "¿Quiénes ocupan respectivamente los cargos de Pro Secretario y Pro Tesorero en la actual directiva de la Once?",
    options: [
      "Hno. Richard Farfán Sequeiros y Hno. Eduardo Loro Almeyda",
      "Hno. Benjamín Jara Tasaico y Hno. Manuel Infantes Vásquez",
      "Hno. Jorge Luis Ariza Tordoya y Hno. Wilbert Bazo Castillo",
      "Hno. Marco Antonio Giraldo Quispe y Hno. Andrés Espinoza Benítez"
    ],
    correctAnswerIndex: 0,
    explanation: "El Pro Secretario actual es el Hno. Richard Farfán Sequeiros y el Pro Tesorero es el Hno. Eduardo Loro Almeyda.",
    historicalReference: "Gobierno Interno y Cuadro Directivo Oficial."
  },
  {
    id: "q22",
    category: "capataces",
    difficulty: "dificil",
    question: "¿Qué ocurrió en la guardada del 28 de octubre de 1970 liderada por el capataz Isaías Villanueva Soriano?",
    options: [
      "El Primer Sector realizó un paso tan festivo que entusiasmó a la multitud, pero el Directorio General lo sancionó por 'haber bailado las Sagradas Andas' suspendiendo el carguío del 1 de noviembre",
      "La cuadrilla no pudo realizar la guardada por un temblor en Lima",
      "Se cambió por primera vez la túnica morada por una túnica blanca de gala",
      "El anda sufrió un desperfecto en el madero frontal y fue reparada en la calle"
    ],
    correctAnswerIndex: 0,
    explanation: "En la guardada del 28 de octubre de 1970, el Primer Sector —liderado por el capataz Isaías Villanueva Soriano— realizó un paso tan festivo que entusiasmó a la multitud, pero el Directorio General de la Hermandad lo consideró incorrecto por 'haber bailado las Sagradas Andas' y sancionó a la cuadrilla con la suspensión del carguío del 1 de noviembre.",
    historicalReference: "Anécdotas Memorables de la Once - La Guardada de 1970 y una sanción memorable."
  },
  {
    id: "q23",
    category: "identidad",
    difficulty: "intermedio",
    question: "¿En qué consistió la histórica maniobra 'El Caballito' realizada en octubre de 1972?",
    options: [
      "Un carguío especial marchando de costado frente al Gran Hotel Bolívar durante un Congreso de diplomáticos, transmitido por televisión a nivel mundial",
      "Una escolta a caballo con la policía montada en la Plaza de Armas",
      "Un paso acelerado al compás de marinera con pañuelos morados",
      "Una procesión a trote por el Jirón de la Unión"
    ],
    correctAnswerIndex: 0,
    explanation: "En octubre de 1972, durante un Congreso internacional de diplomáticos alojados en el Gran Hotel Bolívar, la cuadrilla realizó un carguío especial marchando de costado frente al hotel, para que las autoridades extranjeras pudieran apreciar de frente la imagen del Señor de los Milagros; esta jornada se transmitió por televisión a nivel mundial.",
    historicalReference: "Anécdotas Memorables de la Once - 'El Caballito' (1972)."
  },
  {
    id: "q24",
    category: "identidad",
    difficulty: "facil",
    question: "¿Qué programa especial se organizó para la histórica Guardada del año 2000, presidida por José Soto Parra?",
    options: [
      "Fotografías por sectores frente al mural del Altar Mayor en las Nazarenas, Monseñor Salvador Piñeiro como padrino y charlas espirituales",
      "Una peregrinación a pie hasta el Santuario de Santa Rosa de Quives",
      "La colocación de una placa de bronce en la Plaza Mayor de Lima",
      "Un desfile de 500 hermanos con bandas militares"
    ],
    correctAnswerIndex: 0,
    explanation: "Para la guardada del 2000, presidida por José Soto Parra, se organizó un programa especial: fotografías por sectores frente al mural del Altar Mayor en el templo de las Nazarenas, la designación de Monseñor Salvador Piñeiro como padrino, y charlas espirituales para los hermanos antes del carguío.",
    historicalReference: "Anécdotas Memorables de la Once - La Guardada del año 2000."
  },
  // --- CATEQUESIS Y DOCTRINA NAZARENA ---
  {
    id: "q25",
    category: "catequesis",
    difficulty: "facil",
    question: "¿Cuántos son los Sacramentos de la Iglesia Católica y cuáles corresponden a la Iniciación Cristiana?",
    options: [
      "Son 7 sacramentos; los de Iniciación son Bautismo, Confirmación y Eucaristía",
      "Son 10 sacramentos; los de Iniciación son Bautismo y Matrimonio",
      "Son 5 sacramentos; los de Iniciación son Confesión y Unción de los Enfermos",
      "Son 7 sacramentos; los de Iniciación son Orden Sacerdotal y Matrimonio"
    ],
    correctAnswerIndex: 0,
    explanation: "La Iglesia Católica confiesa 7 Sacramentos. Los 3 sacramentos de la Iniciación Cristiana son el Bautismo (puerta de la vida en el Espíritu), la Confirmación (perfecciona la gracia bautismal con los dones del Espíritu Santo) y la Eucaristía (cumbre y fuente de toda la vida cristiana).",
    historicalReference: "Catecismo de la Iglesia Católica (CIC 1210-1419) y Guía Doctrinal del Hermano Nazareno."
  },
  {
    id: "q26",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son los 4 grupos de misterios del Santo Rosario y qué días se rezan tradicionalmente?",
    options: [
      "Gozosos (Lunes y Sábados), Dolorosos (Martes y Viernes), Gloriosos (Miércoles y Domingos) y Luminosos (Jueves)",
      "Gozosos (Domingos), Dolorosos (Lunes), Gloriosos (Viernes) y Penitenciales (Sábados)",
      "Pascuales (Lunes), Eucarísticos (Martes), Marianos (Jueves) y Fúnebres (Viernes)",
      "Gozosos (Todos los días) y Gloriosos (Solo en Semana Santa)"
    ],
    correctAnswerIndex: 0,
    explanation: "El Santo Rosario consta de 20 misterios divididos en 4 grupos: Gozosos (Lunes y Sábados), Dolorosos (Martes y Viernes), Gloriosos (Miércoles y Domingos) y Luminosos (Jueves, instituidos por San Juan Pablo II en 2002).",
    historicalReference: "Carta Apostólica 'Rosarium Virginis Mariae' (San Juan Pablo II)."
  },
  {
    id: "q27",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son los 7 Pecados Capitales?",
    options: [
      "Soberbia, Avaricia, Lujuria, Ira, Gula, Envidia y Pereza",
      "Mentira, Robo, Homicidio, Blasfemia, Chisme, Hipocresía y Orgullo",
      "Desobediencia, Rencor, Idolatría, Infidelidad, Odio, Venganza y Falta de Fe",
      "Soberbia, Hipocresía, Cobardía, Desesperanza, Incredulidad, Blasfemia y Fraude"
    ],
    correctAnswerIndex: 0,
    explanation: "Los 7 pecados capitales (o vicios capitales) son la Soberbia, Avaricia, Lujuria, Ira, Gula, Envidia y Pereza. Se llaman capitales porque son cabeza y origen de muchos otros pecados.",
    historicalReference: "Catecismo de la Iglesia Católica (CIC 1866) - San Gregorio Magno y Santo Tomás de Aquino."
  },
  {
    id: "q28",
    category: "catequesis",
    difficulty: "facil",
    question: "¿Qué virtud contraria vence directamente al pecado capital de la Soberbia?",
    options: [
      "La Humildad",
      "La Templanza",
      "La Generosidad",
      "La Castidad"
    ],
    correctAnswerIndex: 0,
    explanation: "La Humildad es la virtud moral que se opone a la soberbia, reconociendo la soberanía de Dios y la propia pequeñez, modelo imitado en Cristo humilde de corazón.",
    historicalReference: "Doctrina Moral Católica y Espiritualidad Nazarena."
  },
  {
    id: "q29",
    category: "catequesis",
    difficulty: "dificil",
    question: "¿Cuáles son las 3 Virtudes Teologales y las 4 Virtudes Cardinales?",
    options: [
      "Teologales: Fe, Esperanza y Caridad | Cardinales: Prudencia, Justicia, Fortaleza y Templanza",
      "Teologales: Prudencia, Justicia y Fortaleza | Cardinales: Fe, Esperanza, Caridad y Humildad",
      "Teologales: Pobreza, Castidad y Obediencia | Cardinales: Paciencia, Mansedumbre, Bondad y Paz",
      "Teologales: Verdad, Sabiduría y Gracia | Cardinales: Valor, Honradez, Respeto y Constancia"
    ],
    correctAnswerIndex: 0,
    explanation: "Las virtudes Teologales (infundidas por Dios directamente en el alma) son Fe, Esperanza y Caridad. Las 4 virtudes Cardinales (ejes rectores de la vida moral humana) son Prudencia, Justicia, Fortaleza y Templanza.",
    historicalReference: "Catecismo de la Iglesia Católica (CIC 1803-1829)."
  },
  {
    id: "q30",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuántas son las Obras de Misericordia de la Iglesia Católica y cómo se dividen?",
    options: [
      "14 obras en total: 7 Corporales y 7 Espirituales",
      "10 obras en total: 5 para los vivos y 5 para los difuntos",
      "12 obras en total: 6 en Cuaresma y 6 en Octubre",
      "7 obras en total: solo obras corporales"
    ],
    correctAnswerIndex: 0,
    explanation: "Son 14 obras de misericordia: 7 corporales (dar de comer, beber, vestir, posada, visitar enfermos, presos y enterrar a los difuntos) y 7 espirituales (enseñar, aconsejar, corregir, consolar, perdonar, sufrir con paciencia y orar por vivos y difuntos).",
    historicalReference: "Evangelio de San Mateo (Mt 25, 31-46) y Doctrina Social de la Iglesia."
  },
  {
    id: "q31",
    category: "catequesis",
    difficulty: "facil",
    question: "¿Cuáles son los 5 pasos tradicionales para hacer una buena Confesión (Sacramento de la Reconciliación)?",
    options: [
      "1. Examen de conciencia, 2. Dolor de corazón (contrición), 3. Propósito de enmienda, 4. Decir los pecados al confesor, 5. Cumplir la penitencia",
      "1. Llegar temprano, 2. Rezar el Rosario, 3. Dar limosna, 4. Recibir el madero, 5. Asistir a la procesión",
      "1. Ayunar 3 días, 2. Pedir perdón a los hermanos, 3. Encender un cirio, 4. Confesar, 5. Comulgar",
      "1. Leer la Biblia, 2. Confesar faltas veniales, 3. Pagar cuotas, 4. Rezar el Credo, 5. Bendecir el hábito"
    ],
    correctAnswerIndex: 0,
    explanation: "La teología católica enseña 5 pasos fundamentales para obtener el perdón sacramental: examen de conciencia sincero, dolor de los pecados, firme propósito de no volver a pecar, confesión íntegra ante el sacerdote y cumplimiento devoto de la penitencia impuesta.",
    historicalReference: "Catecismo de la Iglesia Católica (CIC 1450-1460)."
  },
  {
    id: "q32",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son los 5 Misterios Luminosos del Santo Rosario instituidos por San Juan Pablo II?",
    options: [
      "1. Bautismo en el Jordán, 2. Bodas de Caná, 3. Anuncio del Reino, 4. Transfiguración, 5. Institución de la Eucaristía",
      "1. La Anunciación, 2. La Visitación, 3. El Nacimiento, 4. La Presentación, 5. El Niño perdido",
      "1. La Oración en el Huerto, 2. La Flagelación, 3. La Coronación de Espinas, 4. La Cruz a Cuestas, 5. La Crucifixión",
      "1. La Resurrección, 2. La Ascensión, 3. Pentecostés, 4. La Asunción de María, 5. La Coronación celestial"
    ],
    correctAnswerIndex: 0,
    explanation: "Los 5 Misterios de Luz (rezados los jueves) contemplan la vida pública de Jesucristo: su Bautismo en el río Jordán, su primer milagro en las Bodas de Caná, su predicación del Reino de Dios y llamado a la conversión, su Transfiguración en el Monte Tabor y la Institución de la Santísima Eucaristía en la Última Cena.",
    historicalReference: "Carta Apostólica 'Rosarium Virginis Mariae' (San Juan Pablo II, 2002)."
  },
  {
    id: "q33",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son los 5 Misterios Dolorosos del Santo Rosario que se rezan los Martes y Viernes?",
    options: [
      "1. Oración en Getsemaní, 2. La Flagelación, 3. Coronación de Espinas, 4. Jesús con la Cruz a Cuestas, 5. Crucifixión y Muerte",
      "1. Entrada a Jerusalén, 2. Lavatorio de pies, 3. Juicio de Pilatos, 4. Sepulcro vacío, 5. Descenso a los infiernos",
      "1. Traición de Judas, 2. Negación de Pedro, 3. Vía Crucis, 4. Lanza del centurión, 5. Piedad de la Virgen",
      "1. Juicio del Sanedrín, 2. Encuentro con la Verónica, 3. Caída en el madero, 4. Tinieblas en el Calvario, 5. Entierro"
    ],
    correctAnswerIndex: 0,
    explanation: "Los 5 Misterios Dolorosos contemplan la Pasión de Nuestro Señor: la agonía en el Huerto de los Olivos, los azotes atado a la columna, la corona de espinas, el camino al Calvario cargando la Cruz y su muerte redentora.",
    historicalReference: "Tradición Dominica del Santo Rosario y Liturgia de la Pasión."
  },
  {
    id: "q34",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son los 5 Mandamientos de la Santa Madre Iglesia Católica?",
    options: [
      "1. Oír Misa entera domingos y fiestas de guardar, 2. Confesar los pecados mortales al menos una vez al año, 3. Comulgar al menos por Pascua, 4. Ayunar y abstenerse cuando la Iglesia lo manda, 5. Ayudar a la Iglesia en sus necesidades materiales",
      "1. Ser bautizado, 2. Confirmarse, 3. Casarse por religioso, 4. Pertenecer a una cofradía, 5. Vestir hábito",
      "1. Rezar el Rosario diario, 2. Ir en peregrinación, 3. Cargar en octubre, 4. Dar diezmo obligatorio, 5. Asistir a retiros",
      "1. Estudiar teología, 2. No comer carne nunca, 3. Comulgar a diario, 4. Donar bienes, 5. Guardar silencio"
    ],
    correctAnswerIndex: 0,
    explanation: "Los mandamientos o preceptos de la Iglesia garantizan el mínimo indispensable en el espíritu de oración y en el esfuerzo moral para el crecimiento del amor a Dios y al prójimo.",
    historicalReference: "Catecismo de la Iglesia Católica (CIC 2041-2043)."
  },
  {
    id: "q35",
    category: "catequesis",
    difficulty: "facil",
    question: "¿Qué pecado capital se opone a la virtud de la Generosidad y qué pecado se opone a la Paciencia?",
    options: [
      "La Avaricia (se opone a la Generosidad) y la Ira (se opone a la Paciencia)",
      "La Gula (a la Generosidad) y la Pereza (a la Paciencia)",
      "La Soberbia (a la Generosidad) y la Envidia (a la Paciencia)",
      "La Lujuria (a la Generosidad) and el Orgullo (a la Paciencia)"
    ],
    correctAnswerIndex: 0,
    explanation: "La Avaricia es el apego desordenado a los bienes terrenales que se combate con la generosidad y el desprendimiento; la Ira es el deseo desmedido de venganza o cólera que se vence mediante la santa paciencia y mansedumbre.",
    historicalReference: "Tratado de las Virtudes - Santo Tomás de Aquino."
  },
  {
    id: "q36",
    category: "catequesis",
    difficulty: "dificil",
    question: "¿Cuáles son los 3 Sacramentos que imprimen 'Carácter Indeleble' (sello espiritual imborrable y que no pueden repetirse)?",
    options: [
      "Bautismo, Confirmación y Orden Sacerdotal",
      "Eucaristía, Penitencia y Matrimonio",
      "Bautismo, Eucaristía y Unción de los Enfermos",
      "Confirmación, Matrimonio y Orden Sacerdotal"
    ],
    correctAnswerIndex: 0,
    explanation: "El Bautismo, la Confirmación y el Orden Sacerdotal imprimen en el alma un carácter indeleble o sello espiritual perenne que consagra al cristiano de forma definitiva, por lo que nunca se reiteran.",
    historicalReference: "Catecismo de la Iglesia Católica (CIC 1121)."
  },
  {
    id: "q37",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son las 7 Obras de Misericordia Corporales según el Evangelio de San Mateo?",
    options: [
      "1. Dar de comer al hambriento, 2. Dar de beber al sediento, 3. Vestir al desnudo, 4. Dar posada al peregrino, 5. Visitar a los enfermos, 6. Visitar a los presos, 7. Enterrar a los difuntos",
      "1. Dar limosna, 2. Construir templos, 3. Bendecir hábitos, 4. Prestar dinero, 5. Donar flores, 6. Cantar en el coro, 7. Guardar vigilia",
      "1. Ayunar, 2. Hacer penitencia, 3. Madrugar a misa, 4. Rezar novenarios, 5. Llevar cordón, 6. Encender cirios, 7. Cargar el anda",
      "1. Enseñar al que no sabe, 2. Dar buen consejo, 3. Corregir al que yerra, 4. Perdonar injurias, 5. Consolar al triste, 6. Sufrir con paciencia, 7. Rogar por los difuntos"
    ],
    correctAnswerIndex: 0,
    explanation: "Las obras corporales de misericordia son prácticas caritativas que socorren las necesidades materiales y físicas del prójimo vulnerable, fundamentadas en el juicio final (Mt 25, 35-36) y en el libro de Tobías (enterrar a los muertos).",
    historicalReference: "Evangelio según San Mateo (Mt 25, 31-46)."
  },
  {
    id: "q38",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son las 7 Obras de Misericordia Espirituales?",
    options: [
      "1. Enseñar al que no sabe, 2. Dar buen consejo al que lo necesita, 3. Corregir al que yerra, 4. Perdonar las injurias, 5. Consolar al triste, 6. Sufrir con paciencia los defectos del prójimo, 7. Rogar a Dios por los vivos y difuntos",
      "1. Dar comida, 2. Dar bebida, 3. Vestir, 4. Dar posada, 5. Visitar enfermos, 6. Visitar presos, 7. Enterrar difuntos",
      "1. Bautizar, 2. Confirmar, 3. Comulgar, 4. Confesar, 5. Ungir, 6. Ordenar, 7. Casar",
      "1. Rezar en latín, 2. Ayunar a pan y agua, 3. Hacer votos perpetuos, 4. Portar hábito, 5. Peregrinar a Roma, 6. Velar cirios, 7. Guardar clausura"
    ],
    correctAnswerIndex: 0,
    explanation: "Las obras de misericordia espirituales atienden la salud del alma, la ignorancia, la aflicción, el pecado y la necesidad de intercesión y perdón en el prójimo.",
    historicalReference: "Catecismo Mayor de San Pío X y CIC 2447."
  },
  {
    id: "q39",
    category: "catequesis",
    difficulty: "dificil",
    question: "¿Cuáles son los 7 Dones del Espíritu Santo que se perfeccionan en el Sacramento de la Confirmación?",
    options: [
      "Sabiduría, Entendimiento (Inteligencia), Consejo, Fortaleza, Ciencia, Piedad y Temor de Dios",
      "Fe, Esperanza, Caridad, Prudencia, Justicia, Fortaleza y Templanza",
      "Paz, Paciencia, Bondad, Mansedumbre, Fidelidad, Modestia y Continencia",
      "Humildad, Generosidad, Castidad, Diligencia, Templanza, Paciencia y Caridad"
    ],
    correctAnswerIndex: 0,
    explanation: "Los 7 Dones del Espíritu Santo (profetizados en Isaías 11, 1-2) son disposiciones permanentes que hacen al cristiano dócil para seguir las inspiraciones divinas en su vida personal y comunitaria.",
    historicalReference: "Isaías 11, 1-2 y Catecismo de la Iglesia Católica (CIC 1830-1831)."
  },
  {
    id: "q40",
    category: "catequesis",
    difficulty: "facil",
    question: "¿Qué simbolismo sagrado tiene el Hábito Morado y el Cordón Blanco en el Hermano Nazareno?",
    options: [
      "El Hábito morado representa penitencia, luto por la Pasión de Cristo y consagración; el Cordón blanco simboliza pureza y las cuerdas con que ataron a Jesús camino al Calvario",
      "El Hábito morado representa la nobleza virreinal y el Cordón blanco la pertenencia al club deportivo Alianza Lima",
      "El Hábito morado es un uniforme de trabajo y el Cordón blanco sirve exclusivamente para sujetar la túnica",
      "El Hábito morado representa la primavera limeña y el Cordón blanco la paz entre las cuadrillas"
    ],
    correctAnswerIndex: 0,
    explanation: "El hábito morado instituido por la Madre Antonia Lucía del Espíritu Santo es insignia de penitencia y devoción total a la Pasión redentora; el cordón blanco de cinco nudos recuerda las llagas de Cristo y la atadura del reo inocente.",
    historicalReference: "Historia del Monasterio de las Nazarenas y Manual del Hermano Cargador HSMN."
  },
  {
    id: "q41",
    category: "catequesis",
    difficulty: "facil",
    question: "¿Cuál es el Primer y más grande Mandamiento del Decálogo (Los 10 Mandamientos de la Ley de Dios)?",
    options: [
      "Amarás a Dios sobre todas las cosas",
      "No matarás",
      "Honrarás a tu padre y a tu madre",
      "Santificarás las fiestas"
    ],
    correctAnswerIndex: 0,
    explanation: "El primer mandamiento del Decálogo (Éxodo 20, 2-3 / Dt 6, 5) manda adorar únicamente al único Dios verdadero, amándolo con todo el corazón, con toda el alma y con todas las fuerzas.",
    historicalReference: "Éxodo 20, 2-5 y Catecismo de la Iglesia Católica (CIC 2084)."
  },
  {
    id: "q42",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Qué Sacramento es considerado por la Iglesia Católica como 'Fuente y Culmen de toda la vida cristiana'?",
    options: [
      "La Santísima Eucaristía (Santa Misa)",
      "El Bautismo",
      "La Confirmación",
      "El Sacramento del Orden Sacerdotal"
    ],
    correctAnswerIndex: 0,
    explanation: "La Santísima Eucaristía contiene todo el bien espiritual de la Iglesia, a saber, a Cristo mismo, nuestra Pascua y Pan vivo, por lo que todos los demás sacramentos y ministerios eclesiales están orientados hacia ella.",
    historicalReference: "Concilio Vaticano II (Lumen Gentium 11) y CIC 1324."
  },
  {
    id: "q43",
    category: "catequesis",
    difficulty: "dificil",
    question: "¿Cuáles son las 4 Virtudes Cardinales y por qué se les denomina 'cardinales'?",
    options: [
      "Prudencia, Justicia, Fortaleza y Templanza; se llaman 'cardinales' porque provienen del latín 'cardo' (quicio/eje), siendo los pilares sobre los que giran todas las demás virtudes humanas",
      "Fe, Esperanza, Caridad y Humildad; se llaman cardinales porque solo las practican los Cardenales de la Iglesia",
      "Pobreza, Castidad, Obediencia y Silencio; se llaman cardinales porque nacieron en los monasterios de clausura",
      "Sinceridad, Respeto, Puntualidad y Lealtad; se llaman cardinales por los cuatro puntos cardinales del templo"
    ],
    correctAnswerIndex: 0,
    explanation: "Las cuatro virtudes cardinales guían la conducta moral del ser humano: la Prudencia dispone la razón práctica; la Justicia da a Dios y al prójimo lo debido; la Fortaleza asegura la firmeza ante las dificultades; y la Templanza modera la atracción de los placeres.",
    historicalReference: "Catecismo de la Iglesia Católica (CIC 1805-1809)."
  },
  {
    id: "q44",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Qué condición espiritual indispensable exige la Iglesia para acercarse a comulgar y para asumir con dignidad el hombro bajo las Sagradas Andas?",
    options: [
      "Estar en Estado de Gracia (libre de pecado mortal tras haber recibido la absolución sacramental en la confesión) y guardar el ayuno eucarístico",
      "Haber pagado todas las cuotas de la cuadrilla y tener el hábito planchado",
      "Llegar dos horas antes del turno y haber aprendido los himnos de memoria",
      "Tener más de 5 años de antigüedad en la hermandad"
    ],
    correctAnswerIndex: 0,
    explanation: "San Pablo advierte que quien coma del Pan o beba del Cáliz del Señor indignamente será reo del Cuerpo y de la Sangre del Señor (1 Cor 11, 27). Tanto la comunión como el carguío de las andas exigen la reconciliación sacramental y la pureza de intención.",
    historicalReference: "1 Corintios 11, 27-29 y Estatutos Pastorales de la HSMN."
  },
  {
    id: "q45",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son los 5 Misterios Gloriosos del Santo Rosario que se rezan los Miércoles y Domingos?",
    options: [
      "1. La Resurrección del Señor, 2. La Ascensión al Cielo, 3. La Venida del Espíritu Santo (Pentecostés), 4. La Asunción de la Virgen María, 5. La Coronación de María como Reina del Universo",
      "1. El Bautismo de Jesús, 2. Las Bodas de Caná, 3. La Transfiguración, 4. La Santa Cena, 5. La Cruz",
      "1. La Anunciación del Ángel, 2. La Visita a Santa Isabel, 3. El Pesebre de Belén, 4. La Purificación, 5. El Templo",
      "1. Getsemaní, 2. El Pretorio, 3. Las Tres Caídas, 4. El Monte Calvario, 5. El Santo Sepulcro"
    ],
    correctAnswerIndex: 0,
    explanation: "Los Misterios Gloriosos celebran el triunfo definitivo de Cristo sobre la muerte y el pecado, la efusión del Espíritu Santo sobre la Iglesia y la exaltación gloriosa de la Santísima Virgen María.",
    historicalReference: "Catecismo de la Iglesia Católica y Directorio sobre la Piedad Popular y la Liturgia."
  },

  // =========================================================================
  // --- NIVEL ULTRA DIFÍCIL (Hermandad profunda, actas, estatutos y catequesis) ---
  // =========================================================================
  {
    id: "q46-ultra",
    category: "fundacion",
    difficulty: "ultradificil",
    question: "¿Ante qué Notario Público de Lima se suscribió el acta de reconocimiento y personería legal originaria de la Cuadrilla 11 en 1935?",
    options: [
      "Ante el Notario Dr. Carlos Sotomayor en octubre de 1935",
      "Ante el Notario Dr. Felipe Sassone en noviembre de 1936",
      "Ante el Escribano Don José Gálvez en enero de 1934",
      "Ante el Notario Don Manuel Villarán en diciembre de 1940"
    ],
    correctAnswerIndex: 0,
    explanation: "Los fundadores de la Once acudieron a la Notaría del Dr. Carlos Sotomayor para legalizar los padrones de socios fundadores y formalizar su personería ante el Directorio General de la HSMN.",
    historicalReference: "Actas Notariales de 1935 - Notaría Dr. Carlos Sotomayor, Lima."
  },
  {
    id: "q47-ultra",
    category: "catequesis",
    difficulty: "ultradificil",
    question: "¿Cómo clasifica la teología dogmática católica los tres grados de culto: a Dios, a la Virgen María y a los Santos?",
    options: [
      "Latría (adoración debida exclusivamente a Dios Uno y Trino), Hiperdulía (veneración eminente a la Virgen María como Madre de Dios) y Dulía (veneración a los Santos y Ángeles)",
      "Latría (a los santos y reliquias), Hiperdulía (al Santo Padre) y Dulía (a los sacramentos)",
      "Dulía (adoración a Dios) y Latría (a la Virgen María)",
      "Protodulía (a San José) y Megalatría (a los Apóstoles)"
    ],
    correctAnswerIndex: 0,
    explanation: "La Iglesia enseña que la Adoración (Latría) es debida sólo a Dios. A la Santísima Virgen María se le rinde Hiperdulía (veneración superior a toda criatura), y a los Santos y Ángeles se les tributa Dulía (veneración e intercesión). A San José se le reconoce además la Protodulía.",
    historicalReference: "Concilio de Trento y Catecismo de la Iglesia Católica (CIC 2132)."
  },
  {
    id: "q48-ultra",
    category: "capataces",
    difficulty: "ultradificil",
    question: "¿Cuál fue el periodo exacto de mandato del 6° Capataz de la Once, Hno. César Zanatta Vasconsuelos, y quién le sucedió en el cargo?",
    options: [
      "1998 – 2007 (9 años), y le sucedió el Hno. Moisés Goyoneche Ciudad (2008 – 2016)",
      "1987 – 1995 (8 años), y le sucedió el Hno. Alejandro Marrou Valle",
      "1971 – 1986 (15 años), y le sucedió el Hno. Ernesto Aburto Lozano",
      "2017 – 2025 (8 años), y le sucedió el Hno. Andrés Espinoza Benítez"
    ],
    correctAnswerIndex: 0,
    explanation: "El Hno. César Zanatta Vasconsuelos condujo a la Cuadrilla 11 entre 1998 y 2007 (9 años), sucediéndole en 2008 el recordado Hno. Moisés Goyoneche Ciudad.",
    historicalReference: "Cuadro Cronológico Oficial de Capataces - Cuadrilla 11 HSMN."
  },
  {
    id: "q49-ultra",
    category: "catequesis",
    difficulty: "ultradificil",
    question: "¿Cuáles son los 4 Dogmas de Fe proclamados solemnemente por la Iglesia Católica acerca de la Santísima Virgen María?",
    options: [
      "1. Maternidad Divina (Éfeso, 431), 2. Virginidad Perpetua (Letrán, 649), 3. Inmaculada Concepción (Pío IX, 1854), 4. Asunción en Cuerpo y Alma (Pío XII, 1950)",
      "1. Corredentora universal, 2. Reina de las Victorias, 3. Mediadora de Gracias, 4. Señora de la Nube",
      "1. Nacimiento en Belén, 2. Madre al pie de la Cruz, 3. Aparición en Pachacamilla, 4. Coronación Pontificia",
      "1. Bautismo de Gracia, 2. Santa Eucaristía, 3. Voto de Castidad, 4. Madre de la Iglesia"
    ],
    correctAnswerIndex: 0,
    explanation: "Los 4 dogmas marianos son verdades divinamente reveladas: María es Madre de Dios (Theotokos), siempre Virgen, concebida sin mancha de pecado original, y asunta gloriosamente al Cielo en cuerpo y alma.",
    historicalReference: "Magisterio Pontificio y Catecismo de la Iglesia Católica (CIC 490-507, 966)."
  },
  {
    id: "q50-ultra",
    category: "fundacion",
    difficulty: "ultradificil",
    question: "¿Quién pintó el sagrado mural original del Señor de los Milagros en 1651 en Pachacamilla y qué acontecimiento prodigioso ocurrió el 13 de noviembre de 1655?",
    options: [
      "Un esclavo angoleño llamado Benito de Angola (o Pedro Dalcón); el sismo de 1655 colapsó templos y viviendas en Lima, pero el frágil muro de adobe permaneció milagrosamente intacto",
      "El pintor virreinal Mateo Pérez de Alesio; el sismo abrió una grieta dorada en el muro",
      "San Martín de Porres; el sismo floreció el jardín del convento dominico",
      "El virrey Conde de Lemos; el sismo respetó únicamente las pinturas de oro"
    ],
    correctAnswerIndex: 0,
    explanation: "En 1651, un humilde esclavo angoleño pintó al Cristo crucificado en una pared rústica de Pachacamilla. El violento terremoto del 13 de noviembre de 1655 derribó casi toda la ciudad virreinal, pero el débil muro de barro quedó en pie sin una sola fisura.",
    historicalReference: "Crónicas Virreinales del Santuario de las Nazarenas (Padre Alonso Messia S.J.)."
  },
  {
    id: "q51-ultra",
    category: "catequesis",
    difficulty: "ultradificil",
    question: "¿Qué define con rigor teológico el dogma de la 'Transustanciación' proclamado en el Concilio de Trento sobre la Sagrada Eucaristía?",
    options: [
      "La conversión total de la sustancia del pan en el Cuerpo de Cristo y de la sustancia del vino en su Sangre, permaneciendo únicamente las especies o accidentes sensibles (sabor, color, textura)",
      "La presencia simbólica o metafórica de Jesús en el recuerdo de la Última Cena",
      "La coexistencia simultánea de la materia física del pan con el cuerpo de Cristo (Consustanciación)",
      "Una bendición de los alimentos eucarísticos que no altera la sustancia"
    ],
    correctAnswerIndex: 0,
    explanation: "Por las palabras de la consagración pronunciadas por el sacerdote 'in persona Christi', opera el milagro de la transustanciación: la sustancia entera del pan y del vino se transforma realmente en el Cuerpo, Sangre, Alma y Divinidad de Jesucristo.",
    historicalReference: "Concilio de Trento (Sesión XIII, can. 2) y CIC 1376."
  },
  {
    id: "q52-ultra",
    category: "capitulos",
    difficulty: "ultradificil",
    question: "¿En qué año y tras qué terremoto promovió Don Sebastián de Antuñano la primera procesión del lienzo del Señor de los Milagros por las calles de Lima?",
    options: [
      "En 1687, tras el terremoto y tsunami del 20 de octubre que destruyó Lima y el Callao",
      "En 1746, inmediatamente tras el maremoto que inundó el puerto del Callao",
      "En 1655, luego del primer temblor de Pachacamilla",
      "En 1771, con la inauguración del templo actual de las Madres Nazarenas Carmelitas"
    ],
    correctAnswerIndex: 0,
    explanation: "El 20 de octubre de 1687, tras un devastador terremoto y tsunami, Don Sebastián de Antuñano mandó confeccionar una réplica en lienzo del Cristo de Pachacamilla y la Virgen de la Nube para sacarla en la primera procesión de rogativa por las calles de Lima.",
    historicalReference: "Historia del Culto al Señor de los Milagros de Nazarenas."
  },
  {
    id: "q53-ultra",
    category: "catequesis",
    difficulty: "ultradificil",
    question: "¿Cuáles son las 7 Palabras que Jesucristo pronunció en la Cruz según los Santos Evangelios?",
    options: [
      "1. 'Padre, perdónalos porque no saben lo que hacen', 2. 'Hoy estarás conmigo en el paraíso', 3. 'Mujer, he ahí a tu hijo; hijo, he ahí a tu madre', 4. 'Dios mío, Dios mío, ¿por qué me has abandonado?', 5. 'Tengo sed', 6. 'Todo está consumado', 7. 'Padre, en tus manos encomiendo mi espíritu'",
      "Las 7 peticiones de la oración dominical del Padre Nuestro",
      "Las 7 Bienaventuranzas proclamadas en el Sermón de la Montaña",
      "Los 7 consejos evangélicos a los doce apóstoles"
    ],
    correctAnswerIndex: 0,
    explanation: "Las 7 Palabras del Señor en la Cruz sintetizan el perdón a los verdugos, la promesa de salvación al buen ladrón, la entrega de María como Madre nuestra, el desamparo redentor, la sed de almas, el cumplimiento de las Escrituras y la entrega filial al Padre.",
    historicalReference: "Evangelios de San Mateo, San Marcos, San Lucas y San Juan."
  },
  {
    id: "q54-ultra",
    category: "identidad",
    difficulty: "ultradificil",
    question: "¿Cuál es la función técnica y disciplinaria del 'Primer Toque' (Llamada) y del 'Segundo Toque' (Mando) en el martillo de plata de las Sagradas Andas?",
    options: [
      "El 1.er toque previene y exige a los 36 cargadores calzar el hombro y templar el madero; el 2.º golpe ejecuta al unísono la alzada o la posada sobre las horquillas",
      "El 1.er toque apaga las velas de cera y el 2.º toque ordena a la banda tocar marinera",
      "El 1.er toque bendice a los devotos y el 2.º toque indica cambio de capataz",
      "El 1.er toque pide limosna y el 2.º toque inicia la marcha fúnebre"
    ],
    correctAnswerIndex: 0,
    explanation: "En la disciplina nazarena, el primer toque de martillo es la 'Llamada' (alerta de posición y templado uniforme de hombros), y el segundo golpe seco es la orden ejecutiva de alzada o posada para evitar cabeceos en las andas.",
    historicalReference: "Reglamento Interno y Manual de Disciplina Procesional HSMN."
  },
  {
    id: "q55-ultra",
    category: "catequesis",
    difficulty: "ultradificil",
    question: "¿Cuáles son los 3 Estados de la única Iglesia de Cristo según el dogma de la 'Comunión de los Santos'?",
    options: [
      "Iglesia Militante o Peregrina (fieles en la Tierra), Iglesia Purgante o Paciente (almas en el Purgatorio) e Iglesia Triunfante (bienaventurados en el Cielo)",
      "Iglesia Católica Romana, Iglesia Ortodoxa e Iglesias Orientales",
      "El Papa, el Colegio Cardenalicio y los Obispos Diocesanos",
      "Sacerdocio ministerial, vida consagrada y laicos asociados"
    ],
    correctAnswerIndex: 0,
    explanation: "La Iglesia existe en tres estados interconectados espiritualmente por la caridad y la oración: los que caminan en la tierra luchando contra el pecado (Militante), los que se purifican antes de entrar al Cielo (Purgante), y los que ya gozan de la visión beatífica de Dios (Triunfante).",
    historicalReference: "Constitución Dogmática 'Lumen Gentium' (Concilio Vaticano II, n. 49-51)."
  },
  {
    id: "q56-ultra",
    category: "capataces",
    difficulty: "ultradificil",
    question: "¿Qué Capataz de la Cuadrilla 11 encabezó la gestión y carguíos durante las Bodas de Oro (50 aniversario) en el periodo 1987–1995?",
    options: [
      "Hno. Alejandro Marrou Valle",
      "Hno. Víctor Olguín Rosas",
      "Hno. Isaías Villanueva Soriano",
      "Hno. Moisés Goyoneche Ciudad"
    ],
    correctAnswerIndex: 0,
    explanation: "El recordado 4° Capataz, Hno. Alejandro Marrou Valle, lideró la Cuadrilla 11 entre 1987 y 1995, conmemorando las Bodas de Oro y fortaleciendo la unión fraterna.",
    historicalReference: "Libro de Oro y Reseña de Capataces de la Cuadrilla 11 HSMN."
  },
  {
    id: "q57-ultra",
    category: "catequesis",
    difficulty: "ultradificil",
    question: "¿Cuál es la diferencia teológica fundamental entre los '7 Dones del Espíritu Santo' y los '12 Frutos del Espíritu Santo'?",
    options: [
      "Los Dones son hábitos permanentes infundidos en el alma que la hacen dócil a Dios (Sabiduría, Ciencia, Piedad, etc.); los Frutos son perfecciones y actos maduros producidos por el Espíritu en quien vive en gracia (Caridad, Gozo, Paz, Paciencia, etc.)",
      "Los Dones se reciben en el Matrimonio y los Frutos en la Orden Sacerdotal",
      "Los Dones son solo para los Santos y los Frutos para los Ángeles",
      "No existe diferencia; son dos formas sinónimas de nombrar los 10 Mandamientos"
    ],
    correctAnswerIndex: 0,
    explanation: "Los 7 dones del Espíritu Santo perfeccionan las virtudes en el creyente haciéndolo receptivo a la acción divina; los 12 frutos (Gálatas 5, 22-23 en la Vulgata) son el resultado visible de la gracia de Dios obrando en la vida cotidiana del cristiano.",
    historicalReference: "Epístola a los Gálatas (Gál 5, 22-23) y Suma Teológica (Santo Tomás de Aquino, I-II, q. 68-70)."
  }
];

export const GLOSSARY_TERMS = [
  {
    term: "La Guardada del 2000",
    definition: "Jornada histórica presidida por José Soto Parra, caracterizada por las fotografías por sectores frente al mural del Altar Mayor de Nazarenas, el padrinazgo de Monseñor Salvador Piñeiro y charlas espirituales previas."
  },
  {
    term: "\"El Caballito\" (1972)",
    definition: "Célebre carguío de costado realizado en octubre de 1972 frente al Gran Hotel Bolívar durante un congreso diplomático internacional, televisado a nivel mundial."
  },
  {
    term: "Guardada de 1970 (Sanción memorable)",
    definition: "Episodio histórico del 28 de octubre de 1970 en el que el Primer Sector (Capataz Isaías Villanueva) imprimió un paso tan festivo que motivó la sanción del Directorio General por 'haber bailado las Sagradas Andas' suspendiendo el turno del 1 de noviembre."
  },
  {
    term: "Andas del Señor",
    definition: "Estructura procesional de madera de caoba y plata labrada sobre la que reposa el lienzo del Cristo de Pachacamilla y la Virgen de la Nube."
  },
  {
    term: "Capataz",
    definition: "Hermano de mayor jerarquía procesional. Responsable del mando supremo en la jornada de carga, la sincronización del paso, las órdenes de alzada y posada, y la seguridad de las andas."
  },
  {
    term: "Subcapataz",
    definition: "Segundo al mando. Controla las filas posteriores y laterales, asegura el balance de los sectores y asume la dirección en relevo del Capataz."
  },
  {
    term: "Martillazo",
    definition: "Toque ceremonial y operativo que da el martillero o invitado de honor en el martillo de plata ubicado al frente de las andas para ordenar la levantada (alzada) o detención (posada)."
  },
  {
    term: "Tallado",
    definition: "Medición milimétrica de la estatura del cargador para asignarlo con precisión matemática a los cuartones y sectores correspondientes, garantizando un reparto equitativo del peso."
  },
  {
    term: "Sectores",
    definition: "Divisiones de cargadores que integran una cuadrilla. Cada sector entra de manera rotativa a las andas durante el recorrido de la jornada procesional."
  },
  {
    term: "Carguío / Jornada",
    definition: "Tramo del recorrido oficial asignado a una cuadrilla específica para portar en hombros las Sagradas Andas."
  },
  {
    term: "Horquilla",
    definition: "Soporte de madera o metal usado por los hermanos horquilleros para sostener las andas en los descansos o paradas momentáneas."
  },
  {
    term: "Padrino de Honor",
    definition: "Personalidad distinguida a quien la cuadrilla concede la bendición inaugural o el martillazo de honor en conmemoraciones trascendentales."
  },
  {
    term: "Mayordomía General",
    definition: "Órgano supremo de gobierno eclesiástico y laico de la Hermandad del Señor de los Milagros de Nazarenas."
  }
];
