import type { EventoZonaPrecio } from "./eventoZonaPrecio";

export interface DetalleCompra {
  idDetalle: number;
  precioUnitario: number;
  cantidad: number;
  subtotal: number;
  idCompra: number;
  idEventoZonaPrecio: number;
  eventoZonaPrecio?: EventoZonaPrecio;
}
