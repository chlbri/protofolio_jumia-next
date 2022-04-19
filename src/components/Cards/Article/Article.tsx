import { FC } from 'react';
import Image from '../../Image';
import { Price } from './Price';

type Props = {
  img?: string;
  title: string;
  price: number;
  currency: string;
  discountPercentage?: number;
  remaining: number;
  total: number;
};

export const Card_Article: FC<Props> = ({
  img,
  title,
  discountPercentage,
  price,
  currency,
  remaining,
  total,
}) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        {!!discountPercentage && (
          <div className="absolute z-30 top-0 right-0 py-0.5 px-2">
            {discountPercentage}%
          </div>
        )}
        <Image aspectRatio="1/1" alt="" width="100%" src={img} />
      </div>
      <h1>{title}</h1>
      <Price {...{ price, currency, discountPercentage }} />
      <span>{remaining} </span>
    </div>
  );
};
