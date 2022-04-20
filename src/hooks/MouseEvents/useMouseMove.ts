import { useEventListener } from './useEventListener';

export const useMouseMove = (handler: () => void, state = true) =>
  useEventListener('mousemove', handler, state);
