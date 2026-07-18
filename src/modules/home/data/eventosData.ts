import imgEvento1 from "../../../shared/assets/img/index-evento1.jpg";
import imgEvento2 from "../../../shared/assets/img/index-evento2.jpg";
import imgEvento3 from "../../../shared/assets/img/index-evento3.jpg";
import imgEvento4 from "../../../shared/assets/img/evento4.png";
import imgEvento5 from "../../../shared/assets/img/index-evento5.jpg";
import imgEvento6 from "../../../shared/assets/img/index-evento6.jpg";
import banner1 from "../../../shared/assets/img/banner-evento1.jpg";
import banner3 from "../../../shared/assets/img/banner-evento3.jpg";
import banner5 from "../../../shared/assets/img/banner1-evento5.jpg";
import banner6 from "../../../shared/assets/img/banner-evento6.jpeg";
import type { EventoInicio } from "../interfaces/InicioTypes";

export const eventosData: EventoInicio[] = [
  {
    id: 1,
    img: imgEvento1,
    banner: banner1,
    ruta: "/evento/1",
    titulo: "Megadeth - The Destroy All Dates Tour",
    descripcion:
      "La leyenda del thrash metal mundial llega al Perú con su gira más destructiva. No te pierdas este show épico con los clásicos que marcaron una era.",
    fecha: "2026-08-15",
    hora: "20:00",
    lugar: "Estadio Nacional",
    ciudad: "Lima",
    precio: 180,
  },
  {
    id: 2,
    img: imgEvento2,
    banner: imgEvento2,
    ruta: "/evento/2",
    titulo: "Festival Reggaeton Paradise",
    descripcion:
      "La noche más caliente del año con los mejores exponentes del reggaetón latino. Artistas nacionales e internacionales en un solo escenario.",
    fecha: "2026-09-05",
    hora: "21:00",
    lugar: "Parque de la Exposición",
    ciudad: "Lima",
    precio: 120,
  },
  {
    id: 3,
    img: imgEvento3,
    banner: banner3,
    ruta: "/evento/3",
    titulo: "Rock Nacional: Edición Especial",
    descripcion:
      "Los mejores bandas de rock peruano se unen para una noche histórica. Tan Biónica, Mar de Copas, Leusemia y más en un lineup explosivo.",
    fecha: "2026-09-20",
    hora: "19:00",
    lugar: "Jockey Club",
    ciudad: "Lima",
    precio: 95,
  },
  {
    id: 4,
    img: imgEvento4,
    banner: imgEvento4,
    ruta: "/evento/4",
    titulo: "Electric Dreams Festival",
    descripcion:
      "El festival de música electrónica más grande de Sudamérica. DJs internacionales, sonido visual inmersivo y la mejor experiencia audiovisual.",
    fecha: "2026-10-10",
    hora: "22:00",
    lugar: "Lima Convention Center",
    ciudad: "Lima",
    precio: 150,
  },
  {
    id: 5,
    img: imgEvento5,
    banner: banner5,
    ruta: "/evento/5",
    titulo: "Concierto Benéfico: Música por la Vida",
    descripcion:
      "Un evento solidario con los mejores artistas latinos. Toda la recaudación será donada a institutions de salud en el Perú.",
    fecha: "2026-10-25",
    hora: "18:00",
    lugar: "Arena Lima",
    ciudad: "Lima",
    precio: 75,
  },
  {
    id: 6,
    img: imgEvento6,
    banner: banner6,
    ruta: "/evento/6",
    titulo: "Hip Hop Night: Barras y Rimaz",
    descripcion:
      "La cultura urbana toma el escenario con freestyle, rap nacional y las barras más duras del país. Una noche para la cultura.",
    fecha: "2026-11-08",
    hora: "20:30",
    lugar: "Cusco Arena",
    ciudad: "Cusco",
    precio: 60,
  },
];
