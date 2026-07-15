import type { PropertyExtras, WizardState } from "../types/wizard";

export type WizardAction =
  | { type: "SET_FIELD"; field: keyof WizardState; value: WizardState[keyof WizardState] }
  | { type: "TOGGLE_EXTRA"; key: keyof PropertyExtras }
  | { type: "ADJUST_COUNT"; field: "rooms" | "baths"; delta: number; min: number }
  | { type: "ADD_PHOTOS"; photos: WizardState["photos"] }
  | { type: "REMOVE_PHOTO"; id: string }
  | { type: "GO_TO_STEP"; step: number }
  | { type: "GO_NEXT" }
  | { type: "GO_BACK" }
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

    case "ADD_PHOTOS": {
      const room = Math.max(0, 8 - state.photos.length);
      return { ...state, photos: [...state.photos, ...action.photos.slice(0, room)] };
    }

    case "REMOVE_PHOTO":
      return { ...state, photos: state.photos.filter((photo) => photo.id !== action.id) };

    case "GO_TO_STEP":
      return { ...state, step: action.step, stepError: "" };

    case "GO_NEXT":
      return { ...state, step: state.step + 1, stepError: "" };

    case "GO_BACK":
      return { ...state, step: Math.max(0, state.step - 1), stepError: "" };

    case "SUBMIT":
      return { ...state, submitted: true, stepError: "" };

    case "RESET":
      return state;

    default:
      return state;
  }
}
