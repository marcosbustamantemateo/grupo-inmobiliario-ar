import { RevealSection } from "../layout/RevealSection";
import { testimonials } from "../../data/content";

export function TestimonialsSection() {
  return (
    <RevealSection id="testimonios" className="section section-light">
      <div className="section-inner">
        <div className="section-heading">
          <span className="section-eyebrow">CONFIANZA</span>
          <h2>Propietarios que ya delegaron en nosotros</h2>
          <p className="section-note">
            * Testimonios ilustrativos — sustituir por reseñas reales de clientes.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name + testimonial.role} className="testimonial-card">
              <svg width="26" height="20" viewBox="0 0 26 20" fill="none" aria-hidden="true">
                <path
                  d="M0 20V11.5C0 4.5 4 0.5 10 0V4C6.5 4.5 5 6.5 5 9.5H10V20H0ZM16 20V11.5C16 4.5 20 0.5 26 0V4C22.5 4.5 21 6.5 21 9.5H26V20H16Z"
                  fill="#3FA9F5"
                />
              </svg>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div>
                <div className="testimonial-name">{testimonial.name}</div>
                <div className="testimonial-role">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
