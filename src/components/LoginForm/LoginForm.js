import React from "react";
import Logo from "../Logo/Logo";
import "./LoginForm.css";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const loguearse = (e) => {
    e.preventDefault();
    console.log("Ingresanndo...");
  };

  return (
    <form className="login__form">
      <div className="logo__wrapper">
        <Logo />
      </div>

      <h1 className="login__title">Iniciar Sesión</h1>

      <input className="login__input" placeholder="Correo" type="email" />
      <input
        className="login__input"
        placeholder="Contraseña"
        type="password"
      />

      <button className="login__button" onClick={loguearse}>
        Ingresar
      </button>

      <p className="login__footer">
        ¿No tenés cuenta? <Link to="/register">Registrate</Link>
      </p>
    </form>
  );
}
