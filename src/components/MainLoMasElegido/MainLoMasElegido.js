import React from "react";
import "./MainLoMasElegido.css";
import Elegidos from "../Elegidos/Elegidos";

export default function MainLoMasElegido() {
  
  const renderPrecioSimbolico = (nombre) => {
    switch (nombre) {
      case "Moscu":
        return "$$";
      case "Wax":
        return "$";
      case "La Mala":
        return "$$$";
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
    {
      nombre: "Pueblo Secreto",
      categoria: "Bar temático",
      calificacion: 4,
      precio: renderPrecioSimbolico("Pueblo Secreto"),
      imagenes: [
        "/salidas/pueblo1.webp",
        "/salidas/pueblo2.webp",
        "/salidas/pueblo3.webp",
      ],
      musica: "Jazz",
      dia: "MIÉ",
      descripcion:
        "Pueblo Secreto es un bar oculto con estética de western moderno. Tras una puerta anónima se esconde un espacio con iluminación tenue, paredes de madera y una atmósfera íntima donde el jazz en vivo o el blues instrumental crean un entorno ideal para escaparse del ruido de la ciudad.",
      ubicacion: "Pasaje Giuffra 371, San Telmo, CABA",
      comentarios: [
        {
          usuario: "Eva Montes",
          foto: "https://i.pravatar.cc/50?img=21",
          comentario: "Ideal para una cita. Ambiente mágico.",
          calificacion: 5,
          zona: "San Telmo",
          fechaComentario: "15 de abril de 2025",
        },
      ],
    },
    {
      nombre: "Furia",
      categoria: "Boliche",
      calificacion: 4.5,
      precio: renderPrecioSimbolico("Furia"),
      imagenes: [
        "/salidas/furia1.webp",
        "/salidas/furia2.webp",
        "/salidas/furia3.webp",
      ],
      musica: "Techno",
      dia: "SÁB",
      descripcion:
        "Furia es un templo del techno en Buenos Aires. Con un sonido impecable, luces hipnóticas y un público apasionado, cada noche se transforma en un ritual de movimiento. Ideal para quienes disfrutan perderse en el ritmo y conectarse con la música sin interrupciones.",
      ubicacion: "Av. Juan B. Justo 1650, Palermo, CABA",
      comentarios: [
        {
          usuario: "Leo Méndez",
          foto: "https://i.pravatar.cc/50?img=45",
          comentario: "Si te gusta el techno, este es EL lugar.",
          calificacion: 5,
          zona: "Palermo",
          fechaComentario: "20 de abril de 2025",
        },
      ],
    },
    {
      nombre: "Bar del Bosque",
      categoria: "Bar",
      calificacion: 4,
      precio: renderPrecioSimbolico("Bar del Bosque"),
      imagenes: ["/salidas/bosque1.webp", "/salidas/bosque2.webp"],
      musica: "Pop & Funk",
      dia: "VIE",
      descripcion:
        "En pleno Parque Saavedra, Bar del Bosque ofrece una experiencia diferente, con mesas al aire libre bajo los árboles y DJ sets relajados. Perfecto para tomar algo fresco y desconectar del ritmo urbano.",
      ubicacion: "Av. García del Río 300, Saavedra, CABA",
      comentarios: [
        {
          usuario: "Sol Romero",
          foto: "https://i.pravatar.cc/50?img=19",
          comentario: "Relajado y bien ambientado.",
          calificacion: 4,
          zona: "Saavedra",
          fechaComentario: "11 de abril de 2025",
        },
      ],
    },
    {
      nombre: "Karma",
      categoria: "Boliche",
      calificacion: 3.5,
      precio: renderPrecioSimbolico("Karma"),
      imagenes: [
        "/salidas/karma1.webp",
        "/salidas/karma2.webp",
        "/salidas/karma3.webp",
      ],
      musica: "Trap",
      dia: "DOM",
      descripcion:
        "Karma es un boliche que rompe esquemas, con un enfoque joven, irreverente y estéticamente urbano. Ideal para quienes quieren cerrar el finde con energía, acompañado de shows en vivo, freestyle y sesiones de trap y R&B.",
      ubicacion: "Av. Rivadavia 6800, Flores, CABA",
      comentarios: [
        {
          usuario: "Kevin Soto",
          foto: "https://i.pravatar.cc/50?img=29",
          comentario: "Diferente, muy joven el público.",
          calificacion: 4,
          zona: "Flores",
          fechaComentario: "7 de abril de 2025",
        },
      ],
    },
    {
      nombre: "El Galpón",
      categoria: "Bar Cultural",
      calificacion: 4.2,
      precio: renderPrecioSimbolico("El Galpón"),
      imagenes: ["/salidas/galpon1.webp", "/salidas/galpon2.webp"],
      musica: "Indie / Acústico",
      dia: "JUE",
      descripcion:
        "El Galpón es un espacio cultural autogestivo que combina tragos, arte y música en vivo. Un sitio acogedor donde el ambiente lo hacen los asistentes. Mesas comunales, luces bajas y buena vibra.",
      ubicacion: "Cnel. Niceto Vega 5500, Palermo, CABA",
      comentarios: [
        {
          usuario: "Juliana Castro",
          foto: "https://i.pravatar.cc/50?img=36",
          comentario: "¡Escondido pero hermoso!",
          calificacion: 4,
          zona: "Palermo",
          fechaComentario: "3 de abril de 2025",
        },
      ],
    },
    {
      nombre: "Distrito Club",
      categoria: "Boliche",
      calificacion: 5,
      precio: renderPrecioSimbolico("Distrito Club"),
      imagenes: [
        "/salidas/distrito1.webp",
        "/salidas/distrito2.webp",
        "/salidas/distrito3.webp",
      ],
      musica: "Comercial",
      dia: "SÁB",
      descripcion:
        "Con pistas múltiples, barras premium y pantallas gigantes, Distrito Club es ideal para quienes quieren bailar sin parar toda la noche. Zona de reggaetón, electrónica y hits internacionales.",
      ubicacion: "Av. Córdoba 4375, CABA",
      comentarios: [
        {
          usuario: "Milagros Funes",
          foto: "https://i.pravatar.cc/50?img=11",
          comentario: "Tremenda fiesta, volví a casa sin voz.",
          calificacion: 5,
          zona: "Recoleta",
          fechaComentario: "6 de abril de 2025",
        },
      ],
    },
    {
      nombre: "La Cúpula",
      categoria: "Bar de terraza",
      calificacion: 4.8,
      precio: renderPrecioSimbolico("La Cúpula"),
      imagenes: ["/salidas/cupula1.webp", "/salidas/cupula2.webp"],
      musica: "House / Chill",
      dia: "JUE",
      descripcion:
        "Ubicado en la cima de un edificio histórico, La Cúpula ofrece tragos de autor con una vista panorámica de la ciudad. Música suave, sillones cómodos y una ambientación moderna hacen de este bar un lugar imperdible para una noche diferente.",
      ubicacion: "Av. de Mayo 1120, CABA",
      comentarios: [
        {
          usuario: "Damián Barreto",
          foto: "https://i.pravatar.cc/50?img=50",
          comentario: "Vista espectacular y buena carta.",
          calificacion: 5,
          zona: "Microcentro",
          fechaComentario: "2 de abril de 2025",
        },
      ],
    },
    {
      nombre: "Beat Basement",
      categoria: "Boliche",
      calificacion: 4.7,
      precio: renderPrecioSimbolico("Beat Basement"),
      imagenes: ["/salidas/beat1.webp", "/salidas/beat2.webp"],
      musica: "Drum & Bass",
      dia: "VIERNES",
      descripcion:
        "Un subsuelo que late con beats potentes. Beat Basement es un lugar alternativo donde reina la oscuridad, la pista vibrante y la comunidad rave. No es para todos, pero si te gusta el género, te vas a sentir en casa.",
      ubicacion: "Lavalle 849, CABA",
      comentarios: [
        {
          usuario: "César Medina",
          foto: "https://i.pravatar.cc/50?img=41",
          comentario: "Pura energía. Re underground.",
          calificacion: 5,
          zona: "San Nicolás",
          fechaComentario: "31 de marzo de 2025",
        },
      ],
    },
    {
      nombre: "PyN WEB",
      categoria: "Boliche",
      calificacion: 4.7,
      precio: renderPrecioSimbolico("Beat Basement"),
      imagenes: ["/salidas/uade.webp", "/salidas/beat2.webp"],
      musica: "Teoria",
      dia: "VIERNES",
      descripcion:
        "Un subsuelo que late con beats potentes. Beat Basement es un lugar alternativo donde reina la oscuridad, la pista vibrante y la comunidad rave. No es para todos, pero si te gusta el género, te vas a sentir en casa.",
      ubicacion: "Lavalle 849, CABA",
      comentarios: [
        {
          usuario: "César Medina",
          foto: "https://i.pravatar.cc/50?img=41",
          comentario: "Pura energía. Re underground.",
          calificacion: 5,
          zona: "San Nicolás",
          fechaComentario: "31 de marzo de 2025",
        },
      ],
    },
  ];
  return (
    <>
      {/* <img src="/bannerLoMasElegido.jpeg" className="loMasElegidoBanner" /> */}
      <div className="loMasElegido">
        <h1 className="lomas__titulo">Descubrí las tendencias en CABA!</h1>
        <p className="lomas__descripcion">Estos son los lugares más elegidos por la gente</p>

        <div className="salidas contenedor">
          {/* SalidasElegidas */}
          {salidas.map((salida, index) => (
            <Elegidos key={index} salida={salida} />
          ))}
        </div>
      </div>
      ;
    </>
  );
}
