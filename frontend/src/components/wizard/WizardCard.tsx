import { useState, type ComponentType } from "react";
import { useWizard } from "../../context/WizardContext";
import { sendWizardLead } from "../../lib/sendWizardLead";
import { WizardProgress } from "./WizardProgress";
import { SubmissionSuccess } from "./SubmissionSuccess";
import { IntentStep } from "./steps/IntentStep";
import { ContactStep } from "./steps/ContactStep";
import { PropertyDetailsStep } from "./steps/PropertyDetailsStep";
import { PhotosStep } from "./steps/PhotosStep";
import { ExpectationsStep } from "./steps/ExpectationsStep";
import { ReviewStep } from "./steps/ReviewStep";

const STEP_COMPONENTS: ComponentType[] = [
  IntentStep,
  ContactStep,
  PropertyDetailsStep,
  PhotosStep,
  ExpectationsStep,
  ReviewStep,
];

const LAST_STEP_INDEX = STEP_COMPONENTS.length - 1;

export function WizardCard() {
  const { state, dispatch } = useWizard();
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");

  if (state.submitted) {
    return (
      <div className="wizard-card">
        <SubmissionSuccess />
      </div>
    );
  }

  const CurrentStep = STEP_COMPONENTS[state.step] ?? IntentStep;
  const isFinalStep = state.step === LAST_STEP_INDEX;

  const handlePrimaryAction = async () => {
    if (!isFinalStep) {
      dispatch({ type: "GO_NEXT" });
      return;
    }

    setSendError("");
    setIsSending(true);
    const result = await sendWizardLead(state);
    setIsSending(false);

    if (!result.ok) {
      setSendError(result.error);
      return;
    }

    dispatch({ type: "SUBMIT" });
  };

  return (
    <div className="wizard-card">
      <WizardProgress currentStep={state.step} />

      <CurrentStep />

      {state.stepError && <p className="wizard-error">{state.stepError}</p>}
      {sendError && <p className="wizard-error">{sendError}</p>}

      <div className="wizard-nav">
        {state.step > 0 && (
          <button type="button" className="button button-ghost" onClick={() => dispatch({ type: "GO_BACK" })}>
            Atrás
          </button>
        )}
        <button
          type="button"
          className="button button-primary wizard-nav-primary"
          onClick={handlePrimaryAction}
          disabled={isSending}
        >
          {isFinalStep ? (isSending ? "Enviando..." : "Enviar solicitud") : "Siguiente"}
        </button>
      </div>
    </div>
  );
}
