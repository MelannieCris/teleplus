import { useDashboard } from "../hooks/useDashboard";

export default function Dashboard() {
  const { userRole, dashboardData } = useDashboard();

  return (
    <div className="container py-5">
      <h1 className="h3 mb-4">
        {userRole === "ADMIN" ? "Panel de Administración" : "Gestión de Eventos"}
      </h1>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card p-4 shadow-sm h-100">
            <h5 className="card-title">Eventos Activos</h5>
            <p className="display-6 fw-bold text-danger">{dashboardData.eventosActivos}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 shadow-sm h-100">
            <h5 className="card-title">Usuarios Registrados</h5>
            <p className="display-6 fw-bold text-danger">{dashboardData.usuariosRegistrados}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 shadow-sm h-100">
            <h5 className="card-title">Ventas Totales</h5>
            <p className="display-6 fw-bold text-danger">S/ {dashboardData.ventasTotales.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
