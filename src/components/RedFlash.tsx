import { FC } from 'react';
import { useState } from '../Providers';
import { Card_Article } from './Cards/Article/Article';
import { Icon_ArrowRight } from './icons';
import { Icon_Coupon } from './icons/Coupon';

type TimerProps = {
  hours: number;
  minutes: number;
  seconds: number;
};

const Timer: FC<TimerProps> = ({ hours, minutes, seconds }) => {
  const classNameNumber = 'font-bold text-lg not-italic';
  const classNameDiv = 'flex space-x-0.5 items-center italic';
  return (
    <div className="flex space-x-1 items-center">
      <div className={classNameDiv}>
        <span className={classNameNumber}>{hours}</span>
        <span>h</span>
      </div>
      <div className={classNameDiv}>
        <span className={classNameNumber}>{minutes}</span>
        <span>m</span>
      </div>
      <div className={classNameDiv}>
        <span className={classNameNumber}>{seconds}</span>
        <span>s</span>
      </div>
    </div>
  );
};

export const RedFlash: FC = () => {
  const flash = useState(
    state => state.context.locales.current.index.flash,
  );
  return (
    <div>
      <div className="bg-red h-[48px] px-[18px] flex items-center justify-between text-white">
        <div className="flex space-x-[10px] items-center">
          <Icon_Coupon />
          <span className="text-lg">{flash.redAlert.title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>{flash.redAlert.invite}</span>
          <Timer hours={7} minutes={25} seconds={45} />
        </div>
        <div className="uppercase flex items-center">
          <span className="text-shadow">{flash.redAlert.plus}</span>
          <Icon_ArrowRight sizeRem={1} />
        </div>
      </div>
      <div className="bg-white grid grid-cols-5 gap-2">
        <Card_Article
          currency="F CFA"
          price={123000}
          remaining={2}
          total={10}
          title="Nike Air Max 90"
        />
      </div>
      <div className="absolute bg-gray-500"></div>
    </div>
  );
};
