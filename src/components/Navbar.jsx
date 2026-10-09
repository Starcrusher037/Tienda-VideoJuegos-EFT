import { useState } from 'react';

/**
 * @param {Object} props
 * @param {number} props.totalCarrito - Cantidad de videojuegos actualmente en el carrito.
 * @param {Function} props.onOpenCart - Función para abrir el modal del carrito.
 */
export default function Navbar({ totalCarrito, onOpenCart }) {
  // Estado de React para controlar la apertura/cierre del menú móvil responsivo
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  /**
   * Alterna la visibilidad del menú móvil (abrir / cerrar).
   */
  const toggleMenu = () => {
    setIsNavCollapsed((prev) => !prev);
  };

  /**
   * Cierra el menú móvil al seleccionar cualquier enlace.
   */
  const cerrarMenu = () => {
    setIsNavCollapsed(true);
  };

  /**
   * Maneja el clic en el botón del carrito: cierra el menú y abre el modal.
   */
  const handleCarritoClick = () => {
    cerrarMenu();
    onOpenCart();
  };

  return (
    <header className="sticky-top">
      {/* 
        Etiqueta semántica <nav>: Define el bloque de navegación principal.
        Clases de Bootstrap 5:
        - navbar: Estructura base de barra de navegación.
        - navbar-expand-md: Se colapsa en menú hamburguesa en pantallas menores a 768px.
        - navbar-dark bg-dark: Tema oscuro para la tienda gamer.
        - shadow-lg: Sombra pronunciada para elevar la barra.
      */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark border-bottom border-primary border-opacity-25 shadow-lg py-3">
        <div className="container">
          {/* Logotipo y marca de la tienda */}
          <a className="navbar-brand d-flex align-items-center gap-2 fw-bold text-uppercase fs-4" href="#inicio">
            <i className="bi bi-controller text-primary fs-3"></i>
            <span className="text-white">Game<span className="text-primary">Zone</span></span>
          </a>

          {/* Botón hamburguesa para dispositivos móviles (Controlado con estado de React) */}
          <button
            className={`navbar-toggler border-0 ${isNavCollapsed ? 'collapsed' : ''}`}
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarContenido"
            aria-expanded={!isNavCollapsed}
            aria-label="Alternar navegación móvil"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Enlaces de navegación colapsables */}
          <div
            className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`}
            id="navbarContenido"
          >
            <ul className="navbar-nav me-auto mb-2 mb-md-0 ms-md-4 gap-md-2">
              <li className="nav-item">
                <a className="nav-link active fw-semibold" aria-current="page" href="#inicio" onClick={cerrarMenu}>
                  <i className="bi bi-house-door me-1"></i> Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#catalogo" onClick={cerrarMenu}>
                  <i className="bi bi-grid-3x3-gap me-1"></i> Catálogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#contacto" onClick={cerrarMenu}>
                  <i className="bi bi-envelope me-1"></i> Contacto
                </a>
              </li>
            </ul>

            {/* 
              BOTÓN DEL CARRITO DE COMPRAS:
              Muestra el ícono del carrito con un badge dinámico que indica
              cuántos videojuegos han sido agregados a la lista del carrito.
            */}
            <div className="d-flex align-items-center">
              <button
                type="button"
                className="btn btn-primary d-flex align-items-center gap-2 px-3 py-2 rounded-pill fw-semibold shadow-sm position-relative"
                onClick={handleCarritoClick}
                title="Ver carrito de compras"
              >
                <i className="bi bi-cart3 fs-5"></i>
                <span>Carrito</span>
                {/* Badge dinámico con el conteo de elementos en el estado del carrito */}
                <span className="badge bg-danger rounded-pill ms-1 px-2 py-1">
                  {totalCarrito}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
