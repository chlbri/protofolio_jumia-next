/* eslint-disable react/jsx-key */
import { FC, useEffect } from 'react';
import { NavBar } from '../components';
import { GoTop } from '../components/atoms';
import { Section_HeaderPub } from '../components/molecules/others';
import { BestBrands } from '../components/sections/BestBrands';
import { FreeShipping } from '../components/sections/FreeShipping';
import { Hero } from '../components/sections/Hero';
import { Offers } from '../components/sections/Offers';
import { RedFlash } from '../components/sections/RedFlash';
import { Subsidiaries } from '../components/sections/Subsidiaries';
import { TopDeals } from '../components/sections/TopDeals';
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
        <Section_HeaderPub />
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
      {!isIntersecting && <GoTop />}
    </div>
  );
};

export default Index;
