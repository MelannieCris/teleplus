import styles from "../styles/compras.module.css";
import { useCompras } from "../hooks/useCompras";
import type { PromoState } from "../interfaces/ComprasTypes";

const getPromoBorderClass = (promoState: PromoState | null): string => {
  if (promoState?.valida === true) return "border-success";
  if (promoState?.valida === false) return "border-danger";
  return "";
};

function Compras() {
  const {
    datosCompra,
    precioUnitario,
    cantidad,
    codigoPromo,
    setCodigoPromo,
    metodoPago,
    setMetodoPago,
    promoState,
    promoLoading,
    compraLoading,
    compraError,
    descuento,
    totalFinal,
    aplicarPromocion,
    handleCantidadChange,
    handleConfirmarCompra,
  } = useCompras();

  return (
    <div className={styles.page}>
        <section
          className={`d-flex align-items-center justify-content-center ${styles["seccion-principal"]}`}
        >
          <h1 className="text-white fw-bold">Compra tus entradas</h1>
        </section>

        <section className="container my-5" style={{ backgroundColor: "white" }}>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card bg-dark text-white p-4 h-100">
                <h3 className="text-white">
                  {datosCompra?.evento || "Evento no seleccionado"}
                </h3>
                <hr />
                <p className="text-white">
                  <strong>Fecha:</strong> {datosCompra?.fecha}
                </p>
                <p className="text-white">
                  <strong>Lugar:</strong> {datosCompra?.lugar}
                </p>
                <p className="text-white">
                  <strong>Zona:</strong> {datosCompra?.zona}
                </p>
                <p className="text-white">
                  <strong>Tipo:</strong> {datosCompra?.tipo}
                </p>
                <h4 className="mt-3">Precio unitario</h4>
                <h2 className="text-danger">S/ {precioUnitario.toFixed(2)}</h2>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card p-4 shadow h-100">
                <h4 className="mb-3">Selecciona tus entradas</h4>

                <label htmlFor="cantidad-boletos" className="form-label">Cantidad de boletos</label>
                <input
                  id="cantidad-boletos"
                  type="number"
                  className="form-control mb-3"
                  value={cantidad}
                  min="1"
                  max="10"
                  onChange={handleCantidadChange}
                />

                <label htmlFor="metodo-pago" className="form-label">Método de pago</label>
                <select
                  id="metodo-pago"
                  className="form-select mb-3"
                  value={metodoPago}
                  onChange={(e) => setMetodoPago(e.target.value)}
                >
                  <option value="tarjeta_credito">Tarjeta de crédito</option>
                  <option value="tarjeta_debito">Tarjeta de débito</option>
                  <option value="yape_plin">Yape / Plin</option>
                </select>

                <label htmlFor="codigo-promo" className="form-label fw-bold">Código promocional</label>
                <div className="d-flex gap-2 mb-2">
                  <input
                    id="codigo-promo"
                    type="text"
                    className={`form-control ${getPromoBorderClass(promoState)}`}
                    placeholder="Ej: INTERBANK2026"
                    value={codigoPromo}
                    onChange={(e) => setCodigoPromo(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={aplicarPromocion}
                    disabled={promoLoading || !codigoPromo.trim()}
                  >
                    {promoLoading ? (
                      <span className="spinner-border spinner-border-sm" aria-label="Cargando"></span>
                    ) : (
                      "Aplicar"
                    )}
                  </button>
                </div>

                {promoState?.mensaje && (
                  <div
                    className={`fw-bold mb-3 ${
                      promoState.valida ? "text-success" : "text-danger"
                    }`}
                  >
                    {promoState.mensaje}
                  </div>
                )}

                <hr />

                <h5>Total estimado</h5>
                {descuento > 0 && (
                  <p className="text-success fw-bold">
                    Descuento aplicado: {descuento}%
                  </p>
                )}
                <h3 className="text-danger">S/ {totalFinal.toFixed(2)}</h3>

                {compraError && (
                  <div className="alert alert-danger py-2 small text-center border-0 shadow-sm mt-3" role="alert">
                    {compraError}
                  </div>
                )}

                <button
                  type="button"
                  className="btn btn-danger w-100 mt-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                  onClick={handleConfirmarCompra}
                  disabled={compraLoading}
                >
                  {compraLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm" aria-label="Procesando"></span>
                      {" "}Procesando...
                    </>
                  ) : (
                    "Confirmar compra"
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="container text-center mb-5" style={{ backgroundColor: "white" }}>
          <small>Los boletos serán enviados a tu correo electrónico.</small>
        </section>
    </div>
  );
}

export default Compras;
