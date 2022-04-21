import { FC } from 'react';
import { Image } from './Image';

type Props = {
  width?: number;
};

export const JumiaLogo: FC<Props> = ({ width = 122 }) => {
  return (
    <Image
      width={width}
      aspectRatio="122/44"
      alt="logo"
      src="/images/JUMIA_logo.png"
    />
  );
};
