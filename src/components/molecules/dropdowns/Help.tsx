import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { useDropDown } from '../../../hooks';
import { State, useState } from '../../../Providers';
import { Switch_Arrow } from '../switches/Arrow';

// import { ChevronDownIcon } from '@heroicons/react/solid'

const MenuItem = tw.a`text-gray-900 rounded-md hover:text-blue-500`;

const selector = (state: State) =>
  state.context.locales.current._common.topNavBar.btnHelp.menu;

function useHook() {
  const menu = useState(selector);
  const rest = useDropDown();

  return {
    menu,
    ...rest,
  };
}

export const DropDown_Help: FC = () => {
  const { onClick, menu, ref, dropDownStyle, open } = useHook();

  return (
    <>
      <Switch_Arrow {...{ open, onClick }} />
      <div
        className="p-1 w-max bg-gray-200/30 backdrop-blur-sm right-0 top-full mt-3 rounded-lg transition-all duration-200 ease-out"
        style={dropDownStyle}
      >
        <div
          className="bg-white/75 backdrop-blur-sm px-10 py-3 rounded-lg flex flex-col space-y-3"
          ref={ref}
        >
          <MenuItem href={menu.assistance.href}>
            {menu.assistance.label}
          </MenuItem>
          <MenuItem href={menu.followCommand.href}>
            {menu.followCommand.label}
          </MenuItem>
          <MenuItem href={menu.cancelComand.href}>
            {menu.cancelComand.label}
          </MenuItem>
          <MenuItem href={menu.return.href}>{menu.return.label}</MenuItem>
          <MenuItem href={menu.payment.href}>
            {menu.payment.label}
          </MenuItem>
        </div>
      </div>
    </>
  );
};
