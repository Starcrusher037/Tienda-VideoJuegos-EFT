 import { useState } from 'react';
    
    // 1. Importamos los datos de los videojuegos
    import { INITIAL_GAMES, CATEGORIAS } from './data/juegos';
    
    // 2. Importamos los componentes listos hasta el Paso 8
    import Hero from './components/Hero';
    import CategoryFilter from './components/CategoryFilter';
    import GameList from './components/GameList';
    import ContactForm from './components/ContactForm';
    import Footer from './components/Footer';
    import CartModal from './components/CartModal';
    import GameDetailModal from './components/GameDetailModal';
    
    // 3. Estilos
    import './App.css';
    
    function App() {
      // Estado de los juegos cargados desde games.js
      const [juegos] = useState(INITIAL_GAMES);
    
      // Estado del Carrito de Compras (inicia vacío)
      const [carrito, setCarrito] = useState([]);
    
      // Estados para filtrado
      const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
      const [busqueda, setBusqueda] = useState('');
    
      // Estados para modales
      const [isCartOpen, setIsCartOpen] = useState(false);
      const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);
    
      // Funciones para manipular el carrito dinámicamente
      const handleAgregarAlCarrito = (juego) => {
        setCarrito((prev) => [...prev, juego]);
      };
    
      const handleEliminarDelCarrito = (id) => {
        setCarrito((prev) => {
          const index = prev.findIndex((item) => item.id === id);
          if (index === -1) return prev;
          const copia = [...prev];
          copia.splice(index, 1);
          return copia;
        });
      };
    
      const handleVaciarCarrito = () => {
        setCarrito([]);
      };
    
      // Filtrado de videojuegos en JavaScript
      const juegosFiltrados = juegos.filter((juego) => {
        const coincideCat =
          categoriaSeleccionada === 'Todas' || juego.categoria === categoriaSeleccionada;
        const coincideTexto = juego.nombre
          .toLowerCase()
          .includes(busqueda.toLowerCase().trim());
        return coincideCat && coincideTexto;
      });
    
      return (
        <div className="bg-dark text-white min-vh-100 d-flex flex-column">
    
          {/* 
            Aviso temporal mientras no está el Navbar del Paso 9:
            Colocamos un botón flotante sencillo para poder abrir el carrito y probarlo.
          */}
          <div className="p-3 bg-black border-bottom border-secondary d-flex justify-content-between align-items-center">
            <span className="fw-bold fs-5 text-primary">GameZone </span>
            <button
              className="btn btn-primary rounded-pill btn-sm"
              onClick={() => setIsCartOpen(true)}
            >
              <i className="bi bi-cart3 me-1"></i> Carrito ({carrito.length})
            </button>
          </div>
    
          {/* CONTENIDO PRINCIPAL (<main>) */}
          <main className="flex-grow-1">
            {/* Banner Hero */}
            <Hero />
    
            {/* Sección del Catálogo con Filtros y Grilla de Tarjetas */}
            <section id="catalogo" className="py-5">
              <div className="container">
                <h2 className="display-6 fw-bold text-white mb-4">Catálogo de Videojuegos</h2>
    
                {/* Filtros dinámicos */}
                <CategoryFilter
                  categorias={CATEGORIAS}
                  categoriaSeleccionada={categoriaSeleccionada}
                  onSeleccionarCategoria={setCategoriaSeleccionada}
                  busqueda={busqueda}
                  onCambiarBusqueda={setBusqueda}
                  totalResultados={juegosFiltrados.length}
                />
    
                {/* Grilla con las tarjetas generadas dinámicamente */}
                <GameList
                  juegos={juegosFiltrados}
                  onAgregarAlCarrito={handleAgregarAlCarrito}
                  onVerDetalle={(juego) => setJuegoSeleccionado(juego)}
                  onResetFiltros={() => {
                    setCategoriaSeleccionada('Todas');
                    setBusqueda('');
                  }}
                  carrito={carrito}
                />
              </div>
            </section>
    
            {/* Sección de Contacto con validación */}
            <ContactForm />
          </main>
    
          {/* Pie de página semántico */}
          <Footer />
    
          {/* Modales funcionales */}
          <CartModal
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            carrito={carrito}
            onEliminarDelCarrito={handleEliminarDelCarrito}
            onVaciarCarrito={handleVaciarCarrito}
          />

          <GameDetailModal
            juego={juegoSeleccionado}
            onClose={() => setJuegoSeleccionado(null)}
            onAgregarAlCarrito={handleAgregarAlCarrito}
          />

        </div>
      );
    }

    export default App;