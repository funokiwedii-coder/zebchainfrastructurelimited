import { useEffect, useRef } from "react";

/**
 * useParallax — translates the target element on Y axis based on its
 * position relative to the viewport. Speed is the fraction of scroll
 * distance to apply; small values (0.08–0.2) feel best.
 *
 * Honours prefers-reduced-motion (returns ref but applies no transform).
 */
export function useParallax<T extends HTMLElement = HTMLElement>(speed = 0.15) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // Distance of element center from viewport center, normalised to [-1, 1] roughly.
      const centerOffset = rect.top + rect.height / 2 - vh / 2;
      const translate = -centerOffset * speed;
      el.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0)`;
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
