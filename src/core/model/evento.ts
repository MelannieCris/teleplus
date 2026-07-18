import type { Lugar } from "./lugar";

export interface Evento {
  idEvento: number;
  titulo: string;
  descripcion: string;
  fechaEvento: string; // "YYYY-MM-DD"
  horaEvento: string; // "HH:mm:ss"
  imagen: string;
  estado: string;
  fechaCreacion: string; // ISO 8601 datetime
  idLugar: number;
  lugar?: Lugar;
}
