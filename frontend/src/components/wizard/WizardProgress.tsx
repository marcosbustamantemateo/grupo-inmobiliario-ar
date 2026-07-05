import { TOTAL_WIZARD_STEPS } from "../../types/wizard";

interface WizardProgressProps {
  currentStep: number;
}

export function WizardProgress({ currentStep }: WizardProgressProps) {
  const percent = Math.round((currentStep / TOTAL_WIZARD_STEPS) * 100);

  return (
    <div className="wizard-progress">
      <span className="wizard-progress-label">
        Paso {currentStep + 1} de {TOTAL_WIZARD_STEPS}
      </span>
      <div className="wizard-progress-track">
        <div className="wizard-progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
