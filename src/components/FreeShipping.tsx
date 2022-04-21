import { FC } from 'react';
import { useState } from '../Providers';
import { Card_Article } from './Cards/Article/Article';
import { Icon_ArrowRight } from './icons';

const RedAlert: FC = () => {
  const locale = useState(
    state => state.context.locales.current.index.freeShipping.redAlert,
  );
  return (
    <div className="bg-red h-[48px] px-[18px] flex items-center justify-between text-white">
      <span className="text-lg">{locale.title}</span>
      <div className="uppercase flex items-center cursor-pointer">
        <span className="text-shadow">{locale.plus}</span>
        <Icon_ArrowRight sizeRem={1} />
      </div>
    </div>
  );
};

export const FreeShipping: FC = () => {
  return (
    <div className="flex flex-col">
      <RedAlert />
      <div className="bg-white w-full p-2 space-x-1 overflow-auto whitespace-nowrap">
        {Array.from({ length: 20 }).map((_, i) => (
          <Card_Article
            key={i}
            currency="F CFA"
            price={123000}
            remaining={5}
            total={10}
            discountPercentage={10}
            title="Nike Air Max 90"
            noRemaining
          />
        ))}
      </div>
    </div>
  );
};
