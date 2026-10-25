import type { SiteTemplatePageProps } from '../../../types'
import { services, copy } from '../content/data'
import { Shell } from './Shell'
import { PageIntro, Section, ContactCTA } from './PageParts'
import { FAQ } from './Cards'
export function ServiceDetail({ id, locale = 'zh', basePath }: SiteTemplatePageProps & { id: typeof services[number]['id'] }) {
  const service = services.find(item => item.id === id)
  if (!service) throw new Error('Unknown service: ' + id)
  return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={service.title[locale]} title={service.intro[locale]}>{service.body[locale]}</PageIntro><Section title={locale === 'zh' ? '把每一步 都放慢一点' : 'Take it one gentle step at a time'} soft><div className="kp-split"><ol className="kp-steps">{service.steps.map(step => <li key={step.en}>{step[locale]}</li>)}</ol><div className="kp-prose"><h3>{locale === 'zh' ? '以猫咪的舒适为先' : 'Their comfort comes first'}</h3><p className="kp-note">{service.note[locale]}</p></div></div></Section><Section title={copy.faq[locale]}><FAQ locale={locale} /></Section><ContactCTA locale={locale} basePath={basePath} /></Shell>
}
