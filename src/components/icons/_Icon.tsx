import { FC } from 'react';
type Props = {
  sizeRem?: number;
  children: string;
};

export const _Icon: FC<Props> = ({ sizeRem, children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      width={`${sizeRem}rem`}
      height={`${sizeRem}rem`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={children} />
    </svg>
  );
};
