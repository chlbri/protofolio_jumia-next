import Image from 'next/image';
import { FC } from 'react';

type Props = {
  width?: number;
};

const RATIO = 44 / 122;

export const JumiaLogo: FC<Props> = ({ width = 122 }) => {
  return (
    <h1
      className="relative mr-[110px]"
      style={{ width: `${width}px`, height: `${width * RATIO}px` }}
    >
      <Image layout="fill" src="/images/JUMIA_logo.png" alt="JUMIA_logo" />
    </h1>
  );
};
