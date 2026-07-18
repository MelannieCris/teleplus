import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import styles from "../../css/dashboard.module.css";
import DashboardShell from "./DashboardShell";

function EventosDashboard() {
  const [eventos, setEventos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const [nuevoEvento, setNuevoEvento] = useState({
    titulo: "",
    descripcion: "",
    fecha_evento: "",
    hora_evento: "",
    estado: "programado"
  });

  const cargarEventos = () => {
    setCargando(true);
    axios
      .get("http://localhost:8080/api/eventos")
      .then((response) => {
        setEventos(response.data);
        setError("");
      })
      .catch((errorResponse) => {
        console.error(errorResponse);
        setError("No se pudieron cargar los eventos.");
      })
      .finally(() => {
        setCargando(false);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      cargarEventos();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoEvento((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/eventos", nuevoEvento)
      .then(() => {
        // SOLUCIÓN EFECTIVA: Activamos el disparador de cierre nativo de Bootstrap
        const disparadorCierre = document.getElementById("btn-cerrar-modal-eventos");
        if (disparadorCierre) disparadorCierre.click();

        alert("¡Evento creado con éxito!");
        
        setNuevoEvento({ 
          titulo: "", 
          descripcion: "", 
          fecha_evento: "", 
          hora_evento: "", 
          estado: "programado" 
        });
        cargarEventos();
      })
      .catch((err) => {
        console.error("Error al guardar evento:", err);
        alert("Error al intentar guardar el evento en el servidor.");
      });
  };

  const eventosFiltrados = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();

    if (!texto) {
      return eventos;
    }

    return eventos.filter((evento) => {
      const titulo = (evento.titulo || "").toLowerCase();
      const estado = (evento.estado || "").toLowerCase();
      const fecha = String(evento.fecha_evento || "").toLowerCase();

      return (
        titulo.includes(texto) ||
        estado.includes(texto) ||
        fecha.includes(texto)
      );
    });
  }, [busqueda, eventos]);

  const totalEventos = eventos.length;
  const eventosActivos = eventos.filter(
    (evento) => (evento.estado || "").toLowerCase() === "activo",
  ).length;
  const eventosProgramados = eventos.filter(
    (evento) => (evento.estado || "").toLowerCase() === "programado",
  ).length;

  return (
    <DashboardShell
      activeSection="eventos"
      title="Gestión de Eventos"
      subtitle="Consulta, filtra y revisa los eventos registrados en la plataforma"
    >
      <section className={styles.cards} style={{ background: "none" }}>
        <article className={styles.card}>
          <h3>Total eventos</h3>
          <p>{totalEventos}</p>
        </article>

        <article className={styles.card}>
          <h3>Activos</h3>
          <p>{eventosActivos}</p>
        </article>

        <article className={styles.card}>
          <h3>Programados</h3>
          <p>{eventosProgramados}</p>
        </article>

        <article className={styles.card}>
          <h3>Acciones</h3>
          <button 
            className="btn btn-sm btn-primary w-100 mt-1"
            data-bs-toggle="modal"
            data-bs-target="#modalNuevoEvento"
          >
            + Nuevo Evento
          </button>
        </article>
      </section>

      <section className={styles["table-section"]}>
        <div className={`${styles["section-header"]} section-header-row`}>
          <div>
            <h2>Listado de eventos</h2>
            <p>Visualiza la información principal de cada evento</p>
          </div>

          <input
            className={styles["dashboard-search"]}
            type="search"
            placeholder="Buscar por título, fecha o estado"
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value)}
          />
        </div>

        {error ? (
          <div className={`${styles["empty-state"]} ${styles["error-state"]}`}>
            {error}
          </div>
        ) : null}

        {!error && cargando ? (
          <div className={styles["empty-state"]}>Cargando eventos...</div>
        ) : null}

        {!error && !cargando && eventosFiltrados.length === 0 ? (
          <div className={styles["empty-state"]}>
            No hay eventos que coincidan con la búsqueda.
          </div>
        ) : null}

        {!error && !cargando && eventosFiltrados.length > 0 ? (
          <div className={styles["table-responsive"]}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Evento</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Estado</th>
                </tr>
              </thead>

              <tbody>
                {eventosFiltrados.map((evento) => (
                  <tr key={evento.id_evento || evento.id}>
                    <td>
                      <div className={styles["table-primary-text"]}>
                        {evento.titulo}
                      </div>
                      <div className={styles["table-secondary-text"]}>
                        ID {evento.id_evento || evento.id}
                      </div>
                    </td>
                    <td>{evento.fecha_evento || "--"}</td>
                    <td>{evento.hora_evento || "--"}</td>
                    <td>
                      <span
                        className={`${styles["status-badge"]} ${
                          styles[`status-${(evento.estado || "sin-estado").toLowerCase()}`] || ""
                        }`}
                      >
                        {evento.estado || "Sin estado"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </section>

      {/* MODAL DE BOOTSTRAP PARA CREAR UN EVENTO */}
      <div className="modal fade" id="modalNuevoEvento" tabIndex="-1" aria-labelledby="modalNuevoEventoLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white border-secondary">
            <div className="modal-header border-secondary">
              <h5 className="modal-title" id="modalNuevoEventoLabel">Registrar Nuevo Evento</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-close="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Título del Evento</label>
                  <input type="text" className="form-control bg-secondary text-white border-0" name="titulo" value={nuevoEvento.titulo} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Descripción</label>
                  <textarea className="form-control bg-secondary text-white border-0" name="descripcion" value={nuevoEvento.descripcion} onChange={handleChange} rows="2"></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Fecha del Evento</label>
                  <input type="date" className="form-control bg-secondary text-white border-0" name="fecha_evento" value={nuevoEvento.fecha_evento} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Hora del Evento</label>
                  <input type="time" className="form-control bg-secondary text-white border-0" name="hora_evento" value={nuevoEvento.hora_evento} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Estado Inicial</label>
                  <select className="form-select bg-secondary text-white border-0" name="estado" value={nuevoEvento.estado} onChange={handleChange}>
                    <option value="programado">Programado</option>
                    <option value="activo">Activo</option>
                    <option value="finalizado">Finalizado</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer border-secondary">
                {/* Botón oculto oficial de Bootstrap para controlar el cierre seguro */}
                <button id="btn-cerrar-modal-eventos" type="button" className="d-none" data-bs-dismiss="modal"></button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" className="btn btn-danger">Guardar Evento</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

export default EventosDashboard;
