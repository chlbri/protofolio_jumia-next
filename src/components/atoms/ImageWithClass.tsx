import NextImage from 'next/image';
import { FC } from 'react';

type Props =
  | {
      className: string;
    } & (
      | { src?: undefined; alt?: undefined }
      | { src: string; alt: string }
    );

export const ImageWithClass: FC<Props> = ({ src, alt, className }) => {
  return (
    <div className={`${className} !relative`}>
      {!src ? (
        <div className="absolute inset-0 bg-gray-600" />
      ) : (
        <NextImage src={src} alt={alt} layout="fill" objectFit="cover" />
      )}
    </div>
  );
};
