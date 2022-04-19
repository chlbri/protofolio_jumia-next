import { FC } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from '../../constants/dimensions';
type Props = {
  sizeRem?: number;
};

export const Icon_Express: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
}) => {
  return (
    <svg
      width={`${sizeRem}rem`}
      height={`${sizeRem}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 42 42"
    >
      <circle cx="21" cy="21" r="21" fill="#3D94E4" />
      <path
        fill="#fff"
        d="M35.645 10.53A1.5 1.5 0 0034.5 10H6.75a.75.75 0 100 1.5h8.23l-.25 1.5h-3.48a.75.75 0 100 1.5h3.23l-.25 1.5H8.25a.75.75 0 100 1.5h5.73l-.25 1.5h-.98a.75.75 0 100 1.5h.73l-.25 1.5H9.75a.75.75 0 100 1.5h3.23l-.96 5.753A1.5 1.5 0 0013.5 31h18a1.5 1.5 0 001.48-1.253l3-18a1.5 1.5 0 00-.335-1.216zM24 11.5h3l-.75 4.5h-3l.75-4.5zm0 18h-3l.75-4.5h3L24 29.5zm7.5 0h-5.98l.71-4.253a1.5 1.5 0 00-1.48-1.747h-3a1.5 1.5 0 00-1.48 1.253L19.5 29.5h-6l1-6h4.25a.75.75 0 100-1.5h-4l.25-1.5h2.25a.75.75 0 100-1.5h-2l.25-1.5h3.25a.75.75 0 100-1.5h-3l.25-1.5h4.25a.75.75 0 100-1.5h-4l.25-1.5h5.98l-.71 4.254a1.5 1.5 0 001.48 1.746h3a1.5 1.5 0 001.48-1.253l.77-4.747h6l-3 18z"
      />
    </svg>
  );
};
