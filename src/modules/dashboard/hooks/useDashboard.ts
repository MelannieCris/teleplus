import { useAuth } from "../../../shared/hooks/useAuth";
import type { DashboardData } from "../interfaces/DashboardTypes";

export const useDashboard = () => {
  const { userRole } = useAuth();

  const dashboardData: DashboardData = {
    eventosActivos: 0,
    usuariosRegistrados: 0,
    ventasTotales: 0,
  };

  return {
    userRole,
    dashboardData,
  };
};
