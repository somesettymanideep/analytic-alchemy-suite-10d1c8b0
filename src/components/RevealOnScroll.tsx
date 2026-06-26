import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
};

export default function RevealOnScroll({ children, delay = 0, threshold = 0.12, className = "" }: Props) {
  const { ref, isVisible } = useScrollReveal(threshold);
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-[900ms] ease-out will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}