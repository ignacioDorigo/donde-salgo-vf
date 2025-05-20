import React from "react";
import "./Salidas.css";

export default function Salidas({ salida }) {
  const renderStars = () => {
    const totalStars = 5;
    const filledStars = Math.round(salida.calificacion);
    return [...Array(totalStars)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className="estrella"
        viewBox="0 0 24 24"
        fill={i < filledStars ? "#ffd710" : "#555"}
        width="20"
        height="20"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.856 1.548 8.281L12 18.896l-7.484 4.547 1.548-8.281L.001 9.306l8.332-1.151z" />
      </svg>
    ));
  };

  return (
    <div className="div__salida">
      <img
        className="salida__imagen"
        src={salida.imagen}
        alt={salida.categoria}
        title={salida.categoria}
      />
      <div className="salida__texto">
        <h3 className="salida__titulo">{salida.nombre}</h3>
        <p className="salida__categoria">{salida.categoria}</p>
        <div className="salida__calificacion">{renderStars()}</div>
        <p className="salida__precio">
          {salida.precio > 0 ? "$ " + salida.precio : "Gratis"}
        </p>
        <button className="salida__vermas">Ver más</button>
      </div>
    </div>
  );
}
