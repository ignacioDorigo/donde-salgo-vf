import React, { useState } from "react";
import Logo from "../Logo/Logo";
import "./Navbar.css";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="nav_bg">
      <nav className="nav contenedor">
        <Logo />

        <div
          className="hamburguesa"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          ☰
        </div>

        <div
          className={`menu_mobile_overlay ${
            menuAbierto ? "menu_mobile_visible" : ""
          }`}
        >
          <p className="enlaces" onClick={() => setMenuAbierto(false)}>
            Ingresar
          </p>
          <p
            className="enlaces crearCuenta"
            onClick={() => setMenuAbierto(false)}
          >
            Crear cuenta
          </p>
        </div>

        {/* Escritorio */}
        <div className="div__nav__enlaces">
          <p className="enlaces">Ingresar</p>
          <p className="enlaces crearCuenta">Crear cuenta</p>
        </div>
      </nav>
    </div>
  );
}
