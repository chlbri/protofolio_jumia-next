import { FC } from 'react';
import { State, useState } from '../../Providers';
import { Icon_Search } from '../atoms';

const selector = (state: State) =>
  state.context.locales.current._common.topNavBar.btnSearch;

const selector2 = (state: State) =>
  state.context.locales.current._common.topNavBar.search.placeholder;

export const Search: FC = () => {
  const search = useState(selector);
  const placeholder = useState(selector2);

  return (
    <div className="flex space-x-2">
      <div className="w-[440px] h-[39px] rounded-lg border-2 border-gray-500 bg-gray-100 mr-2 flex items-center px-2 space-x-2 ">
        <Icon_Search />
        <input
          type="text"
          name="search"
          id="search"
          className="flex-1 bg-transparent placeholder:text-sm focus:outline-none"
          placeholder={placeholder}
          maxLength={50}
        />
      </div>
      <button className="px-3 py-1.5 rounded-lg bg-poussin flex items-center justify-center mr-[20px]">
        <h3 className="m-auto text-white font-bold uppercase">{search}</h3>
      </button>
    </div>
  );
};
