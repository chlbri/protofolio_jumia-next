/* eslint-disable react/jsx-key */
import { FC, useEffect } from 'react';
import { AsideCTA, HeaderPub, NavBar, NavCategories } from '../components';
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
      <div className="bg-gray-100">
        <div className="max-w-[1200px] w-11/12 flex flex-col mx-auto">
          <NavBar />
          <div className="flex w-full space-x-2 py-1">
            <NavCategories />
            <div className="bg-gray-700 flex-grow rounded-md">
              {/* TODO: Carrousel */}
            </div>
            <AsideCTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
