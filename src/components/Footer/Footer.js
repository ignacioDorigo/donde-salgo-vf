import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <div className="footer__bg">
      <footer className="footer contenedor">
        <Logo className="footer__logo" />
        <div className="div__redes">
          {/* Tiktok */}
          <a
            href="https://www.tiktok.com/@dondesalgo?_t=ZM-8wXlj2aWx1S&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="svg__redes"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E1E1E1"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/dondesalgo?s=21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="svg__redes"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E1E1E1"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/dondesalgo_?igsh=aTNvNHhuMTR4eTZu&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="svg__redes"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E1E1E1"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
