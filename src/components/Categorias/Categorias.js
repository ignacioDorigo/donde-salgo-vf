import React from "react";
import "./Categorias.css";
import Categoria from "../Categoria/Categoria";

export default function Categorias() {
  const categorias = [
    { nombre: "Lo más elegido hoy", imagen: "/categorias/categoria1.webp" },
    { nombre: "Novedades", imagen: "./categorias/categoria2.webp" },
    { nombre: "Eventos gratis", imagen: "/categorias/categoria3.webp" },
  ];
  return (
    <div className="categorias__bg ">
      <div className="categorias__contenido contenedor">
        <h2 className="categoria__titulo">Categorias</h2>

        <div className="div_categorias">
          {categorias.map((catego, index) => (
            <Categoria key={index} categoria={catego} />
          ))}
        </div>
      </div>
    </div>
  );
}
