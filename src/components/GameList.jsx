import GameCard from './GameCard';

/**
 * ============================================================================
 * COMPONENTE: GameList
 * DESCRIPCIÓN: Contenedor que renderiza la lista dinámica de tarjetas de
 * videojuegos utilizando Bootstrap 5 Grid y Flexbox.
 * REQUERIMIENTOS:
 * - Paso 1: Organización responsiva con Flexbox / CSS Grid de Bootstrap 5.
 * - Paso 2: Recorrer el objeto/arreglo en JavaScript y generar dinámicamente las tarjetas.
 * - Paso 3: Componente modular de React que recibe datos y callbacks por props.
 * ============================================================================
 * @param {Object} props
 * @param {Array} props.juegos - Lista de videojuegos a renderizar.
 * @param {Function} props.onAgregarAlCarrito - Callback para añadir un juego al carrito.
 * @param {Function} props.onVerDetalle - Callback para ver el modal con detalle.
 * @param {Function} props.onResetFiltros - Callback para limpiar filtros si no hay resultados.
 * @param {Array} props.carrito - Arreglo del carrito actual para verificar si un juego ya fue agregado.
 */
export default function GameList({
  juegos,
  onAgregarAlCarrito,
  onVerDetalle,
  onResetFiltros,
  carrito = []
}) {
  // Manejo de estado vacío: cuando no se encuentran juegos con el filtro aplicado
  if (!juegos || juegos.length === 0) {
    return (
      <div className="text-center py-5 bg-dark bg-opacity-50 rounded-4 border border-secondary border-opacity-25 p-4 my-4">
        <i className="bi bi-controller text-secondary fs-1 d-block mb-3"></i>
        <h4 className="text-white fw-bold">No se encontraron videojuegos</h4>
        <p className="text-secondary mb-3">
          No hay títulos que coincidan con los criterios de búsqueda o categoría seleccionados.
        </p>
        <button
          type="button"
          className="btn btn-primary rounded-pill px-4"
          onClick={onResetFiltros}
        >
          <i className="bi bi-arrow-clockwise me-1"></i> Restablecer Filtros
        </button>
      </div>
    );
  }

  // Set con los IDs de juegos que ya están en el carrito para búsqueda eficiente O(1)
  const idsEnCarrito = new Set(carrito.map((item) => item.id));

  return (
    /* 
      Clases de grilla responsiva de Bootstrap 5:
      - row: Contenedor de fila flexible.
      - row-cols-1: 1 columna en móviles (xs).
      - row-cols-md-2: 2 columnas en tablets (md).
      - row-cols-lg-3: 3 columnas en computadores (lg).
      - g-4: Espaciado homogéneo horizontal y vertical.
    */
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {/* 
        Mapeo dinámico en JavaScript:
        Itera sobre los videojuegos filtrados y genera un GameCard por cada uno.
      */}
      {juegos.map((juego) => (
        <GameCard
          key={juego.id}
          juego={juego}
          onAgregarAlCarrito={onAgregarAlCarrito}
          onVerDetalle={onVerDetalle}
          estaEnCarrito={idsEnCarrito.has(juego.id)}
        />
      ))}
    </div>
  );
}
