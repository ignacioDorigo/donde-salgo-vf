import React from "react";
import "./RecomendadosPorZona.css";

const recomendaciones = [
  {
    nombre: "Furia",
    barrio: "Palermo",
    tipo: "Boliche",
    descripcion: "Un boliche de música techno ideal para los amantes del ritmo intenso.",
    imagen: "/salidas/furia1.webp",
  },
  {
    nombre: "El Galpón",
    barrio: "Palermo",
    tipo: "Bar Cultural",
    descripcion: "Espacio cultural con tragos, arte y música en vivo. Muy buena vibra.",
    imagen: "/salidas/galpon1.webp",
  },
  {
    nombre: "La Cúpula",
    barrio: "Microcentro",
    tipo: "Bar de terraza",
    descripcion: "Vista panorámica de la ciudad, tragos de autor y ambientación moderna.",
    imagen: "/salidas/cupula1.webp",
  },
];

export default function RecomendadosPorZona() {
  return (
    <section className="recomendados">
        <div className="recomendados__topbar">
          <h2 className="recomendados__titulo">📍 Recomendados según tu zona</h2>
          <div className="recomendados__uade">📌 Estás cerca de <strong>UADE</strong></div>
        </div>
        <p className="recomendados__descripcion">
          Te mostramos opciones populares cerca de tu barrio para que no tengas que ir lejos para pasarla bien.
        </p>

      <div className="recomendados__grid">
        {recomendaciones.map((item, i) => (
          <div key={i} className="recomendados__card">
            <img src={item.imagen} alt={item.nombre} />
            <div className="recomendados__info">
              <h3>{item.nombre}</h3>
              <span className="zona">{item.barrio} · {item.tipo}</span>
              <p>{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="linea-final" />
    </section>

  );
}
