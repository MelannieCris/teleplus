import type { Usuario } from "../model/usuario";

export interface ApiError extends Error {
  response?: {
    status: number;
    data: unknown;
  };
}

export interface Credenciales {
  correo: string;
  contrasena: string;
}

export interface RegistroUsuarioDTO {
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  contrasena: string;
}

const API_URL = "http://localhost:8080/api/usuarios";

async function apiRequest<T>(endpoint: string, method: string, data?: unknown): Promise<T> {
  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  };

  const response = await fetch(`${API_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.text();
    const error: ApiError = new Error(errorData || "Error en la petición");
    error.response = { status: response.status, data: errorData };
    throw error;
  }

  const text = await response.text();
  return (text ? JSON.parse(text) : {}) as T;
}

export const loginUsuario = (credenciales: Credenciales): Promise<Usuario> => 
  apiRequest<Usuario>("/login", "POST", credenciales);

export const loginAdministrador = (credenciales: Credenciales): Promise<Usuario> => 
  apiRequest<Usuario>("/login-admin", "POST", credenciales);

export const registrarUsuario = (nuevoUsuario: RegistroUsuarioDTO): Promise<Usuario> => 
  apiRequest<Usuario>("/registro", "POST", nuevoUsuario);

export const actualizarUsuario = (id: number, datosUsuario: Partial<Usuario>): Promise<Usuario> => 
  apiRequest<Usuario>(`/${id}`, "PUT", datosUsuario);