import { assign } from '@xstate/immer';
import { createMachine, send } from 'xstate';
import { localesMachine } from '../locales/machine';
import { mainContext as context, MainContext } from './context';
import { MainEvents } from './events';

const voidAsync = () => Promise.resolve() as never;

export const mainMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QFsCGBLAdgOnRANmAMQDKAKgIIBKZioADgPazoAu6jmdIAHogLQBmAOwAGbCMEAmAGwBGOQBZBATilLhAGhABPAYtEzsolcMEyArFOUnFigL73taLNgDGACzBuA1ligAopgAbugATpzIYJisAGqoYeioAEaEsEQQnGC4IYw+2QhYwYxuqOycCDKoAO6GAK5hsMLcTCzlXEi8+sJy2MLWABxSUhZy5gYD2noI-HIW4hYyohaCcvIy6nKOzhg49GFg9An+GVk5xfnYhbml7Qiwecic9MiiLcxsHB2gfDOqKtgBpZlNZTMtFFpdIg5ooJBYVHZRFJBCjFHNtiAXDhYKwEuxMFBTphskU8gVSbcvggoKgwKIIDxUDJqu82l9uL8hAMBtg0cMVANFBZFAMTCipog7BZsCpBKNlGoVAjDI4nCBMIwIHBuFjcAQwKzPpwOQJVIJjGMBrLRAMxMI0ZDpvwVsIZaIzBZhDJhPNPSoMbrPN4-ASgqEIpgojF4okUmlDe0TTNFCpelIVKMRAMzYoRhK-lIeYYVkpkfakf61br9odjgSE+zOpy0QDlJ6-UphQM5PnnTyhkC1kiNnIzJWdq4cXj-A3jU39O6ZUMluZuT1ZfnZObvYpLMJU4Mxg4q7tsFOwqxILPvl0-mpsFuBvMESJRhn81ZYUNBECVKIbUClgBrs15Js6cwPhmYzCNmsq5hYvbyOIf5mDISw9LmtqqvYQA */
  createMachine(
    {
      initial: 'idle',
      tsTypes: {} as import('./machine.typegen').Typegen0,
      context,
      schema: {
        context: {} as MainContext,
        events: {} as MainEvents,
      },
      states: {
        idle: {
          exit: 'inc',
          on: {
            START: {
              target: 'checkingEnvironmentVariables',
            },
          },
        },
        checkingEnvironmentVariables: {
          exit: 'inc',
          invoke: {
            src: 'checkEnvironmentsVariables',
            onDone: [
              {
                target: 'preparing',
              },
            ],
          },
        },
        preparing: {
          exit: 'inc',
          invoke: {
            src: 'prepare',
            onDone: [
              {
                target: 'starting',
              },
            ],
          },
        },
        starting: {
          exit: 'inc',
          invoke: {
            src: 'start',
            onDone: {
              target: '#started',
            },
          },
        },
        started: {
          type: 'parallel',
          id: 'started',

          states: {
            locales: {
              entry: 'startLocalesMachine',
              exit: 'inc',
              id: 'locales',
              invoke: {
                id: 'localesMachine',
                src: 'localesMachine',
              },
              tags: 'important',
              on: {
                'LOCALES.UPDATE': {
                  actions: 'updateLocale',
                  target: '.busy',
                },
              },
              states: {
                busy: {
                  after: {
                    170: 'notBusy',
                  },
                },
                notBusy: {
                  on: {
                    'LOCALES.CHANGE_LANGUAGE': {
                      actions: 'changeLocale',
                      target: 'busy',
                    },
                  },
                },
              },
            },
          },
        },
      },
      id: 'main',
    },
    {
      actions: {
        inc: assign(context => {
          context.iterator++;
        }),
        changeLocale: send(
          (_, { locale }) => ({
            type: 'CHANGE_LANGUAGE',
            locale,
          }),
          { to: 'localesMachine' },
        ),
        startLocalesMachine: send('START', { to: 'localesMachine' }),
        updateLocale: assign((context, { current, locale }) => {
          context.locales.current = current;
          context.locales.locale = locale;
        }),
      },
      services: {
        localesMachine,
        checkEnvironmentsVariables: voidAsync,
        prepare: voidAsync,
        start: voidAsync,
      },
    },
  );
