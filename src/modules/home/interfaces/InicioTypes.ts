export interface EventoInicio {
  id: number;
  img: string;
  banner: string;
  ruta: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  hora: string;
  lugar: string;
  ciudad: string;
  precio: number;
}

export interface HeroSlide extends EventoInicio {
  active: boolean;
}
