import { FC } from 'react';
import { State, useState } from '../../Providers';
import { Icon_Search } from '../icons';

const selector = (state: State) =>
  state.context.locales.current._common.topNavBar.search.placeholder;

export const Input_Search: FC = () => {
  const placeholder = useState(selector);
  return (
    <div className="w-[440px] h-[39px] rounded-lg border-2 border-gray-500 bg-gray-100 mr-2 flex items-center px-2 space-x-2 ">
      <Icon_Search />
      <input
        type="text"
        name="search"
        id="search"
        className="flex-1 bg-transparent  placeholder:text-sm focus:outline-none"
        placeholder={placeholder}
        maxLength={50}
      />
    </div>
  );
};
