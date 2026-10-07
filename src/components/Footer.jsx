
/**
 * COMPONENTE: Footer
 * DESCRIPCIÓN: Pie de página del sitio web utilizando la etiqueta semántica
 * <footer> de HTML5 y maquetación con Bootstrap 5 Grid.
 */
export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="bg-black text-secondary pt-5 pb-4 border-top border-secondary border-opacity-25">
      <div className="container">
        <div className="row g-4 justify-content-between">
          
          {/* Columna 1: Información de marca y descripción */}
          <div className="col-12 col-md-5 col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-controller text-primary fs-3"></i>
              <span className="fs-4 fw-bold text-white text-uppercase">
                Game<span className="text-primary">Zone</span>
              </span>
            </div>
            <p className="small text-secondary mb-3">
              Tu portal definitivo para adquirir videojuegos digitales y físicos de última generación.
              Calidad, velocidad y pasión gamer al alcance de tus manos.
            </p>
            {/* Redes sociales */}
            <div className="d-flex gap-3 fs-5">
              <a href="#inicio" className="text-secondary hover-text-primary" aria-label="Discord">
                <i className="bi bi-discord"></i>
              </a>
              <a href="#inicio" className="text-secondary hover-text-primary" aria-label="Twitch">
                <i className="bi bi-twitch"></i>
              </a>
              <a href="#inicio" className="text-secondary hover-text-primary" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#inicio" className="text-secondary hover-text-primary" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos de navegación */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="text-white fw-bold text-uppercase mb-3">Navegación</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <a href="#inicio" className="text-secondary text-decoration-none hover-text-light">
                  <i className="bi bi-chevron-right me-1 text-primary"></i> Inicio
                </a>
              </li>
              <li>
                <a href="#catalogo" className="text-secondary text-decoration-none hover-text-light">
                  <i className="bi bi-chevron-right me-1 text-primary"></i> Catálogo
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-secondary text-decoration-none hover-text-light">
                  <i className="bi bi-chevron-right me-1 text-primary"></i> Contacto
                </a>
              </li>
              <li>
                <a href="#catalogo" className="text-secondary text-decoration-none hover-text-light">
                  <i className="bi bi-chevron-right me-1 text-primary"></i> Ofertas Especiales
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información de seguridad y medios de pago */}
          <div className="col-6 col-md-4 col-lg-3">
            <h6 className="text-white fw-bold text-uppercase mb-3">Métodos de Pago</h6>
            <p className="small text-secondary mb-2">
              Aceptamos los principales métodos de pago con cifrado seguro SSL.
            </p>
            <div className="d-flex flex-wrap gap-2 fs-4 text-light">
              <i className="bi bi-credit-card-2-front" title="Tarjetas de Crédito / Débito"></i>
              <i className="bi bi-wallet2" title="Billeteras Digitales"></i>
              <i className="bi bi-shield-check text-success" title="Transacciones Seguras"></i>
            </div>
          </div>

        </div>

        {/* Línea divisoria y derechos reservados */}
        <div className="border-top border-secondary border-opacity-25 mt-4 pt-3 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 small">
          <p className="mb-0 text-secondary">
            &copy; {anioActual} <strong>GameZone Inc.</strong> Todos los derechos reservados.
          </p>
          <p className="mb-0 text-secondary">
            Desarrollado para Evaluación Front-End I (EFT) con HTML5, CSS3, Bootstrap 5 y React.
          </p>
        </div>
      </div>
    </footer>
  );
}
