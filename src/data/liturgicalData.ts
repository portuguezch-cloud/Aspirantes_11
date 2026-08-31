import { DevotionalPrayer, PrayerIntention } from '../types';

export const DEVOTIONAL_PRAYERS: DevotionalPrayer[] = [
  {
    id: "oracion-oficial-senor",
    title: "Oración Oficial al Señor de los Milagros",
    subtitle: "Consagración de la vida y súplica de perdón ante el Cristo Moreno",
    category: "oficial",
    text: `Señor de los Milagros, porque te amo, he venido a visitarte para alabarte, bendecirte y darte gracias por tantos favores que me has concedido.

Señor de los Milagros, porque te amo, me arrepiento de todos los pecados que he cometido y con los cuales te he crucificado de nuevo en mi corazón; te prometo, con la ayuda de tu gracia, no pecar más.

Señor de los Milagros, porque te amo, quiero verte en todos mis hermanos y servirte en ellos; te pido por mi patria, por mi familia, por los enfermos, los encarcelados y por todos los que sufren.

Señor de los Milagros, bendícenos desde tu Cruz y concédenos la gracia de perseverar en tu amor hasta el fin de nuestros días. Amén.`,
    latinOrTradition: "Devocionario Tradicional del Santuario de las Nazarenas",
    momentoLiturgico: "Inicio de jornadas procesionales, visitas al Santuario y al amanecer del cargador.",
    reflection: "Esta plegaria resume el acto de fe, penitencia y amor fraterno que sustenta el espíritu del verdadero nazareno."
  },
  {
    id: "oracion-cargador-once",
    title: "Oración del Hermano Cargador de la Once",
    subtitle: "Plegaria antes de meter el hombro bajo el sagrado madero de las Andas",
    category: "cargador",
    text: `Señor de los Milagros, Divino Redentor:
Aquí está tu siervo de la Cuadrilla 11 "Los Íntimos". Vengo ante tus sagradas andas con el corazón contrito y el alma llena de fe.

No vengo a pedir vanagloria ni lucimiento ante los hombres; vengo a ofrecer mi hombro humilde, mi esfuerzo y mi sudor como reparación por mis faltas y en acción de gracias por tu infinita misericordia.

Dame fuerzas en el madero, Señor, para que mis pasos sean firmes, mi compás sea recto y mi fraternidad sincera con mis hermanos de sector. Que el peso de tus andas me recuerde el peso de mi propia cruz, y que al toque de martillo sepa elevar mi espíritu hacia Ti.

Protege a mi familia, bendice a la Once y acoge en tu gloria a nuestros hermanos fundadores y capataces que hoy te contemplan en el cielo. Amén.`,
    latinOrTradition: "Tradición y Mística de la Cuadrilla 11 'Los Íntimos'",
    momentoLiturgico: "En el momento del relevo, con la rodilla en tierra antes de tomar el madero.",
    reflection: "El carguío no es una exhibición física, sino un acto sacramental de penitencia comunitaria donde cada hermano es soporte del otro."
  },
  {
    id: "oracion-virgen-de-la-nube",
    title: "Oración a Nuestra Señora de la Nube",
    subtitle: "Plegaria a la Madre del Cielo plasmada en el reverso de las Sagradas Andas",
    category: "maria",
    text: `¡Oh Virgen Purísima de la Nube, Madre de Dios y Madre nuestra!
Tú que contemplas a tu Divino Hijo en el Calvario y sostienes en tus brazos maternales al Salvador del mundo.

Dirige tu mirada compasiva hacia este pueblo que camina tras las andas. Sé el consuelo de los afligidos, la salud de los enfermos y el amparo de los hermanos cargadores que llevan sobre sus espaldas tu bendita imagen.

Llévanos de la mano hacia Jesús, alcánzanos la gracia de una vida santa y acompáñanos en la última hora para contemplarte en el paraíso celestial. Amén.`,
    latinOrTradition: "Advocación mariana del lienzo posterior traída de Guápulo (Ecuador, 1696)",
    momentoLiturgico: "Al paso del reverso del anda, durante los homenajes y en el Santo Rosario.",
    reflection: "María en la advocación de la Nube intercede ante el Padre con el lirio de pureza y el cetro maternal."
  },
  {
    id: "triduo-novena-senor",
    title: "Súplica y Triduo Solemne de Octubre",
    subtitle: "Invocación de gracia para el Mes Morado y los cultos anuales",
    category: "novena",
    text: `Dulcísimo Jesús Nazareno, que por amor a los hombres quisiste quedar estampado milagrosamente en la pared de adobe de Pachacamilla para ser nuestro consuelo:

Por las cinco llagas de tus manos, pies y costado, te suplicamos derrames sobre la Cuadrilla 11 la gracia del perdón, la salud del cuerpo y la paz del espíritu.

Haz que nuestro distintivo morado sea reflejo de un corazón puro y caritativo. ¡Señor de los Milagros, en Ti confiamos; Señor de los Milagros, en Ti esperamos! Amén.`,
    latinOrTradition: "Novena Histórica de las Madres Nazarenas Carmelitas Descalzas",
    momentoLiturgico: "Rezo de los días previos a las salidas procesionales del 18 y 28 de octubre.",
    reflection: "La novena une las intenciones de miles de devotos que entregan sus plegarias durante el mes morado."
  },
  {
    id: "rosario-nazareno",
    title: "Santo Rosario Nazareno con Jaculatorias",
    subtitle: "Meditación de los Misterios de la Pasión al paso lento de la procesión",
    category: "rosario",
    text: `Misterios Dolorosos meditados con la Cuadrilla:
1. La Oración de Jesús en el Huerto de los Olivos.
2. La Flagelación de Nuestro Señor atado a la columna.
3. La Coronación de espinas.
4. Jesús con la Cruz a cuestas camino del Calvario.
5. La Crucifixión y Muerte de Nuestro Señor Jesucristo.

Jaculatoria Nazarena al final de cada misterio:
— "Señor de los Milagros, ten piedad de nosotros."
— "Virgen de la Nube, ruega por nosotros y por todos los hermanos de la Once."`,
    latinOrTradition: "Práctica devocional durante los turnos nocturnos y la vigilia de guardada",
    momentoLiturgico: "Procesiones y vigilias en el Templo de las Nazarenas.",
    reflection: "El Rosario acompasa los pasos del cargador y mantiene la mente elevada en medio de la fatiga física."
  },
  {
    id: "oracion-hermanos-difuntos",
    title: "Plegaria por los Hermanos de la Once en la Gloria de Dios",
    subtitle: "Homenaje de fe a los fundadores, directivos y capataces que partieron a la eternidad",
    category: "difuntos",
    text: `Señor de los Milagros:
Te encomendamos las almas de todos los hermanos de la Cuadrilla 11 que ya descansan en tu regazo celestial.

Recuerda el sudor que derramaron bajo tus andas, el amor con que entonaron tus himnos y el celo con que custodiaron la tradición de "Los Íntimos".

Dales el descanso eterno, brille para ellos la luz perpetua, y que desde el cielo continúen guiando el caminar de nuestra amada Once. Descansen en paz. Amén.`,
    latinOrTradition: "Misa de Honras y Réquiem anual de la Cuadrilla 11",
    momentoLiturgico: "1 de noviembre (Día de Todos los Santos) y misas de difuntos.",
    reflection: "La cuadrilla es una sola familia espiritual que une a los que hoy cargan en la tierra con los que ya contemplan al Señor en el cielo."
  }
];

export const INITIAL_INTENTIONS: PrayerIntention[] = [
  {
    id: "int-1",
    name: "Hno. Roberto Meneses",
    sectorOrTitle: "Primer Sector - Cargador Activo",
    intention: "Por la salud de mi madre y la unión fraterna de todos los hermanos de la Cuadrilla 11 en cada jornada procesional.",
    date: "31 Ago 2026",
    candlesCount: 142
  },
  {
    id: "int-2",
    name: "Familia Mina Villanueva",
    sectorOrTitle: "Devotos Tradicionales",
    intention: "En memoria de nuestros abuelos fundadores, rogando al Cristo Moreno que derrame bendiciones sobre los nuevos aspirantes.",
    date: "30 Ago 2026",
    candlesCount: 98
  },
  {
    id: "int-3",
    name: "Hermano Aspirante 2026",
    sectorOrTitle: "Cuerpo de Aspirantes Cuadrilla 11",
    intention: "Pidiendo humildad y templanza para honrar el madero y los estatutos con devoción y espíritu de servicio.",
    date: "29 Ago 2026",
    candlesCount: 115
  },
  {
    id: "int-4",
    name: "Hna. María Elena Castro",
    sectorOrTitle: "Devota de Nazarenas",
    intention: "Por la paz en los hogares y el consuelo de los enfermos en los hospitales de Lima.",
    date: "28 Ago 2026",
    candlesCount: 84
  }
];
