import type { Rol } from "./rol";

export interface Usuario {
  idUsuario: number;
  nombre: string;
  apellido: string;
  correo: string;
  contrasena?: string;
  telefono: string;
  estado: string;
  fechaRegistro: string; // "YYYY-MM-DD"
  idRol?: number;
  rol?: Rol | null;
}
