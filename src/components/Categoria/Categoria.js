import React from "react";
import "./Categoria.css";

export default function Categoria({ categoria }) {
  return (
    <div className="div_categoria">
      <img
        className="categoria__imagen"
        src={categoria.imagen}
        alt={`Categoria ${categoria.nombre}`}
      />
      <p className="categoria__nombre">{categoria.nombre}</p>
    </div>
  );
}
