import { FC } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from '../../constants/dimensions';
type Props = {
  sizeRem?: number;
};

export const Icon_Kiosk: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
}) => {
  return (
    <svg
      width={`${sizeRem}rem`}
      height={`${sizeRem}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 36"
    >
      <circle cx="18" cy="18" r="17" stroke="#FD9C00" strokeWidth="2" />
      <path
        fill="#D69513"
        d="M15.58 20.172h1.426a.737.737 0 01.71.934H14.87a.733.733 0 01.71-.934zM11.253 20.172h1.428a.737.737 0 01.71.934h-2.848a.737.737 0 01.71-.934zM20.546 18.648h.663v-.37a.492.492 0 01.983 0v.37h.984v-.37a.492.492 0 01.983 0v.37h.663c.272 0 .492.22.492.492v1.966h-5.26V19.14c0-.272.22-.492.492-.492zM8.502 22.089h1.89l-.001.024V28H9.143a.737.737 0 01-.737-.737v-5.184c.03.006.063.01.096.01zM21.2 22.089V28h-2.62v-5.887l-.002-.024H21.2zM27.744 22.089l.026-.002v5.176c0 .407-.33.737-.737.737h-1.248v-5.887l-.001-.024h1.96zM17.598 22.089l-.002.024V28h-2.62v-5.887-.024h2.622zM13.995 22.089l-.002.024V28h-2.619v-5.887l-.001-.024h2.622zM24.803 22.089l-.001.024V28h-2.62v-5.887l-.001-.024h2.622z"
      />
      <path
        fill="#D69513"
        d="M7.737 12.499H8.74l8.92-6.362a.737.737 0 01.856 0l8.92 6.362h.658a.737.737 0 010 1.475h-.324v7.133l-.026-.001h-1.448v-6.534a1.789 1.789 0 01-2.622-.599h-.432a1.789 1.789 0 01-3.148 0h-.432a1.789 1.789 0 01-3.148 0h-.432a1.789 1.789 0 01-3.148 0h-.432a1.789 1.789 0 01-2.622.6v6.533H8.502a.503.503 0 00-.097.01v-7.142h-.668a.737.737 0 110-1.475z"
      />
    </svg>
  );
};
