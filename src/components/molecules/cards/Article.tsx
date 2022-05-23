import { FC } from 'react';
import { useState } from '../../../Providers';
import { ImageWithRatio } from '../../atoms';
import { Price } from '../others';
import { Slider } from '../Slider';

export type Card_ArticleProps = {
  img?: string;
  title: string;
  price: number;
  currency: string;
  discountPercentage?: number;
  remaining: number;
  total: number;
  href?: string;
  noRemaining?: boolean;
};

function useBuildRemainingLTR(remaining: number) {
  const sp = useState(
    st => st.context.locales.current._common.words.remaining,
  );
  const text = remaining === 1 ? sp.singular : sp.plural;
  return `${remaining} ${text}`;
}

function useHook(_remaining: number) {
  const remainingText = useBuildRemainingLTR(_remaining);
  return { remainingText } as const;
}

export const Card_Article: FC<Card_ArticleProps> = ({
  img,
  title,
  discountPercentage,
  price,
  currency,
  remaining,
  total,
  href,
  noRemaining,
}) => {
  const { remainingText } = useHook(remaining);
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
        <ImageWithRatio aspectRatio="1/1" alt="" width="100%" src={img} />
      </div>
      <div className="ml-2 flex flex-col space-y-1">
        <h1>{title}</h1>
        <Price {...{ price, currency, discountPercentage }} />
        {!noRemaining && <span> {remainingText} </span>}
      </div>
      {!noRemaining && <Slider {...{ total, remaining }} />}
    </a>
  );
};
