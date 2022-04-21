import { FC, MouseEventHandler } from 'react';
import { Icon_ArrowDown } from '../../atoms/icons';

type Props = {
  open?: boolean;
  onClick: MouseEventHandler<never>;
};

export const Switch_Arrow: FC<Props> = ({ open, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center"
      onMouseEnter={() => {
        console.log('onMouseEnter');
      }}
    >
      <Icon_ArrowDown
        className={`hover:stroke-poussin hover:scale-105 transition duration-300 ease-out ${
          open ? 'rotate-180' : ''
        }`}
      />
    </button>
  );
};
