import { FC } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from '../../constants/dimensions';

type Props = {
  sizeRem?: number;
};

const RATIO = 23 / 15;

export const Icon_Games: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={`${sizeRem}rem`}
      height={`${sizeRem / RATIO}rem`}
      viewBox="0 0 23 15"
    >
      <path
        fill="#4E4E4E"
        d="M17.953 4.351h-5.959a3.338 3.338 0 013.301-2.872.462.462 0 100-.923c-2.191 0-4 1.664-4.231 3.795H5.047A5.052 5.052 0 000 9.398a5.052 5.052 0 005.047 5.046 5.074 5.074 0 004.731-3.297h3.444a5.073 5.073 0 004.731 3.297A5.052 5.052 0 0023 9.398a5.052 5.052 0 00-5.047-5.047zm0 9.17a4.143 4.143 0 01-3.955-2.965.461.461 0 00-.443-.333h-4.11a.461.461 0 00-.443.333 4.143 4.143 0 01-3.955 2.965A4.128 4.128 0 01.923 9.398a4.128 4.128 0 014.124-4.124h12.906a4.128 4.128 0 014.124 4.124 4.128 4.128 0 01-4.124 4.123z"
      />
      <path
        fill="#4E4E4E"
        d="M4.988 5.662a3.74 3.74 0 00-3.735 3.736 3.74 3.74 0 003.735 3.735 3.74 3.74 0 003.735-3.735 3.74 3.74 0 00-3.735-3.736zm0 6.548a2.815 2.815 0 01-2.812-2.812 2.815 2.815 0 012.812-2.813A2.815 2.815 0 017.8 9.398a2.815 2.815 0 01-2.812 2.812z"
      />
      <path
        fill="#4E4E4E"
        d="M6.507 8.653h-.774v-.775a.23.23 0 00-.23-.23H4.473a.23.23 0 00-.23.23v.775h-.775a.23.23 0 00-.231.23v1.029c0 .127.103.23.23.23h.775v.775c0 .128.103.231.231.231h1.028a.23.23 0 00.231-.23v-.775h.774a.23.23 0 00.231-.231V8.884a.23.23 0 00-.23-.231zM18.012 5.662a3.74 3.74 0 00-3.736 3.736 3.74 3.74 0 003.736 3.735 3.74 3.74 0 003.735-3.735 3.74 3.74 0 00-3.735-3.736zm0 6.548A2.815 2.815 0 0115.2 9.398a2.815 2.815 0 012.812-2.813 2.815 2.815 0 012.812 2.813 2.815 2.815 0 01-2.812 2.812z"
      />
      <path
        fill="#4E4E4E"
        d="M18.012 8.468a.777.777 0 100-1.554.777.777 0 000 1.554zM19.718 8.62a.777.777 0 100 1.555.777.777 0 000-1.554zM18.012 10.327a.777.777 0 100 1.555.777.777 0 000-1.555zM16.305 8.62a.777.777 0 100 1.556.777.777 0 000-1.555zM10.752 8.766H9.594a.316.316 0 100 .632h1.158a.316.316 0 100-.632zM13.406 8.766h-1.158a.316.316 0 100 .632h1.158a.316.316 0 100-.632z"
      />
    </svg>
  );
};
