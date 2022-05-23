import { FC } from 'react';
import { LOCALES_ALL } from '../../../Providers';
import { BtnLanguage } from '../../atoms';

export const ChangeLanguage: FC = () => {
  return (
    <div
      className="fixed bottom-16 left-3 2xl:left-8 z-50 shadow-sm bg-white/30 text-gray-700/20 rounded-full p-3  backdrop-blur-[1px] hover:text-gray-700  hover:backdrop-blur-sm transition-colors duration-75 ease-in-out hover:shadow-poussin/50 bg-scroll flex flex-col divide-y-2"
      // onClick={() => {
      //   window.scrollTo({ top: 0, behavior: 'smooth' });
      // }}
    >
      {LOCALES_ALL.map((locale, key) => (
        <BtnLanguage locale={locale} key={key} />
      ))}
    </div>
  );
};
