/* eslint-disable react/jsx-key */
import { FC, useEffect } from 'react';
import { HeaderPub, NavBar } from '../components';
import { Hero } from '../components/Hero';
import { RedFlash } from '../components/RedFlash';
import { Subsidiaries } from '../components/Subsidiaries';
import { useSend } from '../Providers';

function useStart() {
  const send = useSend();
  useEffect(() => {
    send('START');
  }, [send]);
}

const Index: FC = () => {
  useStart();
  return (
    <div className="">
      <HeaderPub />
      <div className="bg-gray-100 pb-20">
        <div className="max-w-[1200px] w-11/12 flex flex-col mx-auto  space-y-5">
          <NavBar />
          <Hero />
          <Subsidiaries />
          <RedFlash />
        </div>
      </div>
    </div>
  );
};

export default Index;
