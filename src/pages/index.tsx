/* eslint-disable react/jsx-key */
import { FC, useEffect } from 'react';
import { HeaderPub, Icon_ArrowTop, NavBar } from '../components';
import { BestBrands } from '../components/BestBrands';
import { FreeShipping } from '../components/FreeShipping';
import { Hero } from '../components/Hero';
import { Offers } from '../components/Offers';
import { RedFlash } from '../components/RedFlash';
import { Subsidiaries } from '../components/Subsidiaries';
import { TopDeals } from '../components/TopDeals';
import { useOnScreen } from '../hooks';
import { useSend } from '../Providers';

function useStart() {
  const send = useSend();
  useEffect(() => {
    send('START');
  }, [send]);
}

function useHook() {
  useStart();
  return useOnScreen<HTMLDivElement>('150px');
}

const Index: FC = () => {
  const { ref, isIntersecting } = useHook();
  return (
    <div className="">
      <div ref={ref}>
        <HeaderPub />
      </div>
      <div className="bg-gray-100 pb-20">
        <div className="max-w-[1200px] w-11/12 flex flex-col mx-auto  space-y-5">
          <NavBar />
          <Hero />
          <Subsidiaries />
          <RedFlash />
          <TopDeals />
          <FreeShipping />
          <Offers />
          <BestBrands />
        </div>
      </div>
      {!isIntersecting && (
        <a
          className="fixed bottom-11 right-3 z-50 shadow-sm bg-white/30 text-gray-700/20 rounded-full p-3  backdrop-blur-[1px] hover:text-gray-700  hover:backdrop-blur-sm transition-colors duration-75 ease-in-out hover:shadow-poussin/50 bg-scroll"
          href="#headerPub"
        >
          <Icon_ArrowTop />
        </a>
      )}
    </div>
  );
};

export default Index;
