import type { SiteTemplatePageProps } from '../../../types'
import { copy } from '../content/data'
import { Shell } from '../components/Shell'
import { Hero } from '../components/Hero'
import { ServiceCards, ProductGrid, JournalCards, FAQ } from '../components/Cards'
import { Section, ContactCTA } from '../components/PageParts'
export default function HomePage({ locale = 'zh', basePath }: SiteTemplatePageProps) {
  return <Shell locale={locale} basePath={basePath} hero><Hero locale={locale} basePath={basePath} /><Section title={copy.section[locale]}><p className="kp-section-description">{copy.sectionIntro[locale]}</p><ServiceCards locale={locale} basePath={basePath} /></Section><Section title={copy.allProducts[locale]} soft><ProductGrid locale={locale} basePath={basePath} /></Section><Section title={copy.journal[locale]}><JournalCards locale={locale} basePath={basePath} /></Section><Section title={copy.faq[locale]} soft><FAQ locale={locale} /></Section><ContactCTA locale={locale} basePath={basePath} /></Shell>
}
