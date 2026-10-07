/** 
@param {Object} props
@param {number} props.totalJuegos - cantidad total de juegos disponibles.
@param {Function} props.onOpenModal - función para abrir el modal de carrito de compras.*/

export default function Navbar({totalJuegos,onOpenAddModal}) {
    return(
         <header className="sticky-top">
      {/* 
        Etiqueta semántica <nav>: Define el bloque de navegación principal.
        Clases de Bootstrap 5:
        - navbar: Estructura base de barra de navegación.
        - navbar-expand-lg: Se colapsa en menú hamburguesa en pantallas menores a 992px.
        - navbar-dark bg-dark: Tema oscuro gamer.
        - shadow-lg: Sombra pronunciada para destacar la barra.
      */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-primary border-opacity-25 shadow-lg py-3">
        <div className="container">
          {/* Logotipo / Marca de la tienda */}
          <a className="navbar-brand d-flex align-items-center gap-2 fw-bold text-uppercase fs-4" href="#inicio">
            <i className="bi bi-controller text-primary fs-3"></i>
            <span className="text-white">Game<span className="text-primary">Zone</span></span>
          </a>

          {/* Botón hamburguesa para dispositivos móviles (Responsividad Bootstrap 5) */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContenido"
            aria-controls="navbarContenido"
            aria-expanded="false"
            aria-label="Abrir navegación móvil"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Enlaces de navegación colapsables */}
          <div className="collapse navbar-collapse" id="navbarContenido">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 gap-lg-2">
              <li className="nav-item">
                <a className="nav-link active fw-semibold" aria-current="page" href="#inicio">
                  <i className="bi bi-house-door me-1"></i> Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#catalogo">
                  <i className="bi bi-grid-3x3-gap me-1"></i> Catálogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#contacto">
                  <i className="bi bi-envelope me-1"></i> Contacto
                </a>
              </li>
            </ul>

            {/* Elementos a la derecha: Contador dinámico y botón para agregar juego */}
            <div className="d-flex align-items-center gap-3">
              {/* Badge dinámico con el total de juegos cargados en el estado */}
              <span className="badge bg-secondary bg-opacity-25 text-light border border-secondary px-3 py-2 rounded-pill d-none d-sm-inline-flex align-items-center gap-1">
                <i className="bi bi-collection-play text-info"></i>
                <span>En stock: <strong>{totalJuegos}</strong></span>
              </span>

              {/* Botón interactivo que ejecuta la función del padre mediante props */}
              <button
                type="button"
                className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2 px-3 py-2 rounded-pill fw-semibold"
                onClick={onOpenAddModal}
                title="Agregar nuevo videojuego al catálogo"
              >
                <i className="bi bi-plus-circle-fill"></i>
                <span>Nuevo Juego</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
    );
}