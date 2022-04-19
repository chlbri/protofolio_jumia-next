import { FC } from 'react';
import { AsideCTA } from './AsideCTA';
import { NavCategories } from './Category';

export const Hero: FC = () => {
  return (
    <div className="flex w-full space-x-2 py-1">
      <NavCategories />
      <div className="bg-gray-700 flex-grow rounded-md">
        {/* TODO: Carrousel */}
      </div>
      <AsideCTA />
    </div>
  );
};
