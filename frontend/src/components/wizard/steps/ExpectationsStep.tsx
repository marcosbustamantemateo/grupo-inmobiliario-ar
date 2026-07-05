import { useWizard, useWizardField } from "../../../context/WizardContext";

export function ExpectationsStep() {
  const { state } = useWizard();
  const setField = useWizardField();

  return (
    <div>
      <h3 className="wizard-step-title">Tus expectativas</h3>
      <div className="wizard-field-group">
        <label className="wizard-field">
          <span>Precio deseado (€)</span>
          <input
            type="number"
            value={state.price}
            onChange={(e) => setField("price", e.target.value)}
            placeholder="¿No estás seguro? Nuestro equipo te ayuda a valorarlo"
          />
        </label>
        <label className="wizard-field">
          <span>Disponible desde</span>
          <input
            type="date"
            value={state.availability}
            onChange={(e) => setField("availability", e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
