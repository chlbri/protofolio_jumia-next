import { FC } from 'react';
import { Icon_ArrowTop } from './icons';

type Props = {
  isIntersecting: boolean;
};

export const GoTop: FC<Props> = ({ isIntersecting }) => {
  return isIntersecting ? null : (
    <button
      className="fixed bottom-11 right-3 2xl:right-8 z-50 shadow-sm bg-white/30 text-gray-700/20 rounded-full p-3  backdrop-blur-[1px] hover:text-gray-700  hover:backdrop-blur-sm transition-colors duration-75 ease-in-out hover:shadow-poussin/50 bg-scroll"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <Icon_ArrowTop />
    </button>
  );
};
