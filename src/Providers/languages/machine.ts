import { assign } from '@xstate/immer';
import { createMachine } from 'xstate';
import { LanguagesContext, languagesContext } from './context';
import { LanguagesEvents } from './events';

export const languageMachine = createMachine(
  {
    initial: 'idle',
    context: languagesContext,
    tsTypes: {} as import('./machine.typegen').Typegen0,
    schema: {
      context: {} as LanguagesContext,
      events: {} as LanguagesEvents,
    },
    states: {
      idle: {
        exit: 'inc',
        on: {
          START: {
            target: 'started',
          },
        },
      },
      started: {
        initial: 'changing',
        states: {
          normal: {
            exit: 'inc',
            on: {
              CHANGE_LANGUAGE: {
                actions: 'changeLocale',
                target: 'changing',
              },
            },
          },
          changing: {
            entry: 'changeCurrent',
            exit: 'inc',
            after: {
              '300': {
                target: 'normal',
              },
            },
          },
        },
      },
    },
    id: 'languages',
  },
  {
    actions: {
      changeLocale: assign((context, event) => {
        context.locale = event.locale;
      }),
      changeCurrent: assign(context => {
        context.current = context.locales[context.locale];
      }),
      inc: assign(context => {
        context.iterator++;
      }),
    },
  },
);
