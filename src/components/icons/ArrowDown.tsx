import { FC } from 'react';
import { _Icon } from './_Icon';

type Props = {
  sizeRem?: number;
};

export const Icon_ArrowDown: FC<Props> = ({ sizeRem = 1 }) => {
  return <_Icon sizeRem={sizeRem}>M19 9l-7 7-7-7</_Icon>;
};
