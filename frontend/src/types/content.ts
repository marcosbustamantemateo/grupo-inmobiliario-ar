export type ServiceCategory = "alquiler" | "venta";

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
  category: ServiceCategory;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export type ServiceFilter = "todo" | ServiceCategory;
