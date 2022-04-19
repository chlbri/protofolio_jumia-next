import { FC } from 'react';
import { State, useState } from '../../Providers';
import { Icon_ArrowDown } from '../icons/ArrowDown';
import { Icon_Question } from '../icons/Question';

const selector = (state: State) =>
  state.context.locales.current._common.topNavBar.btnHelp;

export const Btn_Help: FC = () => {
  const { href, label } = useState(selector);
  return (
    <div className="flex space-x-2 mr-[25px] items-center cursor-pointer">
      <Icon_Question />
      <a className="text-sm" href={href}>
        {label}
      </a>
      <Icon_ArrowDown />
    </div>
  );
};
