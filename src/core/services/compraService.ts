import type { Compra } from "../model/compra";
import type { DetalleCompraDTO } from "../model/DetalleCompraDTO";

const API_URL = "http://localhost:8080/api/compras";

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

export const crearCompra = (compra: Omit<Compra, "idCompra" | "fechaCompra">): Promise<Compra> =>
  apiRequest<Compra>("/", "POST", compra);

export const obtenerComprasPorUsuario = (idUsuario: number): Promise<Compra[]> =>
  apiRequest<Compra[]>(`/usuario/${idUsuario}`, "GET");

export const obtenerDetalleCompra = (idCompra: number): Promise<DetalleCompraDTO[]> =>
  apiRequest<DetalleCompraDTO[]>(`/${idCompra}/detalles`, "GET");
