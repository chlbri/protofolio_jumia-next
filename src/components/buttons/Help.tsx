import { FC } from 'react';
import { Icon_ArrowDown } from '../icons/ArrowDown';
import { Icon_Question } from '../icons/Question';

export const BtnHelp: FC = () => {
  return (
    <div className="flex space-x-2 mr-[25px] items-center">
      <Icon_Question />
      <button className="text-sm">Aide</button>
      <Icon_ArrowDown />
    </div>
  );
};
