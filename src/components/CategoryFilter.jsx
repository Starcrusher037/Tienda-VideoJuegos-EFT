
/**
 * ============================================================================
 * COMPONENTE: CategoryFilter
 * DESCRIPCIÓN: Componente encargado del filtrado dinámico de videojuegos
 * por categoría y por término de búsqueda.
 * ============================================================================
 * @param {Object} props
 * @param {string[]} props.categorias - Arreglo con las categorías disponibles.
 * @param {string} props.categoriaSeleccionada - Categoría actualmente seleccionada.
 * @param {Function} props.onSeleccionarCategoria - Callback para cambiar categoría activa.
 * @param {string} props.busqueda - Término de búsqueda por texto.
 * @param {Function} props.onCambiarBusqueda - Callback para actualizar texto de búsqueda.
 * @param {number} props.totalResultados - Cantidad de juegos que cumplen el filtro.
 */
export default function CategoryFilter({
  categorias,
  categoriaSeleccionada,
  onSeleccionarCategoria,
  busqueda,
  onCambiarBusqueda,
  totalResultados
}) {
  return (
    <div className="filter-container bg-dark bg-opacity-75 p-4 rounded-4 border border-secondary border-opacity-25 shadow-sm mb-4">
      <div className="row g-3 align-items-center justify-content-between">
        {/* Barra de búsqueda por texto */}
        <div className="col-12 col-md-5 col-lg-4">
          <label htmlFor="inputBusqueda" className="form-label text-light small fw-semibold mb-1">
            <i className="bi bi-search me-1 text-primary"></i> Buscar por título:
          </label>
          <div className="input-group">
            <span className="input-group-text bg-secondary bg-opacity-25 border-secondary text-secondary">
              <i className="bi bi-search"></i>
            </span>
            <input
              id="inputBusqueda"
              type="text"
              className="form-control bg-dark text-white border-secondary"
              placeholder="Ej: Zelda, FIFA, Elden..."
              value={busqueda}
              onChange={(e) => onCambiarBusqueda(e.target.value)}
            />
            {busqueda && (
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => onCambiarBusqueda('')}
                title="Limpiar búsqueda"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            )}
          </div>
        </div>

        {/* Indicador de resultados encontrados */}
        <div className="col-12 col-md-auto text-md-end text-secondary small">
          Mostrando <span className="badge bg-primary text-white fs-6">{totalResultados}</span> videojuegos
        </div>
      </div>

      {/* Botones de categorías (Flexbox responsivo) */}
      <div className="mt-3">
        <label className="form-label text-light small fw-semibold d-block mb-2">
          <i className="bi bi-funnel me-1 text-primary"></i> Filtrar por Categoría:
        </label>
        <div className="d-flex flex-wrap gap-2">
          {categorias.map((cat) => {
            const esActiva = categoriaSeleccionada === cat;
            return (
              <button
                key={cat}
                type="button"
                className={`btn btn-sm rounded-pill px-3 py-1 fw-semibold transition-all ${
                  esActiva
                    ? 'btn-primary shadow'
                    : 'btn-outline-secondary text-light'
                }`}
                onClick={() => onSeleccionarCategoria(cat)}
              >
                {cat === 'Todas' ? (
                  <i className="bi bi-grid-fill me-1"></i>
                ) : (
                  <i className="bi bi-tag me-1"></i>
                )}
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
