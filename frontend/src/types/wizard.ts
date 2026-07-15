export type LeadIntent = "alquiler" | "venta";

export type PropertyType = "Piso" | "Casa" | "Local" | "Garaje";

export interface PropertyExtras {
  ascensor: boolean;
  terraza: boolean;
  garaje: boolean;
  piscina: boolean;
  amueblado: boolean;
}

export interface WizardState {
  step: number;
  submitted: boolean;
  intent: LeadIntent | null;
  name: string;
  phone: string;
  prefix: string;
  email: string;
  address: string;
  propertyType: PropertyType | "";
  sqm: string;
  rooms: number;
  baths: number;
  extras: PropertyExtras;
  price: string;
  availability: string;
  acceptTerms: boolean;
  stepError: string;
}

export const WIZARD_STORAGE_KEY = "grupoar_wizard_v1";

export const TOTAL_WIZARD_STEPS = 5;

export function createInitialWizardState(): WizardState {
  return {
    step: 0,
    submitted: false,
    intent: null,
    name: "",
    phone: "",
    prefix: "+34",
    email: "",
    address: "",
    propertyType: "",
    sqm: "",
    rooms: 1,
    baths: 1,
    extras: {
      ascensor: false,
      terraza: false,
      garaje: false,
      piscina: false,
      amueblado: false,
    },
    price: "",
    availability: "",
    acceptTerms: false,
    stepError: "",
  };
}
