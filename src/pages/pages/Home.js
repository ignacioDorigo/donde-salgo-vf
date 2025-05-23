import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MainHome from "../components/MainHome/MainHome";
import Categorias from "../components/Categorias/Categorias";
import Eventos from "../components/Eventos/Eventos";
import RegistroPromo from "../components/RegistroPromo/RegistroPromo";
import RecomendadosPorZona from "../components/RecomendadosPorZona/RecomendadosPorZona";
import SeparadorLinea from "../components/linea/SeparadorLinea";






export default function Home() {
  return (
    <div>
      <Navbar />
      <MainHome />
      <Categorias />
      <Eventos />
      <RecomendadosPorZona />
      <RegistroPromo />
      <Footer />
    </div>
  );
}
