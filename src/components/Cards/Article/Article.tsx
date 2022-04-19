import { FC } from 'react';
import Image from '../../Image';
import { Price } from './Price';
import { Slider } from './Slider';

type Props = {
  img?: string;
  title: string;
  price: number;
  currency: string;
  discountPercentage?: number;
  remaining: number;
  total: number;
  href?: string;
};

export const Card_Article: FC<Props> = ({
  img,
  title,
  discountPercentage,
  price,
  currency,
  remaining,
  total,
  href,
}) => {
  return (
    <a
      className="inline-block flex-col p-1 w-1/6 cursor-pointer"
      href={href}
    >
      <div className="relative rounded-md overflow-hidden">
        {!!discountPercentage && (
          <div className="absolute z-30 top-0 right-0 py-0.5 px-2 rounded-l bg-lightYellow">
            {discountPercentage}%
          </div>
        )}
        <Image aspectRatio="1/1" alt="" width="100%" src={img} />
      </div>
      <div className="ml-2 flex flex-col space-y-1">
        <h1>{title}</h1>
        <Price {...{ price, currency, discountPercentage }} />
        <span>{remaining} </span>
      </div>
      <Slider {...{ total, remaining }} />
    </a>
  );
};
