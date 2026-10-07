/**
 * ============================================================================
 * COMPONENTE: GameCard
 * DESCRIPCIÓN: Representa la tarjeta individual de un videojuego en la tienda.
 * REQUERIMIENTOS:
 * - Paso 1: Tarjetas con imagen, nombre, precio y descripción organizadas con Bootstrap 5.
 * - Paso 2: Generación dinámica a partir del objeto/arreglo de JavaScript.
 * - Paso 3: Uso de props para enviar la acción de agregar el juego a la lista del carrito.
 * ============================================================================
 * @param {Object} props
 * @param {Object} props.juego - Objeto con datos del videojuego.
 * @param {Function} props.onAgregarAlCarrito - Callback para agregar este juego a la lista del carrito.
 * @param {Function} props.onVerDetalle - Callback para ver el modal con el detalle del juego.
 * @param {boolean} props.estaEnCarrito - Indica si el juego ya fue añadido al carrito.
 */
export default function GameCard({ juego, onAgregarAlCarrito, onVerDetalle, estaEnCarrito }) {
  // Formateador estándar de moneda chilena (CLP) usando Intl de JavaScript
  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0
    }).format(valor);
  };

  // Color de badge según la categoría para mejorar la experiencia visual
  const getBadgeColor = (categoria) => {
    switch (categoria) {
      case 'Acción': return 'bg-danger';
      case 'Aventura': return 'bg-success';
      case 'RPG': return 'bg-warning text-dark';
      case 'Estrategia': return 'bg-info text-dark';
      case 'Deportes': return 'bg-primary';
      case 'Terror': return 'bg-dark border border-secondary';
      default: return 'bg-secondary';
    }
  };

  return (
    <div className="col">
      {/* 
        Clases de Bootstrap 5:
        - card: Componente base de tarjeta.
        - h-100: Altura 100% para alinear todas las tarjetas en la grilla.
        - bg-dark text-white: Estética oscura gamer.
        - shadow-sm: Sombra suave con efecto hover en CSS personalizado.
      */}
      <div className="card h-100 bg-dark text-white border-secondary border-opacity-50 game-card shadow-sm transition-transform">
        {/* Contenedor de la imagen con badges superpuestos */}
        <div className="position-relative overflow-hidden card-img-wrapper" style={{ height: '220px' }}>
          <img
            src={juego.imagen}
            className="card-img-top w-100 h-100 object-fit-cover"
            alt={juego.nombre}
            loading="lazy"
            onError={(e) => {
              // Fallback en caso de que la imagen falle al cargar
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80';
            }}
          />
          {/* Badge de Categoría */}
          <span className={`badge ${getBadgeColor(juego.categoria)} position-absolute top-0 start-0 m-2 px-3 py-2 rounded-pill shadow-sm fw-semibold`}>
            {juego.categoria}
          </span>
          {/* Calificación por estrellas */}
          {juego.calificacion && (
            <span className="badge bg-black bg-opacity-75 text-warning position-absolute top-0 end-0 m-2 px-2 py-1 rounded-pill shadow-sm">
              <i className="bi bi-star-fill me-1"></i>
              {juego.calificacion}
            </span>
          )}
        </div>

        {/* Cuerpo de la tarjeta con nombre, plataforma y descripción */}
        <div className="card-body d-flex flex-column">
          <small className="text-secondary text-uppercase fw-bold letter-spacing-1 mb-1">
            <i className="bi bi-cpu me-1"></i> {juego.plataforma || 'Multiplataforma'}
          </small>

          <h5 className="card-title fw-bold text-white mb-2 line-clamp-1" title={juego.nombre}>
            {juego.nombre}
          </h5>

          {/* Descripción limitada con clase CSS line-clamp */}
          <p className="card-text text-secondary small flex-grow-1 line-clamp-3">
            {juego.descripcion}
          </p>

          {/* Precio destacado */}
          <div className="mt-3 pt-2 border-top border-secondary border-opacity-25 d-flex align-items-center justify-content-between">
            <span className="text-secondary small">Precio:</span>
            <span className="fs-5 fw-bold text-success">
              {formatearPrecio(juego.precio)}
            </span>
          </div>
        </div>

        {/* Pie de la tarjeta con botones de acción interactivos */}
        <div className="card-footer bg-transparent border-top border-secondary border-opacity-25 p-3 d-flex gap-2">
          {/* Botón Ver Detalle */}
          <button
            type="button"
            className="btn btn-sm btn-outline-info flex-grow-1 d-flex align-items-center justify-content-center gap-1"
            onClick={() => onVerDetalle(juego)}
          >
            <i className="bi bi-eye"></i> Detalle
          </button>

          {/* 
            Botón Añadir al Carrito:
            Permite agregar el videojuego a la lista del carrito modificando el estado dinámicamente.
          */}
          <button
            type="button"
            className={`btn btn-sm d-flex align-items-center justify-content-center gap-1 ${
              estaEnCarrito ? 'btn-success' : 'btn-primary'
            }`}
            onClick={() => onAgregarAlCarrito(juego)}
            title={estaEnCarrito ? 'Añadir otra unidad al carrito' : 'Añadir este juego al carrito'}
          >
            <i className={`bi ${estaEnCarrito ? 'bi-check2' : 'bi-cart-plus'}`}></i>
            <span>{estaEnCarrito ? 'En Carrito' : 'Añadir'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
