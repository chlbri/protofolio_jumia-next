/* eslint-disable react/jsx-key */
import { FC, SVGProps } from 'react';
import { State, useState } from '../../Providers';
import {
  Icon_Agriculture,
  Icon_Apple,
  Icon_Baby,
  Icon_BeautyClean,
  Icon_FashionM,
  Icon_FashionW,
  Icon_Games,
  Icon_HomeOffice,
  Icon_Informatics,
  Icon_Others,
  Icon_Smartphone,
  Icon_TV,
} from '../atoms/icons';

type Element = {
  title: string;
  href?: string;
};

type Props = {
  children: SVGProps<SVGSVGElement>;
  element: Element;
};

export const Category: FC<Props> = ({
  children,
  element: { href, title },
}) => {
  return (
    <div className="flex space-x-1 items-center cursor-pointer">
      <div className="w-[25px] justify-center">{children}</div>
      <a
        href={href}
        className="hover:text-poussin transition-colors duration-100 ease-in"
      >
        {title}
      </a>
    </div>
  );
};

const selector = (state: State) =>
  state.context.locales.current.index.heroSection.categoryNav;

export const NavCategories: FC = () => {
  const categories = useState(selector);
  return (
    <nav className="bg-white px-5 py-3 shadow-lg w-max rounded space-y-2 min-w-max">
      <Category element={categories.market}>
        <Icon_Apple />
      </Category>
      <Category element={categories.home}>
        <Icon_HomeOffice />
      </Category>
      <Category element={categories.smartphone}>
        <Icon_Smartphone />
      </Category>
      <Category element={categories.electronics}>
        <Icon_TV />
      </Category>
      <Category element={categories.cleanBeauty}>
        <Icon_BeautyClean />
      </Category>
      <Category element={categories.baby}>
        <Icon_Baby />
      </Category>
      <Category element={categories.food}>
        <Icon_Agriculture />
      </Category>
      <Category element={categories.informatics}>
        <Icon_Informatics />
      </Category>
      <Category element={categories.fashionWomen}>
        <Icon_FashionW />
      </Category>
      <Category element={categories.fashionMen}>
        <Icon_FashionM />
      </Category>
      <Category element={categories.game}>
        <Icon_Games />
      </Category>
      <Category element={categories.others}>
        <Icon_Others />
      </Category>
    </nav>
  );
};
