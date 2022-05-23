import { FC } from 'react';
import { useState } from '../../Providers';
import { ImageWithRatio } from '../atoms';

const RedAlert: FC = () => {
  const title = useState(
    state => state.context.locales.current.index.topDeals.redAlert.title,
  );
  return (
    <div className="bg-red h-[48px] px-[18px] flex items-center justify-center text-white">
      {title}
    </div>
  );
};

const RATIO = '574 / 251';

type ElementProps = {
  children?: string;
};

const Element: FC<ElementProps> = ({ children }) => {
  return (
    <a className="w-full rounded-lg overflow-hidden">
      <ImageWithRatio
        alt="image"
        aspectRatio={RATIO}
        width="100%"
        src={children}
      />
    </a>
  );
};

export const TopDeals: FC = () => {
  return (
    <div className="flex flex-col">
      <RedAlert />
      <div className="flex space-x-3 p-3 bg-white rounded-b-lg">
        <Element />
        <Element />
      </div>
      <div className="flex space-x-3 p-3 bg-white mt-2">
        <Element />
        <Element />
      </div>
    </div>
  );
};
