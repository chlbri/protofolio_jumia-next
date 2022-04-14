import { FC } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from '../../constants/dimensions';
type Props = {
  sizeRem?: number;
};

export const Icon_FashionM: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
}) => {
  return (
    <svg
      width={`${sizeRem}rem`}
      height={`${sizeRem}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 23 23"
    >
      <path
        fill="#4E4E4E"
        d="M21.212 4.493l-1.953-.37V.367A.367.367 0 0018.892 0H4.108a.367.367 0 00-.367.367v3.756l-1.954.37C.915 4.66.207 5.519.207 6.407v14.92C.206 22.248.956 23 1.88 23h19.24c.923 0 1.674-.75 1.674-1.674V6.406c0-.887-.71-1.746-1.582-1.913zm.848 16.833a.94.94 0 01-.94.94H1.88a.94.94 0 01-.94-.94V6.406c0-.543.452-1.09.985-1.192l2.087-.395.754.597a.366.366 0 00.515-.06.367.367 0 00-.06-.515l-.746-.59V.733h14.05V4.25l-.746.59a.367.367 0 10.456.576l.753-.597 2.086.395c.534.102.986.649.986 1.192v14.92z"
      />
      <path
        fill="#4E4E4E"
        d="M13.58 12.041a.98.98 0 000 1.957.98.98 0 000-1.957zm0 1.223a.243.243 0 01-.245-.244.245.245 0 11.245.245zM13.58 19.575a.98.98 0 000 1.957.98.98 0 00.692-1.67.972.972 0 00-.692-.287zm0 1.223a.243.243 0 01-.245-.245.245.245 0 11.245.245zM13.58 15.808a.98.98 0 000 1.957.98.98 0 000-1.957zm0 1.223a.243.243 0 01-.245-.244.245.245 0 11.245.244zM11.5 10.573a.367.367 0 00-.367.367v10.225a.367.367 0 10.734 0V10.94a.367.367 0 00-.367-.367z"
      />
      <path
        fill="#4E4E4E"
        d="M16.582 5.1c-1.52-.292-3.289.782-3.726 1.069h-.255V4.534l4.923-1.41a.367.367 0 00.267-.353v-.936a.367.367 0 10-.735 0v.66l-4.923 1.41a.367.367 0 00-.266.352V6.17h-.734V4.257a.367.367 0 00-.266-.353l-4.924-1.41v-.659a.367.367 0 10-.734 0v.936c0 .164.109.308.266.353l4.924 1.41v1.635h-.255C9.707 5.882 7.937 4.808 6.418 5.1a.367.367 0 00-.235.155c-.03.045-.753 1.13-.753 2.749 0 1.618.723 2.704.753 2.749.055.08.14.136.235.155.179.034.361.05.545.05 1.372 0 2.795-.867 3.18-1.12h2.713c.386.254 1.809 1.12 3.181 1.12.184 0 .366-.016.545-.05a.367.367 0 00.235-.155c.03-.046.753-1.13.753-2.75 0-1.618-.723-2.703-.753-2.748a.368.368 0 00-.235-.155zm-9.869 5.11a4.709 4.709 0 010-4.413c1.139-.127 2.498.652 2.952.937v.903H8.564a.367.367 0 100 .734h1.1v.902c-.453.286-1.813 1.065-2.95.937zm5.888-1.105H10.4V6.903H12.6v2.202zm3.685 1.105c-1.137.127-2.497-.652-2.951-.937v-.902h1.101a.367.367 0 000-.734h-1.1v-.903c.452-.286 1.809-1.065 2.95-.937a4.709 4.709 0 010 4.413z"
      />
    </svg>
  );
};
