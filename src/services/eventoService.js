const API = "http://localhost:8080/api";

export async function obtenerEventos() {
  const response = await fetch(`${API}/eventos`);

  return await response.json();
}

export async function obtenerEventoZonaPrecio() {
  const response = await fetch(`${API}/eventozonaprecio`);

  return await response.json();
}
