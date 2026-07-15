import { useWizard } from "../../../context/WizardContext";
import { extrasOptions } from "../../../data/content";

export function ReviewStep() {
  const { state, dispatch } = useWizard();

  const intentLabel = state.intent === "venta" ? "Venta" : state.intent === "alquiler" ? "Alquiler" : "—";
  const extrasSummary =
    extrasOptions
      .filter((extra) => state.extras[extra.key])
      .map((extra) => extra.label)
      .join(", ") || "Ninguno";

  const goToStep = (step: number) => dispatch({ type: "GO_TO_STEP", step });

  return (
    <div>
      <h3 className="wizard-step-title">Revisa tu solicitud</h3>
      <div className="wizard-review-list">
        <div className="wizard-review-row">
          <span>
            Operación: <strong>{intentLabel}</strong>
          </span>
          <button type="button" onClick={() => goToStep(0)}>
            Editar
          </button>
        </div>
        <div className="wizard-review-row">
          <span>
            Contacto: <strong>{state.name}</strong> · {state.prefix} {state.phone} · {state.email}
          </span>
          <button type="button" onClick={() => goToStep(1)}>
            Editar
          </button>
        </div>
        <div className="wizard-review-row">
          <span>
            Propiedad: <strong>{state.propertyType}</strong>, {state.sqm} m², {state.rooms} hab ·{" "}
            {state.baths} baños
          </span>
          <button type="button" onClick={() => goToStep(2)}>
            Editar
          </button>
        </div>
        <div className="wizard-review-row">
          <span>Extras: {extrasSummary}</span>
        </div>
        <div className="wizard-review-row">
          <span>
            Precio: {state.price || "—"} € · Disponible desde: {state.availability || "—"}
          </span>
          <button type="button" onClick={() => goToStep(4)}>
            Editar
          </button>
        </div>
      </div>

      <label className="wizard-terms">
        <input
          type="checkbox"
          checked={state.acceptTerms}
          onChange={(e) => dispatch({ type: "SET_FIELD", field: "acceptTerms", value: e.target.checked })}
        />
        <span>Acepto la política de privacidad y las condiciones del servicio.</span>
      </label>
    </div>
  );
}
