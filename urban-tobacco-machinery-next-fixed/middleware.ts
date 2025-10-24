import createMiddleware from 'next-intl/middleware';
export default createMiddleware({locales:['en','ru','ar','fr','es','tr'],defaultLocale:'en',localePrefix:'always'});
export const config={matcher:['/((?!_next|.*\\..*).*)']};
