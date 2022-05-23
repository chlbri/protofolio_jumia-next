import { FC, useCallback } from 'react';
import { LocalesContext, useSend, useState } from '../../Providers';

type Props = {
  locale: LocalesContext['locale'];
};

function useHook(locale: LocalesContext['locale']) {
  const send = useSend();
  const changeLanguage = useCallback(() => {
    send({ type: 'LOCALES.CHANGE_LANGUAGE', locale });
  }, [locale, send]);
  const currentLocale = useState(st => st.context.locales.locale);
  return { changeLanguage, currentLocale } as const;
}

export const BtnLanguage: FC<Props> = ({ locale }) => {
  const { changeLanguage, currentLocale } = useHook(locale);
  return (
    <button
      onClick={changeLanguage}
      className={`uppercase text-sm 2xl:text-base ${
        currentLocale === locale ? 'font-bold' : ''
      }`}
    >
      {locale}
    </button>
  );
};
