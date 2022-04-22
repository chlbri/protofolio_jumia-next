import { Card_Article } from 'blac-molecules';
import { FC } from 'react';

export type Article = {
  img?: string;
  title: string;
  price: number;
  currency: string;
  discountPercentage?: number;
  remaining: number;
  total: number;
  href?: string;
  noRemaining?: boolean;
  id: string;
};

type Props = {
  className?: string;
  children: Article[];
};

export const Articles: FC<Props> = ({ className, children }) => {
  const articles = children;
  return (
    <div className={className}>
      {articles.map(({ id, ...rest }) => (
        <Card_Article key={id} {...rest} />
      ))}
    </div>
  );
};
