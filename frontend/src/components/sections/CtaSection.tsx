import { RevealSection } from "../layout/RevealSection";
import { WizardCard } from "../wizard/WizardCard";
import { WizardProvider } from "../../context/WizardContext";

export function CtaSection() {
  return (
    <RevealSection id="publicar" className="section section-cta">
      <div className="section-inner section-inner-narrow cta-inner">
        <h2>¿Listo para dejar de preocuparte por tu propiedad?</h2>
        <p>
          Cuéntanos qué necesitas y en menos de 24 horas te contactamos con una propuesta a medida.
        </p>

        <WizardProvider>
          <WizardCard />
        </WizardProvider>
      </div>
    </RevealSection>
  );
}
