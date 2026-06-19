export interface Producto {
  id: string
  titulo: string
  categoria: string
  descripcion: string
  enlace: string
  cantidadNecesitada: number
  cantidadReservada: number
  imagenTipo: string
  imagenUrl?: string
  prioridad: string
  regalos: {
    donante: string
    fancy: boolean
    cantidad: number
    mensaje: string
    fecha: string
  }[]
}

const PRODUCTOS_INICIALES: Producto[] = [
  {
    id: "prod-1",
    titulo: "Pañales Etapa 1 (Recién Nacido)",
    categoria: "Higiene",
    descripcion: "Paquetes de pañales hipoalergénicos talla RN. Se agradece cualquier marca.",
    enlace: "",
    cantidadNecesitada: 6,
    cantidadReservada: 2,
    imagenTipo: "higiene",
    prioridad: "Alta",
    regalos: [
      { donante: "Tía María", fancy: true, cantidad: 1, mensaje: "¡Bienvenida pequeña!", fecha: "15/06/2026" },
      { donante: "Familia López", fancy: true, cantidad: 1, mensaje: "Con mucho cariño", fecha: "16/06/2026" }
    ]
  },
  {
    id: "prod-2",
    titulo: "Cuna de Madera con Colchón",
    categoria: "Decoración",
    descripcion: "Cuna cuna convertible de madera maciza, incluye colchón de espuma viscoelástica.",
    enlace: "https://ejemplo.com/cuna",
    cantidadNecesitada: 1,
    cantidadReservada: 0,
    imagenTipo: "decoracion",
    prioridad: "Alta",
    regalos: []
  },
  {
    id: "prod-3",
    titulo: "Set de Bodies Manga Corta (6 unidades)",
    categoria: "Ropa",
    descripcion: "Bodies de algodón orgánico para recién nacido, colores pastel. Talla 0-3 meses.",
    enlace: "",
    cantidadNecesitada: 3,
    cantidadReservada: 1,
    imagenTipo: "ropa",
    prioridad: "Media",
    regalos: [
      { donante: "Abuela Rosa", fancy: true, cantidad: 1, mensaje: "Para mi nietita hermosa", fecha: "14/06/2026" }
    ]
  },
  {
    id: "prod-4",
    titulo: "Mamaderas Anti-Cólicos (Set 3 piezas)",
    categoria: "Lactancia",
    descripcion: "Biberones de vidrio o silicona con sistema anti-cólicos, 150ml y 250ml.",
    enlace: "https://ejemplo.com/mamaderas",
    cantidadNecesitada: 2,
    cantidadReservada: 0,
    imagenTipo: "lactancia",
    prioridad: "Media",
    regalos: []
  },
  {
    id: "prod-5",
    titulo: "Peluche Musical Winnie the Pooh",
    categoria: "Juguetes",
    descripcion: "Peluche suave que reproduce la canción 'You Are My Sunshine'. Ideal para el apego.",
    enlace: "",
    cantidadNecesitada: 1,
    cantidadReservada: 0,
    imagenTipo: "juguetes",
    prioridad: "Baja",
    regalos: []
  },
  {
    id: "prod-6",
    titulo: "Toallitas Húmedas (Pack x 12)",
    categoria: "Higiene",
    descripcion: "Paquetes de toallitas húmedas sin alcohol ni fragancias artificiales.",
    enlace: "",
    cantidadNecesitada: 4,
    cantidadReservada: 0,
    imagenTipo: "higiene",
    prioridad: "Alta",
    regalos: []
  },
  {
    id: "prod-7",
    titulo: "Móvil para Cuna con Abejitas",
    categoria: "Decoración",
    descripcion: "Móvil giratorio musical con figuras de abejitas colgantes. Estimulación temprana.",
    enlace: "https://ejemplo.com/movil",
    cantidadNecesitada: 1,
    cantidadReservada: 0,
    imagenTipo: "decoracion",
    prioridad: "Media",
    regalos: []
  },
  {
    id: "prod-8",
    titulo: "Set de Sábanas para Cuna (3 piezas)",
    categoria: "Ropa",
    descripcion: "Sábanas de algodón suave con estampado de nubes y abejitas. Incluye sábana bajera, ajustable y cubrecolchón.",
    enlace: "",
    cantidadNecesitada: 2,
    cantidadReservada: 0,
    imagenTipo: "ropa",
    prioridad: "Media",
    regalos: []
  },
  {
    id: "prod-9",
    titulo: "Esterilla de Juego Gimnasio",
    categoria: "Juguetes",
    descripcion: "Gimnasio de actividades con arco colgante, espejo y sonajeros. Piso acolchado.",
    enlace: "https://ejemplo.com/gimnasio",
    cantidadNecesitada: 1,
    cantidadReservada: 0,
    imagenTipo: "juguetes",
    prioridad: "Baja",
    regalos: []
  },
  {
    id: "prod-10",
    titulo: "Sacaleches Eléctrico",
    categoria: "Lactancia",
    descripcion: "Sacaleches eléctrico portátil con 2 modos de extracción. Incluye biberones.",
    enlace: "",
    cantidadNecesitada: 1,
    cantidadReservada: 0,
    imagenTipo: "lactancia",
    prioridad: "Media",
    regalos: []
  },
]

export default PRODUCTOS_INICIALES
