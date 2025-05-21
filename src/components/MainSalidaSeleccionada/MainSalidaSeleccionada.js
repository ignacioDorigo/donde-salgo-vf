import React, { useState } from "react";
import "./MainSalidaSeleccionada.css";
import Comentario from "../Comentario/Comentario";

export default function MainSalidaSeleccionada({ salida }) {
  const [indexActual, setIndexActual] = useState(0);
  const [imagenAmpliada, setImagenAmpliada] = useState(false);

  if (!salida) return <p>No se encontró la salida seleccionada.</p>;

  const imagenes = Array.isArray(salida.imagenes)
    ? salida.imagenes
    : [salida.imagenes];

  const siguienteImagen = () =>
    setIndexActual((prev) => (prev + 1) % imagenes.length);
  const anteriorImagen = () =>
    setIndexActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);

  const renderStars = (cantidad) => {
    const total = 5;
    const filled = Math.round(cantidad);
    return [...Array(total)].map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 24 24"
        fill={i < filled ? "#ffb400" : "#e0e0e0"}
        width="20"
        height="20"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.856 1.548 8.281L12 18.896l-7.484 4.547 1.548-8.281L.001 9.306l8.332-1.151z" />
      </svg>
    ));
  };

  return (
    <div className="salida__bg">
      <div className="salida-detalle contenedor tarjeta">
        <div className="carrusel">
          <button className="flecha izq" onClick={anteriorImagen}>
            ‹
          </button>
          <img
            src={imagenes[indexActual]}
            alt={`Imagen ${indexActual}`}
            className="galeria-img"
            onClick={() => setImagenAmpliada(true)}
          />
          <button className="flecha der" onClick={siguienteImagen}>
            ›
          </button>
        </div>

        <div className="info">
          <h1 className="titulo-salida">{salida.nombre}</h1>
          <div className="subinfo">
            <span className="categoria">{salida.categoria}</span>
            <div className="estrellas">{renderStars(salida.calificacion)}</div>
          </div>
          <hr />
          <p>
            <strong>Precio:</strong>{" "}
            {salida.precio > 0 ? `$${salida.precio}` : "Gratis"}
          </p>
          <p>
            <strong>Estilo musical:</strong> {salida.musica}
          </p>
          <p>
            <strong>Día:</strong> {salida.dia}
          </p>
        </div>

        <div className="descripcion">
          <h2>Descripción</h2>
          <p>{salida.descripcion}</p>
        </div>

        <div className="ubicacion">
          <h2>Ubicación</h2>
          <iframe
            title="Mapa"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              salida.ubicacion
            )}&output=embed`}
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <div className="comentarios">
          <h2>Comentarios</h2>
          {salida.comentarios?.map((comentario, index) => (
            <Comentario comentario={comentario} key={index} />
          ))}
        </div>
      </div>

      {imagenAmpliada && (
        <div className="modal-overlay" onClick={() => setImagenAmpliada(false)}>
          <img
            src={imagenes[indexActual]}
            alt="Imagen ampliada"
            className="imagen-ampliada"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="cerrar-modal"
            onClick={() => setImagenAmpliada(false)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
