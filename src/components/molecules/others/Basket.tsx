import { FC } from 'react';
import { State, useState } from '../../../Providers';
import { Icon_ShopBasket } from '../../atoms/icons/ShopBasket';

const selector = (state: State) =>
  state.context.locales.current._common.topNavBar.btnBasket;

export const Btn_Basket: FC = () => {
  const { href, label } = useState(selector);
  return (
    <div className="flex space-x-2 items-center cursor-pointer">
      <Icon_ShopBasket />
      <a className="font-semibold text-poussin text-sm" href={href}>
        {label}
      </a>
    </div>
  );
};
