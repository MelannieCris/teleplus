export interface CompraLocal {
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
  estado: "CONFIRMADA" | "PENDIENTE" | "CANCELADA";
}

const STORAGE_KEY = "compras_ticketplus";

const generateId = (): number => {
  const array = new Uint8Array(8);
  crypto.getRandomValues(array);
  const random = Array.from(array, (byte) => byte.toString()).join("");
  return Date.now() + Number.parseInt(random.slice(0, 6), 10);
};

export const obtenerCompras = (): CompraLocal[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const guardarCompra = (compra: Omit<CompraLocal, "idCompra" | "fechaCompra">): CompraLocal => {
  const compras = obtenerCompras();
  const nuevaCompra: CompraLocal = {
    ...compra,
    idCompra: generateId(),
    fechaCompra: new Date().toISOString().split("T")[0],
  };
  compras.push(nuevaCompra);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(compras));
  return nuevaCompra;
};

export const eliminarCompra = (idCompra: number): void => {
  const compras = obtenerCompras();
  const filtradas = compras.filter((c) => c.idCompra !== idCompra);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtradas));
};

export const obtenerCompraPorId = (idCompra: number): CompraLocal | undefined => {
  const compras = obtenerCompras();
  return compras.find((c) => c.idCompra === idCompra);
};

export const limpiarCompras = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
