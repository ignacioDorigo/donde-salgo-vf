import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MainEventosGratis from '../components/MainEventosGratis/MainEventosGratis';

export default function EventosGratis() {
  return (
    <div>
      <Navbar />
      <MainEventosGratis />
      <Footer />
    </div>
  );
}
