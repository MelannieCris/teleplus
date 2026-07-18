import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../shared/hooks/useAuth";
import { useApi } from "../../../shared/hooks/useApi";
import { validarPromocion } from "../../../core/services/promocionService";
import { guardarCompra } from "../../../shared/utils/comprasStorage";
import type { ValidarPromocionResponse } from "../../../core/model/PromocionDTO";
import type { DatosCompraState, PromoState } from "../interfaces/ComprasTypes";

export const useCompras = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const datosCompra = location.state as DatosCompraState | null;
  const precioUnitario = datosCompra?.precio || 0;

  const [cantidad, setCantidad] = useState(1);
  const [codigoPromo, setCodigoPromo] = useState("");
  const [metodoPago, setMetodoPago] = useState("tarjeta_credito");
  const [promoState, setPromoState] = useState<PromoState | null>(null);

  const { loading: promoLoading, execute: executePromo } =
    useApi<ValidarPromocionResponse>();
  const {
    loading: compraLoading,
    execute: executeCompra,
    error: compraError,
  } = useApi();

  const subtotal = precioUnitario * cantidad;
  const descuento = promoState?.valida ? promoState.descuento : 0;
  const totalFinal = subtotal - (subtotal * descuento) / 100;

  const aplicarPromocion = async () => {
    if (!codigoPromo.trim()) return;

    const data = await executePromo(() => validarPromocion(codigoPromo));
    if (data) {
      setPromoState({
        mensaje: data.mensaje,
        valida: data.valido,
        descuento: data.descuento,
      });
    } else {
      setPromoState({
        mensaje: "Error del servidor",
        valida: false,
        descuento: 0,
      });
    }
  };

  const handleCantidadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val >= 1 && val <= 10) setCantidad(val);
  };

  const processCompra = (): Promise<{ mensaje: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        guardarCompra({
          evento: datosCompra!.evento,
          fechaEvento: datosCompra!.fecha,
          lugar: datosCompra!.lugar,
          ciudad: datosCompra!.ciudad ?? "",
          zona: datosCompra!.zona,
          tipo: datosCompra!.tipo,
          cantidad,
          precioUnitario,
          descuento,
          total: totalFinal,
          metodoPago,
          estado: "CONFIRMADA",
        });
        resolve({ mensaje: "Compra realizada exitosamente" });
      }, 1500);
    });
  };

  const handleConfirmarCompra = async () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (!datosCompra) return;

    await executeCompra(async () => {
      return processCompra();
    });

    navigate("/ver-boletos");
  };

  return {
    datosCompra,
    precioUnitario,
    cantidad,
    codigoPromo,
    setCodigoPromo,
    metodoPago,
    setMetodoPago,
    promoState,
    promoLoading,
    compraLoading,
    compraError,
    subtotal,
    descuento,
    totalFinal,
    aplicarPromocion,
    handleCantidadChange,
    handleConfirmarCompra,
  };
};
