
import React, { useState } from "react";
import "./MainEventosGratis.css";

const eventosGratis = [
  {
    nombre: "Milonga al aire libre",
    categoria: "Tango",
    tags: ["cultura"],
    calificacion: 4.8,
    precio: "Gratis",
    imagenes: ["/salidas/tango.webp"],
    musica: "Tango / Vals / Milonga",
    dia: "SÁB",
    descripcion:
      "Milonga gratuita con clases abiertas y orquestas en vivo. Vení a bailar o mirar desde la vereda.",
    ubicacion: "La Glorieta, Belgrano, CABA",
  },
  {
    nombre: "Festival de Jazz",
    categoria: "Música en vivo",
    tags: ["música"],
    calificacion: 4.8,
    precio: "Gratis",
    imagenes: ["/salidas/jazz.webp"],
    musica: "Jazz / Blues",
    dia: "DOM",
    descripcion: "Conciertos gratuitos con artistas nacionales e internacionales. Ideal para amantes del jazz y la música instrumental.",
    ubicacion: "Usina del Arte, La Boca, CABA",
  },
  {
    nombre: "La Casa de Los Chillado Biaus",
    categoria: "Folklore",
    tags: ["cultura"],
    calificacion: 4.9,
    precio: "Gratis",
    imagenes: ["/salidas/penia.webp"],
    musica: "Zamba / Chacarera / Malambo",
    dia: "JUE",
    descripcion:
      "Bailes tradicionales, comida regional y música folklórica en vivo. Ideal para una noche criolla al aire libre.",
    ubicacion: "Rodriguez Peña 1224, Recoleta, CABA",
  },
  {
    nombre: "Noche de Rock Nacional",
    categoria: "Música en vivo",
    tags: ["música"],
    calificacion: 4.7,
    precio: "Gratis",
    imagenes: ["/salidas/rock.webp"],
    musica: "Rock Nacional / Pop",
    dia: "VIE",
    descripcion:
      "Una noche gratuita al aire libre con bandas emergentes de rock nacional. Ideal para disfrutar entre amigos y cantar clásicos.",
    ubicacion: "Anfiteatro Parque Centenario, CABA",
  },
  
];

const filtrarPorTag = (tag) =>
  eventosGratis.filter((evento) => evento.tags.includes(tag));

const Seccion = ({ titulo, tag, searchTerm }) => {
  const eventos = filtrarPorTag(tag).filter((evento) =>
    evento.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="seccion-evento" id={tag}>
      <h2>{titulo}</h2>
      <div className="tarjetas-eventos">
        {eventos.map((item, i) => (
          <div key={i} className="tarjeta-evento">
            <div className="imagen-wrapper">
              <img src={item.imagenes[0]} alt={item.nombre} />
              <span className="dia-evento">{item.dia}</span>
              <span className="categoria-evento">{item.categoria}</span>
            </div>
            <div className="contenido-evento">
              <h3>{item.nombre}</h3>
              <p className="descripcion-evento">{item.descripcion}</p>
              <p>🎵 {item.musica}</p>
              <p>📍 {item.ubicacion}</p>
              <div className="stats">
                <span>⭐ {item.calificacion}</span>
                <span>💸 {item.precio}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MainEventosGratis = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="eventos-gratis-modernos">
      <h1 className="titulo">🎉 Eventos Gratuitos para Disfrutar 🎉</h1>

      <input
        type="text"
        placeholder="🔍 Buscar evento por nombre..."
        className="buscador"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="subnav">
        <a href="#música">🎶 Música</a>
        <a href="#cultura">📚 Cultura</a>
      </div>

      <Seccion titulo="🎶 Música en vivo" tag="música" searchTerm={searchTerm} />
      <Seccion titulo="📚 Eventos culturales" tag="cultura" searchTerm={searchTerm} />
    </section>
  );
};

export default MainEventosGratis;