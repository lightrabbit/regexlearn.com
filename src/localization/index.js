import en from './en';
import es from './es';
import tr from './tr';
import ru from './ru';
import zh from './zh';

const messages = {
  en,
  es,
  tr,
  ru,
  zh,
};

export const langNames = {
  en: 'EN',
  es: 'ES',
  tr: 'TR',
  ru: 'RU',
  zh: '中文',
};

export const defaultLocale = 'en';

export const locales = Object.keys(langNames);

export default messages;
