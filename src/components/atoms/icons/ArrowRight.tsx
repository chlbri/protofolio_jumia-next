import { FC } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from '../../../constants/dimensions';
import { _IconPath } from './_Icon';

type Props = {
  sizeRem?: number;
};

export const Icon_ArrowRight: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
}) => {
  return <_IconPath sizeRem={sizeRem}>M9 5l7 7-7 7</_IconPath>;
};
