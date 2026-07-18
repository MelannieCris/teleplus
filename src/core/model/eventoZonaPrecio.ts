export interface EventoZonaPrecio {
  id: number;
  tipoPrecio: string; // PREVENTA, FULL, INTERBANK, etc.
  precio: number;
  stock: number;
  stockDisponible: number;
  activo: boolean;
  fechaInicio: string; // ISO 8601 datetime
  fechaFin: string; // ISO 8601 datetime
  idEvento?: number;
  idZona?: number;
}
