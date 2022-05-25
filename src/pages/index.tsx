/* eslint-disable react/jsx-key */
import { FC } from 'react';
import { NavBar } from '../components';
import { GoTop } from '../components/atoms';
import { ChangeLanguage } from '../components/molecules/others/ChangeLanguage';
import {
  BestBrands,
  FreeShipping,
  Hero,
  Offers,
  RedFlash,
  Section_HeaderPub,
  Subsidiaries,
  TopDeals,
} from '../components/sections';
import { useOnScreen } from '../hooks';
import { useSend } from '../Providers';

function useStart() {
  const send = useSend();
  send('START');
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
      {<GoTop {...{ isIntersecting }} />}
      <ChangeLanguage />
    </div>
  );
};

export default Index;
