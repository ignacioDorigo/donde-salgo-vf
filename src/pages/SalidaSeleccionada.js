import React from "react";
import { useLocation } from "react-router-dom";
import "./SalidaSeleccionada.css";
import Navbar from "../components/Navbar/Navbar";
import MainSalidaSeleccionada from "../components/MainSalidaSeleccionada/MainSalidaSeleccionada";
import Footer from "../components/Footer/Footer";

export default function SalidaSeleccionada() {
  const { state } = useLocation();
  const { salida } = state || {};

  return (
    <>
      <Navbar />
      <MainSalidaSeleccionada salida={salida} />
      <Footer />
    </>
  );
}
