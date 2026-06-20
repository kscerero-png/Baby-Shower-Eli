export interface Tienda {
  id: string
  nombre: string
  descripcion: string
  enlace: string
  imagenUrl?: string
}

const TIENDAS_INICIALES: Tienda[] = [
  {
    id: "tda-1",
    nombre: "Amazon",
    descripcion: "La tienda online más grande del mundo. Encuentras desde pañales hasta muebles para bebé.",
    enlace: "https://www.amazon.com/s?k=baby+shower+gifts",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
  },
  {
    id: "tda-2",
    nombre: "Mercado Libre",
    descripcion: "Plataforma de e-commerce con gran variedad de productos para bebés en toda América Latina.",
    enlace: "https://www.mercadolibre.com/",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Mercado_Libre_Logo.svg/2560px-Mercado_Libre_Logo.svg.png"
  },
  {
    id: "tda-3",
    nombre: "Walmart",
    descripcion: "Tienda departamental con sección especializada en artículos para recién nacidos.",
    enlace: "https://www.walmart.com/baby",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2560px-Walmart_logo.svg.png"
  },
  {
    id: "tda-4",
    nombre: "Target",
    descripcion: "Tienda estadounidense con una de las mejores secciones de registro de baby shower.",
    enlace: "https://www.target.com/c/baby-registry",
    imagenUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/2560px-Target_logo.svg.png"
  },
  {
    id: "tda-5",
    nombre: "Baby Depot",
    descripcion: "Especializada en muebles, accesorios y todo lo necesario para la llegada del bebé.",
    enlace: "https://www.babydepot.com/",
    imagenUrl: ""
  },
]

export default TIENDAS_INICIALES
