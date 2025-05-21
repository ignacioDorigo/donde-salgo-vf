import React, { useEffect, useState } from "react";
import "./MainSalidaSeleccionada.css";
import Comentario from "../Comentario/Comentario";
import AOS from "aos";
import "aos/dist/aos.css";
import Svgdollar from "../Svg/Svgdollar/Svgdollar";
import Svgcalendar from "../Svg/Svgcalendar/Svgcalendar";
import Svgmusic from "../Svg/Svgmusic/Svgmusic.js";

export default function MainSalidaSeleccionada({ salida }) {
  const [indexActual, setIndexActual] = useState(0);
  const [imagenAmpliada, setImagenAmpliada] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 800 });
  }, []);

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

  const getPrecioDescripcion = (nombre) => {
    switch (nombre) {
      case "Moscu":
        return "Intermedios";
      case "Wax":
        return "Baratos";
      case "La Mala":
        return "Elevados";
      default:
        return "Regulares";
    }
  };

  return (
    <div className="salida__bg">
      <div className="salida-detalle contenedor tarjeta">
        {/* IMAGEN */}
        <div className="carrusel">
          <button className="flecha izq" onClick={anteriorImagen}>
            ‹
          </button>
          <img
            src={imagenes[indexActual]}
            alt={`Imagen ${indexActual}`}
            className={`galeria-img visible`}
            onClick={() => setImagenAmpliada(true)}
          />

          <button className="flecha der" onClick={siguienteImagen}>
            ›
          </button>
        </div>

        {/* INFO DEL BOLICHE */}
        <div className="info">
          <h1 className="titulo-salida">{salida.nombre}</h1>
          <div className="subinfo">
            <span className="categoria">{salida.categoria}</span>
            <div className="estrellas">{renderStars(salida.calificacion)}</div>
          </div>
          <hr />
          <p>{salida.descripcion}</p>

          <div className="div__detalles">
            <div className="detalle detalle__dollar">
              <Svgdollar />
              <p>{getPrecioDescripcion(salida.nombre)}</p>
            </div>
            <div className="detalle detalle__calendar">
              <Svgcalendar />
              <p>{salida.dia}</p>
            </div>
            <div className="detalle detalle__music">
              <Svgmusic />
              <p>{salida.musica}</p>
            </div>
          </div>
        </div>

        <div className="ubicacion">
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
          {salida.comentarios?.map((comentario, index) => (
            <Comentario
              comentario={comentario}
              key={index}
              data-aos="fade-up"
            />
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
