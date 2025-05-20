import React from "react";
import Logo from "../Logo/Logo";
import "./LoginForm.css";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const loguearse = (e) => {
    console.log(e.target);
  };
  return (
    <form className="login">
      <Logo />

      <h1>Crear cuenta</h1>

      <input placeholder="Nombre" type="text"></input>
      <input placeholder="Correo" type="email"></input>
      <input placeholder="Nombre" type="password"></input>

      <button onClick={loguearse}></button>

      <p>
        Ya tenées cuenta?
        <Link to="login">
          <p>Ingresá aca</p>
        </Link>
      </p>
    </form>
  );
}
