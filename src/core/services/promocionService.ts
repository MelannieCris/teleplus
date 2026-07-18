import type { PromocionRequest, PromocionResponse, ValidarPromocionResponse } from "../model/PromocionDTO";

const API_URL = "http://localhost:8080/api/promociones";

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

export const validarPromocion = (codigo: string): Promise<ValidarPromocionResponse> =>
  apiRequest<ValidarPromocionResponse>(`/validar?codigo=${encodeURIComponent(codigo)}`, "GET");

export const obtenerPromociones = (): Promise<PromocionResponse[]> =>
  apiRequest<PromocionResponse[]>("/", "GET");

export const crearPromocion = (promocion: PromocionRequest): Promise<PromocionResponse> =>
  apiRequest<PromocionResponse>("/", "POST", promocion);
