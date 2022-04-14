import { createMachine } from 'xstate';

export const machine =
  /** @xstate-layout N4IgpgJg5mDOIC5QFsCGBLAdgOnRANmAMQDKAKgIIBKZioADgPazoAu6jmdIAHogLQBmAOwAGbCMEAmAGwBGOQBZBATilLhAGhABPAYtEzsolcMEyArFOUnFigL73taLNgDGACzBuA1ligAopgAbugATpzIYJisAGqoYeioAEaEsEQQnGC4IYw+2QhYwYxuqOycCDKoAO6GAK5hsMLcTCzlXEi8+sJy2MLWABxSUhZy5gYD2noI-HIW4hYyohaCcvIy6nKOzhg49GFg9An+GVk5xfnYhbml7Qiwecic9MiiLcxsHB2gfDOqKtgBpZlNZTMtFFpdIg5ooJBYVHZRFJBCjFHNtiAXDhYKwEuxMFBTphskU8gVSbcvggoKgwKIIDxUDJqu82l9uL8hAMBtg0cMVANFBZFAMTCipog7BZsCpBKNlGoVAjDI4nCBMIwIHBuFjcAQwKzPpwOQJVIJjGMBrLRAMxMI0ZDpvwVsIZaIzBZhDJhPNPSoMbrPN4-ASgqEIpgojF4okUmlDe0TTNFCpelIVKMRAMzYoRhK-lIeYYVkpkfakf61br9odjgSE+zOpy0QDlJ6-UphQM5PnnTyhkC1kiNnIzJWdq4cXj-A3jU39O6ZUMluZuT1ZfnZObvYpLMJU4Mxg4q7tsFOwqxILPvl0-mpsFuBvMESJRhn81ZYUNBECVKIbUClgBrs15Js6cwPhmYzCNmsq5hYvbyOIf5mDISw9LmtqqvYQA */
  createMachine({
    initial: 'idle',
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
          onDone: [
            {
              target: 'started',
            },
          ],
        },
      },
      started: {},
    },
    id: 'main',
  });
