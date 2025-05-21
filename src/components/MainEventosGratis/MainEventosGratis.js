import React from "react";
import "./MainEventosGratis.css";

export default function MainEventosGratis() {
  const salidasGratis = [
    {
      nombre: "Plaza Cultural Recoleta",
      categoria: "Espacio cultural",
      calificacion: 4.5,
      precio: "GRATIS",
      imagenes: ["/salidas/plaza1.webp", "/salidas/plaza2.webp"],
      musica: "En vivo / Variada",
      dia: "SÁB",
      descripcion:
        "Un punto de encuentro al aire libre donde se combinan shows gratuitos, feria de arte independiente y foodtrucks. Ideal para pasar una tarde noche diferente rodeado de cultura urbana y arte local.",
      ubicacion: "Junín 1930, Recoleta, CABA",
      comentarios: [
        {
          usuario: "Martina López",
          foto: "https://i.pravatar.cc/50?img=24",
          comentario: "Ambiente relajado y buena música.",
          calificacion: 5,
          zona: "Recoleta",
          fechaComentario: "10 de mayo de 2025",
        },
      ],
    },
    {
      nombre: "La Ronda del Parque Centenario",
      categoria: "Jam de música",
      calificacion: 4.3,
      precio: "GRATIS",
      imagenes: ["/salidas/ronda1.webp", "/salidas/ronda2.webp"],
      musica: "Fusión / Improvisación",
      dia: "DOM",
      descripcion:
        "Todos los domingos músicos se reúnen espontáneamente en ronda para improvisar. El público puede sentarse en el pasto y disfrutar de esta experiencia orgánica y gratuita en pleno corazón de Caballito.",
      ubicacion: "Av. Díaz Vélez 4800, CABA",
      comentarios: [
        {
          usuario: "Julio Maldonado",
          foto: "https://i.pravatar.cc/50?img=39",
          comentario: "Muy buena vibra, plan tranquilo.",
          calificacion: 4,
          zona: "Caballito",
          fechaComentario: "5 de mayo de 2025",
        },
      ],
    },
    {
      nombre: "Noches de Jazz en el Congreso",
      categoria: "Concierto callejero",
      calificacion: 4.7,
      precio: "GRATIS",
      imagenes: ["/salidas/jazz1.webp", "/salidas/jazz2.webp"],
      musica: "Jazz",
      dia: "VIE",
      descripcion:
        "Cada viernes por la noche, bandas de jazz se presentan frente al Congreso Nacional creando un ambiente único bajo las luces de la ciudad. Llevar manta y mate para disfrutar a pleno.",
      ubicacion: "Av. Rivadavia 1800, CABA",
      comentarios: [
        {
          usuario: "Sol Ríos",
          foto: "https://i.pravatar.cc/50?img=3",
          comentario: "Mágico. Ideal para cerrar la semana.",
          calificacion: 5,
          zona: "Balvanera",
          fechaComentario: "3 de mayo de 2025",
        },
      ],
    },
    {
      nombre: "Ciclo de Cine en la Biblioteca Nacional",
      categoria: "Cine al aire libre",
      calificacion: 4.8,
      precio: "GRATIS",
      imagenes: ["/salidas/cine1.webp", "/salidas/cine2.webp"],
      musica: "—",
      dia: "JUE",
      descripcion:
        "Proyecciones gratuitas de cine clásico y contemporáneo todos los jueves por la noche. Se realiza en la terraza de la Biblioteca Nacional, con vista y silencio asegurado.",
      ubicacion: "Agüero 2502, CABA",
      comentarios: [
        {
          usuario: "Lucía Torres",
          foto: "https://i.pravatar.cc/50?img=4",
          comentario: "Una joyita para los cinéfilos.",
          calificacion: 5,
          zona: "Recoleta",
          fechaComentario: "2 de mayo de 2025",
        },
      ],
    },
    {
      nombre: "Milonga al Aire Libre",
      categoria: "Tango",
      calificacion: 4.6,
      precio: "GRATIS",
      imagenes: ["/salidas/milonga1.webp", "/salidas/milonga2.webp"],
      musica: "Tango",
      dia: "MIÉ",
      descripcion:
        "Una experiencia única en la Ciudad: tango libre, con bailarines de todos los niveles y clases abiertas. El sonido nostálgico del bandoneón acompaña las noches de verano.",
      ubicacion: "Av. Belgrano 2600, CABA",
      comentarios: [
        {
          usuario: "Emanuel Díaz",
          foto: "https://i.pravatar.cc/50?img=14",
          comentario: "¡Hermoso ambiente, muy porteño!",
          calificacion: 5,
          zona: "Balvanera",
          fechaComentario: "1 de mayo de 2025",
        },
      ],
    },
    {
      nombre: "Pogo Poético",
      categoria: "Bar literario",
      calificacion: 4.5,
      precio: "GRATIS",
      imagenes: ["/salidas/pogo1.webp", "/salidas/pogo2.webp"],
      musica: "—",
      dia: "MAR",
      descripcion:
        "Recitales de poesía en vivo, lecturas abiertas y micrófono libre. Ideal para los que buscan expresarse o dejarse llevar por palabras ajenas. Entrada libre y gratuita, se paga lo que uno quiera.",
      ubicacion: "Honduras 5235, Palermo, CABA",
      comentarios: [
        {
          usuario: "Valentina Gómez",
          foto: "https://i.pravatar.cc/50?img=16",
          comentario: "Muy inspirador, gente copada.",
          calificacion: 5,
          zona: "Palermo",
          fechaComentario: "30 de abril de 2025",
        },
      ],
    },
    {
      nombre: "Teatro en el Patio",
      categoria: "Obra callejera",
      calificacion: 4.2,
      precio: "GRATIS",
      imagenes: ["/salidas/teatro1.webp"],
      musica: "Ambiental",
      dia: "SÁB",
      descripcion:
        "Actores independientes presentan obras breves en un patio comunitario del barrio de Colegiales. La experiencia es cercana, participativa y completamente gratuita.",
      ubicacion: "Zapiola 4050, Colegiales, CABA",
      comentarios: [
        {
          usuario: "Nico Cabral",
          foto: "https://i.pravatar.cc/50?img=8",
          comentario: "Muy creativo, formato distinto.",
          calificacion: 4,
          zona: "Colegiales",
          fechaComentario: "28 de abril de 2025",
        },
      ],
    },
    {
      nombre: "Tardes Electrónicas",
      categoria: "DJ Set en parque",
      calificacion: 4.9,
      precio: "GRATIS",
      imagenes: ["/salidas/electro1.webp", "/salidas/electro2.webp"],
      musica: "House / Chill",
      dia: "DOM",
      descripcion:
        "DJ sets tranquilos para relajar en la tarde del domingo. Suelen armarse en Parque Lezama o Parque Chacabuco. Ideal para bailar descalzo en el pasto o simplemente tirarse a mirar el cielo.",
      ubicacion: "Parque Lezama, Av. Brasil 1200, CABA",
      comentarios: [
        {
          usuario: "Ana Rivas",
          foto: "https://i.pravatar.cc/50?img=33",
          comentario: "Planazo para un domingo soleado.",
          calificacion: 5,
          zona: "San Telmo",
          fechaComentario: "27 de abril de 2025",
        },
      ],
    },
    {
      nombre: "Museo Abierto de Noche",
      categoria: "Museo / Cultura",
      calificacion: 4.3,
      precio: "GRATIS",
      imagenes: ["/salidas/museo1.webp"],
      musica: "Ambiental / Exposiciones",
      dia: "SÁB",
      descripcion:
        "Algunos museos de la ciudad abren de noche con entrada libre una vez por mes. Además de las exposiciones, suele haber intervenciones artísticas y música en vivo.",
      ubicacion: "Museo Moderno, Av. San Juan 350, CABA",
      comentarios: [
        {
          usuario: "Tomás Vega",
          foto: "https://i.pravatar.cc/50?img=27",
          comentario: "Muy bien curado, lugar cómodo.",
          calificacion: 4,
          zona: "San Telmo",
          fechaComentario: "25 de abril de 2025",
        },
      ],
    },
    {
      nombre: "Caminata Nocturna por el Casco Histórico",
      categoria: "Tour guiado",
      calificacion: 4.6,
      precio: "GRATIS",
      imagenes: ["/salidas/casco1.webp"],
      musica: "—",
      dia: "JUE",
      descripcion:
        "Un guía especializado recorre con grupos el casco histórico porteño contando anécdotas, mitos y leyendas urbanas. No se paga entrada, pero se sugiere propina al final.",
      ubicacion: "Punto de encuentro: Plaza de Mayo",
      comentarios: [
        {
          usuario: "Daniel Aranda",
          foto: "https://i.pravatar.cc/50?img=43",
          comentario: "Muy interesante y divertido.",
          calificacion: 5,
          zona: "Microcentro",
          fechaComentario: "24 de abril de 2025",
        },
      ],
    },
    {
      nombre: "Feria Nocturna en Parque Chacabuco",
      categoria: "Feria urbana",
      calificacion: 4,
      precio: "GRATIS",
      imagenes: ["/salidas/feria1.webp", "/salidas/feria2.webp"],
      musica: "Variada / Callejera",
      dia: "VIE",
      descripcion:
        "Comida callejera, artistas itinerantes y bandas tocando al paso. La feria nocturna es un combo de cultura barrial y entretenimiento sin gastar un peso.",
      ubicacion: "Av. Asamblea 1200, CABA",
      comentarios: [
        {
          usuario: "Andrea Peralta",
          foto: "https://i.pravatar.cc/50?img=31",
          comentario: "Muy auténtico y seguro.",
          calificacion: 4,
          zona: "Parque Chacabuco",
          fechaComentario: "22 de abril de 2025",
        },
      ],
    },
  ];

  return <div>MainEventosGratis</div>;
}
