import { extrasOptions } from "../data/content";
import type { WizardState } from "../types/wizard";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type SendResult = { ok: true } | { ok: false; error: string };

export async function sendWizardLead(state: WizardState): Promise<SendResult> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
  if (!accessKey) {
    return { ok: false, error: "Falta configurar el envío de email (VITE_WEB3FORMS_KEY)." };
  }

  const intentLabel = state.intent === "venta" ? "Venta" : state.intent === "alquiler" ? "Alquiler" : "—";
  const extrasSummary =
    extrasOptions
      .filter((extra) => state.extras[extra.key])
      .map((extra) => extra.label)
      .join(", ") || "Ninguno";

  const message = [
    `Operacion: ${intentLabel}`,
    `Direccion: ${state.address}`,
    `Tipo de inmueble: ${state.propertyType}`,
    `Metros cuadrados: ${state.sqm}`,
    `Habitaciones: ${state.rooms}`,
    `Banos: ${state.baths}`,
    `Extras: ${extrasSummary}`,
    `Precio deseado: ${state.price || "—"} EUR`,
    `Disponible desde: ${state.availability || "—"}`,
  ].join("\n");

  const payload = {
    access_key: accessKey,
    subject: `Nueva solicitud de propietario — ${state.name || "sin nombre"}`,
    from_name: "Grupo Inmobiliario AR — Web",
    name: state.name,
    email: state.email,
    phone: `${state.prefix} ${state.phone}`,
    message,
  };

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();

    if (!response.ok || !data.success) {
      return { ok: false, error: "No se pudo enviar la solicitud. Inténtalo de nuevo en unos minutos." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "No hay conexión. Revisa tu internet e inténtalo de nuevo." };
  }
}
