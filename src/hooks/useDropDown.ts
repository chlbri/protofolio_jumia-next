import {
  CSSProperties,
  MouseEventHandler,
  useCallback,
  useState as useS,
} from 'react';
import { useDivContainsMouseHandler } from './MouseEvents/useDivContainsMouseHandler';

export function useDropDown(value = false) {
  const [open, setOpen] = useS(value);

  const onClick: MouseEventHandler = useCallback(
    e => {
      e.stopPropagation();
      setOpen(bol => !bol);
    },
    [setOpen],
  );

  const handler = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const opacity = open ? 1 : 0;
  const visibility = open ? 'visible' : 'hidden';
  const transform = open ? 'none' : 'translateY(-20px)';

  const dropDownStyle: CSSProperties = {
    opacity,
    visibility,
    transform,
    position: 'absolute',
  };

  const ref = useDivContainsMouseHandler(handler);

  return {
    onClick,
    dropDownStyle,
    ref,
    open,
  } as const;
}
