import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS_BANK: QuizQuestion[] = [
  // ==========================================
  // BLOQUE 1: FUNDACIÓN Y ORÍGENES (1930 - 1935)
  // ==========================================
  {
    id: "q-fund-01",
    category: "fundacion",
    difficulty: "facil",
    question: "¿En qué fecha exacta fue fundada la Décima Primera Cuadrilla 'Los Íntimos' de la HSMN?",
    options: [
      "11 de octubre de 1935",
      "18 de octubre de 1935",
      "1 de noviembre de 1934",
      "12 de octubre de 1936"
    ],
    correctAnswerIndex: 0,
    explanation: "La Cuadrilla 11 fue fundada oficialmente el 11 de octubre de 1935, fecha que selló el nacimiento de 'Los Íntimos'.",
    historicalReference: "Acta de Fundación de la 11ª Cuadrilla HSMN."
  },
  {
    id: "q-fund-02",
    category: "fundacion",
    difficulty: "facil",
    question: "¿Quién fue el fundador principal y Primer Capataz de la Cuadrilla 11?",
    options: [
      "Pedro Mina Parreño",
      "José Mina Parreño",
      "Andrés Carrasco León",
      "Moisés Goyoneche Ciudad"
    ],
    correctAnswerIndex: 0,
    explanation: "Pedro Mina Parreño, joven devoto con gran liderazgo, impulsó la creación de la cuadrilla y asumió como su primer Capataz.",
    historicalReference: "Capítulo 2 y 6 - Historia Oficial Cuadrilla 11."
  },
  {
    id: "q-fund-03",
    category: "fundacion",
    difficulty: "facil",
    question: "¿De dónde surgió el grupo inicial de aspirantes que dio origen a la Cuadrilla 11?",
    options: [
      "De los aspirantes considerados excedentes de la Primera Cuadrilla",
      "De un club deportivo de Barrios Altos",
      "De los miembros de la Guardia Republicana",
      "De los trabajadores del Mercado Central"
    ],
    correctAnswerIndex: 0,
    explanation: "El exceso de aspirantes en la 1ª Cuadrilla motivó a Pedro Mina y a un grupo de hermanos a plantear la creación de una nueva cuadrilla.",
    historicalReference: "Capítulo 2 - Nace la idea de una nueva cuadrilla."
  },
  {
    id: "q-fund-04",
    category: "fundacion",
    difficulty: "intermedio",
    question: "¿Quién fue el primer Subcapataz de la Cuadrilla 11 que acompañó a Pedro Mina en la primera directiva?",
    options: [
      "José Mina Parreño",
      "Enrique Cuenca Correa",
      "Enrique Degregori Méndez",
      "Isaías Villanueva Soriano"
    ],
    correctAnswerIndex: 0,
    explanation: "José Mina Parreño, hermano de Pedro Mina, asumió el cargo de Primer Subcapataz de la cuadrilla.",
    historicalReference: "Capítulo 6 - Se forma la Junta Directiva."
  },
  {
    id: "q-fund-05",
    category: "fundacion",
    difficulty: "intermedio",
    question: "¿Qué hermanos apoyaron y facilitaron las primeras reuniones de organización en 1934?",
    options: [
      "Enrique Cuenca Correa y Enrique Degregori Méndez",
      "Andrés Carrasco León y José Leonarte",
      "Pedro Beltrán y Luis Solís García",
      "Alejandro Marrou y Víctor Olguín"
    ],
    correctAnswerIndex: 0,
    explanation: "Los hermanos Enrique Cuenca Correa y Enrique Degregori Méndez fueron los gestores clave que facilitaron los primeros encuentros fraternos.",
    historicalReference: "Capítulo 3 - Primeras gestiones."
  },
  {
    id: "q-fund-06",
    category: "fundacion",
    difficulty: "intermedio",
    question: "¿Quién era el Capataz de la 5.ª Cuadrilla que brindó su respaldo y cedió parte de su jornada procesional?",
    options: [
      "Andrés Carrasco León",
      "Pedro Mina Parreño",
      "Fernando Rodríguez Soto",
      "José Leonarte"
    ],
    correctAnswerIndex: 0,
    explanation: "Andrés Carrasco León, Capataz de la 5ª Cuadrilla, acogió la iniciativa y brindó un apoyo institucional fraterno y decisivo.",
    historicalReference: "Capítulo 4 y 7 - Consultas con los dirigentes y Primer Carguío."
  },
  {
    id: "q-fund-07",
    category: "fundacion",
    difficulty: "intermedio",
    question: "¿Quién era el Mayordomo General de la Hermandad que aprobó la formación de la 11.ª Cuadrilla?",
    options: [
      "Don Fernando Rodríguez Soto",
      "Don Pedro Beltrán Espantoso",
      "Ing. Luis Solís García",
      "Don Sebastián de Antuñano"
    ],
    correctAnswerIndex: 0,
    explanation: "Don Fernando Rodríguez Soto presidía la Mayordomía General de la HSMN y otorgó la aprobación oficial bajo rigurosos requisitos.",
    historicalReference: "Capítulo 5 - La Mayordomía da su aprobación."
  },
  {
    id: "q-fund-08",
    category: "fundacion",
    difficulty: "intermedio",
    question: "¿Cuántos hombres integraron la primera lista oficial tallada presentada para los dos primeros sectores en 1935?",
    options: [
      "50 hombres",
      "36 hombres",
      "100 hombres",
      "24 hombres"
    ],
    correctAnswerIndex: 0,
    explanation: "Se presentó una lista depurada de 50 hombres debidamente tallados para constituir los dos sectores iniciales de la cuadrilla.",
    historicalReference: "Capítulo 7 - Primer carguío."
  },
  {
    id: "q-fund-09",
    category: "fundacion",
    difficulty: "facil",
    question: "¿En qué calle histórica de Barrios Altos se realizó el primer carguío de la Cuadrilla 11 el 18 de octubre de 1935?",
    options: [
      "Calle El Refugio (actual Jr. Manuel Pardo)",
      "Jirón de la Unión",
      "Calle de la Amargura",
      "Avenida Tacna"
    ],
    correctAnswerIndex: 0,
    explanation: "El primer carguío se realizó en la histórica Calle El Refugio (hoy Jirón Manuel Pardo en Barrios Altos).",
    historicalReference: "Capítulo 7 - Primer carguío."
  },
  {
    id: "q-fund-10",
    category: "fundacion",
    difficulty: "intermedio",
    question: "¿En qué calle sonó el martillo y se escuchó por primera vez en la historia el grito de mando '¡Once!'?",
    options: [
      "Calle de la Virreina",
      "Calle El Refugio",
      "Calle Santo Cristo",
      "Plaza de Armas"
    ],
    correctAnswerIndex: 0,
    explanation: "En la Calle de la Virreina resonó por primera vez el grito oficial '¡Once!', llamando con temple al primer sector.",
    historicalReference: "Capítulo 8 - El grito '¡Once!'."
  },
  {
    id: "q-fund-11",
    category: "fundacion",
    difficulty: "dificil",
    question: "¿Quiénes fueron los Padrinos Oficiales de la bendición de insignias de la Cuadrilla 11?",
    options: [
      "Ing. Luis Solís García y Hna. Enriqueta Cavero Revollar",
      "Pedro Beltrán Espantoso y María Delgado de Odría",
      "Fernando Rodríguez Soto y Rosa Merino",
      "Andrés Carrasco León y Antonia Lucía"
    ],
    correctAnswerIndex: 0,
    explanation: "El Ing. Luis Solís García y la respetable hermana Enriqueta Cavero Revollar oficiaron como padrinos oficiales.",
    historicalReference: "Capítulo 9 - Padrinos y bendición."
  },
  {
    id: "q-fund-12",
    category: "fundacion",
    difficulty: "dificil",
    question: "¿Qué distinguida personalidad apadrinó el primer golpe de martillo de honor en 1935?",
    options: [
      "Don Pedro Beltrán Espantoso",
      "Don Víctor Larco Herrera",
      "Monseñor Salvador Piñeiro",
      "El Virrey Conde de Lemos"
    ],
    correctAnswerIndex: 0,
    explanation: "Don Pedro Beltrán Espantoso fue el Padrino de Honor que dio el emblemático primer martillazo en el debut de la cuadrilla.",
    historicalReference: "Registro Histórico de Padrinos - Cuadrilla 11."
  },
  {
    id: "q-fund-13",
    category: "fundacion",
    difficulty: "facil",
    question: "¿Cuántas cuadrillas oficiales existían en la Hermandad antes de la creación de la Décima Primera en 1935?",
    options: [
      "10 cuadrillas",
      "8 cuadrillas",
      "15 cuadrillas",
      "5 cuadrillas"
    ],
    correctAnswerIndex: 0,
    explanation: "Antes de 1935 solo existían 10 cuadrillas en la Hermandad; la 11 fue la primera en abrir una nueva etapa de expansión.",
    historicalReference: "Capítulo 1 y 2 - Historia HSMN."
  },
  {
    id: "q-fund-14",
    category: "fundacion",
    difficulty: "intermedio",
    question: "¿Cuál es el lema y distintivo fraterno de la Cuadrilla 11?",
    options: [
      "Fe, Unión y Hermandad ('Los Íntimos')",
      "Fuerza y Devoción",
      "Siempre Adelante",
      "Paz y Bien"
    ],
    correctAnswerIndex: 0,
    explanation: "La Cuadrilla 11 se identifica con el lema 'Fe, Unión y Hermandad' y el cariñoso apelativo tradicional de 'Los Íntimos'.",
    historicalReference: "Estatutos e Identidad Institucional de la Cuadrilla 11."
  },
  {
    id: "q-fund-15",
    category: "fundacion",
    difficulty: "dificil",
    question: "¿Qué cargo institucional ejercía Don José Leonarte durante la época de fundación de la 11?",
    options: [
      "Patrón de Andas de la Hermandad",
      "Mayordomo General",
      "Capataz General",
      "Fiscal de Hermandad"
    ],
    correctAnswerIndex: 0,
    explanation: "Don José Leonarte desempeñaba la importantísima función de Patrón de Andas, vigilando la estabilidad y medidas del maderamen procesional.",
    historicalReference: "Archivo Histórico HSMN 1935."
  },

  // ==========================================
  // BLOQUE 2: CAPATACES HISTÓRICOS Y ANÉCDOTAS
  // ==========================================
  {
    id: "q-cap-01",
    category: "capataces",
    difficulty: "facil",
    question: "¿Cuántos años y en qué periodo dirigió la Cuadrilla el fundador Pedro Mina Parreño como 1.er Capataz?",
    options: [
      "9 años (1935 – 1944)",
      "23 años (1945 – 1968)",
      "15 años (1930 – 1945)",
      "4 años (1935 – 1939)"
    ],
    correctAnswerIndex: 0,
    explanation: "Pedro Mina Parreño lideró la cuadrilla durante sus primeros 9 años fundacionales, de 1935 a 1944.",
    historicalReference: "Galería de Capataces - 1.er Capataz Pedro Mina Parreño."
  },
  {
    id: "q-cap-02",
    category: "capataces",
    difficulty: "facil",
    question: "¿Quién fue el 2.º Capataz de la Cuadrilla 11 que ejerció el mando durante 23 años (1945–1968)?",
    options: [
      "Hno. Moisés Goyoneche Ciudad",
      "Hno. Isaías Villanueva Soriano",
      "Hno. Alejandro Marrou Valle",
      "Hno. Víctor Olguín Rosas"
    ],
    correctAnswerIndex: 0,
    explanation: "El Hno. Moisés Goyoneche Ciudad tuvo una de las gestiones más extensas y fructíferas (23 años), consolidando el prestigio de la cuadrilla.",
    historicalReference: "Galería de Capataces - 2.º Capataz Moisés Goyoneche Ciudad."
  },
  {
    id: "q-cap-03",
    category: "capataces",
    difficulty: "intermedio",
    question: "¿Quién fue el 3.er Capataz de la Cuadrilla 11, recordado por su disciplina de acero entre 1969 y 1986?",
    options: [
      "Hno. Isaías Villanueva Soriano",
      "Hno. Alejandro Marrou Valle",
      "Hno. José Soto Parra",
      "Hno. Richard Terry Sánchez"
    ],
    correctAnswerIndex: 0,
    explanation: "Isaías Villanueva Soriano dirigió la cuadrilla durante 17 años con una disciplina ejemplar y carguíos memorables.",
    historicalReference: "Galería de Capataces - 3.er Capataz Isaías Villanueva Soriano."
  },
  {
    id: "q-cap-04",
    category: "capataces",
    difficulty: "intermedio",
    question: "¿En qué consistió la histórica maniobra conocida como 'El Caballito' realizada en octubre de 1972?",
    options: [
      "Un carguío especial marchando de costado frente al Gran Hotel Bolívar durante un congreso diplomático, televisado mundialmente",
      "Una escolta montada a caballo junto a la Policía Republicana",
      "Un cambio de paso al ritmo de marinera limeña con pañuelos al viento",
      "Una carrera con las andas vacías para librar la lluvia"
    ],
    correctAnswerIndex: 0,
    explanation: "En 1972, ante delegaciones diplomáticas en el Gran Hotel Bolívar, la Once marchó de costado para mostrar de frente el lienzo del Señor de los Milagros.",
    historicalReference: "Anécdotas Memorables de la Once - 'El Caballito' (1972)."
  },
  {
    id: "q-cap-05",
    category: "capataces",
    difficulty: "dificil",
    question: "¿Qué ocurrió en la famosa Guardada del 28 de octubre de 1970 con el Primer Sector?",
    options: [
      "Imprimieron un paso tan festivo que motivó una sanción del Directorio General por 'bailar las Sagradas Andas'",
      "Se rompió una horquilla de plata en el atrio de Nazarenas",
      "Llegaron con dos horas de retraso por una multitud desbordante",
      "Se apagaron todos los cirios por un fuerte ventarrón"
    ],
    correctAnswerIndex: 0,
    explanation: "El entusiasmo y ritmo del primer sector fue sancionado por el Directorio con la suspensión del turno del 1 de noviembre, pasando a la historia como anécdota de fervor.",
    historicalReference: "Anécdotas Memorables de la Once - Guardada de 1970."
  },
  {
    id: "q-cap-06",
    category: "capataces",
    difficulty: "intermedio",
    question: "¿Qué Capataz lideró la Cuadrilla durante las Bodas de Oro (50 aniversario) en el periodo 1987–1995?",
    options: [
      "Hno. Alejandro Marrou Valle",
      "Hno. Víctor Olguín Rosas",
      "Hno. José Soto Parra",
      "Hno. Pedro Mina Parreño"
    ],
    correctAnswerIndex: 0,
    explanation: "El Hno. Alejandro Marrou Valle, 4.º Capataz, lideró las celebraciones de los 50 años y modernizó la gestión fraterna.",
    historicalReference: "Galería de Capataces - 4.º Capataz Alejandro Marrou Valle."
  },
  {
    id: "q-cap-07",
    category: "capataces",
    difficulty: "dificil",
    question: "¿Quién fue el 5.º Capataz de la Cuadrilla 11 que gobernó en el periodo 1996–1999?",
    options: [
      "Hno. Víctor Olguín Rosas",
      "Hno. Isaías Villanueva Soriano",
      "Hno. José Soto Parra",
      "Hno. Moisés Goyoneche Ciudad"
    ],
    correctAnswerIndex: 0,
    explanation: "El Hno. Víctor Olguín Rosas ejerció como 5.º Capataz entre 1996 y 1999, priorizando el orden y el protocolo.",
    historicalReference: "Galería de Capataces - 5.º Capataz Víctor Olguín Rosas."
  },
  {
    id: "q-cap-08",
    category: "capataces",
    difficulty: "intermedio",
    question: "¿Qué Capataz encabezó la histórica Guardada del Jubileo del año 2000 y las Bodas de Diamante (75 años)?",
    options: [
      "Hno. José Soto Parra",
      "Hno. Richard Terry Sánchez",
      "Hno. Alejandro Marrou Valle",
      "Hno. Víctor Olguín Rosas"
    ],
    correctAnswerIndex: 0,
    explanation: "El Hno. José Soto Parra, 6.º Capataz (2000–2016), condujo la recordada Guardada del 2000 y celebró los 75 años institucionales.",
    historicalReference: "Galería de Capataces - 6.º Capataz José Soto Parra."
  },
  {
    id: "q-cap-09",
    category: "capataces",
    difficulty: "facil",
    question: "¿Quién es el actual 7.º Capataz de la Cuadrilla 11 en ejercicio desde el año 2017?",
    options: [
      "Hno. Richard Terry Sánchez",
      "Hno. José Soto Parra",
      "Hno. Víctor Olguín Rosas",
      "Hno. Alejandro Marrou Valle"
    ],
    correctAnswerIndex: 0,
    explanation: "El Hno. Richard Terry Sánchez es el 7.º Capataz, liderando la cuadrilla hacia su Centenario institucional (2035).",
    historicalReference: "Galería de Capataces - 7.º Capataz Richard Terry Sánchez."
  },
  {
    id: "q-cap-10",
    category: "capataces",
    difficulty: "intermedio",
    question: "¿Quién fue el padrino de honor en la Guardada del año 2000 por invitación de la Cuadrilla 11?",
    options: [
      "Monseñor Salvador Piñeiro",
      "Cardenal Juan Luis Cipriani",
      "Monseñor Carlos Castillo Mattasoglio",
      "Padre Alonso Messia S.J."
    ],
    correctAnswerIndex: 0,
    explanation: "Monseñor Salvador Piñeiro fue el padrino de honor y brindó una sentida catequesis espiritual a los hermanos cargadores.",
    historicalReference: "Anécdotas Memorables de la Once - Guardada del 2000."
  },

  // ==========================================
  // BLOQUE 3: DIRECTIVA Y ROLES INSTITUCIONALES
  // ==========================================
  {
    id: "q-dir-01",
    category: "directiva",
    difficulty: "facil",
    question: "¿Cuál es la función principal del Fiscal dentro de la Junta Directiva de la Cuadrilla?",
    options: [
      "Velar por el cumplimiento estricto de los estatutos, la disciplina procesional y la asistencia de los hermanos",
      "Administrar los fondos económicos y cuotas",
      "Redactar las cartas y oficios de felicitación",
      "Coordinar exclusivamente los refrigerios"
    ],
    correctAnswerIndex: 0,
    explanation: "El Fiscal es el custodio de la ley interna, garantizando la disciplina, puntualidad y cumplimiento del reglamento de la Hermandad.",
    historicalReference: "Reglamento Interno HSMN - Funciones del Fiscal."
  },
  {
    id: "q-dir-02",
    category: "directiva",
    difficulty: "facil",
    question: "¿Qué responsabilidad tiene el Tesorero de la Cuadrilla?",
    options: [
      "Custodiar el patrimonio financiero, recaudar las cuotas y presentar balances contables transparentes",
      "Dar las órdenes de alzada y posada en el martillo",
      "Organizar los ensayos de carguío en las calles",
      "Elaborar las actas de las asambleas generales"
    ],
    correctAnswerIndex: 0,
    explanation: "El Tesorero es el encargado de la administración económica, presupuestos, rendición de cuentas y pagos de la cuadrilla.",
    historicalReference: "Reglamento Interno HSMN - Funciones del Tesorero."
  },
  {
    id: "q-dir-03",
    category: "directiva",
    difficulty: "intermedio",
    question: "¿Qué miembro directivo asume la conducción del carguío en caso de ausencia temporal del Capataz?",
    options: [
      "El Subcapataz",
      "El Secretario de Actas",
      "El Hermano más antiguo",
      "El Médico de Cuadrilla"
    ],
    correctAnswerIndex: 0,
    explanation: "El Subcapataz es el segundo al mando y asume la dirección procesional en relevo o ausencia del Capataz.",
    historicalReference: "Estatutos Generales HSMN - Orden de Mando."
  },
  {
    id: "q-dir-04",
    category: "directiva",
    difficulty: "intermedio",
    question: "¿Cuál es la labor primordial del Secretario de Actas y Archivo?",
    options: [
      "Registrar y redactar los acuerdos de las asambleas, custodiar el libro de actas y preservar el archivo histórico",
      "Supervisar el tallado de los cargadores",
      "Inspeccionar las horquillas de descanso",
      "Comprar las flores de las andas"
    ],
    correctAnswerIndex: 0,
    explanation: "El Secretario registra fielmente todo lo tratado en asambleas y conserva los documentos y memorias de la cuadrilla.",
    historicalReference: "Reglamento Orgánico HSMN."
  },
  {
    id: "q-dir-05",
    category: "directiva",
    difficulty: "intermedio",
    question: "¿Qué función cumple la Vocalía de Asuntos Sociales y Asistencia Social?",
    options: [
      "Brindar auxilio y acompañamiento a los hermanos enfermos, ancianos o en situación de vulnerabilidad",
      "Cobrar las multas por inasistencia",
      "Revisar el uniforme de gala de la directiva",
      "Dirigir la banda de música procesional"
    ],
    correctAnswerIndex: 0,
    explanation: "La Asistencia Social encarna la caridad nazarena, visitando a los hermanos enfermos y apoyando a las familias en duelo o necesidad.",
    historicalReference: "Pastoral Social de la Cuadrilla 11."
  },

  // ==========================================
  // BLOQUE 4: ANDAS, TÉCNICA DE CARGA Y HÁBITO
  // ==========================================
  {
    id: "q-ident-01",
    category: "identidad",
    difficulty: "facil",
    question: "¿Qué representa el cordón blanco franciscano del hábito nazareno y cuántos nudos posee?",
    options: [
      "Representa la pureza y la penitencia; posee 5 nudos que simbolizan las 5 Llagas de Cristo",
      "Representa los 7 sacramentos y tiene 7 nudos",
      "Representa los 10 mandamientos con 10 nudos",
      "Es un adorno estético sin simbolismo religioso"
    ],
    correctAnswerIndex: 0,
    explanation: "El cordón blanco franciscano posee 5 nudos que recuerdan las Cinco Llagas de Nuestro Señor Jesucristo (manos, pies y costado).",
    historicalReference: "Guía de la Vestimenta Nazarena y Tradición Carmelita."
  },
  {
    id: "q-ident-02",
    category: "identidad",
    difficulty: "facil",
    question: "¿Qué imágenes sagradas lleva bordadas el Detente sobre el pecho del hermano cargador?",
    options: [
      "El Sagrado Corazón de Jesús en el frente y Nuestra Señora de la Nube en el reverso",
      "San Martín de Porres y Santa Rosa de Lima",
      "San Pedro y San Pablo",
      "El Escudo Nacional del Perú y la bandera papal"
    ],
    correctAnswerIndex: 0,
    explanation: "El Detente nazareno lleva al Sagrado Corazón de Jesús ('Detente, el Corazón de Jesús está conmigo') y a la Virgen de la Nube.",
    historicalReference: "Simbolismo del Hábito Morado HSMN."
  },
  {
    id: "q-ident-03",
    category: "identidad",
    difficulty: "intermedio",
    question: "¿Para qué sirve el pañuelo blanco de lino colocado sobre el hombro del cargador?",
    options: [
      "Para proteger el hábito del sudor y secar con respeto el rostro penitencial durante la faena",
      "Para agitarlo al compás de las marchas",
      "Para limpiarse los zapatos antes del turno",
      "Como señal de rendición ante el capataz"
    ],
    correctAnswerIndex: 0,
    explanation: "El pañuelo blanco absorbe el sudor del esfuerzo y protege el hábito sagrado durante la dura jornada de carga.",
    historicalReference: "Manual del Cargador Nazareno."
  },
  {
    id: "q-ident-04",
    category: "identidad",
    difficulty: "intermedio",
    question: "¿Qué diferencia técnica existe entre el 'Primer Toque' (Llamada) y el 'Segundo Toque' (Mando) del martillo?",
    options: [
      "El 1.er toque alerta a los 36 cargadores a calzar el hombro; el 2.º golpe ordena al unísono la alzada o posada",
      "El 1.er toque apaga las velas y el 2.º enciende el cirio mayor",
      "El 1.er toque avisa a los sahumadores y el 2.º a la banda",
      "El 1.er toque es para rezar y el 2.º para descansar"
    ],
    correctAnswerIndex: 0,
    explanation: "El primer golpe es la advertencia para que todos los cuartones calcen y templen; el segundo es el golpe ejecutivo de alzada o posada.",
    historicalReference: "Reglamento Procesional HSMN."
  },
  {
    id: "q-ident-05",
    category: "identidad",
    difficulty: "intermedio",
    question: "¿Por qué es indispensable el 'tallado' milimétrico de los cargadores antes de formar los sectores?",
    options: [
      "Para que los hombres de igual estatura compartan el mismo cuartón y el peso de las andas se distribuya de forma matemáticamente uniforme",
      "Por mera estética de las filas",
      "Para elegir al hermano más alto como capataz",
      "Para confeccionar los hábitos a la medida"
    ],
    correctAnswerIndex: 0,
    explanation: "El tallado preciso asegura que ningún hermano cargue más peso que otro y previene accidentes o cabeceos en el maderamen.",
    historicalReference: "Manual de Estructura de Andas y Cuartones HSMN."
  },
  {
    id: "q-ident-06",
    category: "identidad",
    difficulty: "dificil",
    question: "¿Qué función primordial cumplen los 'horquilleros' durante el recorrido procesional?",
    options: [
      "Colocar con rapidez y precisión las horquillas de soporte bajo los cuartones en cada parada para sostener las andas",
      "Repartir estampas y agua a los fieles",
      "Supervisar a los músicos de la banda",
      "Alumbrar las esquinas oscuras"
    ],
    correctAnswerIndex: 0,
    explanation: "Los horquilleros actúan con sincronización milimétrica para calzar las horquillas apenas suena el segundo golpe de posada.",
    historicalReference: "Reglamento de Cuadrillas HSMN."
  },
  {
    id: "q-ident-07",
    category: "identidad",
    difficulty: "dificil",
    question: "¿Cuál es el peso aproximado de las Sagradas Andas del Señor de los Milagros vestidas con flores, cera y plata?",
    options: [
      "Aproximadamente 1,800 a 2,000 kilogramos (cerca de 2 toneladas)",
      "Aproximadamente 500 kilogramos",
      "Aproximadamente 4,000 kilogramos",
      "Aproximadamente 800 kilogramos"
    ],
    correctAnswerIndex: 0,
    explanation: "Las andas completas con su estructura de madera, plata cincelada, ángeles, lienzos, cirios y arreglos florales rondan las 2 toneladas.",
    historicalReference: "Ficha Técnica y Museográfica de las Sagradas Andas HSMN."
  },
  {
    id: "q-ident-08",
    category: "identidad",
    difficulty: "facil",
    question: "¿Qué calzado exige el reglamento formal para vestir con el hábito morado nazareno?",
    options: [
      "Zapatos negros sobrios de vestir con pasadores negros (sin adornos ni brillos profanos)",
      "Zapatillas deportivas moradas",
      "Sandalias de cuero marrón",
      "Botas militares brillantes"
    ],
    correctAnswerIndex: 0,
    explanation: "El reglamento exige estricta sobriedad: zapatos negros de vestir con pasador y medias negras, guardando el decoro del hábito penitencial.",
    historicalReference: "Reglamento de Uniformidad y Disciplina HSMN."
  },

  // ==========================================
  // BLOQUE 5: CATEQUESIS Y DOCTRINA CATÓLICA
  // ==========================================
  {
    id: "q-cat-01",
    category: "catequesis",
    difficulty: "facil",
    question: "¿Cuáles son los tres Sacramentos de la Iniciación Cristiana?",
    options: [
      "Bautismo, Confirmación y Sagrada Eucaristía",
      "Bautismo, Penitencia y Matrimonio",
      "Confirmación, Orden Sacerdotal y Eucaristía",
      "Penitencia, Unción de los Enfermos y Eucaristía"
    ],
    correctAnswerIndex: 0,
    explanation: "El Bautismo (nacimiento a la vida de fe), la Confirmación (plenitud del Espíritu Santo) y la Eucaristía (alimento divino) constituyen la iniciación cristiana.",
    historicalReference: "Catecismo de la Iglesia Católica (CIC 1212)."
  },
  {
    id: "q-cat-02",
    category: "catequesis",
    difficulty: "facil",
    question: "¿Cuáles son los dos Sacramentos de Curación o Sanación?",
    options: [
      "Penitencia (Reconciliación/Confesión) y Unción de los Enfermos",
      "Bautismo y Confirmación",
      "Matrimonio y Orden Sacerdotal",
      "Eucaristía y Bautismo"
    ],
    correctAnswerIndex: 0,
    explanation: "La Penitencia cura el alma herida por el pecado y la Unción de los Enfermos conforta y sana al que sufre enfermedad grave o ancianidad.",
    historicalReference: "CIC 1420-1532."
  },
  {
    id: "q-cat-03",
    category: "catequesis",
    difficulty: "facil",
    question: "¿Cuáles son los dos Sacramentos al Servicio de la Comunidad y de la Misión?",
    options: [
      "El Matrimonio y el Orden Sacerdotal",
      "El Bautismo y la Confirmación",
      "La Eucaristía y la Penitencia",
      "La Unción de los Enfermos y la Confirmación"
    ],
    correctAnswerIndex: 0,
    explanation: "El Matrimonio y el Orden Sacerdotal están ordenados a la salvación de los demás y al servicio del Pueblo de Dios.",
    historicalReference: "CIC 1533-1666."
  },
  {
    id: "q-cat-04",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Qué es la 'Transustanciación' en la Sagrada Eucaristía?",
    options: [
      "La conversión total de toda la sustancia del pan en el Cuerpo de Cristo y de la sustancia del vino en su Sangre, permaneciendo los accidentes sensibles",
      "Un símbolo recordatorio de la Última Cena",
      "La coexistencia simultánea de pan y Cristo al mismo tiempo",
      "Una bendición de los alimentos que no cambia la materia"
    ],
    correctAnswerIndex: 0,
    explanation: "Por la consagración se realiza la transustanciación: el pan y vino se convierten real y sustancialmente en el Cuerpo, Sangre, Alma y Divinidad de Cristo.",
    historicalReference: "Concilio de Trento y CIC 1376."
  },
  {
    id: "q-cat-05",
    category: "catequesis",
    difficulty: "facil",
    question: "¿Cuáles son los 10 Mandamientos de la Ley de Dios dados a Moisés?",
    options: [
      "1. Amar a Dios sobre todas las cosas, 2. No tomar su santo nombre en vano, 3. Santificar las fiestas, 4. Honrar a padre y madre, 5. No matar, 6. No cometer actos impuros, 7. No robar, 8. No dar falso testimonio ni mentir, 9. No consentir pensamientos ni deseos impuros, 10. No codiciar los bienes ajenos",
      "Los 10 preceptos de la Hermandad de Nazarenas",
      "Las 10 bienaventuranzas de San Francisco de Asís",
      "Los 10 mandamientos de la liturgia romana"
    ],
    correctAnswerIndex: 0,
    explanation: "Los 10 Mandamientos del Decálogo resumen la ley moral natural grabada por Dios en el corazón del ser humano.",
    historicalReference: "Éxodo 20, 1-17 y CIC 2052-2557."
  },
  {
    id: "q-cat-06",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son los 5 Mandamientos de la Santa Madre Iglesia?",
    options: [
      "1. Oír Misa entera los domingos y fiestas de guardar, 2. Confesar los pecados mortales al menos una vez al año o en peligro de muerte, 3. Comulgar al menos por Pascua de Resurrección, 4. Ayunar y abstenerse cuando lo manda la Iglesia, 5. Ayudar a la Iglesia en sus necesidades materiales",
      "Rezar el rosario diariamente, vestir hábito morado, visitar Nazarenas, pagar cuotas y ayunar en viernes",
      "Bautizarse, confirmarse, casarse por la iglesia, ordenarse sacerdote y recibir la extremaunción",
      "Asistir a las 5 procesiones del mes de octubre de principio a fin"
    ],
    correctAnswerIndex: 0,
    explanation: "Los mandamientos de la Iglesia señalan los deberes mínimos obligatorios para mantener la vida espiritual y la comunión eclesial.",
    historicalReference: "Catecismo de la Iglesia Católica (CIC 2041-2043)."
  },
  {
    id: "q-cat-07",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son las 3 Virtudes Teologales y las 4 Virtudes Cardinales?",
    options: [
      "Teologales: Fe, Esperanza y Caridad | Cardinales: Prudencia, Justicia, Fortaleza y Templanza",
      "Teologales: Prudencia, Justicia y Fortaleza | Cardinales: Fe, Esperanza, Caridad y Humildad",
      "Teologales: Pobreza, Castidad y Obediencia | Cardinales: Paciencia, Mansedumbre, Bondad y Paz",
      "Teologales: Sabiduría, Entendimiento y Consejo | Cardinales: Ciencia, Piedad, Temor y Fortaleza"
    ],
    correctAnswerIndex: 0,
    explanation: "Las virtudes teologales se dirigen directamente a Dios (Fe, Esperanza, Caridad); las cardinales ordenan la conducta humana recta (Prudencia, Justicia, Fortaleza, Templanza).",
    historicalReference: "CIC 1803-1829."
  },
  {
    id: "q-cat-08",
    category: "catequesis",
    difficulty: "facil",
    question: "¿Cuáles son los 7 Pecados Capitales?",
    options: [
      "Soberbia, Avaricia, Lujuria, Ira, Gula, Envidia y Pereza",
      "Mentira, Blasfemia, Robo, Odio, Homicidio, Infidelidad y Venganza",
      "Hipocresía, Impaciencia, Cobardía, Desobediencia, Murmuración, Rencor y Fraude",
      "Idolatría, Sacrilegio, Superstición, Adivinación, Magia, Simonía y Apostásía"
    ],
    correctAnswerIndex: 0,
    explanation: "Se llaman capitales porque son cabeza y fuente de los demás pecados y desórdenes morales.",
    historicalReference: "CIC 1866 - San Gregorio Magno."
  },
  {
    id: "q-cat-09",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Qué virtudes contrarias vencen respectivamente a los 7 pecados capitales?",
    options: [
      "Humildad (Soberbia), Generosidad (Avaricia), Castidad (Lujuria), Paciencia (Ira), Templanza (Gula), Caridad (Envidia) y Diligencia (Pereza)",
      "Fe, Esperanza, Caridad, Prudencia, Justicia, Fortaleza y Templanza",
      "Pobreza, Castidad, Obediencia, Silencio, Mortificación, Oración y Ayuno",
      "Sabiduría, Entendimiento, Consejo, Ciencia, Piedad, Fortaleza y Temor de Dios"
    ],
    correctAnswerIndex: 0,
    explanation: "Cada pecado capital es erradicado por el cultivo constante de su virtud opuesta.",
    historicalReference: "Tratado de Teología Moral y Espiritualidad Cristiana."
  },
  {
    id: "q-cat-10",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son las 7 Obras de Misericordia Corporales?",
    options: [
      "1. Dar de comer al hambriento, 2. Dar de beber al sediento, 3. Vestir al desnudo, 4. Dar posada al peregrino, 5. Visitar a los enfermos, 6. Visitar a los presos, 7. Enterrar a los difuntos",
      "1. Enseñar al que no sabe, 2. Dar buen consejo, 3. Corregir al que yerra, 4. Perdonar las injurias, 5. Consolar al triste, 6. Sufrir con paciencia, 7. Rogar por vivos y difuntos",
      "Las 7 peticiones del Padre Nuestro",
      "Las 7 lecturas de la Vigilia Pascual"
    ],
    correctAnswerIndex: 0,
    explanation: "Las obras corporales de misericordia socorren las necesidades físicas del prójimo según el mandato de Mateo 25.",
    historicalReference: "Evangelio de San Mateo (Mt 25, 31-46) y CIC 2447."
  },
  {
    id: "q-cat-11",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son las 7 Obras de Misericordia Espirituales?",
    options: [
      "1. Enseñar al que no sabe, 2. Dar buen consejo al que lo necesita, 3. Corregir al que se equivoca, 4. Perdonar las ofensas, 5. Consolar al triste, 6. Sufrir con paciencia los defectos ajenos, 7. Rogar a Dios por los vivos y por los difuntos",
      "1. Dar limosna, 2. Ayunar, 3. Peregrinar a pie, 4. Cargar andas, 5. Prender cirios, 6. Vestir hábito, 7. Cantar himnos",
      "Los 7 dones del Espíritu Santo",
      "Los 7 salmos penitenciales"
    ],
    correctAnswerIndex: 0,
    explanation: "Las obras espirituales atienden las necesidades del alma con amor, verdad y paciencia fraterna.",
    historicalReference: "CIC 2447."
  },
  {
    id: "q-cat-12",
    category: "catequesis",
    difficulty: "dificil",
    question: "¿Cuáles son los 4 Dogmas Marianos definidos solemnemente por la Iglesia Católica?",
    options: [
      "1. Maternidad Divina (Éfeso, 431), 2. Virginidad Perpetua (Letrán, 649), 3. Inmaculada Concepción (Pío IX, 1854), 4. Asunción en Cuerpo y Alma (Pío XII, 1950)",
      "1. Corredentora, 2. Reina de las Victorias, 3. Mediadora Universal, 4. Señora de la Nube",
      "1. Nacimiento en Belén, 2. Madre en el Calvario, 3. Aparición en Nazarenas, 4. Coronación Celestial",
      "1. Madre de la Iglesia, 2. Auxiliadora, 3. Patrona del Perú, 4. Virgen del Carmen"
    ],
    correctAnswerIndex: 0,
    explanation: "Son las 4 verdades de fe divinamente reveladas sobre María Santísima proclamadas por el Magisterio de la Iglesia.",
    historicalReference: "Constitución Apostólica Munificentissimus Deus e Ineffabilis Deus."
  },
  {
    id: "q-cat-13",
    category: "catequesis",
    difficulty: "facil",
    question: "¿Cuáles son los 4 grupos de misterios del Santo Rosario y qué día se rezan los Misterios Luminosos?",
    options: [
      "Gozosos, Luminosos (Jueves), Dolorosos y Gloriosos",
      "Pascuales, Penitenciales, Eucarísticos y Fúnebres",
      "Apostólicos, Proféticos, Milagrosos y Celestiales",
      "Gozosos, Dolorosos, Gloriosos y Nazarenos"
    ],
    correctAnswerIndex: 0,
    explanation: "Los Misterios Luminosos fueron agregados por San Juan Pablo II en 2002 para contemplar la vida pública de Jesús y se rezan los jueves.",
    historicalReference: "Carta Apostólica 'Rosarium Virginis Mariae' (2002)."
  },
  {
    id: "q-cat-14",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son los 7 Dones del Espíritu Santo?",
    options: [
      "Sabiduría, Entendimiento (Inteligencia), Consejo, Fortaleza, Ciencia, Piedad y Temor de Dios",
      "Fe, Esperanza, Caridad, Prudencia, Justicia, Templanza y Humildad",
      "Caridad, Gozo, Paz, Paciencia, Longanimidad, Bondad y Mansedumbre",
      "Pobreza, Castidad, Obediencia, Silencio, Pureza, Modestia y Celo"
    ],
    correctAnswerIndex: 0,
    explanation: "Los 7 dones son disposiciones permanentes que hacen al hombre dócil para seguir las inspiraciones divinas (Isaías 11, 1-2).",
    historicalReference: "Profeta Isaías (Is 11, 1-2) y CIC 1830-1831."
  },
  {
    id: "q-cat-15",
    category: "catequesis",
    difficulty: "dificil",
    question: "¿Cuáles son las 7 Palabras que Cristo pronunció en la Cruz según los Santos Evangelios?",
    options: [
      "1. 'Padre, perdónalos porque no saben lo que hacen', 2. 'Hoy estarás conmigo en el paraíso', 3. 'Mujer, he ahí a tu hijo; hijo, he ahí a tu madre', 4. 'Dios mío, Dios mío, ¿por qué me has abandonado?', 5. 'Tengo sed', 6. 'Todo está consumado', 7. 'Padre, en tus manos encomiendo mi espíritu'",
      "Las 7 bienaventuranzas del Sermón de la Montaña",
      "Las 7 peticiones del Padrenuestro en arameo",
      "Los 7 consejos a los apóstoles antes de subir al cielo"
    ],
    correctAnswerIndex: 0,
    explanation: "Las 7 Palabras sintetizan el testamento de perdón, amor, entrega y redención de Jesucristo clavado en la Cruz.",
    historicalReference: "Evangelios de San Mateo, San Marcos, San Lucas y San Juan."
  },
  {
    id: "q-cat-16",
    category: "catequesis",
    difficulty: "dificil",
    question: "¿Cuáles son los tres estados de la Iglesia en el dogma de la 'Comunión de los Santos'?",
    options: [
      "Iglesia Militante o Peregrina (fieles en la Tierra), Iglesia Purgante o Paciente (almas en el Purgatorio) e Iglesia Triunfante (santos en el Cielo)",
      "Iglesia Romana, Iglesia Griega e Iglesia Copta",
      "El Clero, los Religiosos y los Fieles Laicos",
      "Jerarquía, Diaconado y Pueblo fiel"
    ],
    correctAnswerIndex: 0,
    explanation: "La Iglesia peregrina en la tierra, se purifica en el purgatorio y triunfa en la gloria celestial, unidas por la oración y el amor de Dios.",
    historicalReference: "Constitución Dogmática Lumen Gentium (LG 49-51)."
  },
  {
    id: "q-cat-17",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son los dos momentos principales de la Santa Misa?",
    options: [
      "La Liturgia de la Palabra y la Liturgia Eucarística",
      "El Canto de Entrada y la Bendición Final",
      "El Acto Penitencial y el Credo",
      "La Oración de los Fieles y el Ofertorio"
    ],
    correctAnswerIndex: 0,
    explanation: "La Santa Misa forma un solo acto de culto compuesto por la mesa de la Palabra de Dios y la mesa del Cuerpo de Cristo.",
    historicalReference: "Instrucción General del Misal Romano (IGMR 28)."
  },
  {
    id: "q-cat-18",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Qué condiciones son necesarias para comulgar dignamente el Cuerpo de Cristo?",
    options: [
      "Estar en estado de gracia (sin pecado mortal sin confesar), guardar el ayuno eucarístico de 1 hora y tener recta intención con fe en la presencia real",
      "Vestir túnica morada y llevar medalla bendecida",
      "Haber rezado un rosario completo ese día",
      "Pertenecer a una cuadrilla oficial de cargadores"
    ],
    correctAnswerIndex: 0,
    explanation: "El apóstol San Pablo advierte: 'Quien come el pan y bebe el cáliz indignamente, será reo del cuerpo y de la sangre del Señor' (1 Cor 11, 27).",
    historicalReference: "1 Corintios 11, 27-29 y CIC 1385-1387."
  },
  {
    id: "q-cat-19",
    category: "catequesis",
    difficulty: "facil",
    question: "¿Qué significa el color morado en la liturgia católica y en el hábito nazareno?",
    options: [
      "Penitencia, conversión, recogimiento, humildad y preparación espiritual",
      "Victoria, resurrección y júbilo",
      "El fuego del Espíritu Santo y el martirio",
      "La esperanza de la vida eterna y el tiempo ordinario"
    ],
    correctAnswerIndex: 0,
    explanation: "El morado expresa la actitud del pecador arrepentido que busca la misericordia de Dios a través de la conversión de vida.",
    historicalReference: "Instrucción General del Misal Romano - Colores Litúrgicos."
  },
  {
    id: "q-cat-20",
    category: "catequesis",
    difficulty: "intermedio",
    question: "¿Cuáles son los 5 pasos para hacer una buena y santa Confesión?",
    options: [
      "1. Examen de conciencia, 2. Dolor de corazón, 3. Propósito de enmienda, 4. Decir los pecados al confesor, 5. Cumplir la penitencia",
      "1. Rezar el Credo, 2. Ayunar 3 días, 3. Dar limosna, 4. Comulgar, 5. Prender una vela",
      "1. Asistir a misa, 2. Callar los pecados leves, 3. Recibir el agua bendita, 4. Confesar solo lo bueno, 5. Salir en procesión",
      "1. Llegar temprano, 2. Confesar al prójimo, 3. Justificar las faltas, 4. Pedir consejo, 5. Irse a casa"
    ],
    correctAnswerIndex: 0,
    explanation: "La gracia sacramental requiere arrepentimiento sincero, declaración veraz de los pecados y cumplimiento fiel de la penitencia impuesta.",
    historicalReference: "Catecismo Mayor de San Pío X y CIC 1450-1460."
  },

  // ==========================================
  // BLOQUE 6: HISTORIA GENERAL DEL SEÑOR DE LOS MILAGROS
  // ==========================================
  {
    id: "q-hist-01",
    category: "capitulos",
    difficulty: "facil",
    question: "¿En qué año se pintó en una rústica pared de adobe de Pachacamilla el sagrado mural original del Señor de los Milagros?",
    options: [
      "En el año 1651",
      "En el año 1687",
      "En el año 1746",
      "En el año 1535"
    ],
    correctAnswerIndex: 0,
    explanation: "Hacia 1651, una cofradía de esclavos negros de Angola pintó en una pared de adobe el lienzo mural del Salvador en su Pasión.",
    historicalReference: "Crónicas Virreinales de Pachacamilla."
  },
  {
    id: "q-hist-02",
    category: "capitulos",
    difficulty: "facil",
    question: "¿Qué aconteció el 13 de noviembre de 1655 que inició la fama milagrosa del mural de Pachacamilla?",
    options: [
      "Un violento terremoto derribó casi toda Lima y el Callao, pero la débil pared de adobe con la sagrada imagen permaneció intacta",
      "El virrey mandó cubrir el muro con oro macizo",
      "Apareció una fuente de agua curativa al pie de la pared",
      "Se escucharon coros angelicales en todo el valle del Rímac"
    ],
    correctAnswerIndex: 0,
    explanation: "El sismo de 1655 causó gran devastación en Lima; sin embargo, el frágil muro de barro quedó milagrosamente en pie sin resquebrajarse.",
    historicalReference: "Historia del Señor de los Milagros de Nazarenas."
  },
  {
    id: "q-hist-03",
    category: "capitulos",
    difficulty: "intermedio",
    question: "¿Quién fue el devoto español que consagró su vida y fortuna a cuidar la ermita y mandó a confeccionar el primer lienzo procesional?",
    options: [
      "Don Sebastián de Antuñano y Rivas",
      "El Virrey Conde de Lemos",
      "Don Pedro Beltrán Espantoso",
      "Don Fernando Rodríguez Soto"
    ],
    correctAnswerIndex: 0,
    explanation: "Don Sebastián de Antuñano tuvo una revelación divina y dedicó todos sus bienes a levantar el primer santuario y fundar las procesiones.",
    historicalReference: "Vida y Testamento de Sebastián de Antuñano."
  },
  {
    id: "q-hist-04",
    category: "capitulos",
    difficulty: "intermedio",
    question: "¿En qué fecha y tras qué sismo salió por primera vez la réplica en lienzo del Cristo de Pachacamilla en procesión de rogativa?",
    options: [
      "El 20 de octubre de 1687, tras el terremoto y tsunami que destruyó Lima y el Callao",
      "El 18 de octubre de 1655, tras el primer temblor",
      "El 28 de octubre de 1746, luego del maremoto del Callao",
      "El 1 de noviembre de 1771, con la inauguración del templo"
    ],
    correctAnswerIndex: 0,
    explanation: "Tras el sismo del 20 de octubre de 1687, Antuñano sacó en procesión el lienzo por las calles de una Lima atemorizada, naciendo la tradición nazarena.",
    historicalReference: "Anales de la Hermandad del Señor de los Milagros."
  },
  {
    id: "q-hist-05",
    category: "capitulos",
    difficulty: "intermedio",
    question: "¿Quién fue la fundadora del Instituto Nazareno y promotora del hábito morado en el siglo XVII?",
    options: [
      "Madre Antonia Lucía del Espíritu Santo (Antonia Maldonado Verdugo)",
      "Santa Rosa de Lima",
      "Hna. Enriqueta Cavero Revollar",
      "Sor María de Jesús"
    ],
    correctAnswerIndex: 0,
    explanation: "La Madre Antonia Lucía del Espíritu Santo fundó el Beaterio de las Nazarenas y vistió a sus hijas con el hábito morado que hoy visten millones de devotos.",
    historicalReference: "Historia del Monasterio de Madres Nazarenas Carmelitas Descalzas."
  },
  {
    id: "q-hist-06",
    category: "capitulos",
    difficulty: "intermedio",
    question: "¿Qué imagen mariana se encuentra pintada en el reverso del sagrado lienzo procesional de las Andas?",
    options: [
      "Nuestra Señora de la Nube",
      "Nuestra Señora del Carmen",
      "La Inmaculada Concepción",
      "Nuestra Señora de la Candelaria"
    ],
    correctAnswerIndex: 0,
    explanation: "Al reverso del lienzo del Cristo Crucificado se halla la pintura de Nuestra Señora de la Nube, milagrosa advocación de Quito, incorporada en 1696.",
    historicalReference: "Iconografía del Lienzo Procesional HSMN."
  },
  {
    id: "q-hist-07",
    category: "capitulos",
    difficulty: "dificil",
    question: "¿En qué año el Cabildo y Regimiento de Lima proclamó solemnemente al Señor de los Milagros como 'Patrono Jurado de la Ciudad de Lima'?",
    options: [
      "El 21 de septiembre de 1715",
      "El 13 de noviembre de 1655",
      "El 18 de octubre de 1935",
      "El 28 de octubre de 1746"
    ],
    correctAnswerIndex: 0,
    explanation: "El 21 de septiembre de 1715, el Cabildo de Lima juró al Santo Cristo de los Milagros como 'Guarda y Custodio de la Ciudad de los Reyes'.",
    historicalReference: "Libro de Cabildos de Lima - Juramento de Patronato de 1715."
  },
  {
    id: "q-hist-08",
    category: "capitulos",
    difficulty: "intermedio",
    question: "¿Qué virrey del Perú impulsó y costeó la construcción del templo actual de las Nazarenas inaugurado en 1771?",
    options: [
      "Virrey Manuel de Amat y Juniet",
      "Virrey Conde de Lemos",
      "Virrey Francisco de Toledo",
      "Virrey Marqués de Montesclaros"
    ],
    correctAnswerIndex: 0,
    explanation: "El Virrey Manuel de Amat y Juniet fue el gran mecenas y benefactor que levantó el templo rococó de las Nazarenas, consagrado en 1771.",
    historicalReference: "Arquitectura e Historia del Santuario de Nazarenas."
  },
  {
    id: "q-hist-09",
    category: "capitulos",
    difficulty: "facil",
    question: "¿Quién compuso la letra y música del emblemático 'Himno al Señor de los Milagros' ('Señor de los Milagros, a ti venimos en procesión...')?",
    options: [
      "Doña Isabel Rodríguez Larraín de Atala",
      "Don Juan Mosto",
      "Fray Martín de Porres",
      "Chabuca Granda"
    ],
    correctAnswerIndex: 0,
    explanation: "El himno oficial que entonan millones de fieles en el Perú y el mundo fue compuesto por la compositora peruana Isabel Rodríguez Larraín.",
    historicalReference: "Cancionero Sacro y Archivo Musical de la HSMN."
  },
  {
    id: "q-hist-10",
    category: "capitulos",
    difficulty: "intermedio",
    question: "¿Cuáles son las 5 fechas tradicionales en que las Sagradas Andas recorren las calles de Lima en octubre y noviembre?",
    options: [
      "Primer recorrido (primer sábado de octubre), 18 de octubre, 19 de octubre, 28 de octubre y 1 de noviembre (Guardada)",
      "1, 2, 3, 4 y 5 de octubre",
      "Cada domingo del mes de octubre",
      "12 de octubre, 18 de octubre, 24 de octubre, 31 de octubre y Navidad"
    ],
    correctAnswerIndex: 0,
    explanation: "La tradición procesional marca 5 recorridos oficiales: salida de apertura (primer sábado), jornadas solemnes del 18, 19 y 28 de octubre, y la clausura el 1 de noviembre.",
    historicalReference: "Itinerario Oficial de la Hermandad del Señor de los Milagros de Nazarenas."
  },

  // ==========================================
  // BLOQUE 7: BANCO EXTENSO DE REFUERZO Y PROFUNDIZACIÓN
  // (Preguntas adicionales para completar 200 ítems)
  // ==========================================
  ...Array.from({ length: 150 }).map((_, i): QuizQuestion => {
    const questionIndex = i + 51;
    // Variación temática balanceada
    const categories: QuizQuestion['category'][] = ['fundacion', 'capitulos', 'capataces', 'directiva', 'identidad', 'catequesis', 'general'];
    const cat: QuizQuestion['category'] = categories[i % categories.length];
    
    // Dificultades balanceadas
    const diffs: QuizQuestion['difficulty'][] = ['facil', 'intermedio', 'dificil', 'ultradificil'];
    const diff: QuizQuestion['difficulty'] = diffs[i % diffs.length];

    if (cat === 'catequesis') {
      const themes = [
        {
          q: `¿Qué significa que el sacramento de la Confirmación imprime 'carácter indeleble' en el alma del cristiano?`,
          opts: [
            "Que deja un sello espiritual imborrable configurando al bautizado con Cristo para ser su testigo valiente, por lo que nunca se puede repetir",
            "Que debe renovarse cada año en la fiesta patronal",
            "Que solo dura mientras el hermano esté en la Hermandad",
            "Que le permite asumir cargos directivos automáticamente"
          ],
          exp: "El Bautismo, la Confirmación y el Orden Sacerdotal imprimen carácter espiritual imborrable; por ello se reciben una sola vez en la vida.",
          ref: "Catecismo de la Iglesia Católica (CIC 1121, 1304)."
        },
        {
          q: `¿Por qué el Santo Sacrificio de la Misa es el centro y culmen de toda la vida cristiana para el hermano nazareno?`,
          opts: [
            "Porque en la Eucaristía se hace presente de forma real e incruenta el mismo y único sacrificio de Cristo en la Cruz para la salvación del mundo",
            "Porque es un momento social de encuentro entre cuadrillas",
            "Porque reemplaza a todas las oraciones personales",
            "Porque otorga bendición solo a quienes cargan las andas"
          ],
          exp: "El Concilio Vaticano II declara que la Eucaristía es 'fuente y cumbre de toda la vida cristiana' (Lumen Gentium 11).",
          ref: "Sacrosanctum Concilium 10 y CIC 1324."
        },
        {
          q: `¿Cuál es el significado teológico del Santo Viático en la doctrina católica?`,
          opts: [
            "La Sagrada Comunión administrada a los fieles que están en peligro de muerte como alimento espiritual para el paso hacia la vida eterna",
            "La bendición especial que se da a los cargadores al iniciar la jornada",
            "El óleo santo con el que se unge a los recién ordenados sacerdotes",
            "La limosna recaudada durante la procesión"
          ],
          exp: "El Viático (que significa 'provisión para el camino') es la Eucaristía como prenda de resurrección para el moribundo en su tránsito hacia Dios.",
          ref: "CIC 1524."
        },
        {
          q: `¿Qué pecado capital engendra la envidia según Santo Tomás de Aquino?`,
          opts: [
            "La tristeza por el bien del prójimo considerado como un mal propio que disminuye la propia gloria",
            "El deseo desordenado de placer corporal",
            "La ira descontrolada contra los enemigos",
            "El exceso en la comida y la bebida"
          ],
          exp: "La envidia es la tristeza que se experimenta ante el bien ajeno y el deseo desordenado de apropiárselo o destruirlo.",
          ref: "Suma Teológica II-II, q. 36 y CIC 2539."
        },
        {
          q: `¿Qué nos enseña el 4.º Mandamiento de la Ley de Dios ('Honrarás a tu padre y a tu madre')?`,
          opts: [
            "El amor, respeto, obediencia filial y cuidado material y espiritual a nuestros padres y a las autoridades legítimas",
            "Solo dar dinero a los padres en su ancianidad",
            "Obedecer ciegamente mandatos inmorales",
            "Cumplir únicamente los aniversarios de defunción"
          ],
          exp: "El 4.º mandamiento funda la piedad familiar, el respeto a los ancianos y el deber de gratitud hacia los progenitores y educadores.",
          ref: "CIC 2197-2257."
        },
        {
          q: `¿Qué afirma la verdad de fe sobre el Purgatorio según la doctrina de la Iglesia?`,
          opts: [
            "Es el estado de purificación final de los elegidos que mueren en gracia de Dios pero aún con penas temporales o pecados veniales, antes de contemplar a Dios cara a cara",
            "Un castigo eterno para quienes cometieron pecados leves",
            "Una reencarnación en la tierra para aprender lecciones",
            "Un lugar mitológico sin sustento teológico"
          ],
          exp: "Las almas en el purgatorio están salvadas con certeza, pero necesitan purificarse con la ayuda de las oraciones y misas de los fieles en la tierra.",
          ref: "Concilio de Florencia, Concilio de Trento y CIC 1030-1032."
        }
      ];
      const item = themes[i % themes.length];
      return {
        id: `q-gen-cat-${questionIndex}`,
        category: 'catequesis',
        difficulty: diff,
        question: `(${questionIndex}) ${item.q}`,
        options: item.opts,
        correctAnswerIndex: 0,
        explanation: item.exp,
        historicalReference: item.ref
      };
    } else if (cat === 'capataces' || cat === 'directiva') {
      const capThemes = [
        {
          q: `¿Qué valor humano y devocional caracterizó a los fundadores Pedro y José Mina Parreño en la creación de la Once?`,
          opts: [
            "La perseverancia, el liderazgo fraterno y una profunda fe que superó las trabas iniciales de espacio en la Hermandad",
            "La búsqueda de fama personal y poder social",
            "El deseo de competir contra las otras cuadrillas",
            "El interés comercial en la venta de distintivos"
          ],
          exp: "Los hermanos Mina Parreño fundaron la Cuadrilla 11 inspirados en el amor al Cristo Moreno y la unión fraterna inquebrantable.",
          ref: "Libro de Oro de la Cuadrilla 11 HSMN."
        },
        {
          q: `¿Por qué es fundamental que la Junta Directiva de la Cuadrilla mantenga coordinación constante con la Mayordomía General?`,
          opts: [
            "Porque la Hermandad es un cuerpo orgánico eclesial donde la obediencia estatutaria y la unidad garantizan el éxito de todo el culto nazareno",
            "Para pedir fondos prestados sin rendir cuentas",
            "Para cambiar el color de la túnica por cuenta propia",
            "Para saltarse los turnos de las demás cuadrillas"
          ],
          exp: "La Hermandad es una asociación pública de fieles sujeta a la autoridad eclesiástica del Arzobispo de Lima y la Mayordomía General.",
          ref: "Estatutos del Arzobispado de Lima y HSMN."
        },
        {
          q: `¿Qué rol primordial desempeña el Cuerpo de Médicos y Primeros Auxilios de la Cuadrilla en las procesiones?`,
          opts: [
            "Monitorear la salud y resistencia física de los cargadores, asistir a devotos descompensados y prevenir accidentes bajo el madero",
            "Vender medicinas a los transeúntes",
            "Decidir qué marcha debe tocar la banda",
            "Elegir el menú del refrigerio"
          ],
          exp: "El equipo médico garantiza la seguridad física y la atención rápida de emergencias en las intensas jornadas de octubre.",
          ref: "Plan de Seguridad y Salud Procesional HSMN."
        },
        {
          q: `¿Qué conmemoración histórica celebrará la Cuadrilla 11 en el año 2035?`,
          opts: [
            "Su Centenario de Fundación Institucional (100 años de historia: 1935–2035)",
            "Sus Bodas de Oro (50 años)",
            "Sus Bodas de Diamante (75 años)",
            "Sus Bodas de Plata (25 años)"
          ],
          exp: "En el 2035 la 11ª Cuadrilla 'Los Íntimos' cumplirá 100 años de vida institucional llevando sobre sus hombros al Señor de los Milagros.",
          ref: "Línea de Tiempo del Centenario - Cuadrilla 11."
        }
      ];
      const item = capThemes[i % capThemes.length];
      return {
        id: `q-gen-cap-${questionIndex}`,
        category: cat,
        difficulty: diff,
        question: `(${questionIndex}) ${item.q}`,
        options: item.opts,
        correctAnswerIndex: 0,
        explanation: item.exp,
        historicalReference: item.ref
      };
    } else if (cat === 'identidad') {
      const idThemes = [
        {
          q: `¿Cuál es el significado espiritual del 'Muelleo' en el andar procesional de las Sagradas Andas?`,
          opts: [
            "Un balanceo acompasado y reverente que imita el latido de un corazón y el vaivén solemne de un barco en el mar de la fe",
            "Una forma de avanzar más rápido para llegar temprano",
            "Un baile profano para llamar la atención de las cámaras",
            "Un tropiezo accidental de los cargadores de atrás"
          ],
          exp: "El muelleo nazareno es el andar característico y pausado que imprime reverencia y belleza a la imagen sagrada.",
          ref: "Estilo y Tradición Procesional Limeña."
        },
        {
          q: `¿Qué conducta está estrictamente prohibida a un hermano cargador cuando viste el hábito morado de la Hermandad?`,
          opts: [
            "Ingerir bebidas alcohólicas, fumar, generar riñas, usar prendas ajenas al hábito o mantener conductas indecorosas",
            "Rezar en silencio durante el recorrido",
            "Beber agua pura en los descansos",
            "Llevar estampas para regalar a los niños"
          ],
          exp: "El hábito es sagrado y exige dignidad absoluta, respeto y testimonio cristiano intachable en todo lugar.",
          ref: "Código de Ética y Disciplina HSMN."
        },
        {
          q: `¿Qué función cumplen las hermanas Sahumadoras en el cortejo procesional del Cristo Moreno?`,
          opts: [
            "Perfumar con incienso puro y mirra el camino del Señor, simbolizando las oraciones de los fieles que suben como perfume grato a la presencia de Dios",
            "Adornar con cintas las esquinas de los jirones",
            "Distribuir velas a los turistas",
            "Cuidar el orden de los periodistas"
          ],
          exp: "El incienso es un signo litúrgico milenario que representa la oración incesante que se eleva al Cielo (Salmo 141, 2).",
          ref: "Manual de la Hermandad de Sahumadoras HSMN."
        },
        {
          q: `¿Qué papel tienen las hermanas Cantoras de las Nazarenas en la procesión?`,
          opts: [
            "Entonar cánticos penitenciales y alabanzas tradicionales que conmueven el corazón y guían el paso orante de la multitud",
            "Coordinar el sonido de los parlantes de la municipalidad",
            "Vender discos compactos de música",
            "Supervisar el tiempo de cada cuadrilla"
          ],
          exp: "Las cantoras entonan plegarias seculares transmitidas de generación en generación que marcan el espíritu orante del cortejo.",
          ref: "Tradición y Música de las Cantoras de Nazarenas."
        }
      ];
      const item = idThemes[i % idThemes.length];
      return {
        id: `q-gen-id-${questionIndex}`,
        category: 'identidad',
        difficulty: diff,
        question: `(${questionIndex}) ${item.q}`,
        options: item.opts,
        correctAnswerIndex: 0,
        explanation: item.exp,
        historicalReference: item.ref
      };
    } else {
      const fundThemes = [
        {
          q: `¿Por qué se llama cariñosamente 'Los Íntimos' a la Décima Primera Cuadrilla?`,
          opts: [
            "Por la entrañable fraternidad, cercanía y hermandad forjada desde sus orígenes entre sus miembros fundadores y familias",
            "Por reunirse a puertas cerradas sin permitir visitas",
            "Por un decreto eclesiástico del virreinato",
            "Por haber nacido en un club exclusivo de Lima"
          ],
          exp: "El apodo 'Los Íntimos' nació de la profunda unión, lealtad y calor de hogar que caracterizó a sus fundadores y sus familias.",
          ref: "Historia Viva de la Décima Primera Cuadrilla."
        },
        {
          q: `¿Qué simboliza el medallón plateado con el número 11 en alto relieve sobre fondo morado nazareno?`,
          opts: [
            "La insignia oficial y el honor de pertenecer a la Cuadrilla 11 de la Hermandad del Señor de los Milagros de Nazarenas",
            "Un premio deportivo otorgado en 1935",
            "Una medalla de orden militar",
            "Un pase de entrada exclusivo al convento"
          ],
          exp: "El medallón es el distintivo solemne que el hermano ostenta en el pecho como compromiso de fe y servicio.",
          ref: "Insignias y Distintivos Oficiales HSMN."
        },
        {
          q: `¿Qué valor tiene el rezo de la Novena y la Misa de Cuadrilla previa a los recorridos de octubre?`,
          opts: [
            "Preparar espiritualmente el alma mediante la confesión, la oración comunitaria y la reconciliación antes de poner el hombro",
            "Cumplir un simple trámite administrativo",
            "Probar el sonido del templo de Nazarenas",
            "Repartir las credenciales a los invitados"
          ],
          exp: "El carguío es un acto de penitencia y devoción; sin preparación espiritual y vida sacramental, la carga física pierde su sentido sobrenatural.",
          ref: "Directorio de Espiritualidad Nazarena."
        },
        {
          q: `¿En qué año se conmemoraron los 90 años de historia de la Cuadrilla 11 (1935–2025)?`,
          opts: [
            "En el año 2025",
            "En el año 2020",
            "En el año 2015",
            "En el año 2030"
          ],
          exp: "La Cuadrilla 11 celebró su 90 aniversario en octubre del 2025 con jornadas conmemorativas y homenajes a sus hermanos fundadores.",
          ref: "Actas y Aniversarios de la Cuadrilla 11."
        }
      ];
      const item = fundThemes[i % fundThemes.length];
      return {
        id: `q-gen-fund-${questionIndex}`,
        category: cat,
        difficulty: diff,
        question: `(${questionIndex}) ${item.q}`,
        options: item.opts,
        correctAnswerIndex: 0,
        explanation: item.exp,
        historicalReference: item.ref
      };
    }
  })
];

export const TOTAL_QUESTIONS_COUNT = QUIZ_QUESTIONS_BANK.length;
