import { usePerfil } from "../hooks/usePerfil";

export default function Perfil() {
  const { user } = usePerfil();

  if (!user) {
    return (
      <div className="container py-5 text-center">
        <h2>No hay sesión activa</h2>
        <a href="/login" className="btn btn-danger mt-3">
          Iniciar Sesión
        </a>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="h4 mb-4 text-center">Mi Perfil</h2>

              <div className="mb-3">
                <label htmlFor="perfil-nombre" className="form-label fw-semibold text-muted">Nombre</label>
                <input
                  id="perfil-nombre"
                  type="text"
                  className="form-control"
                  value={`${user.nombre} ${user.apellido}`}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="perfil-email" className="form-label fw-semibold text-muted">Correo Electrónico</label>
                <input
                  id="perfil-email"
                  type="email"
                  className="form-control"
                  value={user.correo}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="perfil-telefono" className="form-label fw-semibold text-muted">Teléfono</label>
                <input
                  id="perfil-telefono"
                  type="text"
                  className="form-control"
                  value={user.telefono}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="perfil-rol" className="form-label fw-semibold text-muted">Rol</label>
                <input
                  id="perfil-rol"
                  type="text"
                  className="form-control"
                  value={user.rol?.nombreRol ?? "Sin rol"}
                  readOnly
                />
              </div>

              <div className="mb-3">
                <label htmlFor="perfil-estado" className="form-label fw-semibold text-muted">Estado</label>
                <input
                  id="perfil-estado"
                  type="text"
                  className="form-control"
                  value={user.estado}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
