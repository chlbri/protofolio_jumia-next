import { FC } from 'react';
import { State, useState } from '../../Providers';
import { Icon_ArrowDown } from '../icons/ArrowDown';
import { Icon_PersonVoice } from '../icons/PersonVoice';

const selector = (state: State) =>
  state.context.locales.current._common.topNavBar.btnLogin;

export const Btn_Login: FC = () => {
  const { href, label } = useState(selector);
  return (
    <div className="flex space-x-2 mr-[25px] items-center cursor-pointer">
      <Icon_PersonVoice />
      <a className="font-semibold w-max text-sm" href={href}>
        {label}
      </a>
      <Icon_ArrowDown />
    </div>
  );
};
