import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./RegisterForm.css";

export default function RegisterForm() {
  const registrarse = (e) => {
    e.preventDefault();
    console.log("Registrarse...");
  };

  return (
    <form className="register__form">
      <div className="logo__wrapper">
        <Logo />
      </div>

      <h1 className="register__title">Crear cuenta</h1>

      <input className="register__input" placeholder="Nombre" type="text" />
      <input className="register__input" placeholder="Correo" type="email" />
      <input
        className="register__input"
        placeholder="Contraseña"
        type="password"
      />

      <button className="register__button" onClick={registrarse}>
        Registrarse
      </button>

      <p className="register__footer">
        ¿Ya tenés cuenta? <Link to="/login">Ingresá acá</Link>
      </p>
    </form>
  );
}
