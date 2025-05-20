import React from "react";
import Logo from "../Logo/Logo";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav_bg">
      <nav className="nav contenedor">
        <Logo />
        <div className="div__nav__enlaces">
          {/* Hay que usar react router */}
          <p className="enlaces">Ingresar</p>
          <p className="enlaces crearCuenta">Crear cuenta</p>
        </div>
      </nav>
    </div>
  );
}
