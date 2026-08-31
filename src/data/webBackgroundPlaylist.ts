/**
 * =======================================================================
 * PLAYLIST DE FONDO DE LA WEB (TopAudioPlayer)
 * =======================================================================
 * Aquí puedes cambiar o agregar las canciones de fondo de toda la web.
 * 
 * 📌 ¿CÓMO PONER TUS CANCIONES MP3 O URLs?
 * 1. Con una URL de internet (HTTPS directa):
 *    audioSrc: "https://ejemplo.com/mi-cancion.mp3"
 * 
 * 2. Con un archivo MP3 en tu proyecto:
 *    - Coloca el archivo MP3 dentro de la carpeta /public (ej: /public/himno.mp3)
 *    - En audioSrc pon: "/himno.mp3" (o "himno.mp3")
 * 
 * 3. Si dejas audioSrc vacío ("") o no lo pones:
 *    - La web reproducirá la marcha procesional mediante el sintetizador armónico Web Audio.
 */

export interface BackgroundTrack {
  id: string;
  title: string;
  composer: string;
  duration?: string;
  audioSrc?: string; // Enlace directo URL (https://...) o archivo local (/mi-archivo.mp3)
  synthBpm: number;
}

export const WEB_BACKGROUND_PLAYLIST: BackgroundTrack[] = [
  {
    id: "himno-hsmn",
    title: "Himno al Señor de los Milagros",
    composer: "Isabel Rodríguez Larraín / HSMN",
    duration: "3:45",
    audioSrc: "/audio/Himno al Señor de los Milagros.mp3",
    synthBpm: 76
  },
  {
    id: "yo-le-voy-cantando",
    title: "Yo le voy cantando",
    composer: "Willy Noriega",
    duration: "4:55",
    audioSrc: "/audio/Yo Le Voy Cantando.mp3",
    synthBpm: 68
  },
  {
    id: "a-tu-gloria-dios-mio",
    title: "Marcha: A tu gloria Dios mío",
    composer: "Luis Enrique Vargas Guevara",
    duration: "3:53",
    audioSrc: "/audio/A tu gloria Dios Mio.mp3",
    synthBpm: 54
  },
  {
    id: "Quiero-que-estes-conmigo",
    title: "Quiero que estés conmigo",
    composer: "Juan Mosto",
    duration: "4:04",
    audioSrc: "/audio/Quiero que estes conmigo.mp3",
    synthBpm: 60
  }
];
