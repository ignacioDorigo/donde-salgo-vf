import React, { useState } from "react";
import "./RegistrarLugar.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function RegistrarLugar() {
  const [formData, setFormData] = useState({
    nombre: "",
    tipo: "",
    direccion: "",
    descripcion: "",
    sitioWeb: "",
    instagram: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📌 Lugar registrado:", formData);
    alert("✅ ¡Gracias por registrar tu lugar!");
    setFormData({
      nombre: "",
      tipo: "",
      direccion: "",
      descripcion: "",
      sitioWeb: "",
      instagram: "",
    });
  };

  return (
    <>
      <Navbar />

      <section className="formulario-lugar">
        <div className="formulario-lugar__contenedor">
          <h1>Registrar tu boliche o restaurante</h1>
          <p>Completá el siguiente formulario para que podamos revisar tu lugar y sumarlo a nuestra plataforma.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre del lugar"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
            >
              <option value="">Tipo de lugar</option>
              <option value="Boliche">Boliche</option>
              <option value="Restaurante">Restaurante</option>
              <option value="Bar">Bar</option>
              <option value="Otro">Otro</option>
            </select>
            <input
              type="text"
              name="direccion"
              placeholder="Dirección exacta"
              value={formData.direccion}
              onChange={handleChange}
              required
            />
            <textarea
              name="descripcion"
              placeholder="Breve descripción del lugar"
              value={formData.descripcion}
              onChange={handleChange}
              required
            ></textarea>
            <input
              type="text"
              name="sitioWeb"
              placeholder="Sitio web (opcional)"
              value={formData.sitioWeb}
              onChange={handleChange}
            />
            <input
              type="text"
              name="instagram"
              placeholder="Instagram (opcional)"
              value={formData.instagram}
              onChange={handleChange}
            />
            <button type="submit">Enviar registro</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
