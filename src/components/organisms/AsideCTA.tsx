import { State } from 'blac-machines';
import { useState } from 'blac-providers';
import { FC, SVGProps } from 'react';
import {
  Icon_Assistance,
  Icon_Commandez,
  Icon_Kiosk,
} from '../atoms/icons';

type Element = {
  title: string;
  description: string;
  href?: string;
};

type AssistanceProps = {
  children: SVGProps<SVGSVGElement>;
  element: Element;
};

const Assistance: FC<AssistanceProps> = ({ children, element }) => {
  return (
    <a className="flex space-x-2 items-center" href={element.href}>
      {children}
      <div className="flex flex-col">
        <span className="font-semibold">{element.title}</span>
        <span className="font-light text-sm">{element.description}</span>
      </div>
    </a>
  );
};

const selector = (state: State) =>
  state.context.locales.current.index.heroSection.assistanceNav;

export const AsideCTA: FC = () => {
  const assitances = useState(selector);
  return (
    <aside className="bg-white px-6 py-4 h-max rounded-lg shadow-sm flex flex-col space-y-4 min-w-max">
      <Assistance element={assitances.assistance}>
        <Icon_Assistance sizeRem={2} />
      </Assistance>
      <Assistance element={assitances.command}>
        <Icon_Commandez sizeRem={2} />
      </Assistance>
      <Assistance element={assitances.sales}>
        <Icon_Kiosk sizeRem={2} />
      </Assistance>
    </aside>
  );
};
