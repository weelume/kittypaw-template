import type { SiteTemplatePageProps } from '../../../types'
import { articles } from '../content/data'
import { Shell } from './Shell'
import { PageIntro, ContactCTA } from './PageParts'
import { ProductArt } from './Cards'
import { PlayfulLink } from './Motion'
import { href } from '../routing'
export function Article({ id, locale = 'zh', basePath }: SiteTemplatePageProps & { id: typeof articles[number]['id'] }) {
  const article = articles.find(item => item.id === id)
  if (!article) throw new Error('Unknown article: ' + id)
  return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={article.category[locale] + ' · ' + article.reading[locale]} title={article.title[locale]}>{article.excerpt[locale]}</PageIntro><article className="kp-section kp-container kp-split"><ProductArt shape={article.shape} label={article.category[locale]} /><div className="kp-prose">{article.paragraphs.map(paragraph => <p key={paragraph.en}>{paragraph[locale]}</p>)}<p className="kp-note">{locale === 'zh' ? '本篇为原创养猫生活内容，仅供一般教育参考。健康疑问请咨询合格兽医。' : 'Original lifestyle editorial for general education. Consult a qualified veterinarian about health concerns.'}</p><PlayfulLink to={href(basePath, 'journal')} dark>{locale === 'zh' ? '返回养猫手记' : 'Back to the journal'}</PlayfulLink></div></article><ContactCTA locale={locale} basePath={basePath} /></Shell>
}
