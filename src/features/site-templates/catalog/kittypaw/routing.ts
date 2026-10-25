import type { Locale } from './config/brand'
export const href = (base: string, slug = ''): string => (base.replace(/\/$/, '') + (slug ? '/' + slug : '')) || '/'
/** 独立站和宿主使用同一个语言基路径规则，切换保留页面、查询和锚点。 */
export function localeHref(pathname: string, base: string, locale: Locale, suffix: string): string {
  const root = locale === 'en' ? base.replace(/\/en$/, '') : base.replace(/\/$/, '')
  const slug = pathname.slice((base || '').length).replace(/^\//, '')
  return href(locale === 'en' ? root : href(root, 'en'), slug) + suffix
}
