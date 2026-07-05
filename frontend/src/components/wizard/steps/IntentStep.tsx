import { useWizard } from "../../../context/WizardContext";
import type { LeadIntent } from "../../../types/wizard";

export function IntentStep() {
  const { state, dispatch } = useWizard();

  const setIntent = (intent: LeadIntent) => dispatch({ type: "SET_FIELD", field: "intent", value: intent });

  return (
    <div>
      <h3 className="wizard-step-title">¿Quieres alquilar o vender tu propiedad?</h3>
      <div className="wizard-intent-grid">
        <button
          type="button"
          onClick={() => setIntent("alquiler")}
          className={`wizard-intent-option ${state.intent === "alquiler" ? "is-selected" : ""}`}
        >
          <div className="wizard-intent-title">Quiero alquilar</div>
          <div className="wizard-intent-subtitle">Busco a mi inquilino ideal</div>
        </button>
        <button
          type="button"
          onClick={() => setIntent("venta")}
          className={`wizard-intent-option ${state.intent === "venta" ? "is-selected" : ""}`}
        >
          <div className="wizard-intent-title">Quiero vender</div>
          <div className="wizard-intent-subtitle">Busco a mi comprador ideal</div>
        </button>
      </div>
    </div>
  );
}
