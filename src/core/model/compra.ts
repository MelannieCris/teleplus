import type { Promocion } from "./promocion";
import type { DetalleCompra } from "./detalleCompra";
import type { Usuario } from "./usuario";

export interface Compra {
  idCompra: number;
  fechaCompra: string;
  total: number;
  estado: string;
  idPromocion?: number;
  idUsuario?: number;
  usuarios?: Usuario[];
  detalles?: DetalleCompra[];
  promocion?: Promocion;
}
