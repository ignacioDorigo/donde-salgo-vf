import React, { useState }from "react";
import "./MainNovedades.css";

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
    nombre: "Mirador 360 Rooftop",
    categoria: "Bar con vista",
    tags: ["citas"],
    calificacion: 4.8,
    precio: "$20.000 P/P aprox",
    imagenes: ["/salidas/mirador360.webp"],
    musica: "Chill / Electrónica suave",
    dia: "VIE",
    descripcion:
      "Rooftop con vista panorámica de Buenos Aires. Luz tenue, tragos de autor y ambientación romántica. Ideal para una cita top.",
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
];

const filtrarPorTag = (tag) =>
  novedades.filter((lugar) => lugar.tags.includes(tag));

const Seccion = ({ titulo, tag, searchTerm }) => {
  const lugares = filtrarPorTag(tag).filter((lugar) =>
    lugar.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="seccion" id={tag}>
      <h2>{titulo}</h2>
      <div className="tarjetas-novedades">
        {lugares.map((item, i) => (
          <div key={i} className="tarjetas">
            <div className="imagen-wrapper">
              <img src={item.imagenes[0]} alt={item.nombre} />
              <span className="dia">{item.dia}</span>
              <span className="categoria">{item.categoria}</span>
            </div>
            <div className="contenido">
              <h3>{item.nombre}</h3>
              <p className="descripcion">{item.descripcion}</p>
              <p>🎵 {item.musica}</p>
              <p>📍 {item.ubicacion}</p>
              <div className="stats">
                <span>⭐ {item.calificacion}</span>
                <span>💰 {item.precio}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MainNovedades = () => {
  const [searchTerm, setSearchTerm] = useState(""); // <--- esta línea soluciona todo
  return (
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
      <Seccion titulo="⚽ Para los amantes del fútbol" tag="fútbol" searchTerm={searchTerm} />
      <Seccion titulo="🎮 Para fans de los videojuegos" tag="videojuegos" searchTerm={searchTerm}/>
      <Seccion titulo="💘 Para una cita especial" tag="citas" searchTerm={searchTerm}/>
    </section>
  );
  
};

export default MainNovedades;

