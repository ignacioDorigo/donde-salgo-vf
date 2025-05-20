import React from "react";
import "./MainHome.css";

export default function MainHome() {
  return (
    <div className="main__bg">
      <h1 className="main__titulo">Descubrí la noche de Buenos Aires</h1>

      <div className="div__buscar">
        <input
          className="input__buscar"
          id="buscar"
          placeholder="Buscar eventos o lugares"
        />
        <button className="btn_buscar">
          <span className="texto-btn">Buscar</span>
          <svg
            className="icono-lupa"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
