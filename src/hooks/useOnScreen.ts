import { useEffect, useRef, useState } from 'react';

export function useOnScreen<T extends Element>(
  rootMargin: string = '10px',
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<T>(null);
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );
    const current = ref.current;
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [rootMargin]); // Empty array ensures that effect is only run on mount and unmount
  return { isIntersecting, ref } as const;
}
