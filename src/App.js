import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import LoMasElegido from "./pages/LoMasElegido";
import Novedades from "./pages/Novedades";
import EventosGratis from "./pages/EventosGratis";
import SalidaSeleccionada from "./pages/SalidaSeleccionada";
import "./App.css";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lo-mas-elegido" element={<LoMasElegido />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/eventos-gratis" element={<EventosGratis />} />
        <Route path="/salida/:id" element={<SalidaSeleccionada />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
