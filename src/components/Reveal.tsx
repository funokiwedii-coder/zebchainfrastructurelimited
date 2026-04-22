import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealVariant = "up" | "fade" | "left" | "right" | "scale" | "blur";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  /** 0–1, how much of the element must be in view before triggering. */
  threshold?: number;
  /** Trigger only once (default true). */
  once?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Reveal — scroll-triggered entrance using IntersectionObserver.
 * Hidden by default, animated in when it enters the viewport.
 * Honours prefers-reduced-motion (handled in CSS).
 */
export function Reveal({
  children,
  as,
  variant = "up",
  delay = 0,
  threshold = 0.15,
  once = true,
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            entry.target.setAttribute("data-revealed", "false");
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  const reveal = variant === "up" ? "" : variant;

  return (
    <Tag
      ref={ref}
      data-reveal={reveal || true}
      className={className}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
