import { useCallback, useLayoutEffect, useRef } from 'react';
import { useResize } from './useResize';

export const useIsOverflowedHandler = (handler: () => void) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  const update = useCallback(() => {
    if (!ref.current) {
      return;
    }
    const out = ref.current.scrollWidth <= ref.current.clientWidth;
    out && handler();
  }, [handler]);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    update();
  }, [update]);

  useResize(update, !!ref.current);

  return ref;
};
