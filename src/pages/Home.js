import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MainHome from "../components/MainHome/MainHome";
import Categorias from "../components/Categorias/Categorias";
import Eventos from "../components/Eventos/Eventos";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainHome />
      <Categorias />
      <Eventos />
      <Footer />
    </div>
  );
}
