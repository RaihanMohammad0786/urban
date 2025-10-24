export const locales=['en','ru','ar','fr','es','tr'] as const;
export type Locale = typeof locales[number];
export async function getMessages(locale:Locale){ const m = await import(`../messages/${locale}.json`); return m.default; }
