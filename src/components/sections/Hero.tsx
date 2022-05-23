import { FC } from 'react';
import { ImageWithClass } from '../atoms/ImageWithClass';
import { AsideCTA } from '../organisms/AsideCTA';
import { NavCategories } from '../organisms/NavCategories';

export const Hero: FC = () => {
  return (
    <div className="flex w-full space-x-2 pt-1">
      <NavCategories />
      <div className="flex-grow h-auto rounded-lg overflow-clip bg-white flex items-center p-3">
        <ImageWithClass className="rounded-lg overflow-hidden w-full h-full bg-gray-600" />
      </div>
      <AsideCTA />
    </div>
  );
};
