import { memo, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type Variant = "up" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article";
  threshold?: number;
}

const variantClass: Record<Variant, string> = {
  up: "animate-reveal-up",
  left: "animate-reveal-left",
  right: "animate-reveal-right",
  scale: "animate-reveal-scale",
};

function RevealBase({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
  threshold = 0.12,
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal(threshold);
  return (
    <Tag
      ref={ref as never}
      style={{
        animationDelay: `${delay}ms`,
        willChange: isVisible ? "auto" : "transform, opacity",
      }}
      className={`${isVisible ? variantClass[variant] : "opacity-0"} ${className}`}
    >
      {children}
    </Tag>
  );
}

const Reveal = memo(RevealBase);
export default Reveal;