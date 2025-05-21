import React from "react";
import "./Comentario.css";

export default function Comentario({ comentario }) {
  const renderStars = (cantidad) => {
    const total = 5;
    const filled = Math.round(cantidad);
    return [...Array(total)].map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 24 24"
        fill={i < filled ? "#ffb400" : "#e0e0e0"}
        width="10"
        height="10"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.856 1.548 8.281L12 18.896l-7.484 4.547 1.548-8.281L.001 9.306l8.332-1.151z" />
      </svg>
    ));
  };
  return (
    <div className="comentario">
      <div className="comentario__header">
        <img
          className="comentario__img"
          src={comentario.foto}
          alt={comentario.usuario}
          onError={(e) => (e.target.src = "https://i.pravatar.cc/50")}
        />
        <div className="comentario__usuarioInfo">
          <strong>{comentario.usuario}</strong>
          <span className="comentario-ubicacion">
            {comentario.zona}, Argentina
          </span>
        </div>
      </div>
      <div className="comentario__body">
        {/* Estrellas */}
        <div className="estrellas">
          {renderStars(comentario.calificacion)}{" "}
          <span className="comentario-fecha">
            • {comentario.fechaComentario}
          </span>
        </div>
        {/* Descripcion texto */}
        <p className="comentario-texto">{comentario.comentario}</p>
      </div>
    </div>
  );
}
