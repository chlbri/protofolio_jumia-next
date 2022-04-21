import Image from 'next/image';
import { FC } from 'react';

type Props = {
  src?: string;
};

export const HeaderPub: FC<Props> = ({
  src = '/images/HeaderPub.png',
}) => {
  return (
    <div
      id="headerPub"
      className="relative h-[56px] w-full cursor-pointer"
    >
      <Image layout="fill" src={src} objectFit="cover" alt="pub" />
    </div>
  );
};
