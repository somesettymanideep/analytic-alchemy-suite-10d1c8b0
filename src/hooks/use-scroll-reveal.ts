import { useEffect, useRef, useState } from "react";

/**
 * Shared IntersectionObservers keyed by threshold so every Reveal on the
 * page doesn't spin up its own observer. Callbacks are looked up via a
 * WeakMap so element -> setter resolution is O(1) with no leaks.
 */
const callbacks = new WeakMap<Element, () => void>();
const observers = new Map<number, IntersectionObserver>();

function getObserver(threshold: number) {
  let observer = observers.get(threshold);
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const cb = callbacks.get(entry.target);
        if (cb) cb();
        observer!.unobserve(entry.target);
        callbacks.delete(entry.target);
      }
    },
    { threshold, rootMargin: "0px 0px -40px 0px" },
  );
  observers.set(threshold, observer);
  return observer;
}

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || isVisible) return;
    // Respect user motion preference — skip animation, show immediately.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }
    const observer = getObserver(threshold);
    callbacks.set(el, () => setIsVisible(true));
    observer.observe(el);
    return () => {
      observer.unobserve(el);
      callbacks.delete(el);
    };
  }, [threshold, isVisible]);

  return { ref, isVisible };
}
