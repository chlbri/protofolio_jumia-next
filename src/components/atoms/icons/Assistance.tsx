import { FC } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from '../../../constants/dimensions';
type Props = {
  sizeRem?: number;
};

export const Icon_Assistance: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
}) => {
  return (
    <svg
      width={`${sizeRem}rem`}
      height={`${sizeRem}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        stroke="#FD9C00"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M18 21.556c0-.984.804-1.759 1.767-1.944 3.072-.59 5.344-2.679 5.344-5.168 0-2.945-3.182-5.333-7.111-5.333-2.155.055-6.949 1.199-8.889 5.333M18 26.89h.018M34 18a16.001 16.001 0 11-32.002 0A16.001 16.001 0 0134 18z"
      />
    </svg>
  );
};
