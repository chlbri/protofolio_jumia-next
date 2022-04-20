import { useCallback, useEffect, useRef } from 'react';

export const useDivContainsMouseHandler = (
  handler: () => void,
  condition = true,
) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleHideDropdown = useCallback(
    (event: KeyboardEvent) => {
      (event.key === 'Escape' || event.key === 'Esc') &&
        condition &&
        handler();
    },
    [condition, handler],
  );

  const handleClickOutside = useCallback(
    (event: Event) => {
      !ref.current?.contains(event.target as Node) &&
        condition &&
        handler();
    },
    [condition, handler],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleHideDropdown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside, handleHideDropdown]);

  return ref;
};
