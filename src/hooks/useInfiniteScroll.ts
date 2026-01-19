import { useEffect, useRef } from "react";

export function useInfiniteScroll(onIntersect: () => void) {
  const scrollref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { rootMargin: "200px" } // prefetch earlier
    );

    observer.observe(scrollref.current);

    return () => observer.disconnect();
  }, [onIntersect]);

  return scrollref;
}
