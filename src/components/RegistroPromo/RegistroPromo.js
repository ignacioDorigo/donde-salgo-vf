import React from "react";
import { Link } from "react-router-dom";
import "./RegistroPromo.css";

export default function RegistroPromo() {
  return (
    <section className="promo-registro">
      <div className="promo-contenido">
        <h2>¿Tenés un boliche o restaurante?</h2>
        <p>Registrá tu lugar en nuestra plataforma y llegá a miles de personas que buscan dónde salir en CABA.</p>
        <Link to="/registrar" className="boton-registro">
          Registrar mi lugar
        </Link>
      </div>
    </section>
  );
}
