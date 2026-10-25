import type { SiteTemplatePageProps } from '../../../types'
import { policies } from '../content/policies'
import { Shell } from './Shell'
import { PageIntro } from './PageParts'
export function Policy({ id, locale = 'zh', basePath }: SiteTemplatePageProps & { id: keyof typeof policies }) {
  const policy = policies[id]
  return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={locale === 'zh' ? '使用说明' : 'THE DETAILS'} title={policy.title[locale]}>{policy.intro[locale]}</PageIntro><article className="kp-container kp-policy"><div className="kp-prose">{policy.sections.map(section => <section key={section.title.en}><h2>{section.title[locale]}</h2><p>{section.body[locale]}</p></section>)}</div></article></Shell>
}
