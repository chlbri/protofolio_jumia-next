import { Icon_PersonVoice } from 'blac-icons';
import { State } from 'blac-machines';
import { DropDown_Login } from 'blac-molecules';
import { useState } from 'blac-providers';
import { FC } from 'react';

const selector = (state: State) =>
  state.context.locales.current._common.topNavBar.btnLogin;

export const Btn_Login: FC = () => {
  const { href, label } = useState(selector);

  return (
    <div className="flex space-x-1 mr-[25px] items-center cursor-pointer relative">
      <Icon_PersonVoice />
      <a
        className="font-semibold w-max text-sm hover:text-poussin active:scale-95 transition-transform duration-150 ease-out"
        href={href}
      >
        {label}
      </a>
      <DropDown_Login />
    </div>
  );
};
