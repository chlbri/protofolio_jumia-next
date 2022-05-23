import { FC } from 'react';

type Props = {
  href?: string;
  children: string;
};

export const MenuItem: FC<Props> = ({ href, children }) => {
  return (
    <a className="text-gray-900 hover:text-blue-500" href={href}>
      {children}
    </a>
  );
};
