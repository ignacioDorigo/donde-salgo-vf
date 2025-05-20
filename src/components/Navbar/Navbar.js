import React, { useState } from "react";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
          <Link to="/login">
            <p className="enlaces" onClick={() => setMenuAbierto(false)}>
              Ingresar
            </p>
          </Link>
          <Link to="/register">
            <p
              className="enlaces crearCuenta"
              onClick={() => setMenuAbierto(false)}
            >
              Crear cuenta
            </p>
          </Link>
        </div>

        {/* Escritorio */}
        <div className="div__nav__enlaces">
          <Link to="login" className="enlaces">
            Ingresar
          </Link>
          <Link to="register" className="enlaces crearCuenta">
            Crear cuenta
          </Link>
        </div>
      </nav>
    </div>
  );
}
