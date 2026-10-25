import type { SiteTemplatePageProps } from '../../../types'
import { about } from '../content/about'
import { Shell } from '../components/Shell'
import { PageIntro, ContactCTA } from '../components/PageParts'
export default function AboutPage({ locale = 'zh', basePath }: SiteTemplatePageProps) {
  return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={locale === 'zh' ? '关于 KITTYPAW' : 'ABOUT KITTYPAW'} title={about.title[locale]}>{about.intro[locale]}</PageIntro><section className="kp-section kp-container kp-split"><div className="kp-about-mark" aria-hidden="true">K.</div><div className="kp-prose"><h2>{about.heading[locale]}</h2>{about.paragraphs.map(p => <p key={p.en}>{p[locale]}</p>)}</div></section><ContactCTA locale={locale} basePath={basePath} /></Shell>
}
