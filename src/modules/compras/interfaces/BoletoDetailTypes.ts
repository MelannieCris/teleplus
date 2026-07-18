export interface BoletoDetalle {
  idCompra: number;
  fechaCompra: string;
  evento: string;
  fechaEvento: string;
  lugar: string;
  ciudad: string;
  zona: string;
  tipo: string;
  cantidad: number;
  precioUnitario: number;
  descuento: number;
  total: number;
  metodoPago: string;
  estado: string;
  codigoBoleto: string;
}
