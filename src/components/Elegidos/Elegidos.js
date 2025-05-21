import React from "react";
import "./Elegidos.css";
import Svgmusic from "../Svg/Svgmusic/Svgmusic";
import Svgcalendar from "../Svg/Svgcalendar/Svgcalendar";
import Svgdollar from "../Svg/Svgdollar/Svgdollar";
import SvgStar from "../Svg/SvgStar/SvgStar";

export default function Elegidos({ salida }) {
  function getPrecioDescripcionSimbolico(simbolo) {
    switch (simbolo) {
      case "$":
        return "Barato";
      case "$$":
        return "Regular";
      case "$$$":
        return "Caro";
      case "$$$$":
        return "Lujo";
      default:
        return "Sin datos";
    }
  }

  return (
    <div className="elegido">
      <div>
        <img
          className="elegido__img"
          src={salida.imagenes[0]}
          alt={salida.nombre}
        />
      </div>
      <div className="elegido__info">
        <p className="elegido__nombre">{salida.nombre}</p>
        <p className="elegido__ubicacion">CABA, Buenos Aires</p>

        <div className="elegidos__svg">
          <div className="elegido_svg">
            <Svgdollar />
            <p>{getPrecioDescripcionSimbolico(salida.precio)}</p>
          </div>
          <div className="elegido_svg">
            <div className="div__calificacion">
              {salida.calificacion}
              <SvgStar />
            </div>
            <p> Calificación</p>
          </div>
          <div className="elegido_svg">
            <Svgmusic />
            <p>{salida.musica}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
