import React from "react";
import "./Categoria.css";
import { Link } from "react-router-dom";

export default function Categoria({ categoria }) {
  return (
    <Link to={categoria.rutaComponente}>
      <div className="div_categoria">
        <img
          className="categoria__imagen"
          src={categoria.imagen}
          alt={`Categoria ${categoria.nombre}`}
        />
        <p className="categoria__nombre">{categoria.nombre}</p>
      </div>
    </Link>
  );
}
