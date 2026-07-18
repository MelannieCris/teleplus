import { useState, useMemo } from "react";
import { useAuth } from "../../../shared/hooks/useAuth";
import { obtenerCompras } from "../../../shared/utils/comprasStorage";
import type { CompraLocal } from "../../../shared/utils/comprasStorage";
import type { TabType } from "../interfaces/VerBoletosTypes";

export const useVerBoletos = () => {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>("compras");

  const compras: CompraLocal[] = useMemo(() => {
    if (!isAuthenticated) return [];
    return obtenerCompras();
  }, [isAuthenticated]);

  return {
    isAuthenticated,
    activeTab,
    setActiveTab,
    compras,
    loading: false,
  };
};
