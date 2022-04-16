import { FC } from 'react';
import { State, useState } from '../../Providers';

const selector = (state: State) =>
  state.context.locales.current._common.topNavBar.btnSearch;

export const Btn_Search: FC = () => {
  const search = useState(selector);
  return (
    <button className="px-3 py-1.5 rounded-lg bg-poussin flex items-center justify-center mr-[20px]">
      <h3 className="m-auto text-white font-bold uppercase">{search}</h3>
    </button>
  );
};
