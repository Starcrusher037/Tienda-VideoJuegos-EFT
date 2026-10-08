/**
 * ============================================================================
 * COMPONENTE: Spinner
 * DESCRIPCIÓN: Indicador visual de carga (loading spinner) estilizado con
 * Bootstrap 5 para proporcionar retroalimentación al usuario mientras
 * los datos de los videojuegos son leídos desde el archivo JSON mediante fetch.
 * ============================================================================
 * @param {Object} props
 * @param {string} [props.mensaje='Cargando videojuegos...'] - Mensaje descriptivo de carga.
 */
export default function Spinner({ mensaje = 'Cargando videojuegos...' }) {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center py-5 my-5 text-center"
      role="status"
      aria-live="polite"
    >
      {/* Contenedor del spinner con resplandor y tamaño personalizado */}
      <div
        className="spinner-border text-primary mb-3"
        style={{ width: '3.5rem', height: '3.5rem', borderWidth: '0.3rem' }}
      >
        <span className="visually-hidden">Cargando...</span>
      </div>

      {/* Texto de estado de carga */}
      <h5 className="text-white fw-bold mt-2 mb-1">{mensaje}</h5>
      <p className="text-secondary small mb-0">
        <i className="bi bi-cloud-arrow-down me-1"></i> Obteniendo catálogo desde el servidor...
      </p>
    </div>
  );
}
