import { FC } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from 'blac-constants';
import { _IconPath } from './_Icon';

type Props = {
  sizeRem?: number;
  className?: string;
};

export const Icon_ArrowDown: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
  className,
}) => {
  return <_IconPath {...{ sizeRem, className }}>M19 9l-7 7-7-7</_IconPath>;
};
