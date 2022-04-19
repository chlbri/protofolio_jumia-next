import { FC, useState as useS } from 'react';
import { theme } from '../../tailwind.config';
import { useState } from '../Providers';
import { Card_Article } from './Cards/Article/Article';
import { Icon_ArrowRight, Icon_Close } from './icons';
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

const Bottom: FC = () => {
  const locale = useState(
    state => state.context.locales.current.index.flash.bottomAlert,
  );
  const [show, setShow] = useS(true);
  return (
    <div
      className="absolute backdrop-blur-[2px] bg-gray-500/70 flex justify-evenly items-center bottom-0 w-full py-4 z-10 transition-opacity duration-300 ease-out"
      style={{ opacity: show ? 1 : 0 }}
    >
      <div className="font-light">
        <span>{locale.invite}</span>{' '}
        <a
          className="text-blue-500 cursor-pointer"
          href={locale.link.href}
        >
          {locale.link.text}
          {'.'}
        </a>
      </div>
      <div
        onClick={() => {
          setShow(bol => !bol);
        }}
        className="cursor-pointer"
      >
        <Icon_Close sizeRem={1.6} stroke={theme.colors.gray[700]} />
      </div>
    </div>
  );
};

const RedAlert: FC = () => {
  const locale = useState(
    state => state.context.locales.current.index.flash.redAlert,
  );
  return (
    <div className="bg-red h-[48px] px-[18px] flex items-center justify-between text-white">
      <div className="flex space-x-[10px] items-center">
        <Icon_Coupon />
        <span className="text-lg">{locale.title}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span>{locale.invite}</span>
        <Timer hours={7} minutes={25} seconds={45} />
      </div>
      <div className="uppercase flex items-center cursor-pointer">
        <span className="text-shadow">{locale.plus}</span>
        <Icon_ArrowRight sizeRem={1} />
      </div>
    </div>
  );
};

export const RedFlash: FC = () => {
  return (
    <div className="relative">
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
          />
        ))}
      </div>
      <Bottom />
    </div>
  );
};
