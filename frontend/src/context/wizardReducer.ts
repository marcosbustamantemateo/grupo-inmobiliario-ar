import { OTP_TEST_CODE, type PropertyExtras, type WizardState } from "../types/wizard";

export type WizardAction =
  | { type: "SET_FIELD"; field: keyof WizardState; value: WizardState[keyof WizardState] }
  | { type: "TOGGLE_EXTRA"; key: keyof PropertyExtras }
  | { type: "ADJUST_COUNT"; field: "rooms" | "baths"; delta: number; min: number }
  | { type: "ADD_PHOTOS"; photos: WizardState["photos"] }
  | { type: "REMOVE_PHOTO"; id: string }
  | { type: "GO_TO_STEP"; step: number }
  | { type: "GO_NEXT" }
  | { type: "GO_BACK" }
  | { type: "SEND_OTP" }
  | { type: "TICK_OTP_COOLDOWN" }
  | { type: "SUBMIT" }
  | { type: "RESET" };

function validateStep(step: number, state: WizardState): string {
  if (step === 0) {
    if (!state.intent) return "Selecciona una opción para continuar.";
  }
  if (step === 1) {
    if (!state.name.trim()) return "Indica tu nombre completo.";
    if (state.phone.replace(/\D/g, "").length < 9) return "Introduce un teléfono válido.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) return "Introduce un email válido.";
  }
  if (step === 2) {
    if (state.otpCode.length !== 6) return "Introduce los 6 dígitos del código.";
    if (state.otpCode !== OTP_TEST_CODE) {
      return "Este código no es válido. Revisa los dígitos e inténtalo de nuevo.";
    }
  }
  if (step === 3) {
    if (!state.address.trim()) return "Indica la dirección de la propiedad.";
    if (!state.propertyType) return "Selecciona el tipo de inmueble.";
    if (!state.sqm || Number(state.sqm) <= 0) return "Indica los metros cuadrados.";
  }
  return "";
}

export function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value, stepError: "" };

    case "TOGGLE_EXTRA":
      return {
        ...state,
        extras: { ...state.extras, [action.key]: !state.extras[action.key] },
      };

    case "ADJUST_COUNT":
      return {
        ...state,
        [action.field]: Math.max(action.min, state[action.field] + action.delta),
      };

    case "ADD_PHOTOS": {
      const room = Math.max(0, 8 - state.photos.length);
      return { ...state, photos: [...state.photos, ...action.photos.slice(0, room)] };
    }

    case "REMOVE_PHOTO":
      return { ...state, photos: state.photos.filter((photo) => photo.id !== action.id) };

    case "GO_TO_STEP":
      return { ...state, step: action.step, stepError: "" };

    case "GO_NEXT": {
      const error = validateStep(state.step, state);
      if (error) {
        return {
          ...state,
          stepError: error,
          otpError: state.step === 2 ? error : state.otpError,
        };
      }

      const nextStep = state.step + 1;

      // Leaving the contact step: auto-send the verification code, mirroring
      // the original flow where entering the OTP step triggers an SMS.
      if (state.step === 1) {
        return {
          ...state,
          step: nextStep,
          stepError: "",
          otpSent: true,
          otpCooldown: 45,
          otpCode: "",
          otpError: "",
        };
      }

      if (state.step === 2) {
        return { ...state, step: nextStep, stepError: "", otpVerified: true };
      }

      return { ...state, step: nextStep, stepError: "" };
    }

    case "GO_BACK":
      return { ...state, step: Math.max(0, state.step - 1), stepError: "" };

    case "SEND_OTP":
      return { ...state, otpSent: true, otpCooldown: 45, otpCode: "", otpError: "" };

    case "TICK_OTP_COOLDOWN":
      return { ...state, otpCooldown: Math.max(0, state.otpCooldown - 1) };

    case "SUBMIT": {
      if (!state.acceptTerms) {
        return { ...state, stepError: "Debes aceptar la política de privacidad para continuar." };
      }
      return { ...state, submitted: true, stepError: "" };
    }

    case "RESET":
      return state;

    default:
      return state;
  }
}
