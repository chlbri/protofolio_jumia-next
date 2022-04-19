import { FC } from 'react';
import { priceWithCurrency, priceWithDiscount } from './helpers';

type Props = {
  discountPercentage?: number;
  price: number;
  currency: string;
};

export const Price: FC<Props> = ({
  discountPercentage,
  price,
  currency,
}) => {
  return !discountPercentage ? (
    <span className="text-lg font-semibold">
      {priceWithCurrency(price, currency)}
    </span>
  ) : (
    <div className="flex flex-col">
      <span className="text-lg font-semibold">
        {priceWithCurrency(
          priceWithDiscount(price, discountPercentage),
          currency,
        )}
      </span>
      <span className="line-through text-gray-700">
        {priceWithCurrency(price, currency)}
      </span>
    </div>
  );
};
