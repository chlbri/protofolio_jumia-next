import { createContext } from 'react';
import { InterpreterFrom } from 'xstate';
import { MainMachine } from '../main';

export const MainContext = createContext(
  {} as InterpreterFrom<MainMachine>,
);
