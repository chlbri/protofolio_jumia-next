import { FC, ReactNode } from 'react';
import { useState } from '../../Providers';
import {
  Icon_Bag,
  Icon_Deals,
  Icon_Express,
  Icon_Meal,
} from '../atoms/icons';

type ButtonProps = {
  children: ReactNode;
  label: string;
  href?: string;
};

const Button: FC<ButtonProps> = ({ children, label, href }) => {
  return (
    <a
      className="py-2 space-x-3 flex items-center px-4 bg-white rounded w-full shadow cursor-pointer"
      href={href}
    >
      {children}
      <span className="text-lg font-medium">{label}</span>
    </a>
  );
};

export const Subsidiaries: FC = () => {
  const subs = useState(
    state => state.context.locales.current.index.listSubsidiaries,
  );
  return (
    <div className="flex items-center justify-between space-x-4">
      <Button
        label={subs.officalShops.title}
        href={subs.officalShops.href}
      >
        <Icon_Bag sizeRem={2.5} />
      </Button>
      <Button label={subs.express.title} href={subs.express.href}>
        <Icon_Express sizeRem={2.5} />
      </Button>
      <Button label={subs.deals.title} href={subs.deals.href}>
        <Icon_Deals sizeRem={2.5} />
      </Button>
      <Button label={subs.food.title} href={subs.food.href}>
        <Icon_Meal sizeRem={2.5} />
      </Button>
    </div>
  );
};
