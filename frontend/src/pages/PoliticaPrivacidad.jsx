import LayoutPrincipal from "../layouts/LayoutPrincipal";

function PoliticaPrivacidad() {

  return (

    <LayoutPrincipal>

      {/* HERO */}
      <section className="bg-dark text-white py-5">

        <div className="container text-center">

          <h1 className="display-4 fw-bold">
            Política de Privacidad
          </h1>

          <p className="lead mt-3">

            Conoce cómo Ticket + recopila,
            protege y utiliza la información
            de sus usuarios.

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

                  <h3 className="text-danger mb-3">

                    Datos Recopilados

                  </h3>

                  <p>

                    Ticket + puede recopilar
                    información personal como
                    nombre, correo electrónico,
                    teléfono y datos necesarios
                    para procesar compras.

                  </p>

                  <p>

                    La información es utilizada
                    únicamente para brindar
                    servicios relacionados con
                    eventos y soporte.

                  </p>

                </div>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="col-md-6">

              <div className="card shadow border-0 h-100">

                <div className="card-body p-4">

                  <h3 className="text-danger mb-3">

                    Protección de Información

                  </h3>

                  <p>

                    Implementamos medidas de
                    seguridad para proteger
                    los datos personales
                    de accesos no autorizados.

                  </p>

                  <p>

                    Toda la información sensible
                    es tratada bajo protocolos
                    de seguridad modernos.

                  </p>

                </div>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="col-md-6">

              <div className="card shadow border-0 h-100">

                <div className="card-body p-4">

                  <h3 className="text-danger mb-3">

                    Uso de la Información

                  </h3>

                  <p>

                    Los datos podrán utilizarse
                    para enviar confirmaciones,
                    boletos digitales y avisos
                    relacionados con eventos.

                  </p>

                  <p>

                    Ticket + no vende información
                    personal a terceros.

                  </p>

                </div>

              </div>

            </div>

            {/* CARD 4 */}
            <div className="col-md-6">

              <div className="card shadow border-0 h-100">

                <div className="card-body p-4">

                  <h3 className="text-danger mb-3">

                    Derechos del Usuario

                  </h3>

                  <p>

                    El usuario puede solicitar
                    actualización o eliminación
                    de sus datos personales.

                  </p>

                  <p>

                    Para cualquier consulta
                    relacionada con privacidad,
                    puede contactarse con
                    soporte oficial.

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

export default PoliticaPrivacidad;