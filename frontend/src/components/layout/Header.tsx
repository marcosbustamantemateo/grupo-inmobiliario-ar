import { useEffect, useState } from "react";
import { ScrollProgressBar } from "./ScrollProgressBar";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the mobile menu whenever the viewport grows back to desktop size,
  // so it never stays open (invisibly) behind a resized window.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <ScrollProgressBar />
      <header className="site-header">
        <div className="site-header-inner">
          <a href="#inicio" className="brand-logo-link" aria-label="Ir al inicio">
            <Logo size={46} />
          </a>

          <button
            type="button"
            className="site-nav-toggle"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <nav className={`site-nav ${isMenuOpen ? "is-open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="site-nav-link" onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a href="#publicar" className="site-nav-cta" onClick={closeMenu}>
              Publica tu propiedad
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
