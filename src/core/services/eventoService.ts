import type { Evento } from "../model/evento";
import type { EventoZonaPrecio } from "../model/eventoZonaPrecio";

const API_URL = "http://localhost:8080/api/eventos";

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
    const error: Error & { response?: { status: number; data: unknown } } = new Error(errorData || "Error en la petición");
    error.response = { status: response.status, data: errorData };
    throw error;
  }

  const text = await response.text();
  return (text ? JSON.parse(text) : {}) as T;
}

export const obtenerEventos = (): Promise<Evento[]> =>
  apiRequest<Evento[]>("/", "GET");

export const obtenerEventoPorId = (id: number): Promise<Evento> =>
  apiRequest<Evento>(`/${id}`, "GET");

export const obtenerZonasEvento = (idEvento: number): Promise<EventoZonaPrecio[]> =>
  apiRequest<EventoZonaPrecio[]>(`/${idEvento}/zonas-precio`, "GET");

export const crearEvento = (evento: Omit<Evento, "idEvento" | "fechaCreacion">): Promise<Evento> =>
  apiRequest<Evento>("/", "POST", evento);

export const actualizarEvento = (id: number, evento: Partial<Evento>): Promise<Evento> =>
  apiRequest<Evento>(`/${id}`, "PUT", evento);

export const eliminarEvento = (id: number): Promise<void> =>
  apiRequest<void>(`/${id}`, "DELETE");
