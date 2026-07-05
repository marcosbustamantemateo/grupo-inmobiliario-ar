import type { ReactNode } from "react";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

interface RevealSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

/** Wraps a section so its content fades/slides in the first time it enters the viewport. */
export function RevealSection({ id, className, children }: RevealSectionProps) {
  const { ref, isRevealed } = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id={id} className={className}>
      <div ref={ref} className={`reveal-wrapper ${isRevealed ? "is-revealed" : ""}`}>
        {children}
      </div>
    </section>
  );
}
