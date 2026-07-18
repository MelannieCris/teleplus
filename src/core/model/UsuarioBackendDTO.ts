export interface UsuarioBackendDTO {
  id_usuario: number;
  nombre: string;
  apellido: string;
  correo: string;
  contrasena?: string;
  telefono: string;
  estado: string;
  fecha_registro: string;
  id_rol?: number;
}
