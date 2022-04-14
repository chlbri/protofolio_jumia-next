import { FC } from 'react';
import { Icon_ArrowDown } from '../icons/ArrowDown';
import { Icon_PersonVoice } from '../icons/PersonVoice';

export const BtnConnect: FC = () => {
  return (
    <div className="flex space-x-2 mr-[25px] items-center">
      <Icon_PersonVoice />
      <button className="font-semibold w-max text-sm">Se connecter</button>
      <Icon_ArrowDown />
    </div>
  );
};
