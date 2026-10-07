/**
 * ============================================================================
 * ARCHIVO: juegos.js
 * DESCRIPCIÓN: Objeto/Arreglo en JavaScript que almacena los datos de los
 * videojuegos disponibles en la tienda (carga inicial).
 * ============================================================================
 */

export const INITIAL_GAMES = [
    {
        id: 1,
        nombre: "The Legend of Zelda: Tears of the Kingdom",
        categoria: "Aventura",
        precio: 59990,
        plataforma: "Nintendo Switch",
        calificacion: 4.9,
        descripcion: "Una épica aventura por las tierras y los vastos cielos de Hyrule, creando armas y vehículos únicos con la habilidad Ultramano.",
        imagen: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        nombre: "Elden Ring",
        categoria: "RPG",
        precio: 48990,
        plataforma: "Multiplataforma",
        calificacion: 4.8,
        descripcion: "Levántate, Sinluz, y déjate guiar por la gracia para esgrimir el poder del Círculo de Elden y convertirte en el Señor del Círculo en las Tierras Intermedias.",
        imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        nombre: "God of War Ragnarök",
        categoria: "Acción",
        precio: 52990,
        plataforma: "PlayStation 5",
        calificacion: 4.9,
        descripcion: "Únete a Kratos y Atreus en un viaje mítico en busca de respuestas antes de la llegada del profetizado Ragnarök a través de los Nueve Reinos.",
        imagen: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        nombre: "Cyberpunk 2077: Phantom Liberty",
        categoria: "RPG",
        precio: 34990,
        plataforma: "PC / PS5 / Xbox Series",
        calificacion: 4.6,
        descripcion: "Una aventura de espionaje y suspense dentro del letal distrito de Dogtown en Night City, encarnando a V junto al agente Solomon Reed.",
        imagen: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        nombre: "EA Sports FC 25",
        categoria: "Deportes",
        precio: 49990,
        plataforma: "Multiplataforma",
        calificacion: 4.2,
        descripcion: "Vive el deporte rey con una simulación ultrarrealista impulsada por FC IQ, nuevas tácticas de equipo y la emoción de Rush 5v5.",
        imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        nombre: "Resident Evil 4 Remake",
        categoria: "Terror",
        precio: 39990,
        plataforma: "Multiplataforma",
        calificacion: 4.9,
        descripcion: "Sobrevive a la pesadilla en un apartado pueblo europeo como Leon S. Kennedy rescatando a la hija del presidente de los Estados Unidos.",
        imagen: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        nombre: "Age of Empires IV",
        categoria: "Estrategia",
        precio: 29990,
        plataforma: "PC / Xbox",
        calificacion: 4.5,
        descripcion: "Dirige civilizaciones históricas en intensas batallas estratégicas en tiempo real a través de épocas cruciales de la historia mundial.",
        imagen: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        nombre: "Hollow Knight: Silksong",
        categoria: "Aventura",
        precio: 22990,
        plataforma: "Multiplataforma",
        calificacion: 4.9,
        descripcion: "Juega como Hornet, princesa protectora de Hallownest, y explora un reino completamente nuevo gobernado por la seda y la canción.",
        imagen: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        nombre: "Forza Horizon 5",
        categoria: "Deportes",
        precio: 44990,
        plataforma: "PC / Xbox Series",
        calificacion: 4.7,
        descripcion: "Explora los vibrantes paisajes en constante evolución de México en cientos de los mejores automóviles del mundo en mundo abierto.",
        imagen: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80"
    }
];

// Lista de categorías disponibles para el filtrado dinámico
export const CATEGORIAS = [
    "Todas",
    "Acción",
    "Aventura",
    "RPG",
    "Estrategia",
    "Deportes",
    "Terror"
];