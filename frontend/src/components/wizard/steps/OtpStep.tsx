import { useWizard } from "../../../context/WizardContext";

export function OtpStep() {
  const { state, dispatch } = useWizard();

  const onCodeChange = (value: string) => {
    dispatch({ type: "SET_FIELD", field: "otpCode", value: value.replace(/\D/g, "").slice(0, 6) });
  };

  const resendOtp = () => dispatch({ type: "SEND_OTP" });

  return (
    <div>
      <h3 className="wizard-step-title">Verifica tu teléfono</h3>
      <p className="wizard-step-description">
        Te hemos enviado un código de 6 dígitos por SMS a {state.prefix} {state.phone}.
      </p>
      <input
        type="text"
        inputMode="numeric"
        maxLength={6}
        value={state.otpCode}
        onChange={(e) => onCodeChange(e.target.value)}
        placeholder="······"
        className="wizard-otp-input"
      />
      {state.otpError && <p className="wizard-error">{state.otpError}</p>}
      <button
        type="button"
        onClick={resendOtp}
        disabled={state.otpCooldown > 0}
        className="wizard-resend-link"
      >
        {state.otpCooldown > 0 ? `Reenviar código (${state.otpCooldown}s)` : "Reenviar código"}
      </button>
      <p className="wizard-hint">Pista de demo: el código válido es 123456.</p>
    </div>
  );
}
