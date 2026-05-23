import LayoutPrincipal from "../layouts/LayoutPrincipal";

function PoliticaCompra() {

  return (

    <LayoutPrincipal>

      {/* HERO */}
      <section
        className="bg-dark text-white py-5"
      >

        <div className="container text-center">

          <h1 className="display-4 fw-bold">
            Política de Compra
          </h1>

          <p className="lead mt-3">

            Información importante sobre
            compras, reembolsos y uso
            de entradas en Ticket +.

          </p>

        </div>

      </section>

      {/* CONTENIDO */}
      <section className="py-5 bg-light">

        <div className="container">

          <div className="row g-4">

            {/* CARD 1 */}
            <div className="col-md-6">

              <div className="card shadow border-0 h-100">

                <div className="card-body p-4">

                  <h3 className="mb-3 text-danger">
                    Compra de Entradas
                  </h3>

                  <p>

                    Todas las entradas adquiridas
                    mediante Ticket + son válidas
                    únicamente para el evento,
                    fecha y zona seleccionada
                    durante el proceso de compra.

                  </p>

                  <p>

                    El usuario es responsable
                    de verificar correctamente
                    la información antes de
                    confirmar el pago.

                  </p>

                </div>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="col-md-6">

              <div className="card shadow border-0 h-100">

                <div className="card-body p-4">

                  <h3 className="mb-3 text-danger">
                    Reembolsos
                  </h3>

                  <p>

                    No se aceptan devoluciones
                    ni cambios de entradas,
                    excepto en casos de cancelación
                    oficial del evento.

                  </p>

                  <p>

                    En caso de reprogramación,
                    las entradas seguirán siendo
                    válidas para la nueva fecha
                    establecida por el organizador.

                  </p>

                </div>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="col-md-6">

              <div className="card shadow border-0 h-100">

                <div className="card-body p-4">

                  <h3 className="mb-3 text-danger">
                    Uso de Promociones
                  </h3>

                  <p>

                    Los códigos promocionales
                    están sujetos a disponibilidad,
                    fecha de expiración y cantidad
                    limitada de usos.

                  </p>

                  <p>

                    Ticket + se reserva el derecho
                    de invalidar promociones
                    utilizadas de manera fraudulenta.

                  </p>

                </div>

              </div>

            </div>

            {/* CARD 4 */}
            <div className="col-md-6">

              <div className="card shadow border-0 h-100">

                <div className="card-body p-4">

                  <h3 className="mb-3 text-danger">
                    Acceso al Evento
                  </h3>

                  <p>

                    El ingreso al evento podrá
                    requerir documento de identidad
                    y validación del código QR
                    de la entrada.

                  </p>

                  <p>

                    Entradas dañadas, duplicadas
                    o alteradas podrán ser rechazadas
                    por el organizador.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


    </LayoutPrincipal>

  );

}

export default PoliticaCompra;