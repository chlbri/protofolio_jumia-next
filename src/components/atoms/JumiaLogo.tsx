import { FC } from 'react';
import { ImageWithRatio } from './ImageWithRatio';

type Props = {
  width?: number;
};

export const JumiaLogo: FC<Props> = ({ width = 122 }) => {
  return (
    <ImageWithRatio
      width={width}
      aspectRatio="122/44"
      alt="logo"
      src="/images/JUMIA_logo.png"
    />
  );
};
