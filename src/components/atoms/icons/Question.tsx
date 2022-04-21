import { FC } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from '../../../constants/dimensions';
import { _IconPath } from './_Icon';

type Props = {
  sizeRem?: number;
};

export const Icon_Question: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
}) => {
  return (
    <_IconPath sizeRem={sizeRem}>
      M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278
      2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0
      11-18 0 9 9 0 0118 0z
    </_IconPath>
  );
};
