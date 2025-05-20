import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import LoMasElegido from "./pages/LoMasElegido";
import Novedades from "./pages/Novedades";
import EventosGratis from "./pages/EventosGratis";
import SalidaSeleccionada from "./pages/SalidaSeleccionada";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
