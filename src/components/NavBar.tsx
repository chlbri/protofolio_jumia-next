import { FC } from 'react';
import { Btn_Basket, Btn_Help, Btn_Login, Btn_Search } from './buttons';
import { Input_Search } from './inputs';
import { JumiaLogo } from './JumiaLogo';

export const NavBar: FC = () => {
  return (
    <div className="h-[77px] bg-white flex items-center w-full px-1 mb-[14px] justify-center">
      <JumiaLogo />
      <Input_Search />
      <Btn_Search />
      <Btn_Login />
      <Btn_Help />
      <Btn_Basket />
    </div>
  );
};
