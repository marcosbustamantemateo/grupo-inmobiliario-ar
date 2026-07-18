import type { WizardState } from "../types/wizard";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateStep(state: WizardState, step: number): string {
  switch (step) {
    case 0:
      if (!state.intent) return "Selecciona si quieres alquilar o vender.";
      return "";

    case 1: {
      if (!state.name.trim()) return "Indica tu nombre completo.";
      if (!state.phone.trim()) return "Indica tu teléfono.";
      if (!state.email.trim() || !EMAIL_PATTERN.test(state.email.trim())) {
        return "Indica un email válido.";
      }
      return "";
    }

    case 2: {
      if (!state.address.trim()) return "Indica la dirección de la propiedad.";
      if (!state.propertyType) return "Selecciona el tipo de inmueble.";
      if (!state.sqm.trim() || Number(state.sqm) <= 0) return "Indica los metros cuadrados.";
      return "";
    }

    case 4:
      if (!state.acceptTerms) return "Debes aceptar la política de privacidad y las condiciones del servicio.";
      return "";

    default:
      return "";
  }
}
