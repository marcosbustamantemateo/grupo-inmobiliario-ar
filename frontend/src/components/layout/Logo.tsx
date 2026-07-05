// Drop the logo file provided by the client at `src/assets/logo.png` and it
// will be picked up automatically here. Until then, a text-only fallback
// (matching the brand's navy/blue palette) keeps the header working.
let logoUrl: string | undefined;
try {
  // Vite resolves this at build time; if the file doesn't exist yet, the
  // dynamic glob below simply returns nothing and we fall back gracefully.
  const modules = import.meta.glob("../../assets/logo.{png,jpg,jpeg,svg}", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>;
  const [firstMatch] = Object.values(modules);
  logoUrl = firstMatch;
} catch {
  logoUrl = undefined;
}

interface LogoProps {
  size?: number;
  variant?: "header" | "footer";
}

export function Logo({ size = 40, variant = "header" }: LogoProps) {
  const textColor = variant === "footer" ? "#FFFFFF" : "#FFFFFF";

  return (
    <div className="brand-logo">
      {logoUrl ? (
        <img src={logoUrl} alt="Grupo A.R" style={{ height: size, width: size, objectFit: "contain" }} />
      ) : (
        <div className="brand-logo-fallback" style={{ height: size, width: size }} aria-hidden="true">
          AR
        </div>
      )}
      <div className="brand-logo-text">
        <span style={{ color: textColor }}>GRUPO A.R</span>
        <small>GESTIÓN INMOBILIARIA</small>
      </div>
    </div>
  );
}
