import { FC } from 'react';
import { AsideCTA } from './AsideCTA';
import { NavCategories } from './Category';
import Image from './Image';

export const Hero: FC = () => {
  return (
    <div className="flex w-full space-x-2 pt-1">
      <NavCategories />
      <div className="flex-grow h-auto rounded-lg overflow-clip bg-white flex items-center px-2">
        <div className="rounded-lg overflow-clip w-full">
          <Image alt="image" width="100%" aspectRatio="2/1" />
        </div>
      </div>
      <AsideCTA />
    </div>
  );
};
