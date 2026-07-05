import { useWizard, useWizardField } from "../../../context/WizardContext";

const PREFIXES = [
  { value: "+34", label: "🇪🇸 +34" },
  { value: "+33", label: "🇫🇷 +33" },
  { value: "+351", label: "🇵🇹 +351" },
  { value: "+1", label: "🇺🇸 +1" },
];

export function ContactStep() {
  const { state } = useWizard();
  const setField = useWizardField();

  return (
    <div>
      <h3 className="wizard-step-title">Tus datos de contacto</h3>
      <div className="wizard-field-group">
        <label className="wizard-field">
          <span>Nombre completo</span>
          <input
            type="text"
            value={state.name}
            onChange={(e) => setField("name", e.target.value)}
            placeholder="Ana García"
          />
        </label>

        <label className="wizard-field">
          <span>Teléfono</span>
          <div className="wizard-phone-row">
            <select value={state.prefix} onChange={(e) => setField("prefix", e.target.value)}>
              {PREFIXES.map((prefix) => (
                <option key={prefix.value} value={prefix.value}>
                  {prefix.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              inputMode="numeric"
              value={state.phone}
              onChange={(e) => setField("phone", e.target.value)}
              placeholder="612 345 678"
            />
          </div>
        </label>

        <label className="wizard-field">
          <span>Email</span>
          <input
            type="email"
            value={state.email}
            onChange={(e) => setField("email", e.target.value)}
            placeholder="ana@email.com"
          />
        </label>
      </div>
    </div>
  );
}
