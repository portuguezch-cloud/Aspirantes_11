export interface CatequesisItem {
  id: string;
  category: 'sacramentos' | 'rosario' | 'mandamientos' | 'pecados_virtudes' | 'obras_misericordia' | 'oraciones_basicas' | 'doctrina_fe';
  title: string;
  subtitle: string;
  countBadge?: string;
  description: string;
  elements: {
    name: string;
    description: string;
    biblicalOrTheologicalNote?: string;
    order?: number;
  }[];
  practicalApplicationForNazareno: string;
  biblicalQuote?: string;
}

export const CATEQUESIS_DATA: CatequesisItem[] = [
  {
    id: 'el-santo-rosario',
    category: 'rosario',
    title: 'El Santo Rosario: Misterios y Guía de Rezo',
    subtitle: 'La oración mariana por excelencia de todo hermano nazareno',
    countBadge: '4 Grupos de Misterios (20 en total)',
    description: 'El Santo Rosario es la meditación contemplativa de la vida, pasión, muerte y resurrección de Nuestro Señor Jesucristo en compañía de la Santísima Virgen María. Como nazarenos y devotos de Nuestra Señora de la Nube, el rezo diario del Rosario fortalece la fe antes de salir a la procesión o tomar el madero.',
    elements: [
      {
        name: 'Misterios Gozosos (Lunes y Sábados)',
        description: '1. La Encarnación del Hijo de Dios. 2. La Visitación de María a Santa Isabel. 3. El Nacimiento de Jesús en Belén. 4. La Presentación de Jesús en el Templo. 5. El Niño Jesús perdido y hallado en el Templo.',
        biblicalOrTheologicalNote: 'Celebran el gozo de la Encarnación y la infancia del Salvador.'
      },
      {
        name: 'Misterios Dolorosos (Martes y Viernes)',
        description: '1. La Oración de Jesús en el Huerto de Getsemaní. 2. La Flagelación del Señor en la columna. 3. La Coronación de espinas. 4. Jesús con la Cruz a cuestas camino al Calvario. 5. La Crucifixión y Muerte de Nuestro Señor.',
        biblicalOrTheologicalNote: 'Misterios centrales del Nazareno, que medita al Cristo de Pachacamilla crucificado.'
      },
      {
        name: 'Misterios Gloriosos (Miércoles y Domingos)',
        description: '1. La Triunfante Resurrección de Jesús. 2. La Ascensión del Señor a los Cielos. 3. La Venida del Espíritu Santo sobre los Apóstoles (Pentecostés). 4. La Asunción de la Virgen María en cuerpo y alma. 5. La Coronación de María como Reina de todo lo creado.',
        biblicalOrTheologicalNote: 'Celebran la victoria sobre el pecado y la muerte eterna.'
      },
      {
        name: 'Misterios Luminosos (Jueves)',
        description: '1. El Bautismo de Jesús en el Jordán. 2. La Autorrevelación en las Bodas de Caná. 3. El Anuncio del Reino de Dios invitando a la conversión. 4. La Transfiguración en el Monte Tabor. 5. La Institución de la Sagrada Eucaristía.',
        biblicalOrTheologicalNote: 'Instituidos por San Juan Pablo II en 2002 para contemplar la vida pública de Jesús.'
      },
      {
        name: 'Estructura Canónica del Rezo',
        description: '1. Señal de la Cruz y Credo de los Apóstoles. 2. Padre Nuestro inicial y 3 Avemarías por el aumento de la fe, esperanza y caridad. 3. Gloria al Padre. 4. Por cada decena: Enunciado del Misterio, Padre Nuestro, 10 Avemarías, Gloria y Jaculatoria de Fátima. 5. Al finalizar los 5 misterios: Salve Regina, Letanías Lauretanas y Oración final.',
        biblicalOrTheologicalNote: 'El compás del rezo debe ser solemne, reposado y en meditación comunitaria.'
      }
    ],
    practicalApplicationForNazareno: 'El cargador y la sahumadora rezan los misterios dolorosos de rodillas antes de iniciar la guardia de andas, ofreciendo cada Avemaría por los hermanos enfermos, las intenciones de la Cuadrilla y el perdón de las faltas personales.',
    biblicalQuote: '«Hagan todo lo que Él les diga» (Jn 2, 5)'
  },
  {
    id: 'los-siete-sacramentos',
    category: 'sacramentos',
    title: 'Los 7 Sacramentos de la Iglesia Católica',
    subtitle: 'Signos eficaces de la gracia instituidos por Jesucristo',
    countBadge: '7 Sacramentos (Iniciación, Curación y Servicio)',
    description: 'Los sacramentos son dones sensibles y eficaces de la gracia divina instituidos por Cristo y confiados a la Iglesia, mediante los cuales se nos dispensa la vida divina. Se dividen en 3 grandes grupos.',
    elements: [
      {
        name: '1. Bautismo (Iniciación Cristiana)',
        description: 'Borra el pecado original, nos hace hijos de Dios y miembros vivos del Cuerpo Místico de Cristo que es la Iglesia. Es la puerta de todos los demás sacramentos e imprime carácter indeleble.',
        order: 1
      },
      {
        name: '2. Confirmación (Iniciación Cristiana)',
        description: 'Perfecciona la gracia bautismal y nos confiere los 7 dones del Espíritu Santo para ser testigos valientes y soldados de Cristo en el mundo.',
        order: 2
      },
      {
        name: '3. Eucaristía (Iniciación y Fuente de Toda Vida)',
        description: 'Sacrificio del Cuerpo y Sangre de Cristo verdaderamente presente bajo las especies del pan y el vino. Es la cumbre y centro de toda la liturgia cristiana.',
        order: 3
      },
      {
        name: '4. Reconciliación o Confesión (Sacramento de Curación)',
        description: 'Otorga el perdón de los pecados cometidos tras el Bautismo mediante la absolución del sacerdote, reconciliando al penitente con Dios y con la Iglesia.',
        order: 4
      },
      {
        name: '5. Unción de los Enfermos (Sacramento de Curación)',
        description: 'Confiere una gracia especial de fortaleza, paz y ánimo al cristiano que experimenta las dificultades inherentes al estado de enfermedad grave o vejez.',
        order: 5
      },
      {
        name: '6. Orden Sacerdotal (Sacramento al Servicio de la Comunidad)',
        description: 'Consagra a los obispos, presbíteros y diáconos para apacentar la Iglesia con la palabra y la gracia de Dios en persona de Cristo Cabeza.',
        order: 6
      },
      {
        name: '7. Matrimonio (Sacramento al Servicio de la Comunidad)',
        description: 'Alianza santa e indisoluble por la que un varón y una mujer constituyen entre sí un consorcio de toda la vida, ordenado al bien de los cónyuges y a la procreación y educación de la prole.',
        order: 7
      }
    ],
    practicalApplicationForNazareno: 'El Estatuto de la Hermandad exige que todo hermano esté debidamente bautizado y confirmado, y reciba el Sacramento de la Reconciliación y la Eucaristía en la Misa de Comunión General de la Cuadrilla 11 en el mes morado.',
    biblicalQuote: '«Yo soy la vid, ustedes los sarmientos; el que permanece en mí y yo en él, ese da mucho fruto» (Jn 15, 5)'
  },
  {
    id: 'pecados-capitales-virtudes',
    category: 'pecados_virtudes',
    title: 'Los 7 Pecados Capitales y sus Virtudes Contrarias',
    subtitle: 'El combate espiritual y la disciplina moral del hermano',
    countBadge: '7 Pecados vs 7 Virtudes',
    description: 'Se llaman "capitales" porque son cabeza y fuente de muchos otros vicios y pecados. La vida cristiana consiste en vencer estos desórdenes cultivando activamente las virtudes teologales y morales.',
    elements: [
      {
        name: '1. Soberbia (Orgullo desmedido) vs. HUMILDAD',
        description: 'La soberbia consiste en atribuirse a sí mismo méritos que son de Dios y despreciar al prójimo. Se vence con la Humildad: reconocer nuestra pequeñez y servir sin buscar aplausos ni vanagloria.'
      },
      {
        name: '2. Avaricia (Apego al dinero) vs. GENEROSIDAD',
        description: 'Deseo desordenado de acumular bienes materiales. Se vence con la Generosidad y el desprendimiento caritativo hacia el necesitado.'
      },
      {
        name: '3. Lujuria (Deseo desordenado de placer) vs. CASTIDAD',
        description: 'Búsqueda desordenada del placer carnal. Se combate con la Castidad, la pureza de intención, de cuerpo y de alma.'
      },
      {
        name: '4. Ira (Furia y resentimiento) vs. PACIENCIA / MANSEDUMBRE',
        description: 'Reacción colérica y deseo desmedido de venganza. Se vence con la Paciencia y Mansedumbre, imitando a Cristo manso y humilde de corazón.'
      },
      {
        name: '5. Gula (Apetito inmoderado) vs. TEMPLANZA',
        description: 'Apetito desmedido e inmoderado en la comida o bebida. Se contrarresta con la Templanza, la sobriedad y el ayuno penitencial.'
      },
      {
        name: '6. Envidia (Tristeza por el bien ajeno) vs. CARIDAD FRATERNA',
        description: 'Dolor o rencor ante la prosperidad o mérito de otro hermano. Se supera con la Caridad, alegrándose genuinamente del bien del prójimo.'
      },
      {
        name: '7. Pereza (Desidia espiritual y corporal) vs. DILIGENCIA',
        description: 'Tristeza o tibieza ante los bienes espirituales y dejadez en los deberes de estado. Se cura con la Diligencia, el fervor y la prontitud en el servicio de Dios.'
      }
    ],
    practicalApplicationForNazareno: 'En la Cuadrilla 11, la soberbia (pelear por un puesto en el palo o vanagloriarse) y la ira deben ser desterradas. El hermano cultiva la humildad y la templanza durante las largas horas de turno bajo las andas.',
    biblicalQuote: '«Carguen con mi yugo y aprendan de mí, que soy manso y humilde de corazón, y encontrarán descanso para sus almas» (Mt 11, 29)'
  },
  {
    id: 'los-diez-mandamientos',
    category: 'mandamientos',
    title: 'Los 10 Mandamientos de la Ley de Dios',
    subtitle: 'El Decálogo: camino de libertad, alianza y salvación',
    countBadge: '10 Mandamientos',
    description: 'Entregados por Dios a Moisés en el Monte Sinaí y perfeccionados por Nuestro Señor Jesucristo en el Mandamiento del Amor: «Amarás al Señor tu Dios con todo tu corazón, y a tu prójimo como a ti mismo».',
    elements: [
      {
        name: '1. Amarás a Dios sobre todas las cosas',
        description: 'Reconocer al único Dios verdadero, evitando idolatrías, supersticiones o poner cosas mundanas por encima del Señor.'
      },
      {
        name: '2. No tomarás el nombre de Dios en vano',
        description: 'Respetar la santidad del Nombre de Dios, de Jesucristo, de la Virgen y de los santos; no jurar en falso.'
      },
      {
        name: '3. Santificarás las fiestas',
        description: 'Asistir a la Santa Misa todos los domingos y días de precepto, descansando de labores serviles para honrar al Creador.'
      },
      {
        name: '4. Honrarás a tu padre y a tu madre',
        description: 'Amar, respetar, obedecer y socorrer a los padres en sus necesidades y cuidar la unidad y santidad de la familia.'
      },
      {
        name: '5. No matarás',
        description: 'Defender la vida humana desde la concepción hasta su fin natural; evitar la violencia, el odio, el escándalo y el rencor.'
      },
      {
        name: '6. No cometerás actos impuros',
        description: 'Vivir en pureza moral según el propio estado de vida (soltería o matrimonio sagrado).'
      },
      {
        name: '7. No robarás',
        description: 'Respetar los bienes ajenos, actuar con honradez en el trabajo, los negocios y la administración de bienes comunes.'
      },
      {
        name: '8. No darás falso testimonio ni mentirás',
        description: 'Vivir en la verdad, desterrar la calumnia, el chisme, la difamación y la doblez.'
      },
      {
        name: '9. No consentirás pensamientos ni deseos impuros',
        description: 'Guardar el corazón de pasiones desordenadas mediante la pureza de mirada y la oración constante.'
      },
      {
        name: '10. No codiciarás los bienes ajenos',
        description: 'Estar agradecido con la providencia divina sin codicia ni ambición desmedida que ahogue la paz interior.'
      }
    ],
    practicalApplicationForNazareno: 'El hábito morado es un testimonio público de los mandamientos. El hermano nazareno no puede ser escándalo en su hogar ni en su centro de trabajo, sino luz de testimonio cristiano.',
    biblicalQuote: '«Si me aman, guardarán mis mandamientos» (Jn 14, 15)'
  },
  {
    id: 'obras-de-misericordia',
    category: 'obras_misericordia',
    title: 'Las 14 Obras de Misericordia',
    subtitle: 'El amor cristiano hecho acción concreta (7 corporales y 7 espirituales)',
    countBadge: '14 Obras (7 Corporales + 7 Espirituales)',
    description: 'Son las acciones caritativas mediante las cuales ayudamos a nuestro prójimo en sus necesidades corporales y espirituales. En el juicio final seremos examinados en el amor sobre estas obras (Mt 25).',
    elements: [
      {
        name: '7 Obras de Misericordia Corporales',
        description: '1. Dar de comer al hambriento. 2. Dar de beber al sediento. 3. Vestir al desnudo. 4. Dar posada al peregrino. 5. Visitar a los enfermos. 6. Visitar a los presos. 7. Enterrar a los difuntos.'
      },
      {
        name: '7 Obras de Misericordia Espirituales',
        description: '1. Enseñar al que no sabe. 2. Dar buen consejo al que lo necesita. 3. Corregir al que se equivoca (con caridad fraterna). 4. Consolar al triste. 5. Perdonar las ofensas. 6. Sufrir con paciencia los defectos del prójimo. 7. Rogar a Dios por los vivos y por los difuntos.'
      }
    ],
    practicalApplicationForNazareno: 'La labor de la Cuadrilla 11 no termina al bajar el madero: a través de su Secretaría Pastoral y Social, los hermanos realizan visitas a hospitales, asilos y oran por el descanso eterno de los fundadores y bienhechores difuntos.',
    biblicalQuote: '«Les aseguro que cuanto hicieron a uno de estos hermanos míos más pequeños, a mí me lo hicieron» (Mt 25, 40)'
  },
  {
    id: 'virtudes-teologales-cardinales',
    category: 'doctrina_fe',
    title: 'Virtudes Teologales y Cardinales',
    subtitle: 'Los pilares que sostienen el alma del fiel creyente',
    countBadge: '3 Teologales + 4 Cardinales',
    description: 'Las virtudes teologales tienen a Dios como origen, motivo y objeto directo. Las virtudes cardinales son hábitos rectos que ordenan nuestra conducta humana y nuestras pasiones.',
    elements: [
      {
        name: 'Virtudes Teologales (Infusas por Dios)',
        description: '• FE: Creemos en Dios y en todo lo que Él nos ha revelado. • ESPERANZA: Confiamos con firmeza en las promesas de Cristo y en la vida eterna. • CARIDAD: Amamos a Dios sobre todas las cosas y a nuestro prójimo como a nosotros mismos por amor a Dios.'
      },
      {
        name: 'Virtudes Cardinales (Ejes de la vida moral)',
        description: '• PRUDENCIA: Dispone la razón práctica para discernir en toda circunstancia nuestro verdadero bien. • JUSTICIA: Constante y firme voluntad de dar a Dios y al prójimo lo que les es debido. • FORTALEZA: Asegura la firmeza en las dificultades y la constancia en la búsqueda del bien. • TEMPLANZA: Modera la atracción de los placeres y procura el equilibrio en el uso de los bienes creados.'
      }
    ],
    practicalApplicationForNazareno: 'El cargador necesita fortaleza corporal y espiritual para resistir el peso del madero, prudencia en su conducta y caridad incondicional con sus hermanos de cuadrilla.',
    biblicalQuote: '«Ahora subsisten estas tres: la fe, la esperanza y la caridad, pero la mayor de todas ellas es la caridad» (1 Cor 13, 13)'
  },
  {
    id: 'los-cinco-mandamientos-iglesia',
    category: 'doctrina_fe',
    title: 'Los 5 Mandamientos de la Santa Madre Iglesia',
    subtitle: 'Normas pastorales mínimas requeridas para el crecimiento del alma',
    countBadge: '5 Mandamientos de la Iglesia',
    description: 'Son preceptos establecidos por la Iglesia para garantizar en los fieles el mínimo indispensable en el espíritu de oración, en el esfuerzo sacramental y en el compromiso moral.',
    elements: [
      {
        name: '1. Oír Misa entera los domingos y fiestas de guardar',
        description: 'Participar plenamente en el Sacrificio Eucarístico en el día del Señor.'
      },
      {
        name: '2. Confesar los pecados mortales al menos una vez al año',
        description: 'Acudir al Sacramento de la Penitencia para prepararse a la Comunión Pascual y siempre que se esté en peligro de muerte.'
      },
      {
        name: '3. Comulgar al menos por Pascua de Resurrección',
        description: 'Recibir el Santísimo Sacramento del Altar en el tiempo pascual, debidamente confesado.'
      },
      {
        name: '4. Ayunar y abstenerse de comer carne cuando lo manda la Santa Madre Iglesia',
        description: 'Especialmente en Miércoles de Ceniza y Viernes Santo, como acto de penitencia y unión al sufrimiento de Cristo.'
      },
      {
        name: '5. Ayudar a la Iglesia en sus necesidades materiales',
        description: 'Aportar según las posibilidades personales al sostenimiento del culto, los templos, el clero y las obras de caridad.'
      }
    ],
    practicalApplicationForNazareno: 'La Hermandad del Señor de los Milagros es una asociación pública de fieles sujeta a la autoridad eclesiástica del Arzobispado de Lima, por lo que vivir estos preceptos es condición de pertenencia canónica.',
    biblicalQuote: '«Quien a ustedes escucha, a mí me escucha; y quien a ustedes rechaza, a mí me rechaza» (Lc 10, 16)'
  }
];
