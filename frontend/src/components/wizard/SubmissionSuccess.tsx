import { useWizard } from "../../context/WizardContext";

export function SubmissionSuccess() {
  const { state } = useWizard();

  return (
    <div className="wizard-success">
      <div className="wizard-success-icon">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 13l4 4L19 7"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3>¡Solicitud enviada!</h3>
      <p>Un agente te contactará en 24-48h para hablar sobre tu propiedad.</p>
      <div className="wizard-success-panel">
        <p>
          Te hemos enviado un enlace de acceso a <strong>{state.email}</strong> para que sigas el estado
          de tu propiedad en tu panel personal, sin necesidad de contraseña.
        </p>
        <a href="#" className="button button-primary">
          Acceder a mi panel
        </a>
      </div>
    </div>
  );
}
