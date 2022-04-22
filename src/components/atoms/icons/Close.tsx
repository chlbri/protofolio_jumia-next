import { DEFAULT_ICON_WIDTH_REM } from 'blac-constants';
import { FC } from 'react';
import { _IconPath } from './_Icon';

type Props = {
  sizeRem?: number;
  stroke?: string;
};

export const Icon_Close: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
  stroke,
}) => {
  return (
    <_IconPath {...{ sizeRem, stroke }}>
      M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z
    </_IconPath>
  );
};
