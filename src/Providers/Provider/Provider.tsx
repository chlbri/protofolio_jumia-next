import { useInterpret } from '@xstate/react';
import { mainMachine } from 'blac-machines';
import { FC, ReactNode } from 'react';
import { MainContext } from './context';

type Props = {
  children: ReactNode;
};

export const Provider: FC<Props> = ({ children }) => {
  const value = useInterpret(mainMachine);
  return (
    <MainContext.Provider {...{ value }}>{children}</MainContext.Provider>
  );
};
