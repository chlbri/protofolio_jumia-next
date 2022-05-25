import { FC, useCallback } from 'react';
import { LocalesContext, State, useSend, useState } from '../../Providers';

type Locale = LocalesContext['locale'];

type Props = {
  locale: Locale;
};

const selector = (st: State) => st.context.locales.locale;

function useHook(locale: Locale) {
  const send = useSend();
  const onClick = useCallback(() => {
    send({ type: 'LOCALES.CHANGE_LANGUAGE', locale });
  }, [locale, send]);
  const currentLocale = useState(selector);
  const className = `uppercase text-sm 2xl:text-base ${
    currentLocale === locale ? 'font-bold' : ''
  }`;
  return { onClick, className } as const;
}

export const BtnLanguage: FC<Props> = ({ locale }) => {
  const props = useHook(locale);
  return <button {...props}>{locale}</button>;
};
