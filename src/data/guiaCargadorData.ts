import { VestimentaItem, AndasPosition } from '../types';

export const VESTIMENTA_HABITO_ITEMS: VestimentaItem[] = [
  {
    id: "tunica-morada",
    name: "Túnica Morada Nazarena",
    significance: "Símbolo de penitencia, luto cristiano y consagración al Cristo del Calvario.",
    theologicalMeaning: "El color morado evoca la Pasión de Nuestro Señor Jesucristo y la penitencia cuaresmal. La túnica cubre el cuerpo del hermano despojándolo de vanidades para igualar a todos en la fe.",
    specifications: [
      "Tela de color morado nazareno reglamentario (sin brillos sintéticos ni tonalidades azuladas).",
      "Corte recto, holgado y sobrio.",
      "Largo reglamentario: debe llegar a 10-12 cm por encima del tobillo para evitar pisarlo durante el carguío.",
      "Cuello cerrado tipo camisa con botones ocultos o presillas discretas."
    ],
    commonMistakes: [
      "Usar túnicas demasiado cortas (pareciendo faldón) o arrastrando en el piso.",
      "Llevar accesorios visibles que desentonen con la sobriedad del hábito."
    ],
    icon: "Shirt"
  },
  {
    id: "cordon-blanco",
    name: "Cordón Blanco con Cinco Nudos",
    significance: "Representación de la atadura de Jesús en su Pasión y las Cinco Llagas de Cristo.",
    theologicalMeaning: "El cordón blanco ceñido a la cintura simboliza la pureza de intención, la castidad de vida y la obediencia fraterna a los estatutos de la Hermandad.",
    specifications: [
      "Cordón de hilo o algodón blanco trenzado grueso.",
      "Cinco nudos franciscanos distribuidos en las caídas laterales, que recuerdan las llagas de pies, manos y costado del Redentor.",
      "Ceñido a la cintura sobre el lado izquierdo con caídas equilibradas."
    ],
    commonMistakes: [
      "Atarlo con nudos improvisados o deshilachados.",
      "Dejar caídas desiguales que entorpezcan el paso en el madero."
    ],
    icon: "Rope"
  },
  {
    id: "detente-sagrado-corazon",
    name: "Detente y Medalla en el Pecho",
    significance: "Escudo espiritual de protección divina y testimonio público de devoción.",
    theologicalMeaning: "El 'Detente' lleva la efigie del Sagrado Corazón o del Señor de los Milagros con la inscripción '¡Detente, el Corazón de Jesús está conmigo!'. Recuerda que el corazón del cargador late al unísono con el Señor.",
    specifications: [
      "Ubicado sobre el lado izquierdo del pecho (a la altura del corazón).",
      "Bordado en hilo dorado y tela roja/morada tradicional.",
      "Acompañado de la insignia oficial de la Cuadrilla 11 'Los Íntimos'."
    ],
    commonMistakes: [
      "Portar múltiples distintivos no autorizados que recarguen el hábito.",
      "Colocarlo torcido o fuera del lado del corazón."
    ],
    icon: "Shield"
  },
  {
    id: "corbata-panuelo-blanco",
    name: "Corbata o Pañuelo Blanco",
    significance: "Elegancia litúrgica, respeto al Santísimo y absorción del sudor del esfuerzo penitencial.",
    theologicalMeaning: "El lienzo blanco alrededor del cuello evoca el sudario sagrado y la Verónica que enjugó el rostro ensangrentado de Jesús camino del Calvario.",
    specifications: [
      "Corbata blanca lisa reglamentaria o pañuelo de seda/algodón blanco al cuello.",
      "Debe mantenerse limpio y planchado para el relevo.",
      "Se permite pañuelo blanco adicional para el hombro y la frente."
    ],
    commonMistakes: [
      "Usar prendas arrugadas o con estampados comerciales.",
      "Secar el sudor de forma descuidada delante de las cámaras."
    ],
    icon: "Sparkles"
  },
  {
    id: "calzado-reglamentario",
    name: "Calzado Negro y Medias Oscuras",
    significance: "Firmeza, seguridad en el paso procesional y uniformidad comunitaria.",
    theologicalMeaning: "Pisar la tierra con humildad y paso seguro bajo el peso sagrado de las 2 toneladas de las Andas.",
    specifications: [
      "Zapatos o mocasines negros cerrados y lustrados, con suela antideslizante de goma o cuero.",
      "Medias negras o moradas oscuras sin dibujos.",
      "Prohibido calzado deportivo, zapatillas de colores o sandalias."
    ],
    commonMistakes: [
      "Llevar suelas resbaladizas que puedan provocar caídas durante una parada o frenada.",
      "Zapatos sucios o sin lustrar."
    ],
    icon: "Footprints"
  }
];

export const ANDAS_POSITIONS: AndasPosition[] = [
  {
    id: "pos-cabezas",
    name: "Las Cabezas (Delanteros)",
    location: "Parte frontal extrema de los maderos (izquierdo y derecho)",
    heightRequirement: "Estatura alta y uniforme (1.78m - 1.85m+)",
    functionDescription: "Son los ojos y la guía de las Andas. Tienen la responsabilidad de fijar la cadencia, el compás de marcha y la velocidad de avance según las indicaciones del Capataz.",
    keySkills: ["Excelente sentido del ritmo y compás", "Concentración visual absoluta en el Capataz", "Resistencia en brazos y hombro guía"],
    coordinationNotes: "Deben marchar en perfecta sincronía frontal sin apresurar ni retrasar el paso."
  },
  {
    id: "pos-cuartas",
    name: "Las Cuartas (Segundo Madero Frontal)",
    location: "Inmediatamente detrás de las Cabezas en cada madero",
    heightRequirement: "Estatura calibrada exactamente con las Cabezas",
    functionDescription: "Transmiten el impulso frontal hacia el cuerpo central del anda. Absorben el impacto inicial en el arranque y estabilizan el balanceo horizontal.",
    keySkills: ["Sincronización milimétrica con la Cabeza", "Fuerza de hombro constante", "Postura erguida"],
    coordinationNotes: "Es el nexo de transmisión de fuerza entre la cabeza y los cargadores centrales."
  },
  {
    id: "pos-traseros",
    name: "Los Traseros (Postreros)",
    location: "Extremos posteriores de los maderos",
    heightRequirement: "Estatura alta, robustez física y gran estabilidad",
    functionDescription: "Cumplen la función vital de 'freno' y anclaje de las Andas. En las bajadas, paradas repentinas o giros, soportan la inercia del peso y evitan el cabeceo posterior.",
    keySkills: ["Fuerza isométrica superior", "Reflejos de frenado", "Equilibrio dorsal"],
    coordinationNotes: "En las bajadas empinadas son el soporte principal para que el lienzo no se incline."
  },
  {
    id: "pos-esquinas",
    name: "Las Esquinas (Escuadras)",
    location: "Vértices exteriores del travesaño de las Andas",
    heightRequirement: "Estatura media-alta con gran agilidad de giro",
    functionDescription: "Garantizan que las esquinas del anda no rocen balcones coloniales, postes, cables o muros durante los virajes en calles angostas.",
    keySkills: ["Visión periférica", "Agilidad en giros en escuadra", "Comunicación gestual inmediata"],
    coordinationNotes: "Clave en jirones estrechos de Barrios Altos y el Damero de Pizarro."
  },
  {
    id: "pos-bajo-andas",
    name: "Bajo Andas (Centro y Cruces)",
    location: "Debajo del cajón central de madera y plata",
    heightRequirement: "Estatura media, cuello y trapecios de gran fortaleza",
    functionDescription: "Llevan el peso muerto directo de la estructura y el lienzo. Su trabajo es silencioso, invisible para la multitud exterior pero esencial para que el anda flote.",
    keySkills: ["Penitencia silenciosa", "Gran resistencia aeróbica", "Humildad absoluta"],
    coordinationNotes: "Soportan la mayor densidad de carga vertical en cuestas y descansos."
  },
  {
    id: "pos-capataz",
    name: "Capataz y Subcapataces (Comando)",
    location: "Al frente y costados de las Andas con el martillo procesional",
    heightRequirement: "Liderazgo moral, voz de mando y años de experiencia",
    functionDescription: "Máxima autoridad en el turno. Ordena el alzar, la marcha, las paradas y el descanso mediante los tradicionales toques de campana y martillazo en el ancla.",
    keySkills: ["Dominio del espacio y tiempo procesional", "Temple y serenidad bajo presión", "Cuidado integral de la cuadrilla"],
    coordinationNotes: "Cada toque de martillo es ley: un golpe prepara, dos golpes alzan, tres golpes marcan descanso."
  }
];

export const CODIGO_ETICA_CARGADOR = [
  {
    principle: "Fraternidad Íntima",
    text: "Tratar a cada hermano con respeto, comprensión y afecto mutuo, honrando el origen del apelativo 'Los Íntimos'."
  },
  {
    principle: "Sobriedad y Disciplina",
    text: "Guardar estricta sobriedad antes, durante y después del carguío, evitando cualquier conducta que mancille el santo hábito morado."
  },
  {
    principle: "Puntualidad en los Relevos",
    text: "Estar presente en el sector asignado con 45 minutos de anticipación debidamente uniformado y con el corazón en oración."
  },
  {
    principle: "Espíritu de Penitencia",
    text: "Ofrecer el hombro como sacrificio personal sin buscar elogios mundanos, vanagloria o protagonismos personales."
  },
  {
    principle: "Obediencia a la Voz de Mando",
    text: "Acatar con prontitud y lealtad las órdenes del Capataz y de la Directiva en beneficio de la seguridad y el esplendor de las Sagradas Andas."
  }
];
