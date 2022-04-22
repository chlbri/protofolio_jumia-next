import { Image } from 'blac-atoms';
import { AsideCTA, NavCategories } from 'blac-organisms';
import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <div className="flex w-full space-x-2 pt-1">
      <NavCategories />
      <div className="flex-grow h-auto rounded-lg overflow-clip bg-white flex items-center px-2">
        <div className="rounded-lg overflow-clip w-full relative">
          <Image alt="image" width="100%" aspectRatio="2/1" />
        </div>
      </div>
      <AsideCTA />
    </div>
  );
};
