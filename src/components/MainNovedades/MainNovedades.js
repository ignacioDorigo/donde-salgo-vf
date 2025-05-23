import React, { useState }from "react";
import "./MainNovedades.css";
import { useEffect, useRef } from "react";


const novedades = [
  {
    nombre: "Beer Stadium",
    categoria: "Bar deportivo",
    tags: ["fútbol"],
    calificacion: 4.6,
    precio: "$9.000 P/P aprox",
    imagenes: ["/salidas/beer-stadium.webp"],
    musica: "Rock / Cumbia",
    dia: "DOM",
    descripcion:
      "Pantallas gigantes, mesas largas y cerveza tirada. Ideal para mirar el partido con amigos y vivirlo como en la cancha. Ambiente futbolero full.",
    ubicacion: "Av. Libertador 5000, CABA",
  },
  {
    nombre: "Fútbol & Burgers",
    categoria: "Gastrobar temático",
    tags: ["fútbol"],
    calificacion: 4.8,
    precio: "$12.000 P/P aprox",
    imagenes: ["/salidas/futbol-burgers.webp"],
    musica: "Pop / Comercial",
    dia: "SÁB",
    descripcion:
      "Hamburguesas gigantes, camisetas colgadas y partidos proyectados todo el día. Ideal para hinchas y para salir con amigos antes o después del estadio.",
    ubicacion: "Av. Corrientes 6000, CABA",
  },
  {
    nombre: "La Canchita",
    categoria: "Bar futbolero",
    calificacion: 4.6,
    precio: "$12.000 P/P aprox",
    imagenes: ["/salidas/canchita1.webp"],
    musica: "Cumbia / Reggaetón",
    dia: "SÁB",
    descripcion: "Mesas con césped sintético, camisetas firmadas y promociones en cada gol. Clásico de zona oeste.",
    ubicacion: "Morón 2300, CABA",
    tags: ["fútbol"],
  },
  {
    nombre: "90+3 Pub",
    categoria: "Bar deportivo",
    calificacion: 4.5,
    precio: "$12.000 P/P aprox",
    imagenes: ["/salidas/90mas3.webp"],
    musica: "Internacional / Electrónica",
    dia: "VIE",
    descripcion: "Un espacio moderno donde podés seguir todos los partidos con datos en vivo y apps integradas.",
    ubicacion: "Cabildo 800, Belgrano, CABA",
    tags: ["fútbol"],
  },
  {
    nombre: "Tribuna Club",
    categoria: "Cervecería futbolera",
    calificacion: 4.8,
    precio: "$12.000 P/P aprox",
    imagenes: ["/salidas/tribuna.webp"],
    musica: "Hits / Nacional",
    dia: "JUE",
    descripcion: "Decoración con historia del fútbol argentino y cerveza artesanal por cada continente.",
    ubicacion: "Av. San Juan 2400, CABA",
    tags: ["fútbol"],
  },
  {
    nombre: "Golazo Bar",
    categoria: "Bar temático",
    calificacion: 4.4,
    precio: "$12.000 P/P aprox",
    imagenes: ["/salidas/golazo.webp"],
    musica: "Rock Nacional",
    dia: "MIÉ",
    descripcion: "Picada, birra y fútbol en un clásico de Villa Urquiza que ahora volvió renovado.",
    ubicacion: "Triunvirato 4200, CABA",
    tags: ["fútbol"],
  },
  {
    nombre: "FREDDYS Retro Bar",
    categoria: "Bar arcade",
    tags: ["videojuegos"],
    calificacion: 4.7,
    precio: "$13.000 P/P aprox",
    imagenes: ["/salidas/arcadia.webp"],
    musica: "Synthwave / 8bit",
    dia: "MIÉ",
    descripcion:
      "Un bar con consolas retro, flippers y tragos con nombres gamer. Para jugar, tomar algo y conectar con lo friki en comunidad.",
    ubicacion: "Av. Santa Fe 3400, CABA",
  },
  {
    nombre: "Pixel House",
    categoria: "Café gamer",
    tags: ["videojuegos"],
    calificacion: 4.9,
    precio: "$15.000 P/P aprox",
    imagenes: ["/salidas/pixel-house.webp"],
    musica: "Lo-fi / K-pop",
    dia: "JUE",
    descripcion:
      "Decoración geek, consolas modernas y espacios para streamers. Todo pensado para gamers y creadores de contenido.",
    ubicacion: "Malabia 2100, Palermo, CABA",
  },
  {
    nombre: "Press Start",
    categoria: "Gaming Café",
    calificacion: 4.9,
    precio: "$15.000 P/P aprox",
    imagenes: ["/salidas/pressstart.webp"],
    musica: "Chiptune / Synthwave",
    dia: "SÁB",
    descripcion: "Ideal para fans retro: fichines, consolas clásicas y torneos de Mario Kart con premios.",
    ubicacion: "Corrientes 4400, CABA",
    tags: ["videojuegos"],
  },
  {
    nombre: "Game Over Lounge",
    categoria: "Bar gamer",
    calificacion: 4.8,
    precio: "$15.000 P/P aprox",
    imagenes: ["/salidas/gameover.webp"],
    musica: "Trap / EDM",
    dia: "VIE",
    descripcion: "Pantallas LED en todas las mesas, PCs gamer, y una carta inspirada en videojuegos famosos.",
    ubicacion: "Av. Córdoba 3200, CABA",
    tags: ["videojuegos"],
  },
  {
    nombre: "Insert Coin",
    categoria: "Bar de arcade",
    calificacion: 4.6,
    precio: "$15.000 P/P aprox",
    imagenes: ["/salidas/insertcoin.webp"],
    musica: "Electrónica / Retro",
    dia: "JUE",
    descripcion: "Arcades clásicos, cerveza tirada y buena onda para compartir partidas con desconocidos.",
    ubicacion: "Pueyrredón 600, CABA",
    tags: ["videojuegos"],
  },
  {
    nombre: "Level Up",
    categoria: "Café de eSports",
    calificacion: 4.7,
    precio: "$15.000 P/P aprox",
    imagenes: ["/salidas/levelup.webp"],
    musica: "Lo-fi / Chillhop",
    dia: "MIÉ",
    descripcion: "Perfecto para estudiar, trabajar o competir. Torneos de LoL y FIFA cada semana.",
    ubicacion: "Av. Santa Fe 3700, CABA",
    tags: ["videojuegos"],
  },
  {
    nombre: "Checkpoint",
    categoria: "Bar de streamers",
    calificacion: 4.5,
    precio: "$15.000 P/P aprox",
    imagenes: ["/salidas/checkpoint.webp"],
    musica: "K-pop / Trap",
    dia: "LUN",
    descripcion: "Ideal para creadores: pantalla verde, salas de streaming y tragos inspirados en Twitch.",
    ubicacion: "Honduras 5200, Palermo, CABA",
    tags: ["videojuegos"],
  },
  {
    nombre: "Mirador 360 Rooftop",
    categoria: "Bar con vista",
    tags: ["citas"],
    calificacion: 4.8,
    precio: "$20.000 P/P aprox",
    imagenes: ["/salidas/mirador360.webp"],
    musica: "Chill / Electrónica suave",
    dia: "VIE",
    descripcion:
      "Rooftop con vista panorámica de Buenos Aires. Luz tenue, tragos de autor y ambientación romántica. Ideal para una cita top. Diseñado para las mejores citas.",
    ubicacion: "Edificio Vista Tower, CABA",
  },
  {
    nombre: "Jardín Oculto",
    categoria: "Bar speakeasy",
    tags: ["citas"],
    calificacion: 4.9,
    precio: "$18.000 P/P aprox",
    imagenes: ["/salidas/jardin-oculto.webp"],
    musica: "Jazz / Lofi",
    dia: "SÁB",
    descripcion:
      "Un jardín secreto detrás de una florería. Silencioso, íntimo y con bebidas premium. Perfecto para charlar tranquilo o sorprender en una cita.",
    ubicacion: "Ubicación secreta (se accede por reserva)",
  },
  {
    nombre: "Luna Bar",
    categoria: "Bar romántico",
    calificacion: 4.9,
    precio: "$18.000 P/P aprox",
    imagenes: ["/salidas/lunabar.webp"],
    musica: "Jazz / Lofi",
    dia: "DOM",
    descripcion: "Iluminación tenue, música suave y carta de vinos exclusiva. Ideal para primeras citas.",
    ubicacion: "Av. Las Heras 2100, Recoleta, CABA",
    tags: ["citas"],
  },
  {
    nombre: "Velvet",
    categoria: "Cocktail Lounge",
    calificacion: 4.8,
    precio: "$18.000 P/P aprox",
    imagenes: ["/salidas/velvet.webp"],
    musica: "Deep House",
    dia: "JUE",
    descripcion: "Sillones rojos, tragos afrodisíacos y dj sets que arman el clima perfecto para una noche íntima.",
    ubicacion: "Uriarte 1800, Palermo Soho, CABA",
    tags: ["citas"],
  },
  {
    nombre: "Bonsai",
    categoria: "Resto-bar japonés",
    calificacion: 4.6,
    precio: "$18.000 P/P aprox",
    imagenes: ["/salidas/bonsai.webp"],
    musica: "Instrumental / Zen",
    dia: "MIÉ",
    descripcion: "Minimalismo japonés, sushi fino y una ambientación para conectar desde la calma.",
    ubicacion: "Pasaje del Progreso 145, San Telmo, CABA",
    tags: ["citas"],
  },
  {
    nombre: "Escondite 12",
    categoria: "Bar secreto",
    calificacion: 4.7,
    precio: "$18.000 P/P aprox",
    imagenes: ["/salidas/escondite12.webp"],
    musica: "Indie / Soul",
    dia: "SÁB",
    descripcion: "Tenés que descubrir cómo entrar. Una vez adentro, velas, cócteles únicos y conexión asegurada.",
    ubicacion: "Dirección secreta solo con reserva",
    tags: ["citas"],
  },
  {
    nombre: "Mirador 360",
    categoria: "Terraza gourmet",
    calificacion: 4.8,
    precio: "$18.000 P/P aprox",
    imagenes: ["/salidas/mirador360s.webp"],
    musica: "Romántica / Chill",
    dia: "VIE",
    descripcion: "Vista panorámica, cocina de autor y clima perfecto para una noche inolvidable.",
    ubicacion: "Azcuénaga 1000, Recoleta, CABA",
    tags: ["citas"],
  }
  

];


const filtrarPorTag = (tag) =>
  novedades.filter((lugar) => lugar.tags.includes(tag));

const Seccion = ({ titulo, tag, searchTerm, abrirModal }) => {
  const lugares = filtrarPorTag(tag).filter((lugar) =>
    lugar.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const carruselRef = useRef();

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (carruselRef.current) {
        carruselRef.current.scrollBy({
          left: 320, // desplaza una tarjeta
          behavior: "smooth",
        });
      }
    }, 8000); // ⏱️ cada 3 segundos

    return () => clearInterval(intervalo); // limpieza
  }, []);

  const scrollIzquierda = () => {
    carruselRef.current?.scrollBy({ left: -640, behavior: "smooth" });
  };

  const scrollDerecha = () => {
    carruselRef.current?.scrollBy({ left: 640, behavior: "smooth" });
  };

  return (
    <div className="seccion" id={tag}>
      <h2>{titulo}</h2>

      <div className="carousel-container" style={{ backgroundColor: "transparent" }}>
        <button className="flechar izquierda" onClick={scrollIzquierda}>←</button>

        <div className="carousel" id={`carousel-${tag}`} ref={carruselRef}>
          {lugares.map((item, i) => (
            <div key={i} className="tarjetas">
              <div className="imagen-wrapper">
                <img src={item.imagenes[0]} alt={item.nombre} />
                <span className="dia">{item.dia}</span>
                <span className="categoria">{item.categoria}</span>
              </div>
              <div className="contenido">
                <h3>{item.nombre}</h3>
                <p className="descripciont">{item.descripcion}</p>
                <p>🎵 {item.musica}</p>
                <p>📍 {item.ubicacion}</p>
                <div className="stats">
                  <span>⭐ {item.calificacion}</span>
                  <span>💰 {item.precio}</span>
                </div>
                <button className="boton-reservar" onClick={abrirModal}>
                  Reservar ahora
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="flechar derecha" onClick={scrollDerecha}>→</button>
      </div>
    </div>
  );
};



const MainNovedades = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  return (
    <>
      <section className="novedades-modernas">
        <h1 className="titulo">✨ Novedades según tus intereses ✨</h1>

        {/* 🔍 Buscador */}
        <input
          type="text"
          placeholder="🔍 Buscar por nombre..."
          className="buscador"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* 🧭 Submenú de navegación por secciones */}
        <div className="subnav">
          <a href="#fútbol">⚽ Fútbol</a>
          <a href="#videojuegos">🎮 Videojuegos</a>
          <a href="#citas">💘 Citas</a>
        </div>

        {/* 🧱 Las secciones filtradas */}
        <Seccion
          titulo="⚽ Para los amantes del fútbol"
          tag="fútbol"
          searchTerm={searchTerm}
          abrirModal={abrirModal}
        />
        <Seccion
          titulo="🎮 Para fans de los videojuegos"
          tag="videojuegos"
          searchTerm={searchTerm}
          abrirModal={abrirModal}
        />
        <Seccion
          titulo="💘 Para una cita especial"
          tag="citas"
          searchTerm={searchTerm}
          abrirModal={abrirModal}
        />
      </section>

      {/* MODAL DE RESERVA */} 
      {mostrarModal && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div
            className="modal-contenido"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Reserva tu lugar</h2>
            <form
              className="form-reserva"
              onSubmit={(e) => {
                e.preventDefault();
                alert("✅ ¡Reserva enviada!");
                cerrarModal();
              }}
            >
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="Tu email" required />
              <input type="date" required />
              <input type="time" required />
              <button type="submit">Confirmar reserva</button>
            </form>
            <button className="cerrar" onClick={cerrarModal}>
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MainNovedades;

