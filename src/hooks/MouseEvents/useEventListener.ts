import { useLayoutEffect } from 'react';

export const useEventListener = (
  event: keyof WindowEventMap,
  handler: () => void,
  state = true,
) =>
  useLayoutEffect(() => {
    window.addEventListener(event, handler);
    return () => window.removeEventListener(event, handler);
  }, [event, handler, state]);
