import { FC } from 'react';
import { theme } from '../../../tailwind.config';
import { DEFAULT_ICON_WIDTH_REM } from '../../constants/dimensions';

type Props = {
  sizeRem?: number;
  fill?: '';
};

export const Icon_ShopBasket: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
  fill = theme.colors.poussin,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${sizeRem}rem`}
      height={`${sizeRem}rem`}
      x="0"
      y="0"
      enableBackground="new 0 0 462.189 462.188"
      version="1.1"
      viewBox="0 0 462.189 462.188"
      xmlSpace="preserve"
      style={{}}
      fill={fill}
    >
      <path d="M428.328 118.851h-8.407l31.039-31.043c9.979-9.978 9.979-26.142 0-36.118-9.972-9.978-26.142-9.978-36.116 0l-48.395 48.396c-1.164-.106-2.288-.353-3.48-.353-14.512 0-27.141 7.669-34.32 19.117H131.175c-7.181-11.448-19.82-19.117-34.321-19.117-1.193 0-2.32.247-3.48.353L44.98 51.69c-9.976-9.978-26.145-9.978-36.115 0-9.979 9.976-9.979 26.14 0 36.118l31.037 31.043h-6.041C15.158 118.851 0 134.014 0 152.705v23.705c0 17.661 13.584 32 30.843 33.552l25.409 168.726c0 21.696 17.591 39.295 39.292 39.295h271.101c21.702 0 39.289-17.599 39.289-39.295l25.414-168.726c17.259-1.552 30.841-15.891 30.841-33.552v-23.705c.005-18.691-15.16-33.854-33.861-33.854zM156.946 378.677H96.315l-8.64-66.32h69.271v66.32zm0-92.116H83.749l-7.863-66.328h81.061v66.328zm105.015 92.116h-61.417v-66.325h61.417v66.325zm0-92.116h-61.417V220.24h61.417v66.321zm96.96 92.116h-48.446v-66.325h60.227l-11.781 66.325zm16.907-92.116h-65.353V220.24h77.139l-11.786 66.321z"></path>
    </svg>
  );
};
