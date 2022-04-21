import { FC } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from '../../../constants/dimensions';
type Props = {
  sizeRem?: number;
};

const RATIO = 25 / 23;

export const Icon_BeautyClean: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
}) => {
  return (
    <svg
      width={`${sizeRem}rem`}
      height={`${sizeRem / RATIO}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 23"
    >
      <path
        fill="#4E4E4E"
        d="M24.368.209A.643.643 0 0023.892 0h-9.23a.643.643 0 00-.644.702l.076.89H24.46l.075-.89a.646.646 0 00-.168-.493z"
      ></path>
      <path
        stroke="#4E4E4E"
        d="M23.812 3.316l-1.208 14.2H15.95l-1.208-14.2h9.069z"
      ></path>
      <path
        fill="#4E4E4E"
        d="M15.564 21.4a1.6 1.6 0 001.6 1.6h4.228a1.6 1.6 0 001.599-1.6v-2.042h-7.427v2.043z"
      ></path>
      <path
        stroke="#4E4E4E"
        d="M2.108 20.173v-1.161l2.907-1.318h8.042a.03.03 0 01.03.03v2.449a2.327 2.327 0 01-2.326 2.327H4.435a2.327 2.327 0 01-2.327-2.327z"
      ></path>
      <path
        fill="#4E4E4E"
        d="M10.645 14.592l-3.291 1.493h4.256a.39.39 0 00.346-.567 1.679 1.679 0 00-1.033-.847l-.278-.079zM11.177 12.388a.532.532 0 00-.014-.407l-.142-.31a1.25 1.25 0 00-1.653-.623L.733 14.964a1.25 1.25 0 00-.621 1.653l.14.312a.533.533 0 00.704.264l9.943-4.509a.532.532 0 00.278-.296z"
      ></path>
    </svg>
  );
};
