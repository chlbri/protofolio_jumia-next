import NextImage from 'next/image';
import { FC } from 'react';

type Props = {
  src?: string;
  alt: string;
  aspectRatio: string;
} & (
  | { width: number | string; height?: never }
  | { width?: never; height: number | string }
);

export const Image: FC<Props> = ({
  src,
  alt,
  width,
  height,
  aspectRatio,
}) => {
  return (
    <div className="relative" style={{ width, height, aspectRatio }}>
      {!src ? (
        <div className="absolute inset-0 bg-gray-600" />
      ) : (
        <NextImage src={src} alt={alt} layout="fill" objectFit="cover" />
      )}
    </div>
  );
};
