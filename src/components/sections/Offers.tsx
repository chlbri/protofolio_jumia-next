import { Image } from 'blac-atoms';
import { useState } from 'blac-providers';
import { FC } from 'react';

const RedAlert: FC = () => {
  const title = useState(
    state => state.context.locales.current.index.offers.redAlert.title,
  );
  return (
    <div className="bg-blue-500 h-[48px] px-[18px] flex items-center justify-center text-white">
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
      <Image alt="image" aspectRatio={RATIO} width="100%" src={children} />
    </a>
  );
};

export const Offers: FC = () => {
  return (
    <div className="flex flex-col rounded">
      <RedAlert />
      <div className="flex space-x-3 p-3 bg-white rounded-b-lg">
        <Element />
        <Element />
      </div>
    </div>
  );
};
