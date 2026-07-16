const TRUST_POINTS = [
  {
    number: "01",
    title: "Contratos revisados por abogados",
    description: "Cada cláusula pasa por manos expertas antes de tu firma.",
    icon: (
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
        <path
          d="M9 0L17.5 3.5V9.2C17.5 14.1 13.9 18.6 9 20C4.1 18.6 0.5 14.1 0.5 9.2V3.5L9 0Z"
          stroke="#FFFFFF"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 10L8 12.5L12.5 7.5"
          stroke="#FFFFFF"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Cumplimiento normativo garantizado",
    description: "Al día con la normativa de alquiler y compraventa vigente.",
    icon: (
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
        <path
          d="M1 1.5H10L15 6.5V18.5C15 19.05 14.55 19.5 14 19.5H1.5C0.95 19.5 0.5 19.05 0.5 18.5V2C0.5 1.72 0.72 1.5 1 1.5Z"
          stroke="#FFFFFF"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path d="M10 1.5V6.5H15" stroke="#FFFFFF" strokeWidth="1.3" strokeLinejoin="round" />
        <path
          d="M4 11.5L6.5 14L11.5 8.5"
          stroke="#FFFFFF"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Resolución de conflictos incluida",
    description: "Si surge un problema, lo gestionamos nosotros, no tú.",
    icon: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
        <circle cx="7" cy="4" r="3" stroke="#FFFFFF" strokeWidth="1.3" />
        <path
          d="M1 15C1 11.5 3.5 9.5 7 9.5C10.5 9.5 13 11.5 13 15"
          stroke="#FFFFFF"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M13.5 4.3C14.5 3.9 15.2 2.9 15.2 1.8"
          stroke="#FFFFFF"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M15 9.7C17.8 10.1 19.7 11.9 19.7 15"
          stroke="#FFFFFF"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
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
                <span className="hero-trust-icon">{point.icon}</span>
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
