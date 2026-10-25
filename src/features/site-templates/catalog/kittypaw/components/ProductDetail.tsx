import type { SiteTemplatePageProps } from '../../../types'
import { products } from '../content/data'
import { Shell } from './Shell'
import { ProductArt } from './Cards'
import { PageIntro } from './PageParts'
import { PlayfulLink } from './Motion'
import { href } from '../routing'
export function ProductDetail({ id, locale = 'zh', basePath }: SiteTemplatePageProps & { id: typeof products[number]['id'] }) {
  const product = products.find(item => item.id === id)
  if (!product) throw new Error('Unknown product: ' + id)
  const zh = locale === 'zh'
  return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={zh ? '猫咪好物 · 展示款' : 'CAT ESSENTIALS · DEMO'} title={product.name[locale]}>{product.subtitle[locale]}</PageIntro><section className="kp-container kp-section kp-split"><ProductArt shape={product.shape} label={zh ? '原创好物示意图' : 'Original product illustration'} /><div className="kp-prose"><span className="kp-eyebrow">{product.price[locale]}</span><h2>{zh ? '为日常 多想一点' : 'A little thought for everyday life'}</h2><p>{product.description[locale]}</p><ul>{product.facts.map(item => <li key={item.en}>{item[locale]}</li>)}</ul><p className="kp-note">{zh ? '这是展示产品。价格与规格仅供演示，图片为原创示意图；不收款、不下单、不配送。' : 'An illustrative product. Prices and specifications are demo content, with original drawings. No payment, ordering or delivery.'}</p><PlayfulLink to={href(basePath, 'contact')} dark>{zh ? '了解这件好物' : 'Ask about this essential'}</PlayfulLink></div></section></Shell>
}
