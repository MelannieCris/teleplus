import React, { useState } from "react";
import "./styles/formularios.css";

const RolForm: React.FC = () => {
  const [nombreRol, setNombreRol] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Rol enviado:", { nombreRol });
  };

  return (
    <div className="form-container">
      <h2>Registro de Rol</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre del Rol</label>
          <input
            name="nombreRol"
            placeholder="Nombre del Rol"
            value={nombreRol}
            onChange={(e) => setNombreRol(e.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn-form">Guardar</button>
      </form>
    </div>
  );
};

export default RolForm;
