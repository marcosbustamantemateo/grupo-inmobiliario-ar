import { useMemo, useState } from "react";
import { RevealSection } from "../layout/RevealSection";
import { serviceFeatures } from "../../data/content";
import type { ServiceFilter } from "../../types/content";
const FILTERS: Array<{ key: ServiceFilter; label: string }> = [
  { key: "todo", label: "TODO" },
  { key: "alquiler", label: "ALQUILER" },
  { key: "venta", label: "VENTA" },
];

const FILTER_INDEX: Record<ServiceFilter, number> = { todo: 0, alquiler: 1, venta: 2 };

export function ServicesSection() {
  const [filter, setFilter] = useState<ServiceFilter>("todo");

  const filteredFeatures = useMemo(() => {
    if (filter === "todo") return serviceFeatures;
    return serviceFeatures.filter((feature) => feature.category === filter);
  }, [filter]);

  return (
    <RevealSection id="servicios" className="section section-light services-section">
      <div className="services-background" aria-hidden="true" />
      <div className="section-inner">
        <div className="section-heading">
          <span className="section-eyebrow">SERVICIOS</span>
          <h2>Todo lo que tu propiedad necesita</h2>
          <p>Da igual si quieres alquilar o vender: nos ocupamos de cada paso del proceso.</p>
        </div>

        <div className="services-columns">
          <div className="services-column">
            <div className="services-illustration">
              <img src="/rent-building.png" alt="Edificio de apartamentos en alquiler" />
            </div>
            <div>
              <span className="services-tag services-tag-rent">ALQUILER</span>
              <h3>Alquila sin complicaciones, nosotros nos encargamos de todo</h3>
              <p>
                Pones tu propiedad en alquiler y nosotros gestionamos cada paso, desde la primera visita
                hasta la firma del contrato.
              </p>
              <p className="services-highlight">
                Tú decides las condiciones. Nosotros hacemos que llegue a las manos correctas.
              </p>
            </div>
          </div>
          <div className="services-column">
            <div className="services-illustration">
              <img src="/sell-home.png" alt="Casa en venta" />
            </div>
            <div>
              <span className="services-tag services-tag-sale">VENTA</span>
              <h3>Vende tu propiedad al mejor precio, con respaldo legal en cada paso</h3>
              <p>
                Vender una propiedad implica muchas decisiones y mucho papeleo. Nosotros lo simplificamos
                para que tú solo tengas que decidir cuándo firmar.
              </p>
              <p className="services-highlight">
                Vender tu propiedad no debería ser un segundo trabajo. Deja que lo hagamos nosotros.
              </p>
            </div>
          </div>
        </div>

        <div className="services-filter-wrap">
          <div className="services-filter">
            <div
              className="services-filter-thumb"
              style={{ transform: `translateX(${FILTER_INDEX[filter] * 100}%)` }}
            />
            {FILTERS.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setFilter(item.key)}
                className={`services-filter-btn ${filter === item.key ? "is-active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="services-grid">
          {filteredFeatures.map((feature) => (
            <div key={`${feature.category}-${feature.title}`} className="service-card">
              <div className="service-card-top">
                <div className="service-card-icon">{feature.icon}</div>
                <span
                  className={`service-card-badge ${
                    feature.category === "alquiler" ? "badge-rent" : "badge-sale"
                  }`}
                >
                  {feature.category === "alquiler" ? "ALQUILER" : "VENTA"}
                </span>
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="legal-partner">
          <div className="legal-partner-body">
            <span className="legal-partner-tag">RESPALDO LEGAL</span>
            <h3 className="legal-partner-title">Contamos con asesoría legal propia</h3>
            <p className="legal-partner-text">
              Cada contrato de alquiler y cada compraventa pasa por manos de abogados
              especializados, para que tu operación esté protegida de principio a fin.
            </p>
          </div>
          <img
            src="/legal-advisor-card.png"
            alt="Francisco José González Pavón, Abogado — asesoría legal de Grupo A.R"
            className="legal-partner-card"
          />
        </div>
      </div>
    </RevealSection>
  );
}
