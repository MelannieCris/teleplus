export interface EventoDTO {
  id_evento: number;
  titulo: string;
  descripcion: string;
  fecha_evento: string; // "YYYY-MM-DD"
  hora_evento: string; // "HH:mm:ss"
  imagen: string;
  estado: string;
  fecha_creacion: string; // ISO 8601 datetime
  id_lugar: number;
}
