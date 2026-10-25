import type { SiteTemplatePageProps } from '../../../types'
import { Shell } from '../components/Shell'
import { ProductGrid } from '../components/Cards'
import { PageIntro, ContactCTA } from '../components/PageParts'
export default function ProductsPage({ locale = 'zh', basePath }: SiteTemplatePageProps) {
  const zh = locale === 'zh'
  return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={zh ? '为猫咪挑选' : 'CAT ESSENTIALS'} title={zh ? '每一件 都为喜欢而来' : 'Little things. Big purrs.'}>{zh ? '休息、玩耍、好好吃饭，把日常需要放在心上。以下为原创产品示意与演示价格，不提供购买。' : 'Rest, play and everyday rituals, thoughtfully considered. Original product illustrations and demo prices; purchasing is not available.'}</PageIntro><section className="kp-section kp-container"><ProductGrid locale={locale} basePath={basePath} filterable /></section><ContactCTA locale={locale} basePath={basePath} /></Shell>
}
