import { theme } from 'blac-theme';
import { FC } from 'react';

type Props = {
  remaining: number;
  total: number;
};

function colorize(percentage: number) {
  if (percentage < 0.25) {
    return theme.colors.red;
  }
  if (percentage < 0.4) {
    return theme.colors.lightYellow;
  }
  if (percentage < 0.72) {
    return theme.colors.poussin;
  }
  return theme.colors.green;
}

export const Slider: FC<Props> = ({ total, remaining }) => {
  const percentage = remaining / total;
  const widthFill = percentage * 166;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 166 6"
    >
      <rect width={166} height={6} fill={theme.colors.gray[500]} rx={2} />
      <rect
        width={widthFill}
        height={6}
        fill={colorize(percentage)}
        rx={2}
      />
    </svg>
  );
};
