import { FC } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from '../../../constants/dimensions';
type Props = {
  sizeRem?: number;
};

export const Icon_Commandez: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
}) => {
  return (
    <svg
      width={`${sizeRem}rem`}
      height={`${sizeRem}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 34 34"
    >
      <circle cx="17" cy="17" r="15.5" stroke="#FD9C00" strokeWidth="3" />
      <path
        stroke="#FD9C00"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.556 9H25h-4.444zM25 9v4.444V9zm0 0l-5.333 5.333L25 9zM10.778 9A1.778 1.778 0 009 10.778v.889C9 19.03 14.97 25 22.333 25h.89A1.778 1.778 0 0025 23.222v-2.915a.889.889 0 00-.608-.843l-3.994-1.332a.889.889 0 00-1.075.447l-1.005 2.006a9.815 9.815 0 01-4.903-4.904l2.006-1.003a.889.889 0 00.447-1.075l-1.332-3.996A.889.889 0 0013.692 9h-2.914z"
      />
    </svg>
  );
};
