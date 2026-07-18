import type { PropertyExtras, WizardState } from "../types/wizard";
import { validateStep } from "./wizardValidation";

export type WizardAction =
  | { type: "SET_FIELD"; field: keyof WizardState; value: WizardState[keyof WizardState] }
  | { type: "TOGGLE_EXTRA"; key: keyof PropertyExtras }
  | { type: "ADJUST_COUNT"; field: "rooms" | "baths"; delta: number; min: number }
  | { type: "GO_TO_STEP"; step: number }
  | { type: "GO_NEXT" }
  | { type: "GO_BACK" }
  | { type: "SET_STEP_ERROR"; error: string }
  | { type: "SUBMIT" }
  | { type: "RESET" };

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

    case "GO_TO_STEP":
      return { ...state, step: action.step, stepError: "" };

    case "GO_NEXT": {
      const error = validateStep(state, state.step);
      if (error) return { ...state, stepError: error };
      return { ...state, step: state.step + 1, stepError: "" };
    }

    case "GO_BACK":
      return { ...state, step: Math.max(0, state.step - 1), stepError: "" };

    case "SET_STEP_ERROR":
      return { ...state, stepError: action.error };

    case "SUBMIT":
      return { ...state, submitted: true, stepError: "" };

    case "RESET":
      return state;

    default:
      return state;
  }
}
