import { FC } from 'react';
import { JumiaLogo } from '../atoms/JumiaLogo';
import { Btn_Basket } from '../molecules/others';
import { Search } from '../molecules/Search';
import { Btn_Help } from '../organisms/Help';
import { Btn_Login } from '../organisms/Login';

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
