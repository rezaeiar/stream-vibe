import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';

export default createMiddleware({
    locales,
    defaultLocale: 'fa',
    localePrefix,
});

export const config = {
    matcher: ['/', '/(fa|en)/:path*']
};