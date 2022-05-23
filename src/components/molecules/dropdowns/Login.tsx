import { FC } from 'react';
import { useDropDown } from '../../../hooks';
import { State, useState } from '../../../Providers';
import { MenuItem } from '../../atoms';
import { Switch_Arrow } from '../switches/Arrow';

// import { ChevronDownIcon } from '@heroicons/react/solid'

const selector = (state: State) =>
  state.context.locales.current._common.topNavBar.btnLogin.menu;

function useHook() {
  const menu = useState(selector);
  const rest = useDropDown();

  return {
    menu,
    ...rest,
  };
}

export const DropDown_Login: FC = () => {
  const { onClick, menu, ref, dropDownStyle, open } = useHook();

  return (
    <div>
      <Switch_Arrow {...{ open, onClick }} />
      <div
        className="p-1 w-max bg-gray-200/30 backdrop-blur-sm right-0 top-full mt-3 rounded-lg transition-all duration-200 ease-out"
        style={dropDownStyle}
      >
        <div
          className="bg-white/75 backdrop-blur-sm px-10 py-3 rounded-lg flex flex-col space-y-3"
          ref={ref}
        >
          <MenuItem href={menu.account.href}>
            {menu.account.label}
          </MenuItem>
          <MenuItem href={menu.commands.href}>
            {menu.commands.label}
          </MenuItem>
          <MenuItem href={menu.whishlist.href}>
            {menu.whishlist.label}
          </MenuItem>
        </div>
      </div>
    </div>
  );
};
