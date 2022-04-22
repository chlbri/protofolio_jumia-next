import { MainMachine } from 'blac-machines';
import { createContext } from 'react';
import { InterpreterFrom } from 'xstate';

export const MainContext = createContext(
  {} as InterpreterFrom<MainMachine>,
);
