import React, { useState } from "react";
import "./styles/formularios.css";

const LugarForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
    capacidadTotal: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lugar enviado:", formData);
  };

  return (
    <div className="form-container">
      <h2>Registro de Lugar</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            name="direccion"
            placeholder="Dirección"
            value={formData.direccion}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ciudad</label>
          <input
            name="ciudad"
            placeholder="Ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Capacidad Total</label>
          <input
            type="number"
            name="capacidadTotal"
            placeholder="Capacidad Total"
            value={formData.capacidadTotal}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn-form">Guardar</button>
      </form>
    </div>
  );
};

export default LugarForm;
