export interface DatosCompraState {
  evento: string;
  fecha: string;
  lugar: string;
  ciudad: string;
  zona: string;
  tipo: string;
  precio: number;
}

export interface PromoState {
  mensaje: string;
  valida: boolean;
  descuento: number;
}
