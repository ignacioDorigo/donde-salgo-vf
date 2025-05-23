import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import "./LoginPage.css";

export default function Login() {
  return (
    <div className="login__container">
      <div className="login__image" />
      <div className="login__form-wrapper">
        <LoginForm />
      </div>
    </div>
  );
}
