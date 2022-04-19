import { FC } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from '../../constants/dimensions';
type Props = {
  sizeRem?: number;
  children: string;
  stroke?: string;
};

export const _IconPath: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
  children,
  stroke = 'currentColor',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke={stroke}
      strokeWidth={2}
      width={`${sizeRem}rem`}
      height={`${sizeRem}rem`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={children} />
    </svg>
  );
};
