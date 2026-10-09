#  GameZone - Tienda Online de Videojuegos
### Evaluación Final Transversal (EFT) - Front-End I

---

##  Descripción del Proyecto
**GameZone** es una aplicación web interactiva y moderna para la venta de videojuegos orientada 100% al usuario final (cliente). La plataforma cumple con todos los requerimientos de la evaluación EFT:
- **Estructura semántica HTML5** (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **Diseño responsivo con Bootstrap 5 y CSS3** (Navbar, Cards, Modales, Alertas y Grilla).
- **Interactividad y dinamismo con JavaScript ES6+** (Filtrado por categoría, búsqueda por título y validación de formulario de contacto).
- **Arquitectura modular en React 19:** Manejo dinámico del **Carrito de Compras** mediante estado (`useState`), permitiendo **agregar y eliminar videojuegos de la lista** en tiempo real y conectando todos los componentes mediante `props`.

---

##  Tecnologías Utilizadas

| Tecnología | Aplicación en el Proyecto |
|---|---|
| **HTML5 Semántico** | Estructuración con etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section id="inicio">`, `<section id="catalogo">`, `<section id="contacto">` y `<footer>`. |
| **CSS3 & Flexbox / Grid** | Estilos gamer oscuros, gradientes, efectos hover, transiciones y truncado de texto (`line-clamp`). |
| **Bootstrap 5** | Maquetación responsiva, navbar colapsable móvil, tarjetas (`cards`), modal del carrito, modal de detalle y alertas. |
| **JavaScript (ES6+)** | Catálogo de videojuegos, filtrado con `.filter()`, renderizado dinámico con `.map()`, acumulador del total con `.reduce()` y validación por regex. |
| **React 19 & Vite** | Componentes modulares, gestión del estado del carrito (`useState`) que pasa de vacío a con productos, y comunicación entre componentes mediante `props`. |

---

##  Estructura del Proyecto

```text
xxx/
├── index.html                   # HTML5 con viewport responsivo y CDN de Bootstrap Icons
├── package.json                 # Dependencias y scripts del proyecto
├── vite.config.js               # Configuración de Vite
├── src/
│   ├── main.jsx                 # Entrada de React con importación de Bootstrap 5 CSS y JS
│   ├── App.jsx                  # Componente raíz: coordina estado global del carrito, filtros y secciones
│   ├── App.css                  # Estilos complementarios para tarjetas, animaciones y tema gamer
│   ├── index.css                # Estilos globales y reset responsivo
│   ├── data/
│   │   └── games.json           # Archivo Json con los videojuegos disponibles y categorías
│   └── components/
│       ├── Navbar.jsx           # Barra de navegación semántica con badge contador del carrito
│       ├── Hero.jsx             # Portada de bienvenida con llamados a la acción
│       ├── CategoryFilter.jsx   # Filtros dinámicos por categoría y buscador por texto
│       ├── GameList.jsx         # Grilla responsiva que renderiza las tarjetas de los videojuegos
│       ├── GameCard.jsx         # Tarjeta individual con precio en CLP y botón "Añadir al Carrito"
│       ├── GameDetailModal.jsx  # Modal para ver la ficha completa del juego y añadirlo
│       ├── CartModal.jsx        # Modal del Carrito: lista dinámica que permite ver total y eliminar juegos
│       ├── ContactForm.jsx      # Formulario de contacto hacia el administrador con validación y alertas
│       └── Footer.jsx           # Pie de página semántico con enlaces y redes sociales
│       └── Spinner.jsx          # Spinner de carga durante fetch en la carga de juegos
```

---

##  Instrucciones de Instalación y Uso

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar el entorno de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre la URL indicada en la terminal (por defecto: `http://localhost:5173`).

3. **Verificar compilación y calidad de código:**
   ```bash
   npm run build
   npm run lint
   ```

---

##  Justificación de Requerimientos y Arquitectura

1. **Catálogo de Videojuegos:**
   - Se carga desde [`public/data/games.json`](public/data/games.json) cumpliendo con el requerimiento de alimentar los productos desde una estructura de datos externa.
2. **Filtrado por Categoría:**
   - El usuario puede alternar entre categorías (Acción, Aventura, RPG, Estrategia, Deportes, Terror) o usar la barra de búsqueda en tiempo real.
3. **Manejo Dinámico de la Lista (Estado en React):**
   - El estado del **Carrito de Compras** (`carrito`, `setCarrito`) inicia vacío (`[]`).
   - Al pulsar **"Añadir"** en cualquier tarjeta, el juego se agrega a la lista y el badge del Navbar se actualiza.
   - En el modal del Carrito, el usuario puede ver la lista dinámica, el precio total acumulado en pesos chilenos (`$`) y **eliminar videojuegos individualmente de la lista** (o vaciarla por completo).
4. **Formulario de Contacto al Administrador:**
   - Permite al cliente comunicarse con el administrador del sitio.
   - Valida nombre (mínimo 3 caracteres), correo electrónico (formato válido vía regex) y mensaje (mínimo 10 caracteres).
   - Muestra mensajes de error en rojo (`.is-invalid`, `.invalid-feedback`) o alerta de éxito en verde (`.alert-success`).

---

