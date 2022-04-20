import { useEventListener } from './useEventListener';

export const useResize = (handler: () => void, state = true) =>
  useEventListener('resize', handler, state);
