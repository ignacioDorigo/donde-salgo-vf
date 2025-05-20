import React from "react";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <img
        className="logo__img"
        src="logo.png"
        alt="Logo donde salgo"
        title="Logo Donde Salgo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}
