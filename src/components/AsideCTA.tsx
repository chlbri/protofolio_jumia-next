import { FC } from 'react';
import { Icon_Assistance, Icon_Commandez, Icon_Kiosk } from './icons';

export const AsideCTA: FC = () => {
  return (
    <aside className="bg-white px-6 py-4 h-max rounded-lg shadow-sm flex flex-col space-y-4">
      <div className="flex space-x-2 items-center">
        <Icon_Assistance sizeRem={2} />
        <div className="flex flex-col">
          <span className="font-semibold">{"Centre d'Assistance"}</span>
          <span className="font-light text-sm">
            Guide su service Client
          </span>
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <Icon_Commandez sizeRem={2} />
        <div className="flex flex-col">
          <span className="font-semibold">Commandez au</span>
          <span className="font-light text-sm">07 59 26 07 09</span>
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <Icon_Kiosk sizeRem={2} />
        <div className="flex flex-col">
          <span className="font-semibold">Vendez sur Jumia</span>
          <span className="font-light text-sm">Ouvrez votre shop ici</span>
        </div>
      </div>
    </aside>
  );
};

export default AsideCTA;
