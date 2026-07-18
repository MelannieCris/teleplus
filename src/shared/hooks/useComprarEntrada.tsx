import { useNavigate } from "react-router-dom";

interface TicketPurchaseData {
  evento: string;
  fecha: string;
  lugar: string;
  zona: string;
  tipo: string;
  precio: number;
}

export const useComprarEntrada = () => {
  const navigate = useNavigate();
  const comprarEntrada = ({
    evento,
    fecha,
    lugar,
    zona,
    tipo,
    precio,
  }: TicketPurchaseData): void => {
    navigate("/compras", {
      state: {
        evento,
        fecha,
        lugar,
        zona,
        tipo,
        precio,
      },
    });
  };

  return { comprarEntrada };
};
