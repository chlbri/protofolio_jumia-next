import Image from 'next/image';
import { FC } from 'react';

export const HeaderPub: FC = () => {
  return (
    <div className="relative h-[56px] w-full cursor-pointer">
      <Image
        layout="fill"
        src="/images/HeaderPub.png"
        objectFit="cover"
        alt="pub"
      />
    </div>
  );
};
