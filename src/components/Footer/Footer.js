import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";
import SvgTiktok from "../Svg/SvgTiktok/SvgTiktok";
import SvgTwitter from "../Svg/SvgTwitter/SvgTwitter";
import SvgInstragram from "../Svg/SvgInstagram/SvgInstagram";

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
            <SvgTiktok />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/dondesalgo?s=21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgTwitter />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/dondesalgo_?igsh=aTNvNHhuMTR4eTZu&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgInstragram />
          </a>
        </div>
      </footer>
    </div>
  );
}
