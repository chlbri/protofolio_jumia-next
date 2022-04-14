import { FC } from 'react';
import { theme } from '../../../tailwind.config';
import { DEFAULT_ICON_WIDTH_REM } from '../../constants/dimensions';

type Props = {
  sizeRem?: number;
};

export const Icon_Search: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
}) => {
  return (
    <svg
      width={`${sizeRem}rem`}
      height={`${sizeRem}rem`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke={theme.colors.gray[900]}
      strokeWidth={2}
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};
