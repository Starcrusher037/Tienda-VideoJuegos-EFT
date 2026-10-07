/**
 * DESCRIPCIÓN: Modal para mostrar la información completa de un videojuego
 * seleccionado por el usuario y permitir agregarlo al carrito de compras.
 
 * @param {Object} props
 * @param {Object|null} props.juego - Objeto con datos del juego seleccionado.
 * @param {Function} props.onClose - Función para cerrar el modal.
 * @param {Function} props.onAgregarAlCarrito - Callback para sumar el juego al carrito.
 */
export default function GameDetailModal({ juego, onClose, onAgregarAlCarrito }) {
  if (!juego) return null;

  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0
    }).format(valor);
  };

  const handleAgregar = () => {
    onAgregarAlCarrito(juego);
    onClose();
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content bg-dark text-white border-primary border-opacity-50 shadow-lg rounded-4 overflow-hidden">
          <div className="row g-0">
            {/* Imagen del juego */}
            <div className="col-md-5 position-relative">
              <img
                src={juego.imagen}
                alt={juego.nombre}
                className="w-100 h-100 object-fit-cover"
                style={{ minHeight: '260px' }}
              />
              <span className="badge bg-primary position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">
                {juego.categoria}
              </span>
            </div>

            {/* Contenido descriptivo */}
            <div className="col-md-7 d-flex flex-column p-4">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <span className="badge bg-secondary mb-2">
                    <i className="bi bi-controller me-1"></i> {juego.plataforma || 'Multiplataforma'}
                  </span>
                  <h4 className="fw-bold text-white mb-0">{juego.nombre}</h4>
                </div>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={onClose}
                  aria-label="Cerrar"
                ></button>
              </div>

              {juego.calificacion && (
                <div className="text-warning mb-3">
                  <i className="bi bi-star-fill me-1"></i>
                  <span className="fw-bold">{juego.calificacion}</span> / 5.0 en reseñas
                </div>
              )}

              <p className="text-secondary flex-grow-1">
                {juego.descripcion}
              </p>

              <div className="border-top border-secondary border-opacity-25 pt-3 mt-2 d-flex align-items-center justify-content-between">
                <div>
                  <small className="text-secondary d-block">Precio:</small>
                  <span className="fs-3 fw-bold text-success">
                    {formatearPrecio(juego.precio)}
                  </span>
                </div>
                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-primary px-4 fw-semibold"
                    onClick={handleAgregar}
                  >
                    <i className="bi bi-cart-plus me-1"></i> Añadir al Carrito
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={onClose}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
