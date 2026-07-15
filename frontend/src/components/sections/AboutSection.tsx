import { RevealSection } from "../layout/RevealSection";

const PILLARS = [
  {
    icon: "🤝",
    title: "Cercanía",
    description: "Para entenderte y tratar cada propiedad como si fuera propia.",
  },
  {
    icon: "🎯",
    title: "Experiencia",
    description: "Para asesorarte con criterio, desde la valoración hasta la firma.",
  },
  {
    icon: "🛡️",
    title: "Compromiso",
    description: "Para acompañarte en cada operación como si fuera la más importante.",
  },
];

const HISTORY_PARAGRAPHS = [
  "Nuestro fundador, Francisco Ángel González, comenzó desde cero, sin una gran estructura detrás y aprendiendo el sector desde la calle: buscando oportunidades, hablando personalmente con propietarios, enseñando viviendas y acompañando cada operación de principio a fin.",
  "Los comienzos no fueron fáciles, pero sí estuvieron llenos de ilusión. Con humildad, constancia y muchas horas de trabajo, lo que empezó como un proyecto personal fue creciendo poco a poco gracias, sobre todo, a la confianza y recomendación de nuestros clientes.",
  "Esa experiencia nos enseñó algo que todavía hoy forma parte de nuestra manera de trabajar: detrás de cada propiedad hay una persona, una historia y una decisión importante. Por eso no entendemos la gestión inmobiliaria como simplemente publicar un anuncio o entregar unas llaves.",
  "Hoy Grupo A.R continúa creciendo, pero mantiene intacta la esencia de sus comienzos: cercanía, humildad, trabajo y compromiso. Seguimos afrontando cada nueva propiedad con la misma ilusión que la primera y con la responsabilidad de saber que alguien ha depositado en nosotros algo importante.",
];

export function AboutSection() {
  return (
    <RevealSection id="quienes-somos" className="section section-light">
      <div className="section-inner section-inner-narrow">
        <div className="section-heading">
          <span className="section-eyebrow">¿QUIÉNES SOMOS?</span>
          <h2>Una forma diferente de entender la gestión inmobiliaria</h2>
          <p>
            Grupo A.R nace de la experiencia directa en el sector y de una idea muy clara: una
            operación inmobiliaria no consiste únicamente en publicar un anuncio y entregar unas
            llaves. Detrás de cada vivienda hay un propietario que deposita su confianza en
            nosotros y una decisión importante que merece atención, seguridad y seguimiento.
          </p>
        </div>

        <div className="about-pillars">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="about-pillar-card">
              <div className="about-pillar-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="about-founder">
          <div className="about-founder-avatar" aria-hidden="true">
            FG
          </div>
          <div className="about-founder-body">
            <span className="about-founder-tag">FUNDADOR DE GRUPO A.R</span>
            <h3 className="about-founder-name">Francisco Ángel González</h3>
            <p className="about-founder-quote">
              "Empecé en el mercado inmobiliario de Granada especializándome en alquiler, gestión
              de viviendas para estudiantes y compraventa. Con cada operación aprendí lo mismo:
              detrás de cada llave hay una persona que confía en ti. Por eso construí un
              acompañamiento completo, desde la valoración hasta el seguimiento posterior, tal y
              como me hubiera gustado que me trataran a mí."
            </p>
          </div>
        </div>

        <div className="about-history">
          <span className="about-history-eyebrow">DE DÓNDE VENIMOS</span>
          <h3 className="about-history-title">Nuestra historia</h3>
          <div className="about-history-body">
            {HISTORY_PARAGRAPHS.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <p className="about-history-closing">
            Porque podemos crecer como empresa sin olvidar nunca de dónde venimos ni cómo
            empezamos.
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
