const TRUST_POINTS = [
  {
    number: "01",
    title: "Contratos revisados por abogados",
    description: "Cada cláusula pasa por manos expertas antes de tu firma.",
  },
  {
    number: "02",
    title: "Cumplimiento normativo garantizado",
    description: "Al día con la normativa de alquiler y compraventa vigente.",
  },
  {
    number: "03",
    title: "Resolución de conflictos incluida",
    description: "Si surge un problema, lo gestionamos nosotros, no tú.",
  },
];

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-skyline" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>GESTIÓN INMOBILIARIA INTEGRAL</span>
          </div>
          <h1 className="hero-title">
            Nosotros gestionamos tu propiedad.
            <br />
            Tú solo firmas.
          </h1>
          <p className="hero-subtitle">
            Alquila o vende sin preocuparte de nada: fotografía profesional, publicación en los
            principales portales, asesoramiento legal y seguimiento completo de principio a fin.
          </p>
          <div className="hero-actions">
            <a href="#publicar" className="button button-primary">
              Publica tu propiedad
            </a>
            <a href="#como-funciona" className="button button-outline">
              Ver cómo funciona
            </a>
          </div>
        </div>

        <div className="hero-trust">
          <div className="hero-trust-badge">
            <span className="hero-trust-dot" />
            <span>TU RESPALDO LEGAL</span>
          </div>
          <div className="hero-trust-list">
            {TRUST_POINTS.map((point) => (
              <div key={point.number} className="hero-trust-card">
                <span className="hero-trust-number">{point.number}</span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
