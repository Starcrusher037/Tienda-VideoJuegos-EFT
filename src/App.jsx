import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import GameList from './components/GameList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import GameDetailModal from './components/GameDetailModal';
import Spinner from './components/Spinner';
import './App.css';

// Lista de categorías predeterminadas como fallback
const CATEGORIAS_FALLBACK = [
  'Todas',
  'Acción',
  'Aventura',
  'RPG',
  'Estrategia',
  'Deportes',
  'Terror'
];

function App() {
  // 1. ESTADO: Catálogo de videojuegos cargados mediante fetch desde el archivo JSON
  const [juegos, setJuegos] = useState([]);

  // Estado de carga para el Spinner
  const [cargando, setCargando] = useState(true);

  // Estado para capturar posibles errores en la petición fetch
  const [errorCarga, setErrorCarga] = useState(null);

  // 2. ESTADO DINÁMICO: Lista del Carrito de Compras
  // Inicia vacía ([]) y cambia dinámicamente al agregar o eliminar videojuegos
  const [carrito, setCarrito] = useState([]);

  // 3. ESTADO: Categoría actualmente seleccionada para el filtro
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  // 4. ESTADO: Término de búsqueda textual por título
  const [busqueda, setBusqueda] = useState('');

  // 5. ESTADO: Control de apertura/cierre del modal del Carrito de Compras
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 6. ESTADO: Videojuego seleccionado para ver ficha detallada
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

  // 7. ESTADO: Mensaje de notificación temporal (Toast flotante)
  const [notificacion, setNotificacion] = useState(null);

  /**
   * FUNCIÓN ASÍNCRONA: Carga los videojuegos desde el archivo JSON mediante fetch.
   * Maneja los estados de carga (spinner), datos recibidos y captura de errores.
   */
  const cargarJuegos = async (isRetry = false) => {
    if (isRetry) {
      setCargando(true);
      setErrorCarga(null);
    }

    try {
      // Petición HTTP asíncrona mediante fetch a la ruta pública del JSON
      const respuesta = await fetch('./data/games.json');

      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status} - ${respuesta.statusText}`);
      }

      const datos = await respuesta.json();
      setJuegos(datos);
    } catch (err) {
      console.error('Error al obtener los videojuegos con fetch:', err);
      setErrorCarga('No se pudo cargar el catálogo de videojuegos. Por favor, reintenta más tarde.');
    } finally {
      setCargando(false);
    }
  };

  /**
   * EFECTO: Ejecuta la lectura del JSON una sola vez cuando el componente se monta.
   */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    cargarJuegos();
  }, []);

  /**
   * Muestra un mensaje temporal de retroalimentación al usuario.
   */
  const mostrarNotificacion = (mensaje, tipo = 'success') => {
    setNotificacion({ mensaje, tipo });
    setTimeout(() => {
      setNotificacion(null);
    }, 3000);
  };

  /**
   * FUNCIÓN: Agregar Videojuego a la Lista del Carrito
   * Actualiza el estado del carrito agregando el juego seleccionado.
   */
  const handleAgregarAlCarrito = (juego) => {
    setCarrito((prevCarrito) => [...prevCarrito, juego]);
    mostrarNotificacion(`¡"${juego.nombre}" agregado al carrito de compras!`, 'success');
  };

  /**
   * FUNCIÓN: Eliminar Videojuego de la Lista del Carrito
   * Actualiza el estado filtrando el arreglo para remover el juego por su ID.
   * Cumple con el requisito: "permitiendo agregar o eliminar videojuegos de la lista".
   */
  const handleEliminarDelCarrito = (id) => {
    // Buscamos el nombre del juego a eliminar para el mensaje
    const juegoAEliminar = carrito.find((item) => item.id === id);
    
    // Filtramos para eliminar una ocurrencia de ese videojuego
    setCarrito((prevCarrito) => {
      const index = prevCarrito.findIndex((item) => item.id === id);
      if (index === -1) return prevCarrito;
      const nuevoCarrito = [...prevCarrito];
      nuevoCarrito.splice(index, 1);
      return nuevoCarrito;
    });

    mostrarNotificacion(
      `"${juegoAEliminar?.nombre || 'Juego'}" eliminado del carrito.`,
      'warning'
    );
  };

  
   // FUNCIÓN: Vaciar Carrito Completo
   
  const handleVaciarCarrito = () => {
    setCarrito([]);
    mostrarNotificacion('Carrito vaciado con éxito.', 'info');
  };

 
   // FUNCIÓN: Restablecer Filtros del Catálogo
   
  const handleResetFiltros = () => {
    setCategoriaSeleccionada('Todas');
    setBusqueda('');
  };

  /**
   * CATEGORÍAS DISPONIBLES:
   * Se obtienen dinámicamente de los videojuegos leídos del JSON,
   * manteniendo 'Todas' como la primera opción o usando la lista por defecto.
   */
  const categorias = juegos.length > 0
    ? ['Todas', ...Array.from(new Set(juegos.map((j) => j.categoria)))]
    : CATEGORIAS_FALLBACK;

  /**
   * LÓGICA DE FILTRADO EN JAVASCRIPT:
   * Filtra dinámicamente los juegos según la categoría activa y la búsqueda por texto.
   */
  const juegosFiltrados = juegos.filter((juego) => {
    const coincideCategoria =
      categoriaSeleccionada === 'Todas' || juego.categoria === categoriaSeleccionada;

    const coincideBusqueda = juego.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase().trim());

    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="app-container bg-dark text-white min-vh-100 d-flex flex-column">
      
      {notificacion && (
        <div
          className="position-fixed top-0 end-0 p-3"
          style={{ zIndex: 1100 }}
        >
          <div
            className={`alert alert-${notificacion.tipo} alert-dismissible fade show shadow-lg border-0 d-flex align-items-center gap-2`}
            role="alert"
          >
            <i className={`bi bi-${notificacion.tipo === 'success' ? 'check-circle' : 'exclamation-circle'}-fill fs-5`}></i>
            <div>{notificacion.mensaje}</div>
            <button
              type="button"
              className="btn-close"
              onClick={() => setNotificacion(null)}
              aria-label="Cerrar notificación"
            ></button>
          </div>
        </div>
      )}

      
      <Navbar
        totalCarrito={carrito.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      
      <main className="flex-grow-1">
        
        
        <Hero />

        {/* 
          SECCIÓN SEMÁNTICA: CATÁLOGO DE PRODUCTOS (<section id="catalogo">)
        */}
        <section id="catalogo" className="py-5">
          <div className="container">
            {/* Título de la sección */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-3">
              <div>
                <span className="badge bg-primary bg-opacity-25 text-primary border border-primary px-3 py-2 rounded-pill fw-semibold text-uppercase">
                  <i className="bi bi-grid-3x3-gap-fill me-1"></i> Títulos Disponibles
                </span>
                <h2 className="display-6 fw-bold mt-2 text-white">Catálogo de Videojuegos</h2>
                <p className="text-secondary mb-0">
                  Explora los mejores juegos, filtra por tu categoría preferida y añádelos a tu carrito.
                </p>
              </div>

              {/* Acceso directo al Carrito */}
              <button
                type="button"
                className="btn btn-outline-primary d-flex align-items-center gap-2 px-4 py-2 rounded-pill fw-semibold align-self-start align-self-md-auto"
                onClick={() => setIsCartOpen(true)}
              >
                <i className="bi bi-cart3"></i>
                <span>Ver Mi Carrito ({carrito.length})</span>
              </button>
            </div>

            {/* Componente de Filtro por Categorías y Búsqueda */}
            <CategoryFilter
              categorias={categorias}
              categoriaSeleccionada={categoriaSeleccionada}
              onSeleccionarCategoria={setCategoriaSeleccionada}
              busqueda={busqueda}
              onCambiarBusqueda={setBusqueda}
              totalResultados={juegosFiltrados.length}
            />

            {/* 
              ESTADOS CONDICIONALES DE LA VISTA:
              1. Spinner de carga: Mientras fetch está en proceso (cargando === true).
              2. Alerta de error: Si la petición fetch falló o el archivo no fue encontrado.
              3. Grilla de videojuegos: Se renderiza una vez que los datos fueron cargados.
            */}
            {cargando ? (
              <Spinner mensaje="Cargando catálogo de videojuegos..." />
            ) : errorCarga ? (
              <div
                className="alert alert-danger bg-danger bg-opacity-25 border-danger text-center p-4 rounded-4 my-4"
                role="alert"
              >
                <i className="bi bi-exclamation-triangle-fill fs-2 text-danger d-block mb-2"></i>
                <h5 className="text-white fw-bold">Error al cargar el catálogo</h5>
                <p className="text-light mb-3">{errorCarga}</p>
                <button
                  type="button"
                  className="btn btn-outline-light rounded-pill px-4"
                  onClick={() => cargarJuegos(true)}
                >
                  <i className="bi bi-arrow-clockwise me-1"></i> Reintentar carga
                </button>
              </div>
            ) : (
              <GameList
                juegos={juegosFiltrados}
                onAgregarAlCarrito={handleAgregarAlCarrito}
                onVerDetalle={(juego) => setJuegoSeleccionado(juego)}
                onResetFiltros={handleResetFiltros}
                carrito={carrito}
              />
            )}
          </div>
        </section>

        {/* 
          ======================================================================
          SECCIÓN SEMÁNTICA: CONTACTO (<section id="contacto">)
          ======================================================================
          Formulario de contacto para comunicarse con el administrador del sitio.
        */}
        <ContactForm />

      </main>

      {/* 
        ========================================================================
        PIE DE PÁGINA (<footer>)
        ========================================================================
      */}
      <Footer />

      {/* 
        ========================================================================
        MODAL DEL CARRITO DE COMPRAS
        ========================================================================
        Muestra la lista dinámica del carrito, calcula el total y permite eliminar.
      */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        carrito={carrito}
        onEliminarDelCarrito={handleEliminarDelCarrito}
        onVaciarCarrito={handleVaciarCarrito}
      />

      {/* Modal de Detalle del Videojuego */}
      <GameDetailModal
        juego={juegoSeleccionado}
        onClose={() => setJuegoSeleccionado(null)}
        onAgregarAlCarrito={handleAgregarAlCarrito}
      />

    </div>
  );
}

export default App;
