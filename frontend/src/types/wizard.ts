export type LeadIntent = "alquiler" | "venta";

export type PropertyType = "Piso" | "Casa" | "Local" | "Garaje";

export interface PropertyExtras {
  ascensor: boolean;
  terraza: boolean;
  garaje: boolean;
  piscina: boolean;
  amueblado: boolean;
}

export interface PropertyPhoto {
  id: string;
  name: string;
  url: string;
}

export interface WizardState {
  step: number;
  submitted: boolean;
  intent: LeadIntent | null;
  name: string;
  phone: string;
  prefix: string;
  email: string;
  otpCode: string;
  otpSent: boolean;
  otpCooldown: number;
  otpError: string;
  otpVerified: boolean;
  address: string;
  propertyType: PropertyType | "";
  sqm: string;
  rooms: number;
  baths: number;
  extras: PropertyExtras;
  photos: PropertyPhoto[];
  price: string;
  availability: string;
  acceptTerms: boolean;
  stepError: string;
}

export const WIZARD_STORAGE_KEY = "grupoar_wizard_v1";

export const TOTAL_WIZARD_STEPS = 7;

export const OTP_TEST_CODE = "123456";

export function createInitialWizardState(): WizardState {
  return {
    step: 0,
    submitted: false,
    intent: null,
    name: "",
    phone: "",
    prefix: "+34",
    email: "",
    otpCode: "",
    otpSent: false,
    otpCooldown: 0,
    otpError: "",
    otpVerified: false,
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
    photos: [],
    price: "",
    availability: "",
    acceptTerms: false,
    stepError: "",
  };
}
