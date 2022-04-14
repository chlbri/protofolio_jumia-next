import { createMachine } from 'xstate';

export const languageMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBsCGA7KBXVMB0AlhMmAMQDKAKgIIBKlioADgPawEAuBL6jIAHogC0AFhEA2POICsAZnEBGAAwiA7AvEBOaQCZZAGhABPRLNUAOPKtVLzskTpF2djkQF83htJhz5YHVAAnDkg8dBZAgFtUZFIAYQAJagA5AHEAUQB9ABkU1IBVagy+VnYuHj5BBCEFaUtZHWknEWklHXNnA2NTVR08WSaFe01xEU1zMY8vDGxcMDx-IJCIPABjAAsZgkxSfkWQvFQAMxDAgApZJSUASlJvWb8A4NCNrcwStk5uXiQBYVr6o1mq12p1DCYEA4lP1BrJNE5FEpVOIPJ4QOEIHA+PdfPMiCQPmVvpVhHVpHhNPZzE0xqoBi1waY1HgdDZzC5ZOYlGY5Ci0Ti5gsnsswhFoshCV8Kr8qsyFKoWo07AoVbUFIyEGZZHg2rZudzlBIFVMQALHksXptMNsoJLyj9QFUhLJ5VJecoFE5VNJVJSNWZobpbDpNPDHJohrITWb5otnhA7cSZcJ7Ao3fIPV6fX7uggQ6o8EGJvL8yolNJozNcYnpY7hOIlJoKVSaZo6U1pBqXCJCzpbLIB4PB+5UUA */
  createMachine({
    initial: 'idle',
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
                target: 'changing',
              },
            },
          },
          changing: {
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
  });
