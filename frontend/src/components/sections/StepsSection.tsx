import { RevealSection } from "../layout/RevealSection";
import { processSteps } from "../../data/content";

export function StepsSection() {
  return (
    <RevealSection id="como-funciona" className="section section-muted">
      <div className="section-inner section-inner-narrow">
        <div className="section-heading">
          <span className="section-eyebrow">CÓMO FUNCIONA</span>
          <h2>De tu llamada a la propiedad publicada</h2>
          <p>Un proceso claro, sin sorpresas, desde el primer contacto.</p>
        </div>

        <div className="steps-list">
          {processSteps.map((step, index) => (
            <div key={step.number} className="steps-row">
              <div className="steps-marker">
                <div className="steps-number">{step.number}</div>
                {index < processSteps.length - 1 && <div className="steps-connector" />}
              </div>
              <div className="steps-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
