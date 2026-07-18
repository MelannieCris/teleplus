import React, { useState } from "react";
import "./styles/formularios.css";

const ZonaForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombreZona: "",
    capacidad: 0,
    estado: "ACTIVO"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Zona enviada:", formData);
  };

  return (
    <div className="form-container">
      <h2>Registro de Zona</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre de la Zona</label>
          <input
            name="nombreZona"
            placeholder="Nombre de la Zona"
            value={formData.nombreZona}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Capacidad</label>
          <input
            type="number"
            name="capacidad"
            placeholder="Capacidad"
            value={formData.capacidad}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Estado</label>
          <select
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className="form-control"
          >
            <option value="ACTIVO">Activo</option>
            <option value="INACTIVO">Inactivo</option>
          </select>
        </div>

        <button type="submit" className="btn-form">Guardar</button>
      </form>
    </div>
  );
};

export default ZonaForm;
