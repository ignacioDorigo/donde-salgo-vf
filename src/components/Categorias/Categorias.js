// src/components/Categorias/Categorias.js
import React, { useState } from "react";
import "./Categorias.css";
import Categoria from "../Categoria/Categoria";

export default function Categorias() {
  const categorias = [
    { nombre: "Lo más elegido hoy", imagen: "/categorias/categoria1.webp" },
    { nombre: "Novedades", imagen: "/categorias/categoria2.webp" },
    { nombre: "Eventos gratis", imagen: "/categorias/categoria3.webp" },
  ];

  const [indexActual, setIndexActual] = useState(0);

  const siguiente = () => {
    setIndexActual((prev) => (prev + 1) % categorias.length);
  };

  const anterior = () => {
    setIndexActual((prev) => (prev - 1 + categorias.length) % categorias.length);
  };

  return (
    <div className="categorias__bg">
      <div className="categorias__contenido contenedor">
        <h2 className="categoria__titulo">Categorías</h2>

        {/* Vista de escritorio: grilla */}
        <div className="div_categorias">
          {categorias.map((catego, index) => (
            <Categoria key={index} categoria={catego} />
          ))}
        </div>

        {/* Vista mobile: carrusel con flechas */}
        <div className="carousel__individual">
          <button className="carousel__flecha left" onClick={anterior}>
            ‹
          </button>

          <div className="carousel__categoria">
            <Categoria categoria={categorias[indexActual]} />
          </div>

          <button className="carousel__flecha right" onClick={siguiente}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
