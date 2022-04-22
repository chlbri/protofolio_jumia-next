/* eslint-disable react/jsx-key */
import { GoTop } from 'blac-atoms';
import { useOnScreen } from 'blac-hooks';
import { useSend } from 'blac-providers';
import {
  BestBrands,
  FreeShipping,
  Hero,
  NavBar,
  Offers,
  RedFlash,
  Section_HeaderPub,
  Subsidiaries,
  TopDeals,
} from 'blac-sections';
import { FC, useEffect } from 'react';

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
