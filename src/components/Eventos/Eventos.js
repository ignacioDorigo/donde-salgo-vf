import React, { useState } from "react";
import "./Eventos.css";
import Salidas from "../Salidas/Salidas";

export default function Eventos() {
  const [indexActual, setIndexActual] = useState(0);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [precioSeleccionado, setPrecioSeleccionado] = useState("");
  const [musicaSeleccionada, setMusicaSeleccionada] = useState("");
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);

  const salidas = [
    {
      nombre: "Club Vértigo",
      categoria: "Boliche",
      calificacion: 4,
      precio: 2500,
      imagen: "/salidas/salida1.webp",
      musica: "Electrónica",
      dia: "VIE",
    },
    {
      nombre: "Bar Nocturno",
      categoria: "Bar",
      calificacion: 3,
      precio: 1500,
      imagen: "/salidas/salida2.webp",
      musica: "Rock",
      dia: "JUE",
    },
    {
      nombre: "Refugio Dance",
      categoria: "Boliche",
      calificacion: 4.5,
      precio: 0,
      imagen: "/salidas/salida3.webp",
      musica: "Reggaetón",
      dia: "SÁB",
    },
  ];

  const diasSemana = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];

  const obtenerProximosDias = (cantidad) => {
    const hoy = new Date();
    const dias = [];

    for (let i = 0; i < cantidad; i++) {
      const fecha = new Date();
      fecha.setDate(hoy.getDate() + i);

      dias.push({
        nombreDia: diasSemana[fecha.getDay()],
        numero: fecha.getDate(),
        fechaCompleta: fecha,
      });
    }

    return dias;
  };

  const calendario = obtenerProximosDias(4);

  const handleClick = (fecha, nombreDia) => {
    setDiaSeleccionado(nombreDia);
  };

  const siguiente = () => {
    setIndexActual((prev) => (prev + 1) % salidasFiltradas.length);
  };

  const anterior = () => {
    setIndexActual(
      (prev) => (prev - 1 + salidasFiltradas.length) % salidasFiltradas.length
    );
  };

  const salidasFiltradas = salidas.filter((salida) => {
    const categoriaOk =
      categoriaSeleccionada === "" ||
      salida.categoria === categoriaSeleccionada;
    const precioOk =
      precioSeleccionado === "" ||
      (precioSeleccionado === "gratis" && salida.precio === 0) ||
      (precioSeleccionado === "<2000" && salida.precio < 2000) ||
      (precioSeleccionado === ">2000" && salida.precio > 2000);
    const musicaOk =
      musicaSeleccionada === "" || salida.musica === musicaSeleccionada;
    const diaOk = diaSeleccionado === null || salida.dia === diaSeleccionado;

    return categoriaOk && precioOk && musicaOk && diaOk;
  });

  return (
    <div className="eventos__bg">
      <div className="eventos__contenido contenedor">
        <h2 className="eventos__titulo">Próximos eventos</h2>

        <div className="div__filtros">
          <div className="calendario__contenedor">
            {calendario.map((dia, index) => (
              <div
                key={index}
                className={`calendario__caja ${
                  diaSeleccionado === dia.nombreDia ? "activo" : ""
                }`}
                onClick={() => handleClick(dia.fechaCompleta, dia.nombreDia)}
              >
                <span className="calendario__dia">{dia.nombreDia}</span>
                <span className="calendario__numero">{dia.numero}</span>
              </div>
            ))}
          </div>

          <div className="filtros__selects">
            <select
              value={categoriaSeleccionada}
              onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            >
              <option value="">Categoría</option>
              <option value="Bar">Bar</option>
              <option value="Boliche">Boliche</option>
            </select>

            <select
              value={precioSeleccionado}
              onChange={(e) => setPrecioSeleccionado(e.target.value)}
            >
              <option value="">Precio</option>
              <option value="gratis">Gratis</option>
              <option value="<2000">Menos de $2000</option>
              <option value=">2000">Más de $2000</option>
            </select>

            <select
              value={musicaSeleccionada}
              onChange={(e) => setMusicaSeleccionada(e.target.value)}
            >
              <option value="">Estilo musical</option>
              <option value="Reggaetón">Reggaetón</option>
              <option value="Electrónica">Electrónica</option>
              <option value="Rock">Rock</option>
            </select>
          </div>
        </div>

        <h2 className="explorar__titulo">Explorar salidas</h2>

        {salidasFiltradas.length > 0 ? (
          <>
            {/* Desktop */}
            <div className="div__salidas">
              {salidasFiltradas.map((salida, index) => (
                <Salidas key={index} salida={salida} />
              ))}
            </div>

            {/* Mobile */}
            <div className="salidas__carousel">
              <button className="carousel__flecha left" onClick={anterior}>
                ‹
              </button>
              <div className="salida__caja_unica">
                <Salidas
                  salida={
                    salidasFiltradas[indexActual % salidasFiltradas.length]
                  }
                />
              </div>
              <button className="carousel__flecha right" onClick={siguiente}>
                ›
              </button>
            </div>
          </>
        ) : (
          <p className="mensaje__sin-resultados">
            No se encontraron salidas con esos filtros.
          </p>
        )}
      </div>
    </div>
  );
}
