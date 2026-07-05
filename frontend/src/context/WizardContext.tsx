import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";
import { wizardReducer, type WizardAction } from "./wizardReducer";
import { createInitialWizardState, WIZARD_STORAGE_KEY, type WizardState } from "../types/wizard";

interface WizardContextValue {
  state: WizardState;
  dispatch: Dispatch<WizardAction>;
}

const WizardContext = createContext<WizardContextValue | null>(null);

function loadPersistedState(): WizardState {
  const initial = createInitialWizardState();
  try {
    const raw = localStorage.getItem(WIZARD_STORAGE_KEY);
    if (!raw) return initial;
    const saved = JSON.parse(raw) as Partial<WizardState>;
    return { ...initial, ...saved, photos: [], otpCooldown: 0 };
  } catch {
    return initial;
  }
}

function persistState(state: WizardState) {
  try {
    const { photos: _photos, ...rest } = state;
    localStorage.setItem(WIZARD_STORAGE_KEY, JSON.stringify(rest));
  } catch {
    // Storage can fail in private browsing; persistence is a nice-to-have, not critical.
  }
}

export function WizardProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wizardReducer, undefined, loadPersistedState);

  useEffect(() => {
    persistState(state);
  }, [state]);

  useEffect(() => {
    if (state.otpCooldown <= 0) return;
    const timer = window.setInterval(() => dispatch({ type: "TICK_OTP_COOLDOWN" }), 1000);
    return () => window.clearInterval(timer);
  }, [state.otpCooldown > 0]);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <WizardContext.Provider value={value}>{children}</WizardContext.Provider>;
}

export function useWizard() {
  const ctx = useContext(WizardContext);
  if (!ctx) throw new Error("useWizard must be used within a WizardProvider");
  return ctx;
}

/** Convenience hook for dispatching a field update without repeating action shape. */
export function useWizardField() {
  const { dispatch } = useWizard();
  return useCallback(
    <K extends keyof WizardState>(field: K, value: WizardState[K]) =>
      dispatch({ type: "SET_FIELD", field, value }),
    [dispatch],
  );
}
