import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref to attach to an element and a boolean that flips to `true`
 * once the element becomes visible in the viewport (or after a fallback
 * timeout, so content never stays hidden if the observer never fires).
 */
export function useRevealOnScroll<T extends HTMLElement>(fallbackDelayMs = 2500) {
  const ref = useRef<T | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    const fallback = window.setTimeout(() => setIsRevealed(true), fallbackDelayMs);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [fallbackDelayMs]);

  return { ref, isRevealed };
}
