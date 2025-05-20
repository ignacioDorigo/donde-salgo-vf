import React from "react";
import "./Eventos.css";
import Salidas from "../Salidas/Salidas";

export default function Eventos() {
  const salidas = [
    {
      nombre: "Club Vértigo",
      categoria: "Boliche",
      calificacion: 4,
      precio: 2500,
      imagen: "/salidas/salida1.webp",
    },
    {
      nombre: "Bar Nocturno",
      categoria: "Bar",
      calificacion: 3,
      precio: 2500,
      imagen: "/salidas/salida2.webp",
    },
    {
      nombre: "Refugio Dance",
      categoria: "Boliche",
      calificacion: 4.5,
      precio: "Gratis",
      imagen: "/salidas/salida3.webp",
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
        fechaCompleta: fecha, // por si necesitas la fecha completa
      });
    }

    return dias;
  };

  const calendario = obtenerProximosDias(4);

  const handleClick = (fecha) => {
    alert(`Hiciste clic en la fecha: ${fecha.toLocaleDateString()}`);
    // Aquí puedes hacer algo como redireccionar, abrir un modal, etc.
  };

  return (
    <div className="eventos__bg">
      <div className="eventos__contenido contenedor">
        <h2 className="eventos__titulo">Próximos eventos</h2>

        <div className="div__filtros">
          <div className="calendario__contenedor">
            {calendario.map((dia, index) => (
              <div
                key={index}
                className="calendario__caja"
                onClick={() => handleClick(dia.fechaCompleta)}
              >
                <span className="calendario__dia">{dia.nombreDia}</span>
                <span className="calendario__numero">{dia.numero}</span>
              </div>
            ))}
          </div>
          <select className="filtro__categorias">
            <option value="categoria" selected disabled>
              Categoria
            </option>
            <option value="Bar">Bar</option>
            <option value="Boliche">Boliche</option>
            <option value="todas">Todas</option>
          </select>
        </div>

        <h2 className="explorar__titulo">Explorar salidas</h2>

        <div className="div__salidas">
          {salidas.map((salida, index) => (
            <Salidas key={index} salida={salida} />
          ))}
        </div>
      </div>
    </div>
  );
}
