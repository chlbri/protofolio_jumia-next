import { FC } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from '../../constants/dimensions';

type Props = {
  sizeRem?: number;
};

export const Icon_PersonVoice: FC<Props> = ({
  sizeRem = DEFAULT_ICON_WIDTH_REM,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${sizeRem}rem`}
      height={`${sizeRem}rem`}
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#212121" fillRule="nonzero">
          <path d="M14.754 15a2.249 2.249 0 012.25 2.249v.918a2.75 2.75 0 01-.514 1.6C14.945 21.928 12.42 23 9 23c-3.421 0-5.944-1.072-7.486-3.236a2.75 2.75 0 01-.51-1.596v-.92a2.249 2.249 0 012.248-2.25h11.502zm4.3-13.596a.75.75 0 011.023.279A12.694 12.694 0 0121.75 8c0 2.254-.586 4.423-1.684 6.336a.75.75 0 01-1.3-.746A11.194 11.194 0 0020.25 8c0-1.983-.513-3.89-1.475-5.573a.75.75 0 01.279-1.023zM9 3.004a5 5 0 110 10 5 5 0 010-10zm6.589.395a.75.75 0 011.022.282A8.713 8.713 0 0117.75 8c0 1.538-.398 3.02-1.144 4.328a.75.75 0 11-1.303-.743A7.213 7.213 0 0016.25 8a7.213 7.213 0 00-.943-3.578.75.75 0 01.282-1.023z" />
        </g>
      </g>
    </svg>
  );
};
