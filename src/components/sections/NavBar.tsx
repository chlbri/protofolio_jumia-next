import { JumiaLogo } from 'blac-atoms';
import { Btn_Basket, Search } from 'blac-molecules';
import { Btn_Help, Btn_Login } from 'blac-organisms';
import { FC } from 'react';

export const NavBar: FC = () => {
  return (
    <div className="h-[77px] bg-white flex items-center w-full px-4 justify-between z-30">
      <JumiaLogo />
      <div className="flex space-x-1">
        <Search />
        <Btn_Login />
        <Btn_Help />
        <Btn_Basket />
      </div>
    </div>
  );
};
