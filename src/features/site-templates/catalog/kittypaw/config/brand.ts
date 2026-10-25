export type Locale = 'zh' | 'en'
export type Bilingual = Record<Locale, string>
export const brand = {
  name: { zh: 'Kittypaw', en: 'Kittypaw' },
  logo: '/templates/kittypaw/logo.svg',
  copyrightYear: '2026',
  tagline: { zh: '把每一份偏爱 留给猫咪', en: 'A little more love. Every single day.' },
} as const
export const pick = (value: Bilingual, locale: Locale): string => value[locale]
export const media = (file: string): string => '/templates/kittypaw/' + file
