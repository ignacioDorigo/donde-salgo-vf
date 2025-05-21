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
      nombre: "Moscu",
      categoria: "Boliche",
      calificacion: 4,
      precio: 2500,
      imagenes: [
        "/salidas/moscu1.webp",
        "/salidas/moscu2.webp",
        "/salidas/moscu3.webp",
      ],
      musica: "Electrónica",
      dia: "VIE",
      descripcion:
        "Moscú es uno de los boliches más populares del centro porteño. Con luces vibrantes y DJs internacionales, ofrece una experiencia inolvidable para los amantes de la música electrónica. Su pista principal vibra hasta altas horas de la madrugada, acompañada de barras bien surtidas y sectores VIP que elevan la experiencia nocturna.",
      ubicacion:
        "Av. Costanera Rafael Obligado 6151, C1428 Cdad. Autónoma de Buenos Aires",
      comentarios: [
        {
          usuario: "Juan Pérez",
          foto: "/usuarios/juan.jpg",
          comentario: "¡Excelente ambiente y buena música!",
          calificacion: 5,
        },
        {
          usuario: "Lucía Fernández",
          foto: "/usuarios/lucia.jpg",
          comentario: "Un poco caro pero la pasé genial.",
          calificacion: 4,
        },
      ],
    },
    {
      nombre: "Wax",
      categoria: "Bar",
      calificacion: 3,
      precio: 1500,
      imagenes: [
        "/salidas/salida1.webp",
        "/salidas/wax1.webp",
        "/salidas/wax2.webp",
        "/salidas/wax3.webp",
      ],
      musica: "Rock",
      dia: "JUE",
      descripcion:
        "Bar Nocturno es un rincón acogedor para los amantes del rock clásico y alternativo. Ubicado en el barrio de Palermo, ofrece una carta variada de tragos, cervezas artesanales y picadas. Las bandas en vivo los jueves por la noche lo convierten en un punto de encuentro ideal para desconectar con amigos.",
      ubicacion: "Sarmiento 1728, C1042ABH Cdad. Autónoma de Buenos Aires",
      comentarios: [
        {
          usuario: "Carlos Gómez",
          foto: "/usuarios/carlos.jpg",
          comentario: "Buena música pero el sonido podría mejorar.",
          calificacion: 3,
        },
        {
          usuario: "Sofía Martínez",
          foto: "/usuarios/sofia.jpg",
          comentario: "Me encantó la ambientación del lugar.",
          calificacion: 4,
        },
      ],
    },
    {
      nombre: "La Mala",
      categoria: "Boliche",
      calificacion: 4.5,
      precio: 0,
      imagenes: [
        "/salidas/lamala1.webp",
        "/salidas/lamala2.webp",
        "/salidas/lamala3.webp",
        "/salidas/lamala4.webp",
      ],
      musica: "Reggaetón",
      dia: "SÁB",
      descripcion:
        "Refugio Dance es un espacio vibrante que celebra el reggaetón y los ritmos latinos. Con entrada gratuita, se llena de jóvenes cada sábado por la noche. Las luces LED y el sistema de sonido envolvente generan una experiencia única. El público disfruta de pistas amplias y shows temáticos cada semana.",
      ubicacion:
        "Arco 3 y 4, Av. del Libertador 3883, C1425 ABL, Cdad. Autónoma de Buenos Aires",
      comentarios: [
        {
          usuario: "Martín López",
          foto: "/usuarios/martin.jpg",
          comentario: "Gratis y con buena onda, ¡volveré!",
          calificacion: 5,
        },
        {
          usuario: "Valentina Ruiz",
          foto: "/usuarios/valentina.jpg",
          comentario: "Mucho reggaetón, ideal si te gusta ese estilo.",
          calificacion: 4,
        },
      ],
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
