import React from "react";
import "./MainNovedades.css";

export default function MainNovedades() {
  const novedades = [
    {
      nombre: "NEON Rooftop",
      categoria: "Bar de terraza",
      calificacion: 4.9,
      precio: "$$$",
      imagenes: [
        "/salidas/neon1.webp",
        "/salidas/neon2.webp",
        "/salidas/neon3.webp",
      ],
      musica: "House / Lounge",
      dia: "JUE",
      descripcion:
        "Inaugurado hace pocas semanas, NEON Rooftop mezcla tragos de autor, vistas increíbles y una ambientación con luces neón que le da su nombre. La experiencia es moderna y relajada, con DJ en vivo y una carta gourmet.",
      ubicacion: "Av. Figueroa Alcorta 3100, CABA",
      comentarios: [
        {
          usuario: "Aldana Sosa",
          foto: "https://i.pravatar.cc/50?img=21",
          comentario: "Muy exclusivo, vale la pena.",
          calificacion: 5,
          zona: "Palermo",
          fechaComentario: "14 de mayo de 2025",
        },
      ],
    },
    {
      nombre: "Distrito Food & Beats",
      categoria: "Patio gastronómico",
      calificacion: 4.7,
      precio: "$$",
      imagenes: ["/salidas/distritofood1.webp", "/salidas/distritofood2.webp"],
      musica: "Comercial / Electrónica",
      dia: "VIE",
      descripcion:
        "Una nueva propuesta en la zona sur con foodtrucks, tragos, luces led, y un sector de DJs. Combina buena comida con ambiente de boliche suave. Ideal para un plan relajado con amigos sin dejar de moverse.",
      ubicacion: "Av. Caseros 1900, Parque Patricios, CABA",
      comentarios: [
        {
          usuario: "Bruno Larrea",
          foto: "https://i.pravatar.cc/50?img=30",
          comentario: "Todo nuevo, muy bien ambientado.",
          calificacion: 5,
          zona: "Constitución",
          fechaComentario: "13 de mayo de 2025",
        },
      ],
    },
    {
      nombre: "Subsuelo 88",
      categoria: "Boliche alternativo",
      calificacion: 4.8,
      precio: "$$",
      imagenes: ["/salidas/subsuelo1.webp", "/salidas/subsuelo2.webp"],
      musica: "Techno / Minimal",
      dia: "SÁB",
      descripcion:
        "Un boliche nuevo escondido en un sótano con estética industrial, luces oscuras y sonido brutal. Pensado para amantes de lo alternativo, los sonidos profundos y las pistas sin etiquetas.",
      ubicacion: "Lambaré 888, Almagro, CABA",
      comentarios: [
        {
          usuario: "Rocío Gómez",
          foto: "https://i.pravatar.cc/50?img=7",
          comentario: "Increíble propuesta, nada comercial.",
          calificacion: 5,
          zona: "Almagro",
          fechaComentario: "12 de mayo de 2025",
        },
      ],
    },
    {
      nombre: "El Refugio de los Juegos",
      categoria: "Bar friki / temático",
      calificacion: 4.6,
      precio: "$",
      imagenes: ["/salidas/refugio1.webp", "/salidas/refugio2.webp"],
      musica: "Anime / 8bit",
      dia: "MIÉ",
      descripcion:
        "Ideal para fans del anime, los videojuegos y el rol. Juegos de mesa, consolas retro, cosplays y birras temáticas. Recién abierto y ya se volvió viral entre la comunidad otaku.",
      ubicacion: "Av. Corrientes 4517, CABA",
      comentarios: [
        {
          usuario: "Kevin Urquiza",
          foto: "https://i.pravatar.cc/50?img=17",
          comentario: "¡Por fin algo para los gamers!",
          calificacion: 5,
          zona: "Villa Crespo",
          fechaComentario: "10 de mayo de 2025",
        },
      ],
    },
    {
      nombre: "Satori Bar",
      categoria: "Bar oculto / speakeasy",
      calificacion: 4.9,
      precio: "$$$",
      imagenes: ["/salidas/satori1.webp", "/salidas/satori2.webp"],
      musica: "Jazz / Lofi",
      dia: "JUE",
      descripcion:
        "Inspirado en la estética japonesa, Satori es un bar oculto detrás de una librería. Tragos refinados, silencio respetuoso y atención al detalle. Ideal para citas, charlas profundas o quienes buscan algo fuera de lo común.",
      ubicacion: "Dirección secreta (se accede con reserva)",
      comentarios: [
        {
          usuario: "Florencia Bianco",
          foto: "https://i.pravatar.cc/50?img=42",
          comentario: "¡Una experiencia completamente distinta!",
          calificacion: 5,
          zona: "Villa Urquiza",
          fechaComentario: "9 de mayo de 2025",
        },
      ],
    },
  ];

  return <div>MainNovedades</div>;
}
