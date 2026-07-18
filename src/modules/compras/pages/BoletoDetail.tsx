import { Link } from "react-router-dom";
import { FaCheckCircle, FaArrowLeft, FaQrcode } from "react-icons/fa";
import { useBoletoDetail } from "../hooks/useBoletoDetail";

export default function BoletoDetail() {
  const { boleto, isAuthenticated, handleVolver, formatFecha } = useBoletoDetail();

  if (!isAuthenticated) {
    return (
      <div className="container py-5 text-center">
        <h2>Debes iniciar sesión para ver este boleto</h2>
        <Link to="/login" className="btn btn-danger mt-3">
          Iniciar Sesión
        </Link>
      </div>
    );
  }

  if (!boleto) {
    return (
      <div className="container py-5 text-center">
        <h2>Boleto no encontrado</h2>
        <p className="text-muted">El boleto que buscas no existe o fue eliminado.</p>
        <button className="btn btn-danger mt-3" onClick={handleVolver}>
          Volver a mis boletos
        </button>
      </div>
    );
  }

  const metodoPagoLabel = boleto.metodoPago
    .replace("_", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">

          <button
            className="btn btn-link text-decoration-none text-danger fw-bold mb-4 p-0 d-flex align-items-center gap-2"
            onClick={handleVolver}
          >
            <FaArrowLeft /> Volver a mis boletos
          </button>

          <div className="card shadow-lg border-0 overflow-hidden">
            <div className="card-header bg-danger text-white text-center py-4">
              <FaQrcode style={{ fontSize: "3rem" }} className="mb-2" />
              <h3 className="fw-bold mb-0">{boleto.evento}</h3>
            </div>

            <div className="card-body p-0">

              <div className="text-center py-3 bg-light border-bottom">
                <small className="text-muted text-uppercase fw-bold">Código de boleto</small>
                <h4 className="fw-bold text-danger mb-0 mt-1 font-monospace">
                  {boleto.codigoBoleto}
                </h4>
              </div>

              <div className="p-4">
                <div className="row g-4">
                  <div className="col-6">
                    <small className="text-muted text-uppercase fw-bold d-block">Fecha del evento</small>
                    <span className="fw-semibold">{formatFecha(boleto.fechaEvento)}</span>
                  </div>
                  <div className="col-6">
                    <small className="text-muted text-uppercase fw-bold d-block">Lugar</small>
                    <span className="fw-semibold">{boleto.lugar}</span>
                  </div>
                  <div className="col-6">
                    <small className="text-muted text-uppercase fw-bold d-block">Ciudad</small>
                    <span className="fw-semibold">{boleto.ciudad}</span>
                  </div>
                  <div className="col-6">
                    <small className="text-muted text-uppercase fw-bold d-block">Zona</small>
                    <span className="fw-semibold">{boleto.zona} - {boleto.tipo}</span>
                  </div>
                  <div className="col-6">
                    <small className="text-muted text-uppercase fw-bold d-block">Cantidad</small>
                    <span className="fw-semibold">{boleto.cantidad} entrada{boleto.cantidad > 1 ? "s" : ""}</span>
                  </div>
                  <div className="col-6">
                    <small className="text-muted text-uppercase fw-bold d-block">Método de pago</small>
                    <span className="fw-semibold">{metodoPagoLabel}</span>
                  </div>
                </div>
              </div>

              <div className="border-top border-dashed mx-4" />

              <div className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <small className="text-muted">Precio unitario</small>
                  <span>S/ {boleto.precioUnitario.toFixed(2)}</span>
                </div>

                {boleto.descuento > 0 && (
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <small className="text-muted">Descuento</small>
                    <span className="text-success fw-bold">-{boleto.descuento}%</span>
                  </div>
                )}

                <hr />

                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold fs-5">Total pagado</span>
                  <span className="fw-bold text-danger fs-4">S/ {boleto.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-light p-4 text-center">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <small className="text-muted">Compra realizada el {formatFecha(boleto.fechaCompra)}</small>
                  <FaCheckCircle className="text-success" />
                </div>
                <span className={`badge ${boleto.estado === "CONFIRMADA" ? "bg-success" : "bg-warning"}`}>
                  {boleto.estado}
                </span>
              </div>

            </div>
          </div>

          <div className="text-center mt-4">
            <Link to="/" className="btn btn-outline-danger">
              Comprar más entradas
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
