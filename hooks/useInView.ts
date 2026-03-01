import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const threshold = options?.threshold ?? 0.1;
  const rootMargin = options?.rootMargin ?? "0px 0px -40px 0px";
  const root = options?.root ?? null;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold, rootMargin, root },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, root]);

  return { ref, inView };
}
