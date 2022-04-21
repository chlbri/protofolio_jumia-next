import { FC } from 'react';
import { State, useState } from '../../Providers';
import { DropDown_Help } from '../molecules/dropdowns';
import { Icon_Question } from '../atoms/icons/Question';

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
