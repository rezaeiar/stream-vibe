import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'fa'];
 
export default getRequestConfig(async ({locale}) => {
  const baseLoacle = new Intl.Locale(locale).baseName
  if (!locales.includes(baseLoacle)) notFound();
 
  return {
    messages: (await import(`./app/messages/${baseLoacle}.json`)).default
  };
});