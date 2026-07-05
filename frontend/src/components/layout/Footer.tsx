import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contacto" className="site-footer">
      <div className="site-footer-grid">
        <div>
          <Logo size={36} variant="footer" />
          <p className="site-footer-description">
            Gestión inmobiliaria integral: alquiler, venta y todo el proceso legal, de principio a fin.
          </p>
        </div>
        <div>
          <h4 className="site-footer-heading">CONTACTO</h4>
          <p className="site-footer-text">
            Zona: España (a confirmar)
            <br />
            Tel: [pendiente de confirmar]
            <br />
            Email: [pendiente de confirmar]
          </p>
        </div>
        <div>
          <h4 className="site-footer-heading">EMPRESA</h4>
          <div className="site-footer-links">
            <a href="#servicios">Servicios</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#testimonios">Testimonios</a>
          </div>
        </div>
      </div>
      <p className="site-footer-copyright">
        © {new Date().getFullYear()} Grupo A.R — Gestión Inmobiliaria. Todos los derechos reservados.
      </p>
    </footer>
  );
}
