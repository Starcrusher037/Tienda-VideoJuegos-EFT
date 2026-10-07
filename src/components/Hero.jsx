
/**
 * ============================================================================
 * COMPONENTE: Hero
 * DESCRIPCIÓN: Sección principal de bienvenida (Banner) utilizando HTML5 semántico
 * (<section>), Flexbox y Bootstrap 5 para un diseño responsivo e impactante.
 * ============================================================================
 */
export default function Hero() {
  return (
    <section id="inicio" className="hero-section py-5 text-white position-relative overflow-hidden">
      <div className="container py-lg-4">
        <div className="row align-items-center g-5">
          {/* Columna de texto y llamados a la acción */}
          <div className="col-lg-7 text-center text-lg-start">
            {/* Badge distintivo */}
            <span className="badge bg-primary bg-opacity-25 text-primary border border-primary px-3 py-2 rounded-pill mb-3 fw-semibold text-uppercase tracking-wide">
              <i className="bi bi-stars me-1"></i> La mejor tienda gamer de Chile
            </span>

            <h1 className="display-4 fw-black mb-3 text-gradient">
              Descubre y Conquista Nuevos Mundos
            </h1>

            <p className="lead text-secondary mb-4 fs-5">
              Encuentra los mejores lanzamientos, clásicos atemporales y ofertas exclusivas 
              para PlayStation, Xbox, Nintendo Switch y PC. Todo con despacho inmediato y garantía total.
            </p>

            {/* Botones de acción organizados con Flexbox de Bootstrap 5 */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <a href="#catalogo" className="btn btn-primary btn-lg px-4 py-2 rounded-pill shadow-sm d-flex align-items-center gap-2 fw-semibold">
                <i className="bi bi-controller"></i>
                <span>Explorar Catálogo</span>
              </a>
              <a href="#contacto" className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill d-flex align-items-center gap-2 fw-semibold">
                <i className="bi bi-chat-dots"></i>
                <span>Contáctanos</span>
              </a>
            </div>

            {/* Métricas destacadas en Flexbox responsivo */}
            <div className="row g-3 mt-4 pt-3 border-top border-secondary border-opacity-25 text-start">
              <div className="col-4">
                <div className="fw-bold fs-4 text-white">+500</div>
                <small className="text-secondary">Títulos disponibles</small>
              </div>
              <div className="col-4">
                <div className="fw-bold fs-4 text-primary">100%</div>
                <small className="text-secondary">Juegos Originales</small>
              </div>
              <div className="col-4">
                <div className="fw-bold fs-4 text-info">24/7</div>
                <small className="text-secondary">Soporte Gamer</small>
              </div>
            </div>
          </div>

          {/* Columna de Imagen / Ilustración con efectos CSS */}
          <div className="col-lg-5 text-center">
            <div className="hero-image-wrapper p-3 rounded-4 shadow-lg position-relative">
              <img
                src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80"
                alt="Consola y control gamer"
                className="img-fluid rounded-4 shadow"
                loading="lazy"
              />
              <div className="floating-card position-absolute bottom-0 start-0 translate-middle-y bg-dark bg-opacity-90 border border-primary p-3 rounded-3 shadow text-start d-none d-sm-block ms-2">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-shield-check text-success fs-3"></i>
                  <div>
                    <h6 className="mb-0 text-white fw-bold">Compra Segura</h6>
                    <small className="text-secondary">Entrega digital y física</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
