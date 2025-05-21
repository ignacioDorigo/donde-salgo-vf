import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img
          className="logo__img"
          src="/logo.webp"
          alt="Logo donde salgo"
          title="Logo Donde Salgo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </Link>
    </div>
  );
}
