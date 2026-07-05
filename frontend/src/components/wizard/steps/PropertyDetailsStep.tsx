import { useWizard, useWizardField } from "../../../context/WizardContext";
import { extrasOptions, propertyTypes } from "../../../data/content";

export function PropertyDetailsStep() {
  const { state, dispatch } = useWizard();
  const setField = useWizardField();

  const adjust = (field: "rooms" | "baths", delta: number, min: number) =>
    dispatch({ type: "ADJUST_COUNT", field, delta, min });

  return (
    <div>
      <h3 className="wizard-step-title">Datos de la propiedad</h3>
      <div className="wizard-field-group">
        <label className="wizard-field">
          <span>Dirección</span>
          <input
            type="text"
            value={state.address}
            onChange={(e) => setField("address", e.target.value)}
            placeholder="Calle, número, ciudad"
          />
          <small className="wizard-field-hint">
            Autocompletado de direcciones disponible en producción.
          </small>
        </label>

        <div>
          <span className="wizard-field-label">Tipo de inmueble</span>
          <div className="wizard-type-grid">
            {propertyTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setField("propertyType", type)}
                className={`wizard-type-option ${state.propertyType === type ? "is-selected" : ""}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <label className="wizard-field">
          <span>Metros cuadrados</span>
          <input
            type="number"
            value={state.sqm}
            onChange={(e) => setField("sqm", e.target.value)}
            placeholder="80"
          />
        </label>

        <div className="wizard-counter-grid">
          <div>
            <span className="wizard-field-label">Habitaciones</span>
            <div className="wizard-counter">
              <button type="button" onClick={() => adjust("rooms", -1, 0)}>
                −
              </button>
              <span>{state.rooms}</span>
              <button type="button" onClick={() => adjust("rooms", 1, 0)}>
                +
              </button>
            </div>
          </div>
          <div>
            <span className="wizard-field-label">Baños</span>
            <div className="wizard-counter">
              <button type="button" onClick={() => adjust("baths", -1, 1)}>
                −
              </button>
              <span>{state.baths}</span>
              <button type="button" onClick={() => adjust("baths", 1, 1)}>
                +
              </button>
            </div>
          </div>
        </div>

        <div>
          <span className="wizard-field-label">Extras</span>
          <div className="wizard-extras-grid">
            {extrasOptions.map((extra) => (
              <button
                key={extra.key}
                type="button"
                onClick={() => dispatch({ type: "TOGGLE_EXTRA", key: extra.key })}
                className={`wizard-extra-option ${state.extras[extra.key] ? "is-selected" : ""}`}
              >
                {extra.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
