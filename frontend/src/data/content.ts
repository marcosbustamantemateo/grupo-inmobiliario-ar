import type { ProcessStep, ServiceFeature, Testimonial } from "../types/content";

export const serviceFeatures: ServiceFeature[] = [
  {
    icon: "\u{1F4F8}",
    title: "Reportaje fotográfico profesional",
    description:
      "Agendamos la visita en el horario que mejor te venga y hacemos las fotos que realmente venden tu propiedad.",
    category: "alquiler",
  },
  {
    icon: "\u{1F310}",
    title: "Publicación en los principales portales",
    description:
      "Tu anuncio aparece en Idealista, Fotocasa, Habitaclia y el resto de plataformas al mismo tiempo, sin que tengas que subirlo tú a cada una.",
    category: "alquiler",
  },
  {
    icon: "\u{1F4CB}",
    title: "Selección de inquilinos",
    description:
      "Filtramos y verificamos a los candidatos antes de que llegues a hablar con ellos, para que no pierdas tiempo con perfiles que no encajan.",
    category: "alquiler",
  },
  {
    icon: "\u{1F511}",
    title: "Gestión de visitas",
    description:
      "Coordinamos todas las visitas directamente con los interesados; tú solo confirmas cuando hay una oferta seria.",
    category: "alquiler",
  },
  {
    icon: "⚖️",
    title: "Contrato y asesoramiento legal",
    description:
      "Nuestro equipo de abogados especializados en arrendamientos redacta y revisa el contrato, protegiéndote frente a cualquier imprevisto.",
    category: "alquiler",
  },
  {
    icon: "\u{1F4CA}",
    title: "Seguimiento en tu panel personal",
    description:
      "Consulta en cualquier momento el estado de tu propiedad, las visitas agendadas y las ofertas recibidas, sin tener que llamar para preguntar.",
    category: "alquiler",
  },
  {
    icon: "\u{1F4B6}",
    title: "Valoración real de tu propiedad",
    description:
      "Te ayudamos a fijar un precio competitivo basado en el mercado actual, no en suposiciones.",
    category: "venta",
  },
  {
    icon: "\u{1F4F8}",
    title: "Reportaje fotográfico profesional",
    description: "Las primeras impresiones venden: agendamos la sesión de fotos cuando mejor te venga.",
    category: "venta",
  },
  {
    icon: "\u{1F310}",
    title: "Máxima visibilidad",
    description:
      "Publicamos tu propiedad en Idealista, Fotocasa, Habitaclia, Milanuncios y el resto de portales relevantes, a la vez.",
    category: "venta",
  },
  {
    icon: "\u{1F511}",
    title: "Gestión de visitas y ofertas",
    description:
      "Coordinamos cada visita y te hacemos llegar únicamente las ofertas serias, con seguimiento claro de cada una.",
    category: "venta",
  },
  {
    icon: "\u{1F4CB}",
    title: "Comprobación de compradores",
    description:
      "Verificamos la solvencia y seriedad de cada interesado antes de avanzar, para no perder tiempo en negociaciones que no van a ningún lado.",
    category: "venta",
  },
  {
    icon: "⚖️",
    title: "Asesoramiento legal especializado",
    description:
      "Abogados expertos en compraventa revisan cada documento, desde las notas simples hasta la escritura final, para que la operación esté blindada legalmente.",
    category: "venta",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "1",
    title: "Nos cuentas tu propiedad",
    description: "Contacta con nosotros y cuéntanos si quieres alquilar o vender.",
  },
  {
    number: "2",
    title: "Visitamos y valoramos",
    description: "Analizamos tu propiedad y te damos una valoración realista de mercado.",
  },
  {
    number: "3",
    title: "Preparamos el expediente",
    description: "Fotografía profesional, redacción del anuncio y revisión legal de la documentación.",
  },
  {
    number: "4",
    title: "Publicamos y gestionamos",
    description: "Tu propiedad sale en los principales portales; filtramos y atendemos cada interesado.",
  },
  {
    number: "5",
    title: "Cerramos la operación",
    description:
      "Te acompañamos hasta la firma del contrato o la escritura, con todo revisado por nuestros abogados.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Dejé mi piso en alquiler en sus manos y en dos semanas ya tenía inquilino. No tuve que preocuparme de nada, ni siquiera del contrato.",
    name: "Propietario",
    role: "Alquiler en Valencia",
  },
  {
    quote:
      "Vendí mi vivienda sin pisar una notaría más de una vez. Ellos prepararon todo y me avisaron de cada paso.",
    name: "Propietaria",
    role: "Venta en Madrid",
  },
  {
    quote:
      "Lo que más valoro es tener abogados detrás de cada contrato. Me quité de encima un problema legal que llevaba meses.",
    name: "Propietario",
    role: "Alquiler en Sevilla",
  },
];

export const propertyTypes: Array<"Piso" | "Casa" | "Local" | "Garaje"> = [
  "Piso",
  "Casa",
  "Local",
  "Garaje",
];

export const extrasOptions: Array<{ key: keyof import("../types/wizard").PropertyExtras; label: string }> = [
  { key: "ascensor", label: "Ascensor" },
  { key: "terraza", label: "Terraza" },
  { key: "garaje", label: "Garaje" },
  { key: "piscina", label: "Piscina" },
  { key: "amueblado", label: "Amueblado" },
];
