import { useState } from 'react';

/**
 * Modal interactivo del Carrito de Compras.
 * Permite visualizar la lista de videojuegos seleccionados por el cliente,
 * ver el total acumulado en pesos chilenos (CLP), eliminar videojuegos
 * individualmente de la lista, o vaciar el carrito completo.
 * @param {Object} props
 * @param {boolean} props.isOpen - Controla si el modal está visible en pantalla.
 * @param {Function} props.onClose - Función para cerrar el modal.
 * @param {Array} props.carrito - Arreglo dinámico con los videojuegos en el carrito.
 * @param {Function} props.onEliminarDelCarrito - Callback para quitar un juego por su ID.
 * @param {Function} props.onVaciarCarrito - Callback para limpiar todo el carrito.
 */
export default function CartModal({
  isOpen,
  onClose,
  carrito,
  onEliminarDelCarrito,
  onVaciarCarrito
}) {
  // Estado local para simular la confirmación de checkout/compra exitosa
  const [compraRealizada, setCompraRealizada] = useState(false);

  if (!isOpen) return null;

  // Formateador de moneda en pesos chilenos (CLP)
  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      maximumFractionDigits: 0
    }).format(valor);
  };

  // Cálculo del total acumulado sumando el precio de cada videojuego en la lista
  const totalPagar = carrito.reduce((acumulado, juego) => acumulado + juego.precio, 0);

  // Manejador del botón finalizar compra
  const handleFinalizarCompra = () => {
    setCompraRealizada(true);
    setTimeout(() => {
      onVaciarCarrito();
      setCompraRealizada(false);
      onClose();
    }, 2500);
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
        <div className="modal-content bg-dark text-white border-primary border-opacity-50 shadow-lg rounded-4">
          
          {/* Cabecera del Carrito */}
          <div className="modal-header border-secondary border-opacity-50">
            <h5 className="modal-title fw-bold d-flex align-items-center gap-2">
              <i className="bi bi-cart3 text-primary fs-4"></i>
              <span>Carrito de Compras ({carrito.length})</span>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Cerrar carrito"
            ></button>
          </div>

          {/* Cuerpo del Modal */}
          <div className="modal-body p-4">
            
            {/* Mensaje de confirmación de compra exitosa */}
            {compraRealizada ? (
              <div className="text-center py-5">
                <i className="bi bi-check-circle-fill text-success display-3 d-block mb-3"></i>
                <h4 className="fw-bold text-white">¡Gracias por tu compra!</h4>
                <p className="text-secondary mb-0">
                  Tu orden ha sido procesada exitosamente. Recibirás los códigos digitales en tu correo.
                </p>
              </div>
            ) : carrito.length === 0 ? (
              /* Estado Vacío del Carrito */
              <div className="text-center py-5">
                <i className="bi bi-cart-x text-secondary display-4 d-block mb-3"></i>
                <h5 className="fw-bold text-white">Tu carrito está actualmente vacío</h5>
                <p className="text-secondary mb-3">
                  Aún no has agregado ningún videojuego a tu lista de compra.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-primary rounded-pill px-4"
                  onClick={onClose}
                >
                  <i className="bi bi-controller me-1"></i> Explorar Catálogo
                </button>
              </div>
            ) : (
              /* Lista dinámica de videojuegos agregados al carrito */
              <div>
                <div className="list-group list-group-flush mb-3">
                  {carrito.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="list-group-item bg-dark text-white border-secondary border-opacity-25 px-0 py-3 d-flex align-items-center justify-content-between gap-3"
                    >
                      {/* Imagen miniatura y datos del juego */}
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={item.imagen}
                          alt={item.nombre}
                          className="rounded-3 object-fit-cover flex-shrink-0"
                          style={{ width: '64px', height: '64px' }}
                        />
                        <div>
                          <h6 className="mb-1 fw-bold text-white line-clamp-1">{item.nombre}</h6>
                          <div className="d-flex align-items-center gap-2 small">
                            <span className="badge bg-secondary">{item.categoria}</span>
                            <span className="text-secondary">{item.plataforma || 'Digital'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Precio y botón para eliminar este juego de la lista */}
                      <div className="d-flex align-items-center gap-3">
                        <span className="fw-bold text-success fs-6">
                          {formatearPrecio(item.precio)}
                        </span>
                        {/* 
                          Botón para eliminar de la lista del carrito:
                          Cumple con el requerimiento de alterar el estado eliminando un juego.
                        */}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger rounded-circle p-2 d-flex align-items-center justify-content-center"
                          style={{ width: '36px', height: '36px' }}
                          onClick={() => onEliminarDelCarrito(item.id)}
                          title="Eliminar este videojuego del carrito"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Resumen del Total */}
                <div className="bg-black bg-opacity-50 p-3 rounded-3 border border-secondary border-opacity-25 d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="text-secondary small d-block">Total a Pagar:</span>
                    <span className="fs-4 fw-bold text-success">{formatearPrecio(totalPagar)}</span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={onVaciarCarrito}
                    title="Vaciar todos los artículos del carrito"
                  >
                    <i className="bi bi-trash3 me-1"></i> Vaciar Carrito
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Pie del Modal con acciones */}
          {!compraRealizada && (
            <div className="modal-footer border-secondary border-opacity-50 justify-content-between">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onClose}
              >
                Seguir Comprando
              </button>
              {carrito.length > 0 && (
                <button
                  type="button"
                  className="btn btn-primary px-4 fw-semibold shadow"
                  onClick={handleFinalizarCompra}
                >
                  <i className="bi bi-credit-card me-1"></i> Finalizar Compra
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
