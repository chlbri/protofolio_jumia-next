import { Icon_Question } from 'blac-icons';
import { State } from 'blac-machines';
import { DropDown_Help } from 'blac-molecules';
import { useState } from 'blac-providers';
import { FC } from 'react';

const selector = (state: State) =>
  state.context.locales.current._common.topNavBar.btnHelp;

export const Btn_Help: FC = () => {
  const { href, label } = useState(selector);
  return (
    <div className="flex space-x-1 mr-[25px] items-center cursor-pointer relative">
      <Icon_Question />
      <a className="text-sm" href={href}>
        {label}
      </a>
      <DropDown_Help />
    </div>
  );
};
