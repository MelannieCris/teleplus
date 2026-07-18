import React, { useState } from "react";
import "./styles/formularios.css";

const PromocionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    codigo: "",
    descuentoPorcentaje: 0,
    fechaInicio: "",
    fechaFin: "",
    maximoUsos: 0,
    estado: "ACTIVO"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Promoción enviada:", formData);
  };

  return (
    <div className="form-container">
      <h2>Registro de Promoción</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Código</label>
          <input
            name="codigo"
            placeholder="Código"
            value={formData.codigo}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descuento (%)</label>
          <input
            type="number"
            name="descuentoPorcentaje"
            placeholder="Descuento (%)"
            value={formData.descuentoPorcentaje}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Fecha Inicio</label>
          <input
            type="date"
            name="fechaInicio"
            value={formData.fechaInicio}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Fecha Fin</label>
          <input
            type="date"
            name="fechaFin"
            value={formData.fechaFin}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Máximo de usos</label>
          <input
            type="number"
            name="maximoUsos"
            placeholder="Máximo de usos"
            value={formData.maximoUsos}
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

export default PromocionForm;
