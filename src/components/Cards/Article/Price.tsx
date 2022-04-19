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
    <span className="text-lg">{priceWithCurrency(price, currency)}</span>
  ) : (
    <>
      {priceWithCurrency(
        priceWithDiscount(price, discountPercentage),
        currency,
      )}
    </>
  );
};
