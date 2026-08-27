import { HistoricalChapter, Capataz, DirectiveMember, HistoricalFigure, Flashcard, QuizQuestion } from '../types';

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
      "Mantuvo la unidad y el rigor técnico en las jornadas procesionales."
    ],
    context: "Periodo de continuidad y preservación de las tradiciones fundacionales."
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
      "Modernizó la administración interna e impulsó la formación de nuevos sectores.",
      "Consolidó el prestigio de la cuadrilla en guardadas y homenajes especiales."
    ],
    context: "Etapa de notable expansión y fortalecimiento de la hermandad íntima."
  },
  {
    id: 4,
    orderNumber: 4,
    period: "1987 – 1995",
    startYear: 1987,
    endYear: 1995,
    name: "Alejandro Marrufo Valle",
    fullName: "Hno. Alejandro Marrufo Valle",
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
      "Impulsó la renovación generacional de cargadores y mejoras en el local social."
    ],
    context: "Transición de milenio con gran afluencia de jóvenes hermanos nazarenos."
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
    answer: "Porque desde sus inicios acogió a hermanos humildes y amigos sinceros, caracterizados por una profunda comprensión y afecto mutuo.",
    hint: "Unión fraterna y cercanía sincera entre sus hermanos de color y amigos.",
    explanation: "El trato cariñoso, la humildad y la sólida amistad fraternal inspiraron el nombre 'Los Íntimos'.",
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
    answer: "1. Pedro Mina (1935-67) -> 2. Isaías Villanueva (1968-70) -> 3. Ernesto Aburto (1971-86) -> 4. Alejandro Marrufo (1987-95) -> 5. Víctor Olguín (1996-98) -> 6. César Zanatta (1998-2007) -> 7. Moisés Goyoneche (2008-16) -> 8. Andrés Espinoza (2017-25) -> 9. Wilbert Bazo (2026+).",
    hint: "Mina, Villanueva, Aburto, Marrufo, Olguín, Zanatta, Goyoneche, Espinoza, Bazo.",
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
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    category: "fundacion",
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
    question: "¿Quién fue el fundador principal y primer Capataz de la Cuadrilla 11?",
    options: [
      "Andrés Carrasco León",
      "José Leonarte",
      "Pedro Mina Parreño",
      "Fernando Rodríguez Soto"
    ],
    correctAnswerIndex: 2,
    explanation: "Pedro Mina Parreño fue el joven aspirante que organizó al grupo y ejerció como primer Capataz durante 32 años (1935-1967).",
    historicalReference: "Capítulos 2, 6 y Cronología de Capataces."
  },
  {
    id: "q3",
    category: "fundacion",
    question: "¿De qué cuadrilla procedía el grupo de aspirantes que originó la Cuadrilla 11 al haber exceso de cupos?",
    options: [
      "Primera Cuadrilla",
      "Quinta Cuadrilla",
      "Décima Cuadrilla",
      "Tercera Cuadrilla"
    ],
    correctAnswerIndex: 0,
    explanation: "Eran aspirantes considerados excedentes en la Primera Cuadrilla entre 1933 y 1934.",
    historicalReference: "Capítulo 2: Nace la idea de una nueva cuadrilla."
  },
  {
    id: "q4",
    category: "fundacion",
    question: "¿Qué Mayordomo General de la HSMN autorizó formalmente la creación de la Décima Primera Cuadrilla en 1935?",
    options: [
      "Don Pedro Beltrán Espantoso",
      "Don Fernando Rodríguez Soto",
      "Don Andrés Carrasco León",
      "Don Luis Solís García"
    ],
    correctAnswerIndex: 1,
    explanation: "Don Fernando Rodríguez Soto encabezaba la Mayordomía de la Hermandad y aceptó la formación bajo estrictos requisitos.",
    historicalReference: "Capítulo 5: La Mayordomía da su aprobación."
  },
  {
    id: "q5",
    category: "capitulos",
    question: "¿Qué Capataz y qué cuadrilla cedió parte de su turno procesional para que la Once pudiera debutar?",
    options: [
      "José Leonarte (Patrón de Andas)",
      "Andrés Carrasco León (5.ª Cuadrilla)",
      "Isaías Villanueva (2.ª Cuadrilla)",
      "Ernesto Aburto (10.ª Cuadrilla)"
    ],
    correctAnswerIndex: 1,
    explanation: "Don Andrés Carrasco León, Capataz de la 5ª Cuadrilla, cedió parte de su jornada para demostrar la destreza de la 11.",
    historicalReference: "Capítulo 7: Primer carguío."
  },
  {
    id: "q6",
    category: "capitulos",
    question: "¿Quién tuvo el honor de dar el histórico 'Primer Martillazo' el 18 de octubre de 1935?",
    options: [
      "Don Pedro Beltrán Espantoso",
      "Felipe Pinglo Alva",
      "Alejandro Villanueva",
      "Pedro Mina Parreño"
    ],
    correctAnswerIndex: 0,
    explanation: "Don Pedro Beltrán Espantoso, en su calidad de padrino de honor, recibió el martillo entregado por el patrón de andas José Leonarte.",
    historicalReference: "Capítulo 9: El primer martillazo."
  },
  {
    id: "q7",
    category: "identidad",
    question: "¿Por qué recibió el apelativo tradicional de 'Los Íntimos'?",
    options: [
      "Por haber sido fundada a puertas cerradas en un convento",
      "Porque acogió a hermanos humildes y sinceros caracterizados por el afecto mutuo y profunda amistad",
      "Por ser la cuadrilla más pequeña de la Hermandad",
      "Por haber sido bautizada exclusivamente por los sacerdotes de Nazarenas"
    ],
    correctAnswerIndex: 1,
    explanation: "Nació de la entrañable fraternidad, humildad y lealtad entre sus fundadores, amigos sinceros en su mayoría de color.",
    historicalReference: "Identidad: ¿Por qué 'Los Íntimos'?"
  },
  {
    id: "q8",
    category: "identidad",
    question: "¿Qué dos grandes personalidades del folklore y deporte peruano acompañaron el nacimiento de la Once?",
    options: [
      "Teófilo Cubillas y Chabuca Granda",
      "Alejandro Villanueva Martínez y Felipe Pinglo Alva",
      "Lolo Fernández y Augusto Polo Campos",
      "José María Arguedas y Arturo 'Zambo' Cavero"
    ],
    correctAnswerIndex: 1,
    explanation: "El maestro del fútbol Alejandro Villanueva ('Manguera') y el más grande compositor de música criolla Felipe Pinglo Alva.",
    historicalReference: "Identidad y figuras tutelares de la Cuadrilla 11."
  },
  {
    id: "q9",
    category: "capataces",
    question: "¿Quién es el Capataz actual de la Cuadrilla 11 (periodo 2026+)?",
    options: [
      "Hno. Andrés Espinoza Benítez",
      "Hno. Moisés Goyoneche Ciudad",
      "Hno. Wilbert Enrique Bazo Castillo",
      "Hno. Jorge Luis Ariza Tordoya"
    ],
    correctAnswerIndex: 2,
    explanation: "El Hno. Wilbert Enrique Bazo Castillo es el Capataz actual que encabeza el gobierno interno.",
    historicalReference: "Directiva Actual y Cronología de Capataces."
  },
  {
    id: "q10",
    category: "capataces",
    question: "¿Qué Capataz dirigió la Cuadrilla 11 durante 15 años entre 1971 y 1986?",
    options: [
      "Hno. Isaías Villanueva Soriano",
      "Hno. Ernesto Aburto Lozano",
      "Hno. Alejandro Marrufo Valle",
      "Hno. César Zanatta Vasconsuelos"
    ],
    correctAnswerIndex: 1,
    explanation: "El Hno. Ernesto Aburto Lozano gobernó las andas de la Once durante 15 años (1971-1986).",
    historicalReference: "Cronología de Capataces - 3er Capataz."
  },
  {
    id: "q11",
    category: "directiva",
    question: "¿Qué cargo ocupa el Hno. Jorge Luis Ariza Tordoya en la actual directiva?",
    options: [
      "Secretario",
      "Tesorero",
      "Sub Capataz",
      "Pro Secretario"
    ],
    correctAnswerIndex: 2,
    explanation: "El Hno. Jorge Luis Ariza Tordoya es el actual Sub Capataz.",
    historicalReference: "Gobierno Interno de la Cuadrilla 11."
  },
  {
    id: "q12",
    category: "capitulos",
    question: "¿Cuántos hermanos conformaron la lista presentada para los dos primeros sectores en el primer carguío?",
    options: [
      "100 hombres",
      "50 hombres debidamente tallados",
      "24 hombres",
      "35 hombres"
    ],
    correctAnswerIndex: 1,
    explanation: "Fueron 50 hermanos debidamente tallados, requisito riguroso para la carga de andas.",
    historicalReference: "Capítulo 7: Primer carguío."
  },
  {
    id: "q13",
    category: "capitulos",
    question: "¿Quiénes fueron los padrinos de cuadrilla en la ceremonia inaugural de 1935?",
    options: [
      "Ing. Luis Solís García y Hna. Enriqueta Cavero Revollar",
      "Don Pedro Beltrán y Hna. Rosa de Lima",
      "Don Fernando Rodríguez Soto y Hna. María Nazarena",
      "Don Andrés Carrasco y Hna. Teresa de Jesús"
    ],
    correctAnswerIndex: 0,
    explanation: "Los padrinos de cuadrilla fueron el Ing. Luis Solís García y la Hna. Enriqueta Cavero Revollar.",
    historicalReference: "Capítulo 7 y reseña histórica del 18 de octubre de 1935."
  },
  {
    id: "q14",
    category: "capataces",
    question: "¿Quién precedió inmediatamente a Wilbert Bazo Castillo como Capataz durante el periodo 2017–2025?",
    options: [
      "Hno. César Zanatta Vasconsuelos",
      "Hno. Moisés Goyoneche Ciudad",
      "Hno. Andrés Espinoza Benítez",
      "Hno. Víctor Olguín Rosas"
    ],
    correctAnswerIndex: 2,
    explanation: "El Hno. Andrés Espinoza Benítez ejerció como Capataz en el periodo 2017–2025.",
    historicalReference: "Cronología de Capataces - 8vo Capataz."
  },
  {
    id: "q15",
    category: "general",
    question: "¿En qué año celebrará la Cuadrilla 11 'Los Íntimos' su Centenario de fundación?",
    options: [
      "2030",
      "2035",
      "2040",
      "2050"
    ],
    correctAnswerIndex: 1,
    explanation: "Fundada en 1935, la Cuadrilla 11 cumplirá sus 100 años de historia en el año 2035.",
    historicalReference: "Rumbo al Centenario 1935 - 2035."
  }
];

export const GLOSSARY_TERMS = [
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
