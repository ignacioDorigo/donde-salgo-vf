import React, { useState } from "react";
import "./Eventos.css";
import Salidas from "../Salidas/Salidas";

export default function Eventos() {
  const [indexActual, setIndexActual] = useState(0);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [precioSeleccionado, setPrecioSeleccionado] = useState("");
  const [musicaSeleccionada, setMusicaSeleccionada] = useState("");
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);

  const renderPrecioSimbolico = (nombre) => {
    switch (nombre) {
      case "Moscu":
        return "+21";
      case "Wax":
        return "+18";
      case "La Mala":
        return "+18";
      default:
        return "$";
    }
  };

  const salidas = [
    {
      nombre: "Moscu",
      categoria: "Boliche",
      calificacion: 4,
      precio: renderPrecioSimbolico("Moscu"),
      imagenes: [
        "/salidas/moscu1.webp",
        "/salidas/moscu2.webp",
        "/salidas/moscu3.webp",
      ],
      musica: "Electrónica",
      dia: "VIE",
      descripcion:
        "Moscú es uno de los boliches más icónicos del centro porteño, conocido por su energía vibrante, espectáculos de luces de última generación y una pista de baile que nunca se vacía. El lugar fusiona la estética industrial con detalles modernos que crean un ambiente sofisticado pero accesible. DJs nacionales e internacionales giran en sus cabinas todos los fines de semana, haciendo que cada noche sea una experiencia distinta. Su ubicación frente a la Costanera lo convierte en un punto ideal para quienes buscan una previa con vista y una noche intensa hasta el amanecer. Ideal para grupos de amigos o salidas especiales.",

      ubicacion:
        "Av. Costanera Rafael Obligado 6151, C1428 Cdad. Autónoma de Buenos Aires",
      comentarios: [
        {
          usuario: "Juan Pérez",
          foto: "https://i.pravatar.cc/50?img=58",
          comentario: "¡Excelente ambiente y buena música!",
          calificacion: 5,
          zona: "Recoleta",
          fechaComentario: "10 de abril de 2025",
        },
        {
          usuario: "Lucía Fernández",
          foto: "https://i.pravatar.cc/50?img=2",
          comentario: "Un poco caro pero la pasé genial.",
          calificacion: 4,
          zona: "Caballito",
          fechaComentario: "8 de abril de 2025",
        },
        {
          usuario: "Federico Álvarez",
          foto: "https://i.pravatar.cc/50?img=12",
          comentario: "Luces increíbles y buena vibra.",
          calificacion: 4,
          zona: "Belgrano",
          fechaComentario: "5 de abril de 2025",
        },
        {
          usuario: "Nadia Torres",
          foto: "https://i.pravatar.cc/50?img=34",
          comentario: "La música estuvo excelente toda la noche.",
          calificacion: 5,
          zona: "Palermo",
          fechaComentario: "3 de abril de 2025",
        },
        {
          usuario: "Esteban Ruiz",
          foto: "https://i.pravatar.cc/50?img=30",
          comentario: "Volvería sin dudarlo.",
          calificacion: 5,
          zona: "Almagro",
          fechaComentario: "1 de abril de 2025",
        },
      ],
    },
    {
      nombre: "Wax",
      categoria: "Bar",
      calificacion: 3,
      precio: renderPrecioSimbolico("Wax"),
      imagenes: [
        "/salidas/salida1.webp",
        "/salidas/wax1.webp",
        "/salidas/wax2.webp",
        "/salidas/wax3.webp",
      ],
      musica: "Rock",
      dia: "JUE",
      descripcion:
        "Wax es un bar con alma rockera que combina lo clásico con un toque moderno y relajado. Con paredes adornadas de vinilos, luces cálidas y un ambiente acogedor, es el sitio perfecto para quienes buscan buena música y cervezas artesanales. El bar ofrece una variada carta de tragos y picadas, y suele haber bandas en vivo o sesiones de DJ que mantienen la noche en movimiento sin necesidad de grandes estridencias. La atención es amable y el público, diverso y distendido. Un excelente lugar para arrancar la noche o simplemente relajarse entre amigos cualquier día de la semana.",

      ubicacion: "Sarmiento 1728, C1042ABH Cdad. Autónoma de Buenos Aires",
      comentarios: [
        {
          usuario: "Carlos Gómez",
          foto: "https://i.pravatar.cc/50?img=7",
          comentario: "Buena música pero el sonido podría mejorar.",
          calificacion: 3,
          zona: "Boedo",
          fechaComentario: "15 de marzo de 2025",
        },
        {
          usuario: "Sofía Martínez",
          foto: "https://i.pravatar.cc/50?img=5",
          comentario: "Me encantó la ambientación del lugar.",
          calificacion: 4,
          zona: "San Telmo",
          fechaComentario: "12 de marzo de 2025",
        },
        {
          usuario: "Leandro Díaz",
          foto: "https://i.pravatar.cc/50?img=16",
          comentario: "Buena atención pero estaba un poco lleno.",
          calificacion: 3,
          zona: "Villa Crespo",
          fechaComentario: "10 de marzo de 2025",
        },
        {
          usuario: "Giselle Vázquez",
          foto: "https://i.pravatar.cc/50?img=22",
          comentario: "Gran variedad de cervezas artesanales.",
          calificacion: 4,
          zona: "Barracas",
          fechaComentario: "8 de marzo de 2025",
        },
        {
          usuario: "Tomás Benítez",
          foto: "https://i.pravatar.cc/50?img=25",
          comentario: "Ideal para arrancar la noche.",
          calificacion: 4,
          zona: "Villa Urquiza",
          fechaComentario: "5 de marzo de 2025",
        },
      ],
    },
    {
      nombre: "La Mala",
      categoria: "Boliche",
      calificacion: 4.5,
      precio: renderPrecioSimbolico("La Mala"),
      imagenes: [
        "/salidas/lamala1.webp",
        "/salidas/lamala2.webp",
        "/salidas/lamala3.webp",
        "/salidas/lamala4.webp",
      ],
      musica: "Reggaetón",
      dia: "SÁB",
      descripcion:
        "La Mala es uno de los boliches más populares para los amantes del reggaetón y los ritmos latinos. Con una ambientación tropical, luces neón, y una pista que se enciende apenas cae la noche, este lugar garantiza fiesta sin interrupciones. Su estratégica ubicación en los Arcos del Rosedal le da un aire urbano chic, con seguridad y comodidad. Además de la música, cuenta con barras amplias, sectores VIP, y animaciones en vivo que suben la temperatura del lugar. Perfecto para salir con amigas o celebrar una noche especial a puro perreo y diversión hasta altas horas.",

      ubicacion:
        "Arco 3 y 4, Av. del Libertador 3883, C1425 ABL, Cdad. Autónoma de Buenos Aires",
      comentarios: [
        {
          usuario: "Martín López",
          foto: "https://i.pravatar.cc/50?img=8",
          comentario: "Gratis y con buena onda, ¡volveré!",
          calificacion: 5,
          zona: "Ezeiza",
          fechaComentario: "3 de mayo de 2025",
        },
        {
          usuario: "Valentina Ruiz",
          foto: "https://i.pravatar.cc/50?img=9",
          comentario: "Mucho reggaetón, ideal si te gusta ese estilo.",
          calificacion: 4,
          zona: "Palermo",
          fechaComentario: "2 de mayo de 2025",
        },
        {
          usuario: "Camila Torres",
          foto: "https://i.pravatar.cc/50?img=14",
          comentario: "Excelente ambientación y seguridad.",
          calificacion: 5,
          zona: "Once",
          fechaComentario: "1 de mayo de 2025",
        },
        {
          usuario: "Pablo Ferreyra",
          foto: "https://i.pravatar.cc/50?img=10",
          comentario: "La pista se llena rápido, mejor ir temprano.",
          calificacion: 4,
          zona: "Liniers",
          fechaComentario: "30 de abril de 2025",
        },
        {
          usuario: "Florencia Ramírez",
          foto: "https://i.pravatar.cc/50?img=6",
          comentario: "Una noche increíble con amigas.",
          calificacion: 5,
          zona: "Villa Devoto",
          fechaComentario: "28 de abril de 2025",
        },
        {
          usuario: "Ignacio Varela",
          foto: "https://i.pravatar.cc/50?img=17",
          comentario: "Lo mejor de reggaetón en Buenos Aires.",
          calificacion: 5,
          zona: "Constitución",
          fechaComentario: "27 de abril de 2025",
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
      precioSeleccionado === "" || salida.precio === precioSeleccionado;

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
              <option value="$">Barato</option>
              <option value="$$">Regular</option>
              <option value="$$$">Elevado</option>
              <option value="$$$$">Lujo</option>
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
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
              </button>
              <div className="salida__caja_unica">
                <Salidas
                  salida={
                    salidasFiltradas[indexActual % salidasFiltradas.length]
                  }
                />
              </div>
              <button className="carousel__flecha right" onClick={siguiente}>
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
              </svg>
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
