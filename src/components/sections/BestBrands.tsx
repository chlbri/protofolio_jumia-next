import { FC } from 'react';
import { useState } from '../../Providers';
import { ImageWithRatio } from '../atoms';

const RedAlert: FC = () => {
  const title = useState(
    state => state.context.locales.current.index.bestBrands.alert.title,
  );
  return (
    <div className="bg-gray-700 h-[48px] px-[18px] flex items-center justify-center text-white">
      {title}
    </div>
  );
};

const RATIO = '185 / 105';

type ElementProps = {
  children?: string;
};

const Element: FC<ElementProps> = ({ children }) => {
  return (
    <a className="w-full rounded-md overflow-hidden">
      <ImageWithRatio
        alt="image"
        aspectRatio={RATIO}
        width="100%"
        src={children}
      />
    </a>
  );
};

export const BestBrands: FC = () => {
  return (
    <div className="flex flex-col rounded">
      <RedAlert />
      <div className="grid grid-cols-6 gap-x-2 gap-y-10 p-2 bg-white rounded-b-lg">
        {Array.from({ length: 12 }).map((_, i) => (
          <Element key={i} />
        ))}
      </div>
    </div>
  );
};
