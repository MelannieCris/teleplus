import { Link } from "react-router-dom";
import { useEventDetail } from "../hooks/useEventDetail";

export default function EventDetail() {
  const { evento, zonas, handleComprar, formatFecha } = useEventDetail();

  if (!evento) {
    return (
      <div className="container py-5 text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2>Evento no encontrado</h2>
        <p className="text-muted">El evento que buscas no existe o fue removido.</p>
        <Link to="/" className="btn btn-danger mt-3">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section
        className="position-relative d-flex align-items-center"
        style={{
          height: "clamp(350px, 50vh, 500px)",
          backgroundImage: `url(${evento.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" />
        <div className="container position-relative text-white">
          <h1 className="display-4 fw-bold">{evento.titulo}</h1>
          <p className="lead mb-0">{evento.ciudad} &middot; {evento.lugar}</p>
        </div>
      </section>

      <section className="container my-5">
        <div className="row g-5">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-3">Sobre el evento</h2>
            <p className="text-muted fs-5">{evento.descripcion}</p>

            <div className="row g-4 mt-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-danger bg-opacity-10 rounded-3 p-3">
                    <span className="text-danger fs-4">&#128197;</span>
                  </div>
                  <div>
                    <p className="fw-bold mb-0">Fecha</p>
                    <p className="text-muted mb-0">
                      {formatFecha(evento.fecha, evento.hora)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-danger bg-opacity-10 rounded-3 p-3">
                    <span className="text-danger fs-4">&#128336;</span>
                  </div>
                  <div>
                    <p className="fw-bold mb-0">Hora</p>
                    <p className="text-muted mb-0">{evento.hora} hrs</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-danger bg-opacity-10 rounded-3 p-3">
                    <span className="text-danger fs-4">&#128205;</span>
                  </div>
                  <div>
                    <p className="fw-bold mb-0">Lugar</p>
                    <p className="text-muted mb-0">{evento.lugar}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-danger bg-opacity-10 rounded-3 p-3">
                    <span className="text-danger fs-4">&#127915;</span>
                  </div>
                  <div>
                    <p className="fw-bold mb-0">Ciudad</p>
                    <p className="text-muted mb-0">{evento.ciudad}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-3">Entradas</h4>

                {zonas.map((zona) => (
                  <div
                    key={zona.tipo}
                    className="d-flex justify-content-between align-items-center border-bottom py-3"
                  >
                    <div>
                      <p className="fw-bold mb-0">{zona.nombre}</p>
                      <small className="text-muted">Zona {zona.nombre}</small>
                    </div>
                    <div className="text-end">
                      <p className="fw-bold text-danger mb-1">
                        S/ {evento.precio.toFixed(2)}
                      </p>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleComprar(zona.nombre, zona.tipo)}
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                ))}

                <Link
                  to="/"
                  className="btn btn-outline-secondary w-100 mt-3"
                >
                  Volver a eventos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
