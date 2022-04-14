import { FC } from 'react';
import { Icon_ShopBasket } from '../icons/ShopBasket';

export const BtnBasket: FC = () => {
  return (
    <div className="flex space-x-2 items-center">
      <Icon_ShopBasket />
      <button className="font-semibold text-poussin text-sm">
        Panier
      </button>
    </div>
  );
};
