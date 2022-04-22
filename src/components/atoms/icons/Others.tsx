import { FC } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from 'blac-constants';

type Props = {
  sizeRem?: number;
};

const RATIO = 23 / 17;

export const Icon_Others: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={`${sizeRem}rem`}
      height={`${sizeRem / RATIO}rem`}
      viewBox="0 0 23 17"
    >
      <path
        fill="#D9C29E"
        d="M21.878.253H1.122C.502.253 0 .756 0 1.375v14.25c0 .62.502 1.123 1.122 1.123h20.756c.62 0 1.122-.503 1.122-1.122V1.375c0-.62-.502-1.122-1.122-1.122zM20.756 14.5H2.244V2.495h18.512v12.006zM4.768 8.5a1.683 1.683 0 113.366 0 1.683 1.683 0 01-3.366 0zm5.05 0a1.683 1.683 0 113.365 0 1.683 1.683 0 01-3.366 0zm5.048 0a1.683 1.683 0 113.366 0 1.683 1.683 0 01-3.366 0z"
      />
    </svg>
  );
};
